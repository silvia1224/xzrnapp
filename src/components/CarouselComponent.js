import React from 'react'
import {View,Image,Dimensions,StyleSheet} from 'react-native'

export default  class CarouselComponent extends React.Component{
    timer=null   //轮播广告的引擎——定时器
    constructor(){
        super()
        this.state={
            curIndex:0  //当前要显示的图片的下标
        }
    }

    componentDidMount(){
        //轮播广告组件挂载完成
        //console.log('轮播广告挂载图片')
        //console.log(this.props.picList)  //undefined
        //注意：轮播组件挂载时商品图片还未请求到
    }
    componentWillUnmount(){
        //组件即将被卸载，必须销毁关联的异步对象，如定时器
        if(this.timer){
            clearInterval(this.timer)
        }
    }
    render(){
        let server='http://www.codeboy.com/'
        if(this.props.picList){
            //父组件提供的图片列表，开始启动定时器
            if(this.timer==null){
                this.timer=setInterval(()=>{
                    let curIndex=this.state.curIndex
                    curIndex++
                    curIndex=curIndex>=this.props.picList.length?0:curIndex;
                    this.setState({curIndex})
                },2000)
            }
            return(
                <Image style={ss.full} source={{uri:server+this.props.picList[this.state.curIndex].md}}/>
            )

        }else{
           return(
                <View>
                   <Image style={ss.full} source={require('../assets/default.jpg')}/>
                </View>
         )
       }
    }
}

//外部样式
let ss=StyleSheet.create({
    full:{  //设定图片的尺寸宽高与窗口宽相同
       width:Dimensions.get('window').width-20,
       height:Dimensions.get('window').width-20
    }
})