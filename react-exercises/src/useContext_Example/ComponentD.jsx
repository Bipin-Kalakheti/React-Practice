//useContext() = React Hook that allows you to share values between multiple levels of components without passing props through each level.

// Provided Component
// 1. import { createContext } from "react";
// 2. export const MyContext = createContext();
// 3. <MyContext.Provider value={value} >
//         <child />
//         </MyContext.Provider>

// Consumer Component
// 1. import React, {useContext} from "react";
//     import {MyContext} from "./ComponentA";
// 2. const value = useContext(MyContext);

import React, { useContext } from "react";
import { UserContext } from "./ComponentA";

function ComponentD() {
  const user = useContext(UserContext);
  return (
    <div className="box">
      <h1>Componenet D</h1>
      <h2>{`Bye ${user}`}</h2>
    </div>
  );
}
export default ComponentD;
