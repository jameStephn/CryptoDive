import { Avatar, Menu, Button, Typography } from "antd";
import icon from "../Images/cryptocurrency.png";
import {
  HomeOutlined,
  MoneyCollectOutlined,
  BulbOutlined,
  FundOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useState } from "react";
const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(true);

  const items = [
    {
      label: 'Home',
      key: '1',
      icon: <HomeOutlined />,
      link: '/',
    },
    {
      label: 'Cryptocurrencies',
      key: '2',
      icon: <MoneyCollectOutlined />,
      link: '/cryptocurrencies',
    },
    {
      label: 'Exchanges',
      key: '3',
      icon: <BulbOutlined />,
      link: '/exchanges',
    },
    {
      label: 'News',
      key: '4',
      icon: <FundOutlined />,
      link: '/news',
    },
  ];

  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar src={icon} />
        <Typography.Title level={2} className="logo" style={{ marginLeft: "10px" }}>
          <Link to="/">CryptoDive</Link>
        </Typography.Title>
        <Button className="menu-control-container" onClick={() => setActiveMenu(!activeMenu)}>
          <MenuOutlined />
        </Button>
      </div>
     
      {activeMenu && (
        <Menu theme="dark">
          {items.map(item => (
            <Menu.Item key={item.key} icon={item.icon}>
              <Link to={item.link}>{item.label}</Link>
            </Menu.Item>
          ))}
        </Menu>
      )}
    </div>
  );
};

export default Navbar;
