import { useState, useEffect, useCallback, componentDidMount } from 'react';
import { useRecoilState, useRecoilValue } from "recoil";
import { pauseAtom as pauseState } from "../atom";
import logo from '../assets/img/logo.png';
import AudioPlayer from './AudioPlayer'
import { Link } from "react-router-dom";
import bgm from "../assets/audio/artofsilence_bgm.mp3"

function Pause() {

  const [isPause, setPause] = useRecoilState(pauseState);

  function triggerMenu(val) {
    setPause(val)
  }

  return (
    <header className={`landing_screen pause ${isPause ? "" : "hide"}`}>
        <img src={logo} className="App-logo" alt="logo" />
        <button className="btn_primary mt-10" onClick={() => triggerMenu(false)}>Resume</button>
        <AudioPlayer url={bgm}/>
    </header>
  );


}

export default Pause;
