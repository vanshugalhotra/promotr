import React from "react";

const SecondaryButton = ({ name, icon }) => {
  return (
    <div className="secondary-btn cursor-pointer border-none inline-flex justify-center items-center font-extrabold capitalize transition-all duration-200 ease-in-out overflow-hidden rounded-lg shadow text-base py-4 px-10 relative z-[1] text-[var(--main-white)] bg-[var(--color-yellow-1)] space-x-3">
      {icon}
      <span>{name}</span>
    </div>
  );
};

export default SecondaryButton;
