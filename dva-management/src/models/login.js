import { message } from "antd";
import { loginApi } from "../services/userMessage";
import UtilGlobal from '../utils/global';
export default {
  namespace: "login",

  state: {
    userToken: "123",
    loginStatus: 0,
    token: ""
  },

  subscriptions: {
    setup({ dispatch, history }) {
      // eslint-disable-line
    },
    changeLogin(state, paylod) {
      return { ...state, ...paylod };
    }
  },

  effects: {
    *fetch({ payload }, { call, put }) {
      // eslint-disable-line
      yield put({ type: "save" });
    },
    *login(payload, { call, put }) {
      let { user_name, user_pwd } = payload;
      yield put({ type: "changeLogin", loginStatus: 3 });
      let result = yield call(loginApi,{user_name,user_pwd});
      if(result.code === 1){
          yield put({type:'changeLogin',loginStatus:1,token:result.token});
          sessionStorage.setItem('authorization',result.token);
          UtilGlobal.history.push({pathname:'/public/spa/spa/main',state:{id:'main'}})
      }else{
          yield put({type:'changeLogin',loginStatus:2});
          message.error('登录失败',1);
      }
    },
    *logout(payload, { put }) {
      sessionStorage.removeItem("authorization");
      yield put({ type: "changeLogin", token: null, loginStatus: 0 });
      window.location.href = "/public/spa/spa/login";
    }
  },

  reducers: {
    save(state, action) {
      return { ...state, userToken: action.payload };
    }
  }
};
