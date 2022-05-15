import { useState } from "react";
import React from 'react'

export function Counter() {
  // let like = 10;
  const [like, setLike] = useState(0);
  const [disLike, setDisLike] = useState(0);
  return (
    <div className="user-container">
      <button className="btn-like" onClick={() => setLike(like + 1)}> <span role="img" aria-label="xxxxx">👍</span>   {like}</button>
      <button className="btn-dislike" onClick={() => setDisLike(disLike + 1)}><span role="img" aria-label="xxxxx">👎</span>   {disLike}</button>
    </div>
  );
}
