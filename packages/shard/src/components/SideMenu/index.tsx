import React from "react";
import { Menu } from "antd";
import {
  BulbOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';

type SideMenuItem = {
  key: string;
  icon?: React.ReactNode;
  label: string;
  href: string;
}

const { VITE_PROJECT_A_URL, VITE_PROJECT_B_URL, VITE_PROJECT_C_URL } = import.meta.env

const sideMenuConfig: SideMenuItem[] = [
  {
    key: '1',
    icon: <UserOutlined />,
    label: 'project A',
    href: VITE_PROJECT_A_URL
  },
  {
    key: '2',
    icon: <VideoCameraOutlined />,
    label: 'project B',
    href: VITE_PROJECT_B_URL
  },
  {
    key: '3',
    icon: <BulbOutlined />,
    label: 'project C',
    href: VITE_PROJECT_C_URL
  },
]

export const SideMenu = () => {

  const selectedKey = sideMenuConfig
    .filter(item => location.href.includes(item.href))
    .map(item => item.key)

  return <Menu
    id="side-menu"
    theme="dark"
    mode="inline"
    selectedKeys={selectedKey}
  >
    {sideMenuConfig.map(menuItem => {
      const { key, href, icon, label } = menuItem
      return <Menu.Item key={key}>
        <a href={href}>
          {icon}
          <span>{label}</span>
        </a>
      </Menu.Item>
    })}
  </Menu>
}
