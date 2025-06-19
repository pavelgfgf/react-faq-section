export function Button({ children, onClick, variant = "default", className = "" }) {
  const baseStyle = "px-4 py-2 rounded text-white font-semibold";
  const styles = variant === "default"
    ? "bg-blue-600 hover:bg-blue-700"
    : "bg-gray-200 text-gray-800 hover:bg-gray-300";

  return (
    <button onClick={onClick} className={`${baseStyle} ${styles} ${className}`}>
      {children}
    </button>
  );
}