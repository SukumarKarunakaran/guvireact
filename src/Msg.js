import { Counter } from "./Counter";
import React from 'react'
// import ReactDOM from 'react-dom'

// function Welcome(props) {
//   return (
//     <div>
//       {/* <img className="profile-pic" src={props.pic} alt="Profile-Pic" /> */}
//       <h1>Hi, {props.name}</h1>
//     </div>
//   );
// }
export function Msg(props) {
  return (
    <div>
      <img className="profile-pic" src={props.pic} alt="Profile-Pic" />
      <h1>Hi, {props.name} </h1> <Counter />
    </div>
  );
}
