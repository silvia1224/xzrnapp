import React from 'react'
import {View,Image,Text} from 'react-native'
import MyImageComponent from './MyImageComponent';

/* HTML标签转换器组件，负责把<img>转换为<Image/> */
export default class HTMLTransformerComponent extends React.Component{
    componentDidMount() {
        //console.log("html转换器组件挂载完成")
        //console.log(this.props.html)  //undefined
    }
    render(){
        if(this.props.html){
            console.log(this.props.html)  //获取到html片段
            let list=this.props.html.match(/img\/\S+\.jpg/g)
            console.log(list)
            let server='http://www.codeboy.com/'
            return(
                <View>
                  {
                    list.map((str,i)=>{
                        return <MyImageComponent key={i} url={server+str}/>
                    })
                  }
                </View> 
            )
        }else{
           return(
               <View>
                   <Text>商品详情加载中。。。</Text>
               </View>
          )
       }
    }
}