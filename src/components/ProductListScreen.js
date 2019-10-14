import React from 'react'
import {View,Text,Image,Button,ActivityIndicator,FlatList,TouchableOpacity} from 'react-native'

export default class ProductListScreen extends React.Component{
    static navigationOptions={
        title:'商品列表'
    }
    //要加载的商品页号，此数据无需绑定到视图
    pno=0;
    //还有更多数据可供加载吗？此数据无需绑定到视图
    hasMore=true 
    //加载下一页商品数据
    loadData=()=>{
        //如果已经没有更多数据可供加载了，就返回
        if(!this.hasMore){
            return
        }
        this.pno++
        //console.log('开始加载商品数据:'+this.pno)
        let url='http://www.codeboy.com/data/product/list.php?pno='+this.pno
        //使用w3c的新技术，fetch API异步获取数据
        fetch(url).then((res)=>{
            //console.log(res)
            return res.json()
            //console.log(res.json())
        }).then((body)=>{
            console.log('得到响应后的响应主体：')
            console.log(body)
            //判断是否有更多数据
            if(this.pno>=body.pageCount){
                 this.hasMore=false
            }
            //需要把服务器返回的数据拼接在已有数据尾部
            let pList=this.state.pList
            pList=pList.concat(body.data)
            this.setState({
                pList
            })
        })
    }
    //组件挂载完，立即执行一次数据获取
    componentDidMount(){
        this.loadData()
    }
    constructor(){
        super()
        this.state={
            pList:[]  //商品列表
        }
    }
    _renderItem=(itemData)=>{
        let p=itemData.item  //一个商品对象
        return(
            <View style={{flexDirection:'row',marginVertical:5,marginHorizontal:10,alignItems:'center'}}>
                <Image style={{width:100,height:100}} source={{uri:'http://www.codeboy.com/'+p.pic}}/>
                <View style={{flex:1,justifyContent:'center',paddingHorizontal:10}}>
                    <Text numberOfLines={1}>{p.title}</Text>
                    <Text style={{color:'#f00',fontSize:16}}>价格：{p.price}</Text>
                </View>
                <Button style={{height:16}} title="查看详情" onPress={()=>{this.props.navigation.navigate('ProductDetail',{pid:p.lid})}}/>  
            </View>
        )
    }
    _getSeparator=()=>{
        return(
            <View style={{height:0,borderTopWidth:1,borderTopColor:'#73879C'}}></View>
        )
    }
    _getListFooter=()=>{
        return(
            <View>
                {
                    //React中的条件渲染
                    (function(){
                        if(this.hasMore){
                            return <ActivityIndicator size="large" />
                        }
                    })()
                }
                {/* <ActivityIndicator size="large" /> */}
                <Text style={{textAlign:'center'}}>
                   {this.hasMore?'加载中...':'没有更多数据了'}
                </Text>
            </View>
        )
    }

    render(){
        return(
            <View >
                <FlatList 
                   data={this.state.pList}
                   renderItem={this._renderItem}
                   keyExtractor={(item,index)=>item.lid}
                   ItemSeparatorComponent={this._getSeparator}
                   ListFooterComponent={this._getListFooter}
                   onEndReachedThreshold={0.1}
                   onEndReached={this.loadData}
                />
            </View>
        )
    }
}
