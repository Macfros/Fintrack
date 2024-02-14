"use client";
import {useState} from "react";
import {useEffect} from "react";
import Login from "./../login/Login";
import Register from "./../register/Register";

import Button from "./Button";
const Switching = () => {
    const [state,setState]= useState(false);
    const [register,setRegister] = useState(false);

    const flipState = () => {
        setRegister(false);
        setState(true);
       console.log(state);
      };

      const flipStateRegister = () => {
        setState(false);
        setRegister(true);
       console.log(register);
      };

      const flipHome = () => {
        setState(false);
        setRegister(false);
       console.log(register+" "+state);
      };



    return (
        <div className="flex flex-col gap-8 w-1/2">
        {!state ? (<Button label="login" background="black-200" outline onClick={flipState}/>): (<Login/>) }
        {!register ? (<Button label="register" background="black-200" outline onClick={flipStateRegister}/>) : (<Register/>) }
        <Button label="back" onClick={flipHome}/>
        </div>
        )
}

export default Switching;