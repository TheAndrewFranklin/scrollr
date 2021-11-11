import { User } from '@firebase/auth';
import React, { useEffect, useState } from 'react';
import { auth } from '../firebase';

export const AuthContext = React.createContext<User | null>(auth.currentUser);

export const AuthProvider = ({ children }: any) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setIsLoading(false);
    });
  }, []);

  return (
    <AuthContext.Provider value={currentUser}>
      {!isLoading && children}
    </AuthContext.Provider>
  );
};
