import { Route, Routes } from "react-router-dom";
import RegisterProfileInfo from "./features/auth/pages/RegisterProfileInfoPage";
import Register from "./features/auth/pages/RegisterPage";
import "./App.css";
import LoginPage from "./features/auth/pages/LoginPage";
import OTPPage from "./features/auth/pages/OTPPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/otp" element={<OTPPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
