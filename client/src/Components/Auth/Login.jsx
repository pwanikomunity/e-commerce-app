import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithPopup,
} from "firebase/auth";

import { auth, googleProvider } from "./Firebase.jsx";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };
  const loginWithGoogle = async () => {
    try {
      const user = await signInWithPopup(auth, googleProvider);
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const logout = async () => {
    await signOut(auth);
  };
  const handleContinueClick = ()=>{
    console.log('clicked')
    navigate('/products')
  }

  return (
    <div className="">
      {/* <div className="reg-section">
        <h3> Register User </h3>
        <input
          placeholder="Email..."
          type="email"
          onChange={(event) => {
            setRegisterEmail(event.target.value);
          }}
        /><br/>
        <input
          placeholder="Password..."
          type="password"
          onChange={(event) => {
            setRegisterPassword(event.target.value);
          }}
        />

        <button onClick={register} className="reg-btn"> Register</button>
      </div> */}

      <div className="h-screen flex flex-col items-center justify-center space-y-[1rem]">
        <div>
          <h1 className="font-bold text-center text-2xl ">Welcome to e-cormmerce</h1>
          <p className="">To get started type your email address or <span><Link className="hover:underline">create  an e-commerce account</Link> </span></p>
        </div>
        <div className="flex flex-col w-[30%]">
          <div className="w-[100%]">
            <label className="font-bold text-2xl">Email</label>
          </div>

          <div>
            {" "}
            <input
            className="w-[100%] border h-[3rem]"
              placeholder="Email..."
              type="email"
              onChange={(event) => {
                setLoginEmail(event.target.value);
              }}
            />
          </div>
        </div>
        <div className="flex flex-col w-[30%]">
          <div className="w-[100%]">
            <label  className="font-bold text-2xl">Password</label>
          </div>
          <div>
            {" "}
            <input
            className="w-[100%] border h-[3rem]"
              placeholder="Password..."
              type="password"
              onChange={(event) => {
                setLoginPassword(event.target.value);
              }}
            />
          </div>
          <div className="w-[100%] h-[3rem] mt-[1rem]">
            {" "}
            <button onClick={handleContinueClick} className="btn-primary shadow">
              {" "}
              Continue
            </button>
          </div>
          <div className="w-[100%] h-[3rem] shadow mt-[1rem]">
            {" "}
            <button className="w-[100%] h-[100%] rounded " onClick={loginWithGoogle}>Login In with Google</button>
          </div>
          
          
        </div>
      </div>

      <h4> User Logged In: </h4>
      {user?.email}

      <button onClick={logout} className="logout-btn">
        {" "}
        Sign Out{" "}
      </button>
    </div>
  );
};
