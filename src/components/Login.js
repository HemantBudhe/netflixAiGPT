import React, { useRef, useState } from 'react';
import Header from './Header';
import { checkValidData } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import {auth} from "../utils/firebase";
import { useNavigate } from 'react-router-dom';


const Login = () => {

    const [isSignInForm, setIsSignInForm] = useState();
    const [errorMessage,setErrorMessage] = useState(null);
    const navigate = useNavigate();


    const name= useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const toggleSignInForm= () =>{
        setIsSignInForm(!isSignInForm);
        
    }

    const handleButtonClick =() =>{
      //Validate the form data
      const msg = checkValidData(email.current.value,password.current.value);
      setErrorMessage(msg);
      if(msg) return;
      // Sign In / Sign Up
      

      if(!isSignInForm){
        // Sign Up logic

        createUserWithEmailAndPassword(auth, email.current.value,password.current.value)
         .then((userCredential) => {
         // Signed up 
         const user = userCredential.user;

             updateProfile(user, {
              displayName: name.current.value, photoURL: "https://example.com/jane-q-user/profile.jpg"
             }).then(() => {
                // Profile updated!
                navigate("/browse");
             }).catch((error) => {
              // An error occurred
              setErrorMessage(error.message);
             });

          console.log(user);
          navigate("/browse");
        })
        .catch((error) => {
         const errorCode = error.code;
         const errorMessage = error.message;
         setErrorMessage(errorCode + " " + errorMessage )
        });
      }
      else{  
        //Sign In Logic
        signInWithEmailAndPassword(auth, email.current.value,password.current.value)
        .then((userCredential) => {
       // Signed in 
        const user = userCredential.user;

        console.log(user);
        navigate("/browse");
       // ...
       })
       .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        setErrorMessage(errorCode + " " + errorMessage)
       });
      }
    };

  return (
    <div>
       <Header/>
       <div className='absolute'>
         <img 
          src = "https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt = "bg-img"/>
       </div>

       <form onSubmit={(e) => e.preventDefault()} 
       className='absolute w-3/12 p-12 my-36 mx-auto right-0 left-0 rounded-sm text-white bg-black bg-opacity-80'>
        
        <h1 className='font-bold text-3xl py-4'>
            {isSignInForm ? "Sign In" :"Sign Up"}
        </h1>

        {
            !isSignInForm &&(
        <input 
        ref={name}
        type="text" 
        placeholder="Full Name" 
        className='p-2 my-4 w-full bg-gray-700 rounded-md'
        />
            )
        }

        <input 
        ref={email}
        type="text" 
        placeholder="Email Address" 
        className='p-2 my-4 w-full bg-gray-700 rounded-md'
        />
        
        <input 
        ref={password}
        type="password" 
        placeholder='Password' 
        className='p-2 my-4 w-full bg-gray-700 rounded-md'
        />

        <p className='text-red-700 text-lg py-2 '>{errorMessage}</p>
        <button 
        className='p-4 my-6 rounded-md bg-red-700 w-full ' onClick={handleButtonClick}>
        {isSignInForm ? "Sign In" :"Sign Up"}
        </button>

        <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>
        {isSignInForm ? "New to Netflix? Sign Up Now" :"Already registered? Sign In Now."}
        </p>

       </form>
    </div>
  );
}

export default Login;
