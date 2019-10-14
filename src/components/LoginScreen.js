import React from 'react'
import {View,Text,Image,Button,TextInput,StyleSheet} from 'react-native'

export default class LoginScreen extends React.Component{
    static navigationOptions={
        title:'管理员登录'
    }
    constructor(){
        super()
        this.state={// Model=>View
            uname:'',
            upwd:''
        }  
    }
    doUnameChange=(uname)=>{ //View=>Model,处理用户名输入改变
        //console.log(uname)
        this.setState({uname}) 
    }
    doUpwdChange=(upwd)=>{//View=>Model,处理密码输入改变
       // console.log(upwd)
        this.setState({upwd}) 
    }
    doPress=()=>{ //处理登录按钮点击事件
        //alert(this.state.uname+this.state.upwd)
     /*   let url='http://www.codeboy.com/data/user/login.php'
        let options={
            method: 'POST', //请求方式
            body:`uname=${this.state.uname}&upwd=${this.state.upwd}`,//请求主体
            headers:{'Content-Type':'application/x-www-form-urlencoded'} //请求头类型
        }
        //访问服务器端API，发起异步请求
        fetch(url,options).then((res)=>{
            return res.json()  //返回的不是数据，而是promise对象
        }).then((data)=>{
            console.log("得到服务器端响应消息")
            console.log(data)
            
        })
    */
    //假设服务器端验证用户名和密码都正确，开始页面跳转
    //console.log(this.props.navigation)
     this.props.navigation.navigate('Main')
    }
    render(){
        return(
            <View style={ss.container}>
                <TextInput 
                   value={this.state.uname} onChangeText={this.doUnameChange}
                   style={ss.input} maxLength={12} 
                   placeholder="请输入管理员用户名" 
                   placeholderTextColor="#73879c"/>
                <TextInput 
                   value={this.state.upwd} onChangeText={this.doUpwdChange}
                   style={[ss.input,{marginBottom:32}]} 
                   maxLength={12} secureTextEntry={true} 
                   placeholder="请输入登录密码" 
                   placeholderTextColor="#73879c"/>
                <Button onPress={this.doPress} style={ss.btn} title="登录" />
                <View style={ss.row}>
                    <Image source={require('../assets/logo.png')}/>
                    <Text style={ss.title}>后台管理系统</Text>
                </View>
                <Text style={ss.copyright}>©2019 版权所有，CODEBOY.COM</Text>
            </View>
        )
    }
}

//外部样式
let ss=StyleSheet.create({
   container:{
       padding:30,   
   },
   input:{
       fontSize:16,
       color:'#73879c',
       borderBottomColor:'#73879c',
       borderBottomWidth:1,
       marginBottom:12
   },
   btn:{
       fontSize:20,
    //    marginVertical:40, 按钮margin无效
   },
   row:{
       flexDirection:'row',
       justifyContent:'space-evenly',
       marginVertical:50,
   },
   title:{
       fontSize:32,
       color:'#73879c'
   },
   copyright:{
       fontSize:16,
       color:'#73879c',
       textAlign:'center'
   }
})