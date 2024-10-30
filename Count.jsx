import React, { useEffect, useState } from "react";
function Count() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    console.log("EVENT LISTNER BEEN ADDED");

    return () => {
      window.removeEventListener("resize", handleResize);
      console.log("EVENT LISTNER BEEN REMOVED");
    };
  }, []);

  useEffect(() => {
    document.title = `size: ${width} x ${height}`;
  }, [width, height]);

  function handleResize() {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }

  return (
    <div>
      <p>Width: {width}px</p>
      <p>Height: {height}px</p>
    </div>
  );
}

export default Count;
