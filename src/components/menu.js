
 function handleClick() {
  
  }


export default function Menu() {
  return (
    <div className="menu">
      <input className="search" placeholder="search..." />
      <button className="btn" onClick={() => handleClick()}>
        + Nueva nota
      </button>
    </div>
  );
}
