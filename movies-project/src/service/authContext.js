
import { auth, db } from "../firebase";
import React, { useContext, useEffect, useState } from "react";
import {
    onAuthStateChanged,
    signOut,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from 'firebase/auth';
import { setDoc, doc, onSnapshot } from "firebase/firestore";

const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {

    const [currentUser, setCurrentUser] = useState(null);
    const [loggedIn, setLoggedIn] = useState(false);
    const [userName, setUserName] = useState('');

    async function addusertoDB(name, email, userId) {
        await setDoc(doc(db, 'Users', userId), {
            name: name,
            email: email,
            userId: userId,
        });
    }

    async function signUp(name, email, password) {
        const ret = await createUserWithEmailAndPassword(auth, email, password)
            .then((useCredential) => {
                let ret1 = useCredential.user.uid;
                addusertoDB(name, email, ret1);
                return 1;
            })
            .catch((error) => {
                return error;
            });
        return ret;
    }

    async function handleLogout() {
        await signOut(auth);
        setCurrentUser(null);
        setLoggedIn(false);
        setUserName('');
    }

    async function getUserData(id) {
        const info = await onSnapshot(doc(db, 'Users', id), (doc) => {
            setUserName(doc.data().name);
            console.log("User Data :", doc.data());
        });
    }

    async function login(email, password) {
        const ret = await signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential.user.uid);
                return 1;
            })
            .catch((error) => {
                return error;
            });
        return ret;
    }

    useEffect(() => {
        auth.onAuthStateChanged(user => {
            console.log("User : ", user);
            if (user != null) {
                setCurrentUser(user);
                setLoggedIn(true);
                getUserData(user.uid);
            } else {
                setCurrentUser(null);
                setLoggedIn(false);
            }
        });
    }, []);

    const value = {
        signUp,
        login,
        loggedIn,
        userName,
        handleLogout
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}
