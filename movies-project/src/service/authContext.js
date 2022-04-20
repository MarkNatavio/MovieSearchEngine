
import { auth, db } from "../firebase";
import React, { useContext, useEffect, useState } from "react";
import {
    onAuthStateChanged,
    signOut,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from 'firebase/auth';
import { setDoc, doc, onSnapshot, updateDoc } from "firebase/firestore";

const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {

    const [currentUser, setCurrentUser] = useState(null);
    const [loggedIn, setLoggedIn] = useState(false);
    const [userName, setUserName] = useState('');
    const [userFavorites, setUserFavorites] = useState([]);
    const [userId, setUserId] = useState('');

    async function addusertoDB(name, email, userId) {
        await setDoc(doc(db, 'Users', userId), {
            name: name,
            email: email,
            userId: userId,
            favorites: [],
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
        setUserId('');
        setUserFavorites([]);
    }

    async function getUserData(id) {
        const info = await onSnapshot(doc(db, 'Users', id), (doc) => {
            setUserName(doc.data().name);
            setUserFavorites(doc.data().favorites);
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

    async function addToFavorites(movieID) {
        const washingtonRef = doc(db, "Users", userId);
        userFavorites.push(movieID);
        await updateDoc(washingtonRef, {
            favorites: userFavorites
        })
    }

    async function deleteFromFavorites(movieID) {
        var a = userFavorites;
        const index = a.indexOf(movieID);

        if (index > -1) {
            a.splice(index, 1);
        }
        const washingtonRef = doc(db, "Users", userId);
        await updateDoc(washingtonRef, {
            favorites: a
        })
    }

    useEffect(() => {
        auth.onAuthStateChanged(user => {
            console.log("User : ", user);
            if (user != null) {
                setCurrentUser(user);
                setLoggedIn(true);
                setUserId(user.uid);
                getUserData(user.uid);
            } else {
                setUserId('');
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
        handleLogout,
        addToFavorites,
        userFavorites,
        deleteFromFavorites
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}
