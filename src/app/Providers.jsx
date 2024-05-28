"use client";

import { ThemeProvider } from "next-themes";

const Providers = ({ children }) => {
  return (
    <ThemeProvider defaultTheme="system" attribute="class">
      <div className=" bg-white dark:bg-gray-700 dark:text-white min-h-screen">
        {children}
      </div>
    </ThemeProvider>
  );
};

export default Providers;
