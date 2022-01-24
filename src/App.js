import logo from "./logo.svg";
import Mensaje from "./components/mensaje";
import "./App.css";
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
      <div className="panel">
        <div className="menu">
          <input className="search" placeholder="search..." />
          <button className="btn" onClick={() => handleClick()}>
            + Nueva nota
          </button>
        </div>
        <div className="list">
          {items.map((item, i) => {
            return (
              <div key={item.id} className="note">
                
                <div> {item.title === '' ? '[Sin titulo]' : item.title}</div>

                <div> 
                  <button className="pinButton">{item.pinned? 'Pinned' : 'Pin'}</button>
                </div>
               
              </div>
            );
          })}
        </div>
      </div>

      <div className="editor"></div>
      <div className="preview"></div>
    </div>
  );
}

export default App;
