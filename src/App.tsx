import { Outlet } from "react-router";
import "./App.css";
import { AppLayout, Navigator } from "./components";
import { UserProvider } from "./context/userContext";

function App() {
  
  return (
    <UserProvider>
      <Navigator />
      <AppLayout>
        <Outlet />
      </AppLayout>
    </UserProvider>
  );
}

export default App;
