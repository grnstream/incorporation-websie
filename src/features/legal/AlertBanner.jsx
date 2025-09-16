function AlertBanner({ children, variant = "info" }) {
  const variants = {
    info: "bg-gradient-to-b from-primary-400 to-primary-500 text-white",
    warning: "bg-yellow-500 text-white",
    success: "bg-green-600 text-white",
    error: "bg-red-600 text-white",
  };

  return (
    <div className={`${variants[variant]} p-4 py-10 rounded-[11px] text-center mb-8`}>
      {children}
    </div>
  );
}
export default AlertBanner;
