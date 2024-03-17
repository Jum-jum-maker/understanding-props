import "./styles/Hello.css";

const Hello = ({jumoke, array}) => {
  return (
    <div className="hello-container">
      <h1 className="red">Hello from Hello.jsx</h1>
      <p>{jumoke}</p>
      <h2>{array}</h2>
    </div>
  );
};

export default Hello;
