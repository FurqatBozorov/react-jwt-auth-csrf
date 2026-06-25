import { useCallback } from "react"
import { api } from "../api";
import { useUser, type User } from "../context";

type ResponceType = {
  message: string;
  user: User;
};

export const useRegister = ()=>{
    const {setCurrentUser} = useUser();

    const handleRegistration = useCallback(
      async (email: string, password: string, confirmPassword?: string) => {
        try {
          const result: ResponceType = await api.post("/register", {
            email,
            password,
            confirmPassword,
          });
          console.log(result);

          setCurrentUser(result.user);
        } catch (error) {
          if (error instanceof Error) {
            throw new Error(error.message);
          }

          throw new Error(String(error));
        }
      },
      [setCurrentUser],
    );
  return(
    {handleRegistration}
  )
}