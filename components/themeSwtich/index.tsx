import React, { useEffect, useState } from "react";

const ThemeSwitch = () => {
  const [isDark, setIsDark] = useState(false);

  // Initial sync
  useEffect(() => {
    const theme = localStorage.getItem("theme");
    setIsDark(theme === "dark");
  }, []);

  const toggleTheme = () => {
    const nextTheme = isDark ? "light" : "dark";

    document.documentElement.setAttribute("data-theme", nextTheme);
    localStorage.setItem("theme", nextTheme);

    setIsDark(!isDark);
  };

  return (
    <label className="inline-flex cursor-pointer items-center">
      <input
        type="checkbox"
        value=""
        className="peer sr-only"
        onChange={toggleTheme}
      />
      <span className="text-backgroundbg/40 me-3 text-sm font-medium select-none">
        Light
      </span>
      <div className="bg-backgroundbg peer-focus:ring-brand-soft dark:peer-focus:ring-brand-soft peer peer-checked:after:border-buffer peer-checked:bg-brand after:content-[<AddIcon />] relative h-5 w-9 rounded-full peer-focus:outline-none after:absolute after:start-[2px] after:top-[2px] after:h-4 after:w-4 after:rounded-full after:bg-white after:transition-all peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full"></div>
      <span className="text-backgroundbg/40 ms-3 text-sm font-medium select-none">
        Dark
      </span>
    </label>
  );
};

export default ThemeSwitch;
