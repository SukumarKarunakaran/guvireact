import { useState } from "react";
import { ColorBox } from "./ColorBox";
import React from 'react'

export function AddColor() {
  const [color, setColor] = useState("pink");
  // const colorList = ["orange","crimson","red"];
  const [colorList, setColorList] = useState(["orange", "crimson", "red"]);
  const styles = {
    fontSize: "24px",
    backgroundColor: color,
  };

  return (
    <div>
      <div className="add-color">
        <input onChange={(event) => setColor(event.target.value)}
          style={styles} type="text" value={color} />
        <button onClick={() => setColorList([...colorList, color])}>Add</button>
      </div>
      {colorList.map((clr) => (<ColorBox color={clr} />))}
      {/* <ColorBox color={colorList[0]}/> */}
    </div>

  );
}
