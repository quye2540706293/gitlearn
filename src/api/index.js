/* 包含应用中所有请求接口的函数：接口请求函数 */
import ajax from "./ajax"



//请求登录
export function reqLogin(username,psaaword){
   ajax({
       
       url:"/login",
       method:"post",
       data:{
           username,
           psaaword
       }
   }) 

}

const name="xiaomian"
const pwd="123"
reqLogin(name,pwd)

//将实参数据赋值形参变量