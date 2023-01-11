import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button color="green" text="hello" />
    </header>
  );
};

Header.defaultProps = {
  headerLabel: "This is the default header",
};

Header.propTypes = {
  headerLabel: PropTypes.string.isRequired,
};

// const headingStyle = {
// { color: "red", backgroundColor: "black" }}
export default Header;
