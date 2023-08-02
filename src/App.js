// App.js
import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import SignUp1 from "./SignUp1";
import SignUp2 from "./SignUp2";
import LandingPage from "./LandingPage";
import LogIn1 from "./LogIn1";
import LogIn2 from "./LogIn2";
import RestrictedRoutes from './context/RestrictedRoutes';
import PrivateRoutes from './context/PrivateRoutes';
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<RestrictedRoutes/>}>
              <Route path="/sign-up-1" element={<SignUp1 />} />
              <Route path="/sign-up-2" element={<SignUp2 />} />
              <Route path="/log-in-1" element={<LogIn1 />} />
              <Route path="/log-in-2" element={<LogIn2 />} />
            </Route>

            <Route element={<PrivateRoutes/>}>
              <Route path="/landing-page" element={<LandingPage />} />
              <Route path="/" element={<LandingPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
