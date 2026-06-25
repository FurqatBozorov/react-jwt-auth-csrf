import { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext(undefined);

export function UserProvider({ children }) {
  const [currentUser, setCurrentUser]=useState<null|string>(null);

  useEffect(()=>{
    
  },[]);

  return (
    <UserContext.Provider value={{currentUser, setCurrentUser}}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
}