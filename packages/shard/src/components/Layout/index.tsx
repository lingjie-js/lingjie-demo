import { Layout as GlobalLayout } from 'antd';
import { Footer } from 'antd/lib/layout/layout';
import React, { ReactNode } from 'react';
import { SideMenu } from '../SideMenu'
import './index.css'
const { Header, Sider, Content } = GlobalLayout;

type LayoutProps = {
  children: ReactNode;
}
export const Layout = (props: LayoutProps) => {

  const { children } = props

  return (
    <GlobalLayout hasSider id="components-layout-demo-fixed-sider">
      <Sider
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
          top: 0,
          bottom: 0,
        }}
      >
        <div className="logo" />
        <SideMenu />
      </Sider>
      <GlobalLayout className="site-layout" style={{ marginLeft: 200 }}>
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
          {children}
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </GlobalLayout>
    </GlobalLayout>
  );
};
