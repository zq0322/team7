import request from '../utils/request'

//登录接口
export function loginApi(loginInfo){
    return request('/user/login',{
        method:'POST',
        body:loginInfo
    });
}