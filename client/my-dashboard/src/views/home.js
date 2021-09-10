import Movies from "../components/Movies/Movies";
import Topbar from "../components/Topbar/Topbar";
import Weather from "../components/Weather/Weather.js";
import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import YoutubePlayer from "../components/YoutubePlayer/YoutubePlayer";
import Clock from '../components/Clock/Clock.js';
import News from "../components/News/News";

function Home() {
  return (
    <div>
      <Topbar />
      <div className="container">
        <tbody>
          <tr>
            <td>
            </td>
            <td>
            </td>
          </tr>
        </tbody>
              <Sidebar />
              <Clock />
        <tbody>
          <tr>
            <td>
              <Weather />
            </td>
            <td>
              <Movies />
            </td>
            <td>
              <YoutubePlayer />
            </td>
            <td>
              <News />
            </td>
          </tr>
        </tbody>
      </div>
    </div>
  );
}
export default Home;
