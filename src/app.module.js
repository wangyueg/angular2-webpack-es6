// 引入NgModule装饰器
import { NgModule } from '@angular/core';

// 引入浏览器模块
import { BrowserModule } from '@angular/platform-browser';

// 引入组件AppComponent
import AppComponent from './app.component';

@NgModule({
  imports: [ BrowserModule ],
  declarations: [AppComponent],
  bootstrap: [ AppComponent ]
})

export default class AppModule { }