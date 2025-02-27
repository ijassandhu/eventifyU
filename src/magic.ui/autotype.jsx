import React from "react";
import { ReactTyped } from "react-typed";

export default function AutoType() {
  return (
    <div>
      <ReactTyped
        strings={["Your Gateway to All Campus Activities and Events."]}
        typeSpeed={100}
        backSpeed={100}
        loop
      />
    </div>
  );
}
