export const Card = ({ children, className = "" }) => (
  <div className={`border rounded p-4 shadow ${className}`}>{children}</div>
);

export const CardHeader = ({ children, className = "" }) => (
  <div className={`mb-2 font-bold ${className}`}>{children}</div>
);

export const CardContent = ({ children, className = "" }) => (
  <div className={className}>{children}</div>
);

export const CardTitle = ({ children, className = "" }) => (
  <h3 className={`text-lg font-semibold ${className}`}>{children}</h3>
);
