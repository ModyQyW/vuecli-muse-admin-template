import theme from 'muse-ui/lib/theme';

// 默认 light 主题
theme.use('light');

// light.js
// {
//   primary: '#2196f3',
//   secondary: '#ff4081',
//   success: '#4caf50',
//   warning: '#fdd835',
//   info: '#2196f3',
//   error: '#f44336',
//   track: '#bdbdbd',
//   text: {
//     primary: 'rgba(0, 0, 0, 0.87)',
//     secondary: 'gba(0, 0, 0, 0.54)',
//     alternate: '#fff',
//     disabled: 'rgba(0, 0, 0, 0.38)',
//     hint: 'rgba(0, 0, 0, 0.38)' // 提示文字颜色
//   },
//   divider: 'rgba(0, 0, 0, 0.12)',
//   background: {
//     paper: '#fff',
//     chip: '#e0e0e0',
//     default: '#fafafa'
//   }
// }

// dark.js
// {
//   primary: '#1976d2',
//   secondary: '#ff4081',
//   success: '#4caf50',
//   warning: '#fdd835',
//   info: '#2196f3',
//   error: '#f44336',
//   track: '#757575',
//   text: {
//     primary: '#fff',
//     secondary: 'rgba(255, 255, 255, 0.7)',
//     alternate: '#303030',
//     disabled: 'rgba(255, 255, 255, 0.3)',
//     hint: 'rgba(255, 255, 255, 0.3)' // 提示文字颜色
//   },
//   divider: 'rgba(255, 255, 255, 0.3)',
//   background: {
//     paper: '#424242',
//     chip: '#616161',
//     default: '#303030'
//   }
// }

// 自定义主题示例
// theme.add(name, config, extendName)
// name 主题名称
// config 主题配置对象
// extendName 继承哪个主题, 默认 light
// theme.add('teal', {
//   primary: '#009688',
//   secondary: '#ff4081',
//   success: '#4caf50',
//   warning: '#ffeb3b',
// }, 'light');
// theme.use('teal');

// 主题样式扩展示例
// theme.addCreateTheme((theme) => {
//   return `
//   .mu-hello-word {
//     color: ${theme.text.primary}
//   }
//   `;
// });
