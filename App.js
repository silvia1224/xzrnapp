/*
创建路由器/导航器，注册给根组件
*/
import React from 'react'
import {createAppContainer,createStackNavigator} from 'react-navigation'
import LoginScreen from './src/components/LoginScreen';
import MainScreen from './src/components/MainScreen';
import ProductListScreen from './src/components/ProductListScreen';
import ProductDetailScreen from './src/components/ProductDetailScreen';

//创建路由器/导航器
let router=createStackNavigator({
  
  Login:LoginScreen, //哪个路由在第一位就是默认首屏
  Main:MainScreen,
  ProductList:ProductListScreen,
  ProductDetail:ProductDetailScreen  
})

//创建根组件app时，注册路由器/导航器,
export default createAppContainer(router)