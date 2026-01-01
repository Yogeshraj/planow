import { useEffect, useState } from "react";

type Theme = "light" | "dark" | "system";

const LightModeIcon = (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <mask
      id="mask0_174_4652"
      style={{ maskType: "alpha" }}
      maskUnits="userSpaceOnUse"
      x="3"
      y="3"
      width="14"
      height="14"
    >
      <rect x="3.25" y="3.25" width="13.5" height="13.5" fill="#D9D9D9" />
    </mask>
    <g mask="url(#mask0_174_4652)">
      <path
        d="M10 12.8125C9.22188 12.8125 8.55859 12.5383 8.01016 11.9898C7.46172 11.4414 7.1875 10.7781 7.1875 10C7.1875 9.22188 7.46172 8.55859 8.01016 8.01016C8.55859 7.46172 9.22188 7.1875 10 7.1875C10.7781 7.1875 11.4414 7.46172 11.9898 8.01016C12.5383 8.55859 12.8125 9.22188 12.8125 10C12.8125 10.7781 12.5383 11.4414 11.9898 11.9898C11.4414 12.5383 10.7781 12.8125 10 12.8125ZM6.0625 10.5625H3.8125V9.4375H6.0625V10.5625ZM16.1875 10.5625H13.9375V9.4375H16.1875V10.5625ZM9.4375 6.0625V3.8125H10.5625V6.0625H9.4375ZM9.4375 16.1875V13.9375H10.5625V16.1875H9.4375ZM6.85 7.60938L5.42969 6.24531L6.23125 5.41563L7.58125 6.82187L6.85 7.60938ZM13.7688 14.5844L12.4047 13.1641L13.15 12.3906L14.5703 13.7547L13.7688 14.5844ZM12.3906 6.85L13.7547 5.42969L14.5844 6.23125L13.1781 7.58125L12.3906 6.85ZM5.41563 13.7688L6.83594 12.4047L7.60938 13.15L6.24531 14.5703L5.41563 13.7688Z"
        fill="currentColor"
        fillOpacity="0.48"
      />
    </g>
  </svg>
);

const ActiveLightModeIcon = (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="0.5"
      y="0.5"
      width="19"
      height="19"
      rx="9.5"
      fill="#0E0E19"
      fillOpacity="0.92"
    />
    <rect x="0.5" y="0.5" width="19" height="19" rx="9.5" stroke="#0E0E19" />
    <mask
      id="mask0_182_724"
      style={{ maskType: "alpha" }}
      maskUnits="userSpaceOnUse"
      x="3"
      y="3"
      width="14"
      height="14"
    >
      <rect x="3.25" y="3.25" width="13.5" height="13.5" fill="#D9D9D9" />
    </mask>
    <g mask="url(#mask0_182_724)">
      <path
        d="M10 12.8125C9.22188 12.8125 8.55859 12.5383 8.01016 11.9898C7.46172 11.4414 7.1875 10.7781 7.1875 10C7.1875 9.22188 7.46172 8.55859 8.01016 8.01016C8.55859 7.46172 9.22188 7.1875 10 7.1875C10.7781 7.1875 11.4414 7.46172 11.9898 8.01016C12.5383 8.55859 12.8125 9.22188 12.8125 10C12.8125 10.7781 12.5383 11.4414 11.9898 11.9898C11.4414 12.5383 10.7781 12.8125 10 12.8125ZM6.0625 10.5625H3.8125V9.4375H6.0625V10.5625ZM16.1875 10.5625H13.9375V9.4375H16.1875V10.5625ZM9.4375 6.0625V3.8125H10.5625V6.0625H9.4375ZM9.4375 16.1875V13.9375H10.5625V16.1875H9.4375ZM6.85 7.60938L5.42969 6.24531L6.23125 5.41563L7.58125 6.82187L6.85 7.60938ZM13.7688 14.5844L12.4047 13.1641L13.15 12.3906L14.5703 13.7547L13.7688 14.5844ZM12.3906 6.85L13.7547 5.42969L14.5844 6.23125L13.1781 7.58125L12.3906 6.85ZM5.41563 13.7688L6.83594 12.4047L7.60938 13.15L6.24531 14.5703L5.41563 13.7688Z"
        fill="#F7F7FF"
      />
    </g>
  </svg>
);

const SystemDefaultIcon = (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <mask
      id="mask0_174_4634"
      style={{ maskType: "alpha" }}
      maskUnits="userSpaceOnUse"
      x="3"
      y="3"
      width="14"
      height="14"
    >
      <rect x="3.25" y="3.25" width="13.5" height="13.5" fill="#D9D9D9" />
    </mask>
    <g mask="url(#mask0_174_4634)">
      <path
        d="M6.50577 15.3328V14.2078L7.18752 13.518H5.59536C5.18005 13.518 4.82778 13.3735 4.53856 13.0843C4.24935 12.7951 4.10474 12.4428 4.10474 12.0274V6.15786C4.10474 5.74255 4.24935 5.39028 4.53856 5.10106C4.82778 4.81185 5.18005 4.66724 5.59536 4.66724H14.4047C14.82 4.66724 15.1723 4.81185 15.4615 5.10106C15.7507 5.39028 15.8953 5.74255 15.8953 6.15786V12.0274C15.8953 12.4428 15.7507 12.7951 15.4615 13.0843C15.1723 13.3735 14.82 13.518 14.4047 13.518H12.8125L13.4943 14.2078V15.3328H6.50577ZM5.59536 12.0274H14.4047V6.15786H5.59536V12.0274Z"
        fill="currentColor"
        fillOpacity="0.48"
      />
    </g>
  </svg>
);

const ActiveSystemDefaultIcon = (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="0.5"
      y="0.5"
      width="19"
      height="19"
      rx="9.5"
      fill="#0E0E19"
      fillOpacity="0.92"
    />
    <rect x="0.5" y="0.5" width="19" height="19" rx="9.5" stroke="#0E0E19" />
    <mask
      id="mask0_174_4654"
      style={{ maskType: "alpha" }}
      maskUnits="userSpaceOnUse"
      x="3"
      y="3"
      width="14"
      height="14"
    >
      <rect x="3.25" y="3.25" width="13.5" height="13.5" fill="#D9D9D9" />
    </mask>
    <g mask="url(#mask0_174_4654)">
      <path
        d="M6.50577 15.3328V14.2078L7.18752 13.518H5.59536C5.18005 13.518 4.82778 13.3735 4.53856 13.0843C4.24935 12.7951 4.10474 12.4428 4.10474 12.0274V6.15786C4.10474 5.74255 4.24935 5.39028 4.53856 5.10106C4.82778 4.81185 5.18005 4.66724 5.59536 4.66724H14.4047C14.82 4.66724 15.1723 4.81185 15.4615 5.10106C15.7507 5.39028 15.8953 5.74255 15.8953 6.15786V12.0274C15.8953 12.4428 15.7507 12.7951 15.4615 13.0843C15.1723 13.3735 14.82 13.518 14.4047 13.518H12.8125L13.4943 14.2078V15.3328H6.50577ZM5.59536 12.0274H14.4047V6.15786H5.59536V12.0274Z"
        fill="#F7F7FF"
      />
    </g>
  </svg>
);

const DarkModeIcon = (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <mask
      id="mask0_174_4639"
      style={{ maskType: "alpha" }}
      maskUnits="userSpaceOnUse"
      x="3"
      y="3"
      width="14"
      height="14"
    >
      <rect x="3.25" y="3.25" width="13.5" height="13.5" fill="#D9D9D9" />
    </mask>
    <g mask="url(#mask0_174_4639)">
      <path
        d="M10 15.0625C8.59375 15.0625 7.39844 14.5703 6.41406 13.5859C5.42969 12.6016 4.9375 11.4062 4.9375 10C4.9375 8.59375 5.42969 7.39844 6.41406 6.41406C7.39844 5.42969 8.59375 4.9375 10 4.9375C10.1312 4.9375 10.2602 4.94219 10.3867 4.95156C10.5133 4.96094 10.6375 4.975 10.7594 4.99375C10.375 5.26562 10.068 5.61953 9.83828 6.05547C9.60859 6.49141 9.49375 6.9625 9.49375 7.46875C9.49375 8.3125 9.78906 9.02969 10.3797 9.62031C10.9703 10.2109 11.6875 10.5063 12.5312 10.5063C13.0469 10.5063 13.5203 10.3914 13.9516 10.1617C14.3828 9.93203 14.7344 9.625 15.0062 9.24062C15.025 9.3625 15.0391 9.48672 15.0484 9.61328C15.0578 9.73984 15.0625 9.86875 15.0625 10C15.0625 11.4062 14.5703 12.6016 13.5859 13.5859C12.6016 14.5703 11.4062 15.0625 10 15.0625Z"
        fill="currentColor"
        fillOpacity="0.48"
      />
    </g>
  </svg>
);

const ActiveDarkModeIcon = (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="0.5"
      y="0.5"
      width="19"
      height="19"
      rx="9.5"
      fill="#0E0E19"
      fillOpacity="0.92"
    />
    <rect x="0.5" y="0.5" width="19" height="19" rx="9.5" stroke="#0E0E19" />
    <mask
      id="mask0_174_4672"
      style={{ maskType: "alpha" }}
      maskUnits="userSpaceOnUse"
      x="3"
      y="3"
      width="14"
      height="14"
    >
      <rect x="3.25" y="3.25" width="13.5" height="13.5" fill="currentColor" />
    </mask>
    <g mask="url(#mask0_174_4672)">
      <path
        d="M10 15.0625C8.59375 15.0625 7.39844 14.5703 6.41406 13.5859C5.42969 12.6016 4.9375 11.4062 4.9375 10C4.9375 8.59375 5.42969 7.39844 6.41406 6.41406C7.39844 5.42969 8.59375 4.9375 10 4.9375C10.1312 4.9375 10.2602 4.94219 10.3867 4.95156C10.5133 4.96094 10.6375 4.975 10.7594 4.99375C10.375 5.26562 10.068 5.61953 9.83828 6.05547C9.60859 6.49141 9.49375 6.9625 9.49375 7.46875C9.49375 8.3125 9.78906 9.02969 10.3797 9.62031C10.9703 10.2109 11.6875 10.5063 12.5312 10.5063C13.0469 10.5063 13.5203 10.3914 13.9516 10.1617C14.3828 9.93203 14.7344 9.625 15.0062 9.24062C15.025 9.3625 15.0391 9.48672 15.0484 9.61328C15.0578 9.73984 15.0625 9.86875 15.0625 10C15.0625 11.4062 14.5703 12.6016 13.5859 13.5859C12.6016 14.5703 11.4062 15.0625 10 15.0625Z"
        fill="currentColor"
      />
    </g>
  </svg>
);

const ThemeButtons = () => {
  //   const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState("");

  // Initial sync from localStorage
  useEffect(() => {
    // setMounted(true);
    const storedTheme = (localStorage.getItem("theme") as Theme) || "system";
    setTheme(storedTheme);
  }, []);

  // Apply theme to DOM + persist
  const applyTheme = (value: Theme) => {
    const root = document.documentElement;

    if (value === "system") {
      root.removeAttribute("data-theme");
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      root.style.colorScheme = prefersDark ? "dark" : "light";
    } else {
      root.setAttribute("data-theme", value);
      root.style.colorScheme = value;
    }

    localStorage.setItem("theme", value);
    setTheme(value);
  };

  // React to system theme changes when "system" is selected
  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = () => {
      if (theme === "system") {
        document.documentElement.setAttribute(
          "data-theme",
          media.matches ? "dark" : "light"
        );
      }
    };

    media.addEventListener("change", handleChange);
    return () => media.removeEventListener("change", handleChange);
  }, [theme]);

  //   if (!mounted) return null;

  return (
    <div className="bg-backgroundbg/8 flex gap-0.5 rounded-full p-0.5">
      <button
        onClick={() => applyTheme("light")}
        aria-label="Light theme"
        className="cursor-pointer"
        title="Light theme"
      >
        {theme === "light" ? ActiveLightModeIcon : LightModeIcon}
      </button>

      <button
        onClick={() => applyTheme("system")}
        aria-label="System theme"
        className="cursor-pointer"
        title="System theme"
      >
        {theme === "system" ? ActiveSystemDefaultIcon : SystemDefaultIcon}
      </button>

      <button
        onClick={() => applyTheme("dark")}
        aria-label="Dark theme"
        className="cursor-pointer"
        title="Dark theme"
      >
        {theme === "dark" ? ActiveDarkModeIcon : DarkModeIcon}
      </button>
    </div>
  );
};

export default ThemeButtons;
