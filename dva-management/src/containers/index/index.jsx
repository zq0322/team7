import React, { Component } from "react";
import {NavLink} from 'react-router-dom';
import { Route} from 'dva/router';
import Home from '../home';
import Look from '../look'
import { connect } from "dva";
import "./indexP.css";
import { Layout, Menu, Breadcrumb, Icon } from "antd";
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

@connect(store => {

  return { ...store.Index };
})
export default class IndexPage extends Component {
  constructor(props) {
    super(props);
    this.state={
      defaultOpenKeys:["sub1"],
      defaultSelectedKeys:['1']
    }
  }
  open(e){
    
    //console.log('this.state :', e);
  }
  render() {
    return (
      <div>
        <Layout>
          <Header className="header" style={{background: "#fff",height:"44px",lineHeight:"44px"}}>
            <span>北京八维研修学院</span>
          </Header>
          <Layout>
            <Sider width={200} style={{ background: "#fff" }} >
              <Menu
                mode="inline"
                theme="dark"
                defaultSelectedKeys={["1"]}
                defaultOpenKeys={["sub1"]}
                style={{ height: "100%", borderRight: 0 }}
                onClick={this.open.bind(this)}
              >
                <SubMenu
                  key="sub1"
                  collapsed="true"
                  title={
                    <span>
                      <Icon type="bars" />
                      试题管理
                    </span>
                  }
                >
                  <Menu.Item key="1">
                    <NavLink to="/index/home">添加试题</NavLink>
                  </Menu.Item>
                  <Menu.Item key="2">
                    <NavLink to="/index/look">试题分类</NavLink>
                  </Menu.Item>
                  <Menu.Item key="3">查看试题</Menu.Item>
                </SubMenu>
                <SubMenu
                  key="sub2"
                  title={
                    <span>
                      <Icon type="user" />
                      用户管理
                    </span>
                  }
                >
                  <Menu.Item key="4">添加用户</Menu.Item>
                  <Menu.Item key="5">用户展示</Menu.Item>
                </SubMenu>
                <SubMenu
                  key="sub3"
                  title={
                    <span>
                    <Icon type="profile" />
                      考试管理
                    </span>
                  }
                >
                  <Menu.Item key="6">添加考试</Menu.Item>
                </SubMenu>
                <SubMenu
                  key="sub4"
                  title={
                    <span>
                      <Icon type="notification" />
                      班级管理
                    </span>
                  }
                >
                  <Menu.Item key="7">1608A</Menu.Item>
                  <Menu.Item key="8">1608B</Menu.Item>
                </SubMenu>
                <SubMenu
                  key="sub5"
                  title={
                    <span>
                    <Icon type="idcard" />
                      学生管理
                    </span>
                  }
                >
                  <Menu.Item key="9">查看分数</Menu.Item>
                </SubMenu>
                <SubMenu
                  key="sub6"
                  title={
                    <span>
                      考试管理
                    </span>
                  }
                >
                </SubMenu>
                <SubMenu
                  key="sub7"
                  title={
                    <span>
                      成绩统计
                    </span>
                  }
                >
                </SubMenu>
              </Menu>
            </Sider>
            <Layout style={{ padding: "0 24px 24px" }}>
              <Breadcrumb style={{ margin: "16px 0" }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
              </Breadcrumb>
              <Content
                style={{
                  background: "#fff",
                  padding: 24,
                  margin: 0,
                  minHeight: 280
                }}
              >
                <Route path="/index/home" component={Home}></Route>
                <Route path="/index/look" component={Look}></Route>
              </Content>
            </Layout>
          </Layout>
        </Layout>
      </div>
    );
  }
}
