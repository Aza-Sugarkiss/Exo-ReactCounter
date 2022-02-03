import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  return (
    <div className="header">
      <FontAwesomeIcon
        className="icon"
        color="#5C48D3"
        icon="calculator"
        size="5x"
      />
      <p className="title">React Counter</p>
    </div>
  );
};

export default Header;
