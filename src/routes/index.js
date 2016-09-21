// 导入home的路由
import {home} from './home';
// 导入首页的路由
import {index} from './index.route';

let routeConfig = {};
Object.assign(routeConfig, home);
Object.assign(routeConfig, index);

// 导出整个应用的路由
export let route = routeConfig;
