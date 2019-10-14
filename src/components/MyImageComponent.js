import React from 'react'
import {View,Image,Text,Dimensions} from 'react-native'


/* 自定义的图片组件，局部四个尺寸相关的属性 */
export default class MyImageComponent extends React.Component{
    constructor(){
        super()
        this.state={
            originWidth:0, //原始的宽
            originHeight:0, //原始的高
            displayWidth:0, //要显示出来的宽
            displayHeight:0  //要显示出来的高
        }
    }
    componentDidMount(){
        //console.log('我的图片加载完成')
        console.log(this.props.url) //此处可以拿到图片路径
        //获取图片的原始尺寸
        Image.getSize(this.props.url,(w,h)=>{
            let originWidth=w  //图片原始宽
            let originHeight=h  //图片原始高
            let displayWidth=Dimensions.get('window').width  //要显示出来的宽
            let displayHeight=displayWidth*originHeight/originWidth //要显示出来的高
            //console.log(originWidth,originHight)
            //console.log(displayWidth,displayHeight)
            //console.log('---------------------------------------')
            this.setState({
                originWidth,
                originHeight,
                displayWidth,
                displayHeight
            })
        })
    }
    render(){
        return(
            <Image style={{width:this.state.displayWidth,height:this.state.displayHeight}} source={{uri:this.props.url}}/>  
        )
    }
       
         
}