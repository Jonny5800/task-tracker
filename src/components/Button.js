import PropTypes from "prop-types";
const onClick = console.log("click");
const Button = ({ color, text }) => {
  return (
    <button
      className="btn"
      onClick={onClick}
      style={{ backgroundColor: color }}
    >
      {text}
    </button>
  );
};

export default Button;

Button.defaultProps = {
  color: "steelblue",
};

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
};
