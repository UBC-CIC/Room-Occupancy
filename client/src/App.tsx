import React from "react";
import { Navbar } from "./components/common/navbar";
import { Home } from "./pages/Home";
import { About } from "./pages/about/About";
import { Learn } from "./pages/Learn";
import { Error } from "./pages/Error";
import { Login } from "./pages/auth/Login";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Analytics } from "./pages/analytics/Analytics";
import { AdminDashboard } from "./pages/admin/adminDashboard";
import { AdminSettings } from "./pages/admin/settings/settings";
import AdminHelp from "./pages/admin/help";
import { AppConfigProvider } from "./providers/ConfigProvider";
import { Authenticator } from "@aws-amplify/ui-react";

function App() {
  return (
    <AppConfigProvider>
      <Authenticator.Provider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/login" element={<Login />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/admin_dashboard" element={<AdminDashboard />} />
          <Route path="/admin_settings" element={<AdminSettings />} />
          <Route path="/admin_help" element={<AdminHelp />} />
          <Route path="/*" element={<Error />} />
        </Routes>
      </Authenticator.Provider>
    </AppConfigProvider>
  );
}

export default App;
