import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged } from "firebase/auth";
import app from "../firebase/firebaseConfig";
import { createContext, useEffect } from "react";
import { useState } from "react";

const auth = getAuth(app);

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword( auth, email, password)
    }

    useEffect(()=> {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('user is present', currentUser)
            setUser(currentUser)
            setLoading(false)
        })
        return unSubscribe
    },[])

const  authInfo = {
    user,
    loading,
    createUser
}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;