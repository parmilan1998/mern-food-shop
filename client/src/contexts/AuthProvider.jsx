/* eslint-disable react/prop-types */
import React, { createContext, useEffect, useState } from 'react'
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from 'firebase/auth'
import app from '../firebase/firebase.config'

export const AuthContext = createContext()
const auth = getAuth(app)
const googlePovider = new GoogleAuthProvider()

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  // Create an user account
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  // Signup with google gmail
  const signUpWithGmail = () => {
    return signInWithPopup(auth, googlePovider)
  }

  // Login with email and password
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  // logout
  const logOut = () => {
    return signOut(auth)
  }

  // Update user profile
  const updateUserProfile = (name, photoURL) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoURL,
    })
  }

  // Check sign In user
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser)
        setLoading(false)
      } else {
        // User is signed out
      }
    })
    return () => {
      return unSubscribe()
    }
  }, [])

  const userInfo = {
    user,
    createUser,
    signUpWithGmail,
    login,
    logOut,
    updateUserProfile,
    loading,
  }

  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  )
}

export default AuthProvider
