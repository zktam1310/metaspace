import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import reportWebVitals from './reportWebVitals'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { RecoilRoot } from 'recoil';
import App from './pages/App';
import Resort from './pages/Resort';




ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
    <BrowserRouter>
        <RecoilRoot>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="world" element={<Resort />} />
          </Routes>
        </RecoilRoot>
    </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
