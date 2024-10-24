import "./App.css";
import discordLogo from './assets/discord-logo-white.png';
import menu from './assets/menu-icon.png';
import discordBackground from './assets/discord-background.png';

function App() {
  return (
    <>
      <div className="App">
          <div id="header-container">
          <img src={discordLogo} alt="the discord logo" className="logo"/>
          <img src={menu} alt="menu icon" className="logo"/> 
          </div>
          <div className="text-container">
          <h1>Imagine a place...</h1>
          <p>...where you can belong to a school club, a gaming group, or a worldwide art community. Where just you and a handful of friends can spend time together. A place that makes it easy to talk every day and hang out more often.</p>
          </div>
          <div className="bottomContainer">
          <div className="buttons">
            <button className="whiteButton">Download for Mac</button>
            <button className="blackButton">Open Discord on your browser</button>
          </div>
          <img src={discordBackground} alt="discord background image" className="image"/>
          </div>
      </div>
    </>
  );
}

export default App;
