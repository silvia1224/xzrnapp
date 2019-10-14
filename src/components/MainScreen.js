import React from 'react'
import {View,Text,Image,StyleSheet,TouchableOpacity} from 'react-native'

export default class MainScreen extends React.Component{
    static navigationOptions={
        title:'主菜单',
        headerRight:(
            <TouchableOpacity>
                <Image style={{width:40,height:40,borderRadius:20}} source={require('../assets/user.png')}/>
            </TouchableOpacity>
        )
    }
    /*static navigationOptions=(navitation)=>{
        title:'主菜单',
        headerRight:(
            <TouchableOpacity>
                <Image style={{width:40,height:40,borderRadius:20}} source={require('../assets/user.png')}/>
            </TouchableOpacity>
        )
    }*/
    constructor(){
        super()
    }
    jumpToProductList=()=>{
        this.props.navigation.navigate('ProductList') 
    }
    render(){
        return(
            <View>
                {/* 第一行 */}
                <View style={ss.row}>
                    <View style={ss.col}>
                        <Text style={[ss.txtDefault,ss.txtMiddel]}>上架商品总数</Text>
                        <Text style={[ss.txtSuccess,ss.txtLarge]}>24,380</Text>
                        <Text style={[ss.txtDefault,ss.textSmall]}>+128%较上月</Text>
                    </View>
                    <View style={ss.col}>
                        <Text style={[ss.txtDefault,ss.txtMiddel]}>注册用户总数</Text>
                        <Text style={[ss.txtDanger,ss.txtLarge]}>1,965</Text>
                        <Text style={[ss.txtDefault,ss.textSmall]}>+50%较上周</Text>
                    </View>
                </View>
                {/* 第二行 */}
                <View style={ss.row}>
                    <View style={ss.col}>
                        <Text style={[ss.txtDefault,ss.txtMiddel]}>已完成订单总数</Text>
                        <Text style={[ss.txtDanger,ss.txtLarge]}>391</Text>
                        <Text style={[ss.txtDefault,ss.textSmall]}>+15%较上周</Text>
                    </View>
                    <View style={ss.col}>
                        <Text style={[ss.txtDefault,ss.txtMiddel]}>当日PC端PV量</Text>
                        <Text style={[ss.txtDanger,ss.txtLarge]}>14,281</Text>
                        <Text style={[ss.txtDefault,ss.textSmall]}>+12%较昨日</Text>
                    </View>
                </View>
                {/* 第三行 */}
                <View style={ss.row}>
                    <View style={ss.col}>
                        <Text style={[ss.txtDefault,ss.txtMiddel]}>移动端PV量</Text>
                        <Text style={[ss.txtSuccess,ss.txtLarge]}>29,315</Text>
                        <Text style={[ss.txtDefault,ss.textSmall]}>+34%较昨日</Text>
                    </View>
                    <View style={ss.col}>
                        <Text style={[ss.txtDefault,ss.txtMiddel]}>App总下载量</Text>
                        <Text style={[ss.txtSuccess,ss.txtLarge]}>7,422</Text>
                        <Text style={[ss.txtSuccess,ss.textSmall]}>+18%较上周</Text>
                    </View>
                </View>
                {/* 功能菜单 */}
                {/* 第一行 */}
                <View style={{flexDirection:'row'}}>
                    <View style={[ss.col,{borderBottomWidth:0,borderLeftWidth:0}]}>
                        <TouchableOpacity onPress={this.jumpToProductList}>
                            <Image style={ss.icon} source={require('../assets/menu_product.jpg')}/>
                            <Text style={[ss.txtDefault,ss.txtMiddel]}>商品管理</Text>
                        </TouchableOpacity> 
                    </View>
                    <View style={[ss.col,{borderBottomWidth:0,borderLeftWidth:0}]}>
                        <TouchableOpacity>
                            <Image style={ss.icon} source={require('../assets/menu_user.jpg')}/>
                            <Text style={[ss.txtDefault,ss.txtMiddel]}>用户管理</Text>
                        </TouchableOpacity>   
                    </View>
                </View>
                {/* 第二行 */}
                <View style={{flexDirection:'row'}}>
                    <View style={[ss.col,{borderBottomWidth:0,borderLeftWidth:0}]}>
                        <TouchableOpacity>
                            <Image style={ss.icon} source={require('../assets/menu_order.jpg')}/>
                            <Text style={[ss.txtDefault,ss.txtMiddel]}>订单管理</Text>
                        </TouchableOpacity> 
                    </View>
                    <View style={[ss.col,{borderBottomWidth:0,borderLeftWidth:0}]}>
                        <TouchableOpacity>
                            <Image style={ss.icon} source={require('../assets/menu_refresh.jpg')}/>
                            <Text style={[ss.txtDefault,ss.txtMiddel]}>首页管理</Text>
                        </TouchableOpacity>   
                    </View>    
                </View>
            </View>
        )
    }
}

//外部样式
let ss=StyleSheet.create({
    row:{
        flexDirection:'row',
    },
    col:{
        flex:1,
        borderColor:'#73879C',
        borderBottomWidth:1,
        borderLeftWidth:1,
        alignItems:'center',
        padding:30
    },
    txtDefault:{
        color:'#73879c'
    },
    txtSuccess:{
        color:'#1abb9c'
    },
    txtDanger:{
        color:'#e74c3c' 
    },
    textSmall:{
        fontSize:12,
        textAlign:'center'
    },
    txtMiddel:{
        fontSize:16,
        textAlign:'center'
    },
    txtLarge:{
        fontSize:28,
        fontWeight:'bold',
        marginVertical:3,
        textAlign:'center'
    },
    icon:{
        width:80,
        height:80,
    }
    
})