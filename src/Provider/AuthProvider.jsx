import { Children, useEffect, useState } from "react";
import { createContext } from "react";
import auth from '../Pages/Firebase/firebase.config';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import toast from "react-hot-toast";


export const AuthContext = createContext(null);
function AuthProvider({ children }) {
    const axiosPublic = useAxiosPublic()
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
            setUser(user);
            console.log("Current user", user);
            if (user) {
                const userInfo = { emial: user.email };
                axiosPublic.post("/jwt", userInfo)
                    .then(res => {
                        if (res.data.token) {
                            localStorage.setItem("access-token", res.data.token)
                        }
                    })
            } else {
                localStorage.removeItem("access-token");
            }
            setLoading(false)

        })
        return () => {
            return unSubscribe();
        };
    }, []);


    const logOut = () => {
        signOut(auth).then(() => {
            toast.success("Logout succesful")
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
