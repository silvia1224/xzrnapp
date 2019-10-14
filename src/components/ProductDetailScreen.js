import React from 'react'
import {View,Text,Image,StyleSheet,ScrollView,Button} from 'react-native'
import CarouselComponent from './CarouselComponent';
import HTMLTransformerComponent from './HTMLTransformerComponent';


export default class ProductDetailScreen extends React.Component{
    static navigationOptions={
        title:'商品详情'
        // headerTitle:(JXS表达式)   页头设置为按钮
    }
    constructor(){
        super()
        this.state={
            product:{} //商品状态数据属性
        }
    }
    componentDidMount(){
        //组件挂载完成，读取路由参数pid
        let pid=this.props.navigation.getParam('pid')
        //console.log(pid)
        //根据商品编号，异步查询商品详情
        let url='http://www.codeboy.com/data/product/details.php?lid='+pid
        fetch(url).then((res)=>{
            return res.json()
        }).then((body)=>{
            //console.log(body)
            this.setState({
                product:body.details
            })
        })
       
    }
    render(){
        return(
            <View style={{flex:1,padding:10}}>
                <ScrollView>
                   <Text style={ss.txtMd}>产品型号：{this.state.product.lname}</Text>
                   <View style={ss.hr}></View>
                   <CarouselComponent picList={this.state.product.picList}/>
                   <Text>{this.state.product.title}</Text>
                   <Text>{this.state.product.subtitle}</Text>
                   <Text style={ss.txtDanger}>价格：{this.state.product.price}</Text>
                   <View style={ss.hr}></View>
                   {/* 商品的详细描述 */}
                   <HTMLTransformerComponent html={this.state.product.details}/>
                </ScrollView>
                <Button title="删除商品"/>
            </View>
        )
    }
}

//外部样式
let ss=StyleSheet.create({
    txtMd:{
        fontSize:16,
        marginBottom:5
    },
    hr:{
        height:0,
        borderTopColor:'#73879c',
        borderTopWidth:1,
        marginVertical:10
    },
    txtDefult:{
       color:'#73879c'
    },
    txtDanger:{
        color:'#e74c3c'
     }
})