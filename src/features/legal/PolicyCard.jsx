function PolicyCard({ title, children, icon, className = "" }) {
  return (
    <section className={`mb-8 ${className}`}>
      <div className="bg-gradient-to-b from-neutral-10 to-neutral-100 p-6 rounded-lg border border-neutral-100">
        {title && (
          <div className="flex items-start space-x-3 mb-4">
            {icon && (
              <div className="flex-shrink-0 mt-1">
                <div className="w-6 h-6 bg-blue-100 rounded flex items-center justify-center">
                  {icon}
                </div>
              </div>
            )}
            <div className={icon ? "flex-1" : ""}>
              <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
            </div>
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

export default PolicyCard;
