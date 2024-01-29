import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser, removeUser } from "../utils/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { LOGO, USER_AVATAR } from "../utils/constants";
const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((store) => store.user);
    
    const handleSignOut =() =>{
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          });
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {

              const {uid, email, displayName} = user.uid;
              dispatch(addUser({uid: uid, email: email, displayName: displayName}) );
              navigate("/browse");
            } else {
              // User is signed out
              dispatch(removeUser());
              navigate("/")
            }
          });

          // Unsubscribe whe component unmounts
          return () => unsubscribe();
    }, []);

    return(
        <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between w-screen">
            <img 
            className="w-44"
            src = {LOGO}
            alt= "logo"
            />
            {user && (<div className="flex p-2">
                <img 
                className="w-10 h-10"
                alt="userIcon" 
                src={USER_AVATAR}
                />
                <button onClick={handleSignOut} className="font-bold text-white">Sign out</button>
            </div>)}
        </div>
    );
};

export default Header;