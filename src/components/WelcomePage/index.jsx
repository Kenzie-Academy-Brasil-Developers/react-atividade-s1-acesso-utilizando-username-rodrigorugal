import "./style.css";
const WelcomePage = ({ user, setIsLoggedIn }) => {
  const HandleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="divPai">
      <div className="divFilho">
        <p>
          Boas Vindas, <span className="userName">{user}!</span>
        </p>
        <button className="bnt" onClick={HandleLogout}>
          Sair
        </button>
      </div>
    </div>
  );
};

export default WelcomePage;
