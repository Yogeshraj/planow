import { IconProps } from "../../interfaces/interfaces";

const AddIcon = ({ className, onClick }: IconProps) => {
  return (
    <svg
      className={className}
      onClick={onClick}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id="mask0_164_664"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="24"
        height="24"
      >
        <rect width="24" height="24" fill="#FFFFFF" />
      </mask>
      <g mask="url(#mask0_164_664)">
        <path
          d="M10.675 19.35V13.3H4.625V10.65H10.675V4.60001H13.325V10.65H19.375V13.3H13.325V19.35H10.675Z"
          fill="#FFFFFF"
        />
      </g>
    </svg>
  );
};

export default AddIcon;
