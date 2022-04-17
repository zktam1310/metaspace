import React, { useState, useEffect } from "react";
import { GiSpeaker, GiSpeakerOff } from "react-icons/gi"

const useAudio = url => {
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(true);

  audio.volume = 0.05
  audio.muted = !playing
  audio.autoplay = true
  audio.play()

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    playing ? audio.muted = false : audio.muted = true
  },[playing]);

  useEffect(() => {
    audio.addEventListener('ended', () => audio.play());
    return () => {
      audio.pause()
      audio.currentTime = 0
      audio.removeEventListener('ended', () => audio.play());
    };
  }, []);

  return [playing, toggle];
};

const AudioPlayer = ({ url }) => {
  const [playing, toggle] = useAudio(url);

  return (
    <>
      <button className="mt-10" onClick={toggle}>
          {playing && <GiSpeaker/>}
          {!playing && <GiSpeakerOff/>}
      </button>
    </>
  );
};

export default AudioPlayer;