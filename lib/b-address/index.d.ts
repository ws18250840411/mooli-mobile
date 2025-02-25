import * as React from 'react';
import PropTypes from 'prop-types';
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
    level?: number | string;
    className?: string;
    style?: React.CSSProperties;
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
export default class BAddress extends React.PureComponent<BAddressProps, BAddressStates> {
    static displayName: 'baddress';
    static propTypes: {
        className: PropTypes.Requireable<string>;
        style: PropTypes.Requireable<object>;
    };
    static defaultProps: {
        level: number;
        action: string;
        method: string;
        data: {};
        headers: {};
        withCredentials: boolean;
    };
    provinceData: any[];
    cityData: any[];
    districtData: any[];
    villageData: any[];
    addressMap: Map<any, any>;
    loading: boolean;
    constructor(props: BAddressProps);
    componentDidMount(): void;
    componentDidUpdate(prevProps: any): void;
    remoteFetch(action: string, data: any, call: (arg0: any) => void): void;
    setLoading(loading: boolean): void;
    handleChangeAndFinish(isLast: boolean): void;
    updateActiveTab(activeTab: number): void;
    getAddressMap(id: number | string): any;
    setAddressMap(id: number | string, data: any): Map<any, any>;
    hasLast(type: string): boolean;
    getAddressData(): void;
    getProvince({ activeTab }: any): Promise<void>;
    getCity({ provinceId, provinceName, activeTab, isLast }: any): Promise<void>;
    getDistrict({ cityId, cityName, activeTab, isLast }: any): Promise<void>;
    getVillage({ districtId, districtName, activeTab, isLast }: any): Promise<void>;
    setVillage({ villageName, villageId, isLast }: {
        villageName: any;
        villageId: any;
        isLast: any;
    }): Promise<void>;
    getSelectOptions(): {
        provinceId: string | number;
        provinceName: string | number;
        cityId: string | number;
        cityName: string | number;
        districtId: string | number;
        districtName: string | number;
        villageId: string | number;
        villageName: string | number;
    };
    handleItemClick(item: ActionSheetOptions, type: string): void;
    getCustomKey(customConfig: AddressCustomType, type: string): any;
    renderLoad(): JSX.Element | null;
    renderTabPanItem(options: ActionSheetOptions[], selectValue: string | number, type: string): JSX.Element | null;
    renderTabPan(): any;
    renderTabs(): JSX.Element;
    render(): JSX.Element;
}
export {};
