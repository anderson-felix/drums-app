import React from "react";
import { useArray, useBoolean } from "react-hanger";
import ReactPlayer from "react-player";
import "bootstrap/dist/css/bootstrap.css";
import { Layout } from "antd";

import { Track } from "../interfaces/track";
import { SkyBackground, LayoutDiv, PlayerDiv } from "./BackGrounds";
import { Button } from "../components/buttons";

export default function Player() {
  const playing = useBoolean(false);
  const tracks = useArray<Track>([
    {
      title: "Rumble",
      duration: 1,
      price: 1,
      urlS3: "https://soundcloud.com/darksiderecords000/rumble-preview",
      disponible: true,
      image: "any",
    },
    {
      title: "Dark",
      duration: 1,
      price: 1,
      urlS3: "https://soundcloud.com/darksiderecords000/rumble-preview",
      disponible: true,
      image: "any",
    },
    {
      title: "Forest",
      duration: 1,
      price: 1,
      urlS3: "https://soundcloud.com/darksiderecords000/rumble-preview",
      disponible: true,
      image: "any",
    },
    {
      title: "Hitech",
      duration: 1,
      price: 1,
      urlS3: "https://soundcloud.com/darksiderecords000/rumble-preview",
      disponible: true,
      image: "any",
    },
  ]);

  const { Header, Footer, Sider, Content } = Layout;

  return (
    <div className="App">
      {tracks.value.map((track) => (
        <React.Fragment>
          {track.title}
          <LayoutDiv>
            <Header className="header">Header</Header>
            <Layout className="layout-middle">
              <Sider className="sider">Sider</Sider>
              <Content className="content">Content</Content>
            </Layout>
            <Footer className="footer">Footer</Footer>
          </LayoutDiv>
          <SkyBackground />
          <PlayerDiv>
            <div className="playerDiv">
              <ReactPlayer
                style={{ display: `none` }}
                onProgress={console.log}
                playing={playing.value}
                height={`auto`}
                url={track.urlS3}
              />
              <Button onClick={playing.setTrue} id="play-button">
                Play
              </Button>
              <Button onClick={playing.setFalse} id="pause-button">
                Pause
              </Button>
            </div>
          </PlayerDiv>
        </React.Fragment>
      ))}
    </div>
  );
}
