import React from "react";
import Link from "next/link";

const PrimaryButton = ({ name, url }) => {
  return (
    <Link className="btn-primary" href={url}>
      {name}
    </Link>
  );
};

export default PrimaryButton;
