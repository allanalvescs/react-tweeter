import "./style.css";
import { AppImage } from "../figures";

function MainMenu({ itemList }) {
  return (
    <nav className="mainMenu">
      <ul>
        {itemList.map((item, index) => {
          return (
            <li key={index}>
              <AppImage path={item.route} alt={item.caption} />
              <a href={item.link} blank="_self">{item.link_name}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default MainMenu;
