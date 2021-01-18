import React from "react";
import { observer } from "mobx-react-lite";
import { useHistory } from "react-router-dom";
import {
  UploadOutlined,
  UserOutlined,
  LogoutOutlined,
  InfoCircleOutlined,
  AppstoreOutlined,
  SettingOutlined,
  ExperimentOutlined,
  FireOutlined,
  HeartOutlined,
  ToolOutlined,
  DollarCircleOutlined,
  ReadOutlined,
  PartitionOutlined,
  SlidersOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";

import { useGlobalContext } from "../contexts/global";
import { Logout } from "../controllers/logout";
import Player from "../components/Player";
import { HomeContent } from "../components/BackGrounds";

const { Header, Sider, Content, Footer } = Layout;
const { SubMenu } = Menu;

export const HomePage = observer(() => {
  const globalContext = useGlobalContext();

  const history = useHistory();

  const doLogout = React.useCallback(async () => {
    await Logout();

    globalContext.userData = undefined as any;
  }, [globalContext]);

  React.useEffect(() => {
    if (!globalContext.userData) history.push("/login");
  }, [globalContext.userData, history]);

  return (
    <React.Fragment>
      <Header>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
          <Menu.Item key="1"> 1 </Menu.Item>
          <Menu.Item key="2"> 2 </Menu.Item>
          <Menu.Item key="3"> 3 </Menu.Item>
        </Menu>
      </Header>
      <Layout>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={(broken) => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
          <Menu
            theme="dark"
            style={{ width: 200 }}
            defaultOpenKeys={["sub1"]}
            mode="inline"
          >
            <SubMenu key="sub1" icon={<UserOutlined />} title="Perfil">
              <Menu.Item key="1" icon={<FireOutlined />}>
                Minhas musicas
              </Menu.Item>
              <Menu.Item key="2" icon={<UploadOutlined />}>
                Upload de musicas
              </Menu.Item>
              <Menu.Item key="3" icon={<HeartOutlined />}>
                Favoritos
              </Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Categorias">
              <Menu.Item key="4">Boom Bap</Menu.Item>
              <Menu.Item key="5">Trap</Menu.Item>
              <Menu.Item key="6">Orgânico</Menu.Item>
              <Menu.Item key="7">Experimental</Menu.Item>
              <Menu.Item key="8">Todos</Menu.Item>
              <SubMenu key="sub3" title="Samples" icon={<ExperimentOutlined />}>
                <Menu.Item key="9" icon={<SlidersOutlined />}>
                  Analógico
                </Menu.Item>
                <Menu.Item key="10" icon={<PartitionOutlined />}>
                  Digital
                </Menu.Item>
              </SubMenu>
            </SubMenu>
            <SubMenu
              key="sub4"
              icon={<SettingOutlined />}
              title="Configurações"
            >
              <Menu.Item key="11" icon={<ToolOutlined />}>
                Conta
              </Menu.Item>
              <Menu.Item key="12" icon={<DollarCircleOutlined />}>
                Pagamento
              </Menu.Item>
              <Menu.Item key="13" icon={<InfoCircleOutlined />}>
                Ajuda
              </Menu.Item>
              <Menu.Item key="14" icon={<ReadOutlined />}>
                Sobre
              </Menu.Item>
            </SubMenu>
            <Menu.Item key="15" icon={<LogoutOutlined />} onClick={doLogout}>
              Sair
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="home-content">
          <HomeContent>
            <Content style={{ margin: "24px 16px 0" }}>
              <div
                className="site-layout-background"
                style={{ padding: 24, minHeight: 360 }}
              >
                <Player />
              </div>
            </Content>
            <Footer style={{ textAlign: "center" }}>
              Drums ©2021 Created by Dark Labs
            </Footer>
          </HomeContent>
        </Layout>
      </Layout>
      ,
    </React.Fragment>
  );
});
