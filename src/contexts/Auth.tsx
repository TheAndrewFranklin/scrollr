import { User } from "@firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from "../firebase";


export const AuthContext = React.createContext<User | null>(auth.currentUser);

export const AuthProvider = ({ children }: any) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null)

  useEffect(() => {
    auth.onAuthStateChanged(setCurrentUser)
  }, [])

  return (
    <AuthContext.Provider value={currentUser}>
      {children}
    </AuthContext.Provider>
  )
}