import { LoginForm } from "../components";

import { useRegister } from "../hooks";

export const RegisterPage = () => {
  const {handleRegistration} = useRegister()
  

  return <LoginForm formType="register" onSubmit={handleRegistration} />;
};
