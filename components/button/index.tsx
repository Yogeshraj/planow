import React from "react";

const Button = ({
  text = "Submit",
  icon,
  color = "default",
  className = "",
  iconPosition = "right",
  onClick,
}: {
  text?: string;
  icon?: React.ReactNode;
  color?: "default" | "white" | "grey";
  className?: string;
  iconPosition?: "left" | "right";
  onClick?: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      className={`flex w-full cursor-pointer items-center justify-center gap-2.5 rounded-full p-2 ${color === "white" ? "bg-background text-backgroundbg" : color === "grey" ? "bg-backgroundbg/4 text-backgroundbg border-backgroundbg/16 border" : "bg-backgroundbg text-background"} ${className} ${iconPosition === "left" ? "flex-row-reverse" : "flex-row"}`}
    >
      <div className="text-sm font-medium">{text}</div>
      {icon}
    </button>
  );
};

export default Button;
