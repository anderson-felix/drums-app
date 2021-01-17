import React from "react";
import { useArray, useBoolean } from "react-hanger";
import ReactPlayer from "react-player";
import "bootstrap/dist/css/bootstrap.css";
import { Layout } from "antd";
import { PlayCircleFilled, PauseCircleFilled } from "@ant-design/icons";

import { Track } from "../interfaces/track";
import { LayoutDiv } from "./BackGrounds";
import { MusicImage } from "./MusicImage";
import { Button } from "../components/buttons";

export default function Player() {
  const playing = useBoolean(false);
  const tracks = useArray<Track>([
    {
      title: "Rumble - Sick Mundus",
      duration: 1,
      price: 1,
      urlS3: "https://soundcloud.com/darksiderecords000/rumble-preview",
      disponible: true,
      image: "any",
    },
    {
      title: "Little Star - Kasatka",
      duration: 1,
      price: 1,
      urlS3: "https://soundcloud.com/kasatka/little-star",
      disponible: true,
      image: "any",
    },
    {
      title: "Granjurema - Elowinz",
      duration: 1,
      price: 1,
      urlS3: "https://soundcloud.com/p-30/elowinz-granjurema",
      disponible: true,
      image: "any",
    },
    {
      title: "Behing Language - Awaken Dreams",
      duration: 1,
      price: 1,
      urlS3:
        "https://soundcloud.com/kokoblokoproject/behind-language-kokobloko-insector-awaken-dreams",
      disponible: true,
      image: "any",
    },
  ]);

  const { Header, Sider, Content } = Layout;

  return (
    <div className="App">
      {tracks.value.map((track) => (
        <React.Fragment>
          <LayoutDiv>
            <Header className="header">{track.title}</Header>
            <Layout className="layout-middle">
              <Sider className="sider">
                <MusicImage />
              </Sider>
              <Content className="content">Content</Content>
              <div className="playerDiv">
                <ReactPlayer
                  style={{ display: `none` }}
                  onProgress={console.log}
                  playing={playing.value}
                  height={`auto`}
                  url={track.urlS3}
                />
              </div>
            </Layout>
            <Content className="footer-content">
              <Button onClick={playing.setTrue}>
                <PlayCircleFilled />
              </Button>
              <Button onClick={playing.setFalse}>
                <PauseCircleFilled />
              </Button>
            </Content>{" "}
          </LayoutDiv>
        </React.Fragment>
      ))}
    </div>
  );
}
