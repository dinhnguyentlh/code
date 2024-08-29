import React from "react";
import { Header } from "../../../components";
import { Outlet } from "react-router";

export default function PublicPage() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
