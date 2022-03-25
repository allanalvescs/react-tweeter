import './App.css';
import MainMenu from './components/menu';
import { Container } from './components/Container';
import { AppImage } from './components/figures';



import Home from './images/ico_home.svg';
import Explore from './images/ico_explore.svg';
import Notification from './images/ico_notification.svg';
import Message from './images/ico_message.svg';
import Bookmarks from './images/ico_bookmarks.svg';
import More from './images/ico_more.svg';
import Gift from './videos/twitter.gif'


function App() {

  const list_navegation = [
    { link: "#", link_name: "Home", route: Home, caption: "ico of home" },
    { link: "#", link_name: "Explore", route: Explore, caption: "ico of home" },
    { link: "#", link_name: "Navegation", route: Notification, caption: "ico of home" },
    { link: "#", link_name: "Messages", route: Message, caption: "ico of home" },
    { link: "#", link_name: "Bookmarks", route: Bookmarks, caption: "ico of home" },
    { link: "#", link_name: "More", route: More, caption: "ico of home" }
  ]

  return (
    <div className="App">
      <header className="App-header">
        <Container className="container_Gif">
          {
            <AppImage path={Gift} alt="gift of Twitter logo" />
          }
        </Container>
        <MainMenu itemList={list_navegation} />
      </header>
      <main></main>
    </div>
  );
}

export default App;
