import React from "react";

const Header = () => {
  return (
    <div className="flex m-4 z-20 justify-between">
      <div className="hover:bg-gray-100">KAIZEN</div>
      <div className="flex gap-4">
        <div className="hover:bg-gray-100">menu</div>
        <div className="hover:bg-gray-100">social</div>
        <div className="hover:bg-gray-100">join us</div>
      </div>
    </div>
  );
};

export default Header;
