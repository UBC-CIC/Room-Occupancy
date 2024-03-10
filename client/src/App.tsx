import React from "react";
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
import { Camera } from "./pages/admin/camera";
import { CameraAlerts } from "./pages/admin/cameraAlerts/cameraAlerts";
import { CameraZones } from "./pages/admin/cameraZones";
import { CostsAndUsage } from "./pages/admin/costsAndUsage";
import { Trends } from "./pages/trends/Trends";

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
          <Route path="/trends" element={<Trends />} />
          <Route path="/admin_dashboard" element={<AdminDashboard />} />
          <Route path="/admin_settings" element={<AdminSettings />} />
          <Route path="/admin_camera" element={<Camera />} />
          <Route path="/admin_camera_zones" element={<CameraZones />} />
          <Route path="/admin_costs_and_usage" element={<CostsAndUsage />} />
          <Route path="/admin_camera_alerts" element={<CameraAlerts />} />
          <Route path="/admin_help" element={<AdminHelp />} />
          <Route path="/*" element={<Error />} />
        </Routes>
      </Authenticator.Provider>
    </AppConfigProvider>
  );
}

export default App;
