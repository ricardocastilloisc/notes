import logo from "./logo.svg";
import Mensaje from "./components/mensaje";
import "./App.css";
import Panel from "./components/panel";
import Menu from "./components/menu";
import List from "./components/list";

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
            return (
              <div key={item.id} className="note">
                
                <div> {item.title === '' ? '[Sin titulo]' : item.title.substring(0,20)}</div>

                <div> 
                  <button className="pinButton">{item.pinned? 'Pinned' : 'Pin'}</button>
                </div>
               
              </div>
            );
          })}
        </List>
      </Panel>

      <div className="editor">
        <div>
          <input  className="title" />
        </div>
        <div className="editor-textarea">

          <textarea className="content"></textarea>

        </div>
      </div>
      <div className="preview"></div>
    </div>
  );
}

export default App;
