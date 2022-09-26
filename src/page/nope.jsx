import React from "react";
import { Link } from "react-router-dom";

export default function Nope() {
  return (
    <div>
      Nope Page
      <Link to="/">Home</Link>
    </div>
  );
}
