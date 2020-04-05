import React from "react";

function Button(props) {
  const clickHandler = () => {
    props.onClickFunction(props.increment);
  };
  return (
    <button
      type="button"
      onClick={clickHandler}
      className="px-4 py-2 border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:z-10 focus:outline-none active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150">
      {props.increment === 0 ? "C" : "+" + props.increment}
    </button>
  );
}

export default Button;
