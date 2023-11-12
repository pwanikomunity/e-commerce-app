import React from 'react'
import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    
  } from "firebase/auth";
//   import { auth } from 'firebase/auth';
import { auth } from './Firebase.jsx';

export default function SignUp() {
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
      })

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
  return (
    <div>
        <div className="reg-section">
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
          }} />
          </div>
    </div>
  )
}
