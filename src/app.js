// zone 为异步任务提供hook支持，主要应用于提高脏检查效率和降低性能损耗
// reflect-metadata 为Decorator提供反应射API，注意:Decorator是ES6的提案
import 'reflect-metadata';
import 'zone.js'

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import AppModule from './app.module';

//启动应用
const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);