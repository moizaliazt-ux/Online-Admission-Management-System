export const Button = ({ children, className = "", ...props }) => (
  <button className={`bg-green-500 text-white px-4 py-2 rounded ${className}`} {...props}>
    {children}
  </button>
);
