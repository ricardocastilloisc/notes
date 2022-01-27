import logo from "./logo.svg";
import Mensaje from "./components/mensaje";
import "./App.css";
import Panel from "./components/panel";
import Menu from "./components/menu";
import List from "./components/list";
import Item from "./components/item";
import Editor from "./components/editor";
import Preview from "./components/preview";

import { useState } from "react";

function App() {
  const [items, setItems] = useState([
    {
      id: 0,
      title: "mi primera nota",
      text: "# hola a todos",
      pinned: true,
      created: Date.now(),
    },
  ]);

  function handleClick() {
    const note = {
      id: 1,
      title: "",
      text: "# segunda nota",
      pinned: false,
      created: Date.now(),
    };

    setItems([...items, note]);
  }

  return (
    <div className="App container">
      <Panel>
        <Menu></Menu>
        <List className="list">
          {items.map((item, i) => {
            return <Item item={item} key={item.id} />;
          })}
        </List>
      </Panel>

      <>
        <Editor />
        <Preview />
      </>
    </div>
  );
}

export default App;
