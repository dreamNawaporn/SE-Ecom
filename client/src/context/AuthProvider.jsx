/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { useContext, createContext } from "react";
export const AuthContext = createContext();
import { app } from "../firebase/firebase.config";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
  updateProfile,
} from "firebase/auth";

import axiosPublic from "../hook/useAxios";

const AuthProvider = ({ children }) => {
  const auth = getAuth(app);
  const [user, setUser] = useState(null);
  const [reload, setReload] = useState(false);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    return signOut(auth);
  };

  const signUpWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  };

  
  const updateUserProfile = ({name, photoURL}) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoURL,
    });
  };

  const authInfo = {
    user,
    setUser,
    createUser,
    login,
    logout,
    signUpWithGoogle,
    updateUserProfile,
    reload,
    setReload,
  };
  //check if user is Logged in
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        const userInfo = {email : currentUser.email}
        try {
          axiosPublic.post("/jwt", userInfo)
          .then((response) => {  
            if(response.data.token){
              localStorage.setItem("token", response.data.token);
            } else {
              localStorage.removeItem("token");
            } 
            axiosPublic.get(`/users/${currentUser.email}`).then(
              (
                response
              ) => {
               setUser(response.data)
              }
            )
          })
          .catch((error) => {
            console.error('Error:', error);
          });        
        } catch (error) {
          console.log(error);
        }
      }
    });
    return () => {
      return unsubscribe();
    };
  }, [axiosPublic]);

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
