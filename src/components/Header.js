import PropTypes from "prop-types";
import Button from "./Button";
// const onClick = ({ deleteTask }) => {
//   console.log("header click");
//};
const Header = ({ title, deleteTask, addOn, showFormPropToPass }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button
        color={showFormPropToPass ? "red" : "green"}
        text={showFormPropToPass ? "Close" : "Add"}
        onClick={addOn}
      />
      {/* addOn was onClick */}
    </header>
  );
};

Header.defaultProps = {
  headerLabel: "This is the default header",
};

Header.propTypes = {
  headerLabel: PropTypes.string.isRequired,
};
// CSS in js
// const headingStyle = {
// { color: "red", backgroundColor: "black" }}
export default Header;
