export const Badge = ({ children, className = "" }) => (
  <span className={`bg-blue-500 text-white text-xs px-2 py-1 rounded ${className}`}>
    {children}
  </span>
);
