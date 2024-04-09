import Footer from "@/components/Shared/Footer";
import React from "react";

const DashboardLayout = ({ children }) => {
  return (
    <div>
      {children}
      <Footer></Footer>
    </div>
  );
};

export default DashboardLayout;
