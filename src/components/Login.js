import React, { useState } from 'react';
import Header from './Header';

const Login = () => {

    const [isSignInForm, setIsSignInForm] = useState();

    const toggleSignInForm= () =>{
        setIsSignInForm(!isSignInForm);

    }

  return (
    <div>
       <Header/>
       <div className='absolute'>
         <img 
          src = "https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt = "bg-img"/>
       </div>

       <form className='absolute w-3/12 p-12 my-36 mx-auto right-0 left-0 rounded-sm text-white bg-black bg-opacity-80'>
        <h1 className='font-bold text-3xl py-4'>
            {isSignInForm ? "Sign In" :"Sign Up"}
        </h1>

        {
            !isSignInForm &&(
        <input 
        type="text" 
        placeholder="Full Name" 
        className='p-2 my-4 w-full bg-gray-700 rounded-md'
        />
            )
        }

        <input 
        type="text" 
        placeholder="Email Address" 
        className='p-2 my-4 w-full bg-gray-700 rounded-md'
        />
        
        <input 
        type="password" 
        placeholder='Password' 
        className='p-2 my-4 w-full bg-gray-700 rounded-md'
        />
        <button className='p-4 my-6 rounded-md bg-red-700 w-full '>
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
