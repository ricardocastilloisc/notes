export default function Menu({onNew}) {
  function handleClick() {
    onNew()
  }


  return (
    <div className="menu">
      <input className="search" placeholder="search..." />
      <button className="btn" onClick={() => handleClick()}>
        + Nueva nota
      </button>
    </div>
  );
}
