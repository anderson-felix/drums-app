import React from "react";
import { useArray, useBoolean } from "react-hanger";
import ReactPlayer from "react-player";
import "bootstrap/dist/css/bootstrap.css";
// import styled from "styled-components";

import sky from "../images/sky.jpg";

import { Track } from "../interfaces/track";
import { BackgroundBlack } from "./BackGrounds";

export default function Player() {
  const playing = useBoolean(false);
  const tracks = useArray<Track>([
    {
      title: "Rumble",
      duration: 1,
      price: 1,
      urlS3: "https://soundcloud.com/darksiderecords000/rumble-preview",
      disponible: true,
      image: { sky },
    },
    {
      title: "Dark",
      duration: 1,
      price: 1,
      urlS3: "https://soundcloud.com/darksiderecords000/rumble-preview",
      disponible: true,
      image: { sky },
    },
    {
      title: "Forest",
      duration: 1,
      price: 1,
      urlS3: "https://soundcloud.com/darksiderecords000/rumble-preview",
      disponible: true,
      image: { sky },
    },
    {
      title: "Hitech",
      duration: 1,
      price: 1,
      urlS3: "https://soundcloud.com/darksiderecords000/rumble-preview",
      disponible: true,
      image: { sky },
    },
  ]);

  return (
    <div className="App">
      {tracks.value.map((track) => (
        <React.Fragment>
          <div className="list-group">
            <button
              type="button"
              className="list-group-item list-group-item-action"
              disabled={!track.disponible}
            >
              <BackgroundBlack>{track.title}</BackgroundBlack>
            </button>
          </div>
          <div className="playerDiv">
            <ReactPlayer
              style={{ display: `none` }}
              onProgress={console.log}
              playing={playing.value}
              height={`auto`}
              url={track.urlS3}
            />
            <button onClick={playing.setTrue}>Play</button>
            <button onClick={playing.setFalse}>Pause</button>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
}
