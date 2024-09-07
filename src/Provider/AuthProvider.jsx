import { Children, useEffect, useState } from "react";
import { createContext } from "react";
import auth from '../Pages/Firebase/firebase.config';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";


export const AuthContext = createContext(null);
function AuthProvider({ children }) {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);
    const provider = new GoogleAuthProvider();
    // console.log(user)
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const login = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }


    const googleLogin = () => {
        return signInWithPopup(auth, provider)
    }



    const updateUserProfile = (name) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
        });
    };


    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            setLoading(false)
            setUser(user);
        })
        return () => {
            return unSubscribe();
        };
    }, []);


    const logOut = () => {
        signOut(auth).then(() => {
            alert("Logout succesful")
        })
        //  setUser(null)
    }

    const authInfo = {
        user,
        loading,
        setLoading,
        login,
        createUser,
        googleLogin,
        setLoading,
        setUser,
        logOut,
        updateUserProfile
    }

    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
}

export default AuthProvider;
