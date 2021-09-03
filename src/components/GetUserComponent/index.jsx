import { useState } from "react";
import "./style.css";
const GetUserComponent = ({ setUser, setIsLoggedIn }) => {
  const [userInput, setUserInput] = useState("");

  const HandleLogin = () => {
    setUser(userInput);
    setIsLoggedIn(true);
  };

  return (
    <div className="caixaPai">
      <h1>Login</h1>
      <form>
        <input
          className="border"
          type="text"
          value={userInput}
          onChange={(event) => setUserInput(event.target.value)}
        ></input>

        <button
          className="border"
          id="bnt"
          onClick={() => HandleLogin(userInput)}
        >
          Acessar com o nome
        </button>
      </form>
    </div>
  );
};

export default GetUserComponent;
