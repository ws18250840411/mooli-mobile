import * as React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import Loading from '../loading';
import Tabs from '../tabs/tabs';
import TabPane from '../tabs/tab-pane';
import { fetch } from '../widgets/fetch';
import { customeFieldNames, getActiveTab } from './lib/utils';
import { createClassName } from '../utils';

const componentClassName = createClassName('baddress');

enum AddressLevel {
  'province' = 2,
  'city' = 3,
  'district' = 4,
  'village' = 5,
}

interface AddressType {
  provinceId?: number | string;
  cityId?: number | string;
  districtId?: number | string;
  villageId?: number | string;
  provinceName: number | string;
  cityName: number | string;
  districtName: number | string;
  villageName: number | string;
}

interface ActionType {
  provinceFetchUrl?: string;
  cityFetchUrl?: string;
  districtFetchUrl?: string;
  villageFetchUrl?: string;
}

interface ActionSheetOptions {
  text?: string;
  value?: string | number;
  children?: ActionSheetOptions[];
}

interface AddressCustomType {
  title?: string;
  fieldNames: ActionSheetOptions;
}

export interface BAddressProps {
  value?: AddressType;
  fieldNames?: ActionSheetOptions;
  pCustomConfig?: AddressCustomType;
  cCustomConfig?: AddressCustomType;
  dCustomConfig?: AddressCustomType;
  vCustomConfig?: AddressCustomType;
  action: ActionType;
  method?: string;
  withCredentials?: boolean;
  headers?: object;
  activeColor?: string;
  level?: number | string; // 显示级别
  className?: string; // 自定义类名
  style?: React.CSSProperties; // 自定义样式
  children?: React.ReactNode;
  onChange?: Function;
  onFinish?: Function;
}

export interface BAddressStates {
  loading: boolean;
  activeTab: number;
  provinceId: number | string;
  cityId: number | string;
  districtId: number | string;
  villageId: number | string;
  provinceName: number | string;
  cityName: number | string;
  districtName: number | string;
  villageName: number | string;
  provinceData: any[];
  cityData: any[];
  districtData: any[];
  villageData: any[];
}

export default class BAddress extends React.PureComponent<
  BAddressProps,
  BAddressStates
> {
  static displayName: 'baddress';
  static propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
  };
  static defaultProps = {
    level: 5,
    action: '',
    method: 'post',
    data: {},
    headers: {},
    withCredentials: false,
  };
  provinceData: any[];
  cityData: any[];
  districtData: any[];
  villageData: any[];
  addressMap: Map<any, any>;
  loading: boolean;
  constructor(props: BAddressProps) {
    super(props);

    this.state = {
      loading: false,
      activeTab: 0,
      provinceId: (props.value && props.value.provinceId) || 0,
      provinceName: (props.value && props.value.provinceName) || '',
      provinceData: [],
      cityId: (props.value && props.value.cityId) || 0,
      cityName: (props.value && props.value.cityName) || '',
      cityData: [],
      districtId: (props.value && props.value.districtId) || 0,
      districtName: (props.value && props.value.districtName) || '',
      districtData: [],
      villageId: (props.value && props.value.villageId) || 0,
      villageName: (props.value && props.value.villageName) || '',
      villageData: [],
    };
    this.addressMap = new Map();
  }
  componentDidMount() {
    this.getAddressData();
  }
  componentDidUpdate(prevProps: any) {
    if (JSON.stringify(prevProps.value) !== JSON.stringify(this.props.value)) {
      this.getAddressData();
    }
  }
  remoteFetch(action: string, data: any, call: (arg0: any) => void) {
    if (!action) return;
    const { method, headers, withCredentials } = this.props;
    this.setLoading(true);
    // fetch 请求
    fetch({
      action,
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
      method,
      data,
      withCredentials,
      onSuccess: (res: any) => {
        this.setLoading(false);
        call(res);
      },
      onError: () => {
        this.setLoading(false);
      },
    });
  }
  setLoading(loading: boolean) {
    this.setState({
      loading,
    });
  }
  handleChangeAndFinish(isLast: boolean) {
    const { onFinish, onChange } = this.props;
    const options = this.getSelectOptions();
    if (isLast) {
      onFinish && onFinish(options);
    }
    onChange && onChange(options);
  }
  updateActiveTab(activeTab: number) {
    this.setState({
      activeTab,
    });
  }
  getAddressMap(id: number | string) {
    return this.addressMap.get(id) || [];
  }
  setAddressMap(id: number | string, data: any) {
    return this.addressMap.set(id, data);
  }
  hasLast(type: string) {
    return (
      Number(getActiveTab(this.props.value)) === Number(AddressLevel[type])
    );
  }
  getAddressData() {
    this.getProvince({});
    if (this.props.value) {
      const {
        provinceId,
        provinceName,
        cityId,
        cityName,
        districtId,
        districtName,
        villageName,
        villageId,
      } = this.props.value;
      this.getCity({
        provinceId,
        provinceName,
        isLast: this.hasLast('province'),
      });
      this.getDistrict({ cityId, cityName, isLast: this.hasLast('city') });
      this.getVillage({
        districtId,
        districtName,
        isLast: this.hasLast('district'),
      });
      this.setVillage({
        villageName,
        villageId,
        isLast: this.hasLast('village'),
      });
    }
  }
  async getProvince({ activeTab }: any) {
    const mapData = this.getAddressMap(0);
    if (mapData.length === 0) {
      const { provinceFetchUrl } = this.props.action;
      if (provinceFetchUrl) {
        this.remoteFetch(provinceFetchUrl, {}, (res) => {
          const { data = [] } = res;
          this.setAddressMap(0, data);
          this.setState({
            provinceData: data,
            activeTab,
          });
        });
      }
    }
  }
  async getCity({ provinceId, provinceName, activeTab = 1, isLast }: any) {
    if (!provinceId) return;

    this.setState(
      {
        provinceId,
        provinceName,
      },
      () => this.handleChangeAndFinish(isLast),
    );

    if (isLast) return;

    const mapData = this.getAddressMap(provinceId);
    if (mapData.length === 0) {
      const { cityFetchUrl } = this.props.action;
      if (cityFetchUrl) {
        this.remoteFetch(cityFetchUrl, { provinceId }, (res) => {
          const { data = [] } = res;
          this.setAddressMap(provinceId, data);
          this.setState({
            villageData: [],
            districtData: [],
            cityData: data,
            activeTab,
          });
        });
      }
    } else {
      this.setState({
        villageData: [],
        districtData: [],
        cityData: mapData,
        activeTab,
      });
    }
  }
  async getDistrict({ cityId, cityName, activeTab = 2, isLast }: any) {
    if (!cityId) return;

    this.setState(
      {
        cityId,
        cityName,
      },
      () => this.handleChangeAndFinish(isLast),
    );

    if (isLast) return;

    const mapData = this.getAddressMap(cityId);
    if (mapData.length === 0) {
      const { districtFetchUrl } = this.props.action;
      if (districtFetchUrl) {
        this.remoteFetch(districtFetchUrl, { cityId }, (res) => {
          const { data = [] } = res;
          this.setAddressMap(cityId, data);
          this.setState({
            villageData: [],
            districtData: data,
            activeTab,
          });
        });
      }
    } else {
      this.setState({
        villageData: [],
        districtData: mapData,
        activeTab,
      });
    }
  }
  async getVillage({ districtId, districtName, activeTab = 3, isLast }: any) {
    if (!districtId) return;

    this.setState(
      {
        districtId,
        districtName,
      },
      () => this.handleChangeAndFinish(isLast),
    );

    if (isLast) return;

    const mapData = this.getAddressMap(districtId);
    if (mapData.length === 0) {
      const { villageFetchUrl } = this.props.action;
      if (villageFetchUrl) {
        this.remoteFetch(villageFetchUrl, { districtId }, (res) => {
          const { data = [] } = res;
          this.setAddressMap(districtId, data);
          this.setState({
            villageData: data,
            activeTab,
          });
        });
      }
    } else {
      this.setState({
        villageData: mapData,
        activeTab,
      });
    }
  }
  async setVillage({ villageName, villageId, isLast }) {
    if (!villageId) return;
    this.setState(
      {
        villageName,
        villageId,
      },
      () => this.handleChangeAndFinish(isLast),
    );
  }

  getSelectOptions() {
    const {
      provinceId,
      provinceName,
      cityId,
      cityName,
      districtId,
      districtName,
      villageId,
      villageName,
    } = this.state;
    return {
      provinceId,
      provinceName,
      cityId,
      cityName,
      districtId,
      districtName,
      villageId,
      villageName,
    };
  }

  handleItemClick(item: ActionSheetOptions, type: string) {
    if (item) {
      const { level = 5 } = this.props;
      const isLast = Number(level) === Number(AddressLevel[type]);

      if (type === 'province') {
        this.getCity({
          provinceId: item.value,
          provinceName: item.text,
          isLast,
        });
      }
      if (type === 'city') {
        this.getDistrict({
          cityId: item.value,
          cityName: item.text,
          isLast,
        });
      }
      if (type === 'district') {
        this.getVillage({
          districtId: item.value,
          districtName: item.text,
          isLast,
        });
      }
      if (type === 'village') {
        this.setVillage({
          villageId: item.value!,
          villageName: item.text!,
          isLast,
        });
      }
    }
  }
  getCustomKey(customConfig: AddressCustomType, type: string) {
    const { fieldNames } = this.props;
    if (fieldNames && fieldNames[type]) {
      return fieldNames[type];
    } else if (
      customConfig &&
      customConfig.fieldNames &&
      customConfig.fieldNames[type]
    ) {
      return customConfig.fieldNames[type];
    }
    return type;
  }
  renderLoad() {
    const { loading } = this.state;
    if (loading) {
      return (
        <div className={createClassName(componentClassName, 'loading')}>
          <Loading vertical size="56" color="#FED000" />
        </div>
      );
    }
    return null;
  }
  renderTabPanItem(
    options: ActionSheetOptions[],
    selectValue: string | number,
    type: string,
  ) {
    if (options.length > 0) {
      const tabItemClassName = createClassName(
        componentClassName,
        'tabpan-item',
      );
      return (
        <ul className={tabItemClassName}>
          {options.map((item) => {
            const className3Use: string = classnames({
              // eslint-disable-next-line eqeqeq
              actived: selectValue == item.value,
            });
            return (
              <li
                key={item.value}
                onClick={() => this.handleItemClick(item, type)}
              >
                <span>{item.text}</span>
                <em className={className3Use} />
              </li>
            );
          })}
        </ul>
      );
    }
    return null;
  }
  renderTabPan() {
    const {
      provinceId,
      provinceData,
      cityId,
      cityData,
      districtId,
      districtData,
      villageId,
      villageData,
    } = this.state;
    const { pCustomConfig, cCustomConfig, dCustomConfig, vCustomConfig } =
      this.props;

    const tabpans: any = [];
    // province
    if (provinceData.length > 0) {
      const defaultCustomConfig = {
        title: 'Province',
        fieldNames: {
          text: 'provinceName',
          value: 'provinceId',
        },
        ...pCustomConfig,
      };
      const text = this.getCustomKey(defaultCustomConfig!, 'text');
      const value = this.getCustomKey(defaultCustomConfig!, 'value');
      const pData = customeFieldNames(provinceData, { text, value });
      tabpans.push(
        <TabPane title={defaultCustomConfig.title} key="province">
          {this.renderTabPanItem(pData, provinceId, 'province')}
        </TabPane>,
      );
    }
    // city
    if (cityData.length > 0) {
      const defaultCustomConfig = {
        title: 'City',
        fieldNames: {
          text: 'cityName',
          value: 'cityId',
        },
        ...cCustomConfig,
      };
      const text = this.getCustomKey(defaultCustomConfig!, 'text');
      const value = this.getCustomKey(defaultCustomConfig!, 'value');
      const cData = customeFieldNames(cityData, { text, value });
      tabpans.push(
        <TabPane title={defaultCustomConfig.title} key="city">
          {this.renderTabPanItem(cData, cityId, 'city')}
        </TabPane>,
      );
    }
    // district
    if (districtData.length > 0) {
      const defaultCustomConfig = {
        title: 'District',
        fieldNames: {
          text: 'districtName',
          value: 'districtId',
        },
        ...dCustomConfig,
      };
      const text = this.getCustomKey(defaultCustomConfig!, 'text');
      const value = this.getCustomKey(defaultCustomConfig!, 'value');
      const dData = customeFieldNames(districtData, { text, value });
      tabpans.push(
        <TabPane title={defaultCustomConfig.title} key="district">
          {this.renderTabPanItem(dData, districtId, 'district')}
        </TabPane>,
      );
    }
    // village
    if (villageData.length > 0) {
      const defaultCustomConfig = {
        title: 'Village',
        fieldNames: {
          text: 'villageName',
          value: 'villageId',
        },
        ...vCustomConfig,
      };
      const text = this.getCustomKey(defaultCustomConfig!, 'text');
      const value = this.getCustomKey(defaultCustomConfig!, 'value');
      const vData = customeFieldNames(villageData, { text, value });
      tabpans.push(
        <TabPane title={defaultCustomConfig.title} key="village">
          {this.renderTabPanItem(vData, villageId, 'village')}
        </TabPane>,
      );
    }
    return tabpans;
  }
  renderTabs() {
    const tabsClassName = createClassName(componentClassName, 'tabs');
    return (
      <Tabs
        className={tabsClassName}
        value={this.state.activeTab}
        animated
        swipeable
        swipeThreshold={0}
        color={this.props.activeColor}
        onChange={(index) => this.setState({ activeTab: index })}
      >
        {this.renderTabPan()}
      </Tabs>
    );
  }
  render() {
    const { className } = this.props;
    const className2Use: string = classnames(componentClassName, className);

    return (
      <div className={className2Use}>
        {this.renderLoad()}
        {this.renderTabs()}
      </div>
    );
  }
}
