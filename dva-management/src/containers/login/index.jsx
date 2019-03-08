import React, { Component } from "react";
import { connect } from "dva";
// import { query } from "../../services/example";
import { Checkbox, Input, Button } from "antd";
import style from "./login.css";

let mapState = store => {
    window.store = store;
    return { ...store.login }
}
@connect(mapState)

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            autoLogin: false,
            username: "",
            password: ""
        };
        this.props.dispatch({
            type: "login/fetch",
            payload: "123"
        });
    }
    render() {
        let { username, password } = this.state;
        return (
            <div className={style.wrapper}>
                <div className={style.login_page}>
                    <h1 style={{ textAlign: "center" }}>请登录</h1>
                    <div className={style.group}>
                        <Input
                            size="large"
                            placeholder="请输入用户名"
                            onChange={ev => this.setState({ username: ev.target.value })}
                        />
                    </div>
                    <div className={style.group}>
                        <Input
                            type="password"
                            size="large"
                            placeholder="请输入用户密码"
                            onChange={ev => this.setState({ password: ev.target.value })}
                        />
                    </div>
                    <div className={style.group}>
                        <Checkbox
                            checked={this.state.autoLogin}
                            onChange={ev => this.changeAutoLogin(ev)}
                        >
                            记住密码
                        </Checkbox>
                        <a style={{ float: "right" }} href="###">
                            忘记密码
                        </a>
                    </div>
                    <div>
                        <Button
                            onClick={() => this.onSubmit({ username, password })}
                            block
                            type="primary"
                            size="large"
                        >
                            登录
                        </Button>
                    </div>
                </div>
            </div>
        );
    }

    onSubmit = (values) => {
        // const { username, password } = values
        console.log(values.username)
        console.log(values.password)
        this.props.history.push("/index")
        // query('/api/users/login',{username:username,password:password}).then(res=>{
        //     console.log(res)
        // })
        /*  let {user_name,user_pwd} = values;
         sessionStorage.setItem('userInfo',JSON.stringify({user_name,user_pwd}));
         this.props.dispatch({type:'login/login',user_name,user_pwd}); */
    }

    changeAutoLogin = ev => {
        this.setState({ autoLogin: ev.target.checked }, () => {
            if (this.state.autoLogin) {
                let userInfo = JSON.parse(sessionStorage.getItem('userInfo'));
                if (!userInfo) {
                    return;
                }
                let { user_name, user_pwd } = userInfo;
                this.setState({ user_name, user_pwd })
            } else {
                this.setState({ user_name: '', user_pwd: '' })
            }
        });
    }

    componentDidMount() {

    }
}

export default connect(mapState)(LoginPage);
