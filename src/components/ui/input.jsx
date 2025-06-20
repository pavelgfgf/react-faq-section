import * as React from "react";

const Input = React.forwardRef(({ className = "", type = "text", ...props }, ref) => (
  <input
    type={type}
    ref={ref}
    className={`w-full rounded-md border px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
    {...props}
  />
));

Input.displayName = "Input";

export { Input };