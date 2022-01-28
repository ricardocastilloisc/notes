import logo from "./logo.svg";
import Mensaje from "./components/mensaje";
import "./App.css";
import Panel from "./components/panel";
import Menu from "./components/menu";
import List from "./components/list";
import Item from "./components/item";
import Editor from "./components/editor";
import Preview from "./components/preview";
import uuid from "react-uuid";

import { useState } from "react";

function App() {
  const [items, setItems] = useState([]);
  const [copyItems, setCopyItems] = useState([]);
  const [actualIndex, setActualIndex] = useState(-1);

  function handleNew() {
    const note = {
      id: uuid(),
      title: "",
      text: "",
      pinned: false,
      created: Date.now(),
    };

    setItems([...items, note]);
  }

  function handlePinned() {}
  function handleSeletedNote(item, e) {
    if (!e.target.classList.contains("note")) return;

    const index = items.findIndex((x) => x === item);

    setActualIndex(index);
  }

  return (
    <div className="App container">
      <Panel>
        <Menu onNew={handleNew}></Menu>
        <List className="list">
          {items.map((item, i) => {
            return (
              <Item
                item={item}
                key={item.id}
                index={i}
                onHandlePinned={handlePinned}
                onHandleSeletedNote={handleSeletedNote}
                actualIndex={actualIndex}
              />
            );
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
