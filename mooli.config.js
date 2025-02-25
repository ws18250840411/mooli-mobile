module.exports = {
  name: 'mooli-mobile',
  paths: {
    componentDir: 'components', // 组件存放目录
  },
  site: {
    defaultLang: 'zh-CN',
    title: 'Mooli Mobile',
    logo: 'https://portrait.gitee.com/uploads/avatars/user/498/1494603_ws18250840411_1619316633.png!avatar200',
    locales: {
      'zh-CN': {
        langLabel: '中文',
        links: [
          {
            title: '首页',
            path: 'index',
          },
          {
            title: '组件',
            path: 'quick-start',
          },
          {
            title: 'GitHub',
            path: 'https://gitee.com/ws18250840411/mooli-mobile',
          },
        ],
        nav: [
          {
            title: '首页',
            hideInSimulator: true,
            hideInSide: true,
            hideInMenu: true,
            items: [
              {
                path: 'index',
                title: '首页',
              },
            ],
          },
          {
            title: '开发指南',
            hideInSimulator: true,
            items: [
              {
                path: 'introduce',
                title: '介绍',
              },
              {
                path: 'quick-start',
                title: '快速上手',
              },
              {
                path: 'contribution',
                title: '开发指南',
              },
            ],
          },
          {
            title: '布局组件',
            items: [
              {
                path: 'row',
                title: 'Flex 布局',
              },
              {
                path: 'grid',
                title: 'Grid 宫格',
              },
            ],
          },
          {
            title: '基础组件',
            items: [
              {
                path: 'button',
                title: 'Button 按钮',
              },
              {
                path: 'cell',
                title: 'Cell 单元格',
              },
              {
                path: 'icon',
                title: 'Icon 图标',
              },
              {
                path: 'image',
                title: 'Image 图片',
              },
              {
                path: 'popup',
                title: 'Popup 弹出层',
              },
              {
                path: 'toast',
                title: 'Toast 轻提示',
              },
            ],
          },
          {
            title: '表单组件',
            items: [
              {
                path: 'form',
                title: 'Form 表单',
              },
              {
                path: 'field',
                title: 'Field 输入框',
              },
              {
                path: 'radio',
                title: 'Radio 单选框',
              },
              {
                path: 'checkbox',
                title: 'Checkbox 复选框',
              },
              {
                path: 'cascader',
                title: 'Cascader 级联选择',
              },
              {
                path: 'datetime-picker',
                title: 'DatetimePicker 时间选择',
              },
              {
                path: 'number-keyboard',
                title: 'NumberKeyboard 数字键盘',
              },
              {
                path: 'password-input',
                title: 'PasswordInput 密码输入框',
              },
              {
                path: 'switch',
                title: 'Switch 开关',
              },
              {
                path: 'picker',
                title: 'Picker 选择器',
              },
              {
                path: 'search',
                title: 'Search 搜索',
              },
              {
                path: 'select',
                title: 'Select 选择器',
              },
              {
                path: 'slider',
                title: 'Slider 滑块',
              },
              {
                path: 'uploader',
                title: 'Uploader 文件上传',
              },
            ],
          },
          {
            title: '反馈组件',
            items: [
              {
                path: 'action-sheet',
                title: 'ActionSheet 动作面板',
              },
              {
                path: 'loading',
                title: 'Loading 加载',
              },
              {
                path: 'pull-refresh',
                title: 'PullRefresh 下拉刷新',
              },
              {
                path: 'overlay',
                title: 'Overlay 遮罩层',
              },
              {
                path: 'notify',
                title: 'Notify 消息通知',
              },
              {
                path: 'dialog',
                title: 'Dialog 弹出框',
              },
            ],
          },
          {
            title: '展示组件',
            items: [
              {
                path: 'collapse',
                title: 'Collapse 折叠面板',
              },
              {
                path: 'count-down',
                title: 'CountDown 倒计时',
              },
              {
                path: 'popover',
                title: 'Popover 气泡弹出框',
              },
              {
                path: 'progress',
                title: 'Progress 进度条',
              },
              {
                path: 'swiper',
                title: 'Swiper 轮播',
              },
              {
                path: 'image-preview',
                title: 'ImagePreview 图片预览',
              },
              {
                path: 'list',
                title: 'List 列表',
              },
              {
                path: 'tabs',
                title: 'Tabs 标签页',
              },
              {
                path: 'sticky',
                title: 'Sticky 粘性布局',
              },
              {
                path: 'steps',
                title: 'Steps 步骤条',
              },
              {
                path: 'notice-bar',
                title: 'NoticeBar 通知栏',
              },
              {
                path: 'captcha',
                title: 'Captcha 滑块验证',
              },
              {
                path: 'camera',
                title: 'Camera 相机',
              },
              {
                path: 'index-bar',
                title: 'IndexBar 索引栏',
              },
            ],
          },
          {
            title: 'BNC业务组件',
            items: [
              {
                path: 'b-uploader',
                title: 'BUploader 文件上传',
              },
              {
                path: 'b-button',
                title: 'BButton 按钮',
              },
              {
                path: 'b-input',
                title: 'BInput 输入框',
              },
            ],
          },
        ],
      },
      'en-US': {
        langLabel: 'EN',
        links: [
          {
            title: 'Home',
            path: 'index',
          },
          {
            title: 'Components',
            path: 'quick-start',
          },
          {
            title: 'GitHub',
            path: 'https://gitee.com/ws18250840411/mooli-mobile',
          },
        ],
        nav: [
          {
            title: 'home',
            hideInSimulator: true,
            hideInSide: true,
            hideInMenu: true,
            items: [
              {
                path: 'index',
                title: 'Home',
              },
            ],
          },
          {
            title: 'Essentials',
            hideInSimulator: true,
            items: [
              {
                path: 'introduce',
                title: 'Introduce',
              },
              {
                path: 'quick-start',
                title: 'Quickstart',
              },
              {
                path: 'contribution',
                title: 'Contribution',
              },
            ],
          },
          {
            title: 'Layout Components',
            items: [
              {
                path: 'flex',
                title: 'Flex',
              },
              {
                path: 'grid',
                title: 'Grid',
              },
            ],
          },
          {
            title: 'Basic Components',
            items: [
              {
                path: 'button',
                title: 'Button',
              },
              {
                path: 'cell',
                title: 'Cell',
              },
              {
                path: 'icon',
                title: 'Icon',
              },
              {
                path: 'image',
                title: 'Image',
              },
              {
                path: 'popup',
                title: 'Popup',
              },
              {
                path: 'toast',
                title: 'Toast',
              },
            ],
          },
          {
            title: 'Form Components',
            items: [
              {
                path: 'form',
                title: 'Form',
              },
              {
                path: 'field',
                title: 'Field',
              },
              {
                path: 'radio',
                title: 'Radio',
              },
              {
                path: 'checkbox',
                title: 'Checkbox',
              },
              {
                path: 'cascader',
                title: 'Cascader',
              },
              {
                path: 'datetime-picker',
                title: 'DatetimePicker',
              },
              {
                path: 'number-keyboard',
                title: 'NumberKeyboard',
              },
              {
                path: 'password-input',
                title: 'PasswordInput',
              },
              {
                path: 'switch',
                title: 'Switch',
              },
              {
                path: 'picker',
                title: 'Picker',
              },
              {
                path: 'search',
                title: 'Search',
              },
              {
                path: 'select',
                title: 'Select',
              },
              {
                path: 'slider',
                title: 'Slider',
              },
              {
                path: 'uploader',
                title: 'Uploader',
              },
            ],
          },
          {
            title: 'Action Components',
            items: [
              {
                path: 'action-sheet',
                title: 'ActionSheet',
              },
              {
                path: 'loading',
                title: 'Loading',
              },
              {
                path: 'pull-refresh',
                title: 'PullRefresh',
              },
              {
                path: 'overlay',
                title: 'Overlay',
              },
              {
                path: 'notify',
                title: 'Notify',
              },
              {
                path: 'dialog',
                title: 'Dialog',
              },
            ],
          },
          {
            title: 'Display Components',
            items: [
              {
                path: 'collapse',
                title: 'Collapse',
              },
              {
                path: 'count-down',
                title: 'CountDown',
              },
              {
                path: 'popover',
                title: 'Popover',
              },
              {
                path: 'progress',
                title: 'Progress',
              },
              {
                path: 'swiper',
                title: 'Swiper',
              },
              {
                path: 'image-preview',
                title: 'ImagePreview',
              },
              {
                path: 'list',
                title: 'List',
              },
              {
                path: 'tabs',
                title: 'Tabs',
              },
              {
                path: 'sticky',
                title: 'Sticky',
              },
              {
                path: 'steps',
                title: 'Steps',
              },
              {
                path: 'notice-bar',
                title: 'NoticeBar',
              },
              {
                path: 'captcha',
                title: 'Captcha',
              },
              {
                path: 'camera',
                title: 'Camera',
              },
              {
                path: 'index-bar',
                title: 'IndexBar',
              },
            ],
          },
          {
            title: 'Business Components',
            items: [
              {
                path: 'b-uploader',
                title: 'BUploader',
              },
              {
                path: 'b-input',
                title: 'BInput',
              },
              {
                path: 'b-button',
                title: 'BButton',
              },
            ],
          },
        ],
      },
    },
  },
};
