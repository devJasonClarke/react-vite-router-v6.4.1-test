import React, { useState, useEffect } from "react";

function useName(theName) {
  const [name, SetName] = useState("Jason");
  useEffect(() => {
    SetName(theName ? theName : "Jason");
  }, [theName]);

  return name;
}

export default useName;
