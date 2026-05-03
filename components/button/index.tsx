import React from "react";
import Spinner from "../Spinner/Spinner";

const Button = ({
  text = "Submit",
  icon,
  color = "default",
  className = "",
  iconPosition = "right",
  onClick,
  loading = false,
}: {
  text?: string;
  icon?: React.ReactNode;
  color?: "default" | "white" | "grey";
  className?: string;
  iconPosition?: "left" | "right";
  onClick?: () => void;
  loading?: boolean;
}) => {
  return (
    <button
      onClick={onClick}
      className={`flex min-h-10 w-full cursor-pointer items-center justify-center gap-2.5 rounded-full p-2 ${color === "white" ? "bg-background text-backgroundbg" : color === "grey" ? "bg-backgroundbg/4 text-backgroundbg border-backgroundbg/16 border" : "bg-backgroundbg text-background"} ${className} ${iconPosition === "left" ? "flex-row-reverse" : "flex-row"} ${loading ? "cursor-not-allowed opacity-70" : ""}`}
      disabled={loading}
    >
      <div className="text-sm font-medium">
        {loading ? "Please wait..." : text}
      </div>
      {loading ? <Spinner size={16} /> : icon}
    </button>
  );
};

export default Button;
