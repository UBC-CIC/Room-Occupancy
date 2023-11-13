import React from "react";
import { Navigate } from "react-router-dom";

export enum Roles {
  user = "user",
  admin = "admin",
}

interface Props {
  role: Roles;
  children: React.ReactNode;
}

export const ProtectedRoute = ({ role, children }: Props) => {
  if (role !== Roles.admin) {
    return <Navigate to="/" />;
  }

  return <>{children}</>;
};
