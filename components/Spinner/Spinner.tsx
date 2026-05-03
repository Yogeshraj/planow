const Spinner = ({ size = 20, className = "" }) => {
  return (
    <div
      className={`border-t-backgroundbg border-surface animate-spin rounded-full border-2 ${className}`}
      style={{ width: size, height: size }}
    />
  );
};

export default Spinner;
