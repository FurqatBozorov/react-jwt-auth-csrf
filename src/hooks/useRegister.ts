import { useCallback } from "react"
import { api } from "../api";
import { useUser } from "../context";

export const useRegister = ()=>{
    const {setCurrentUser} = useUser();

    const handleRegistration = useCallback(
    async (
      email: "login" | "register",
      password: string,
      confirmPassword?: string,
    ) => {
      

      try {
        const result = await api.post("/register", {
          email,
          password,
          confirmPassword,
        });

        setCurrentUser(result);

        
      } catch (error) {
        throw new Error(error);
      }
    },
    [],
  );
  return(
    {handleRegistration}
  )
}