function BulletList({ items, className = "" }) {
  return (
    <ul className={`ml-5 space-y-3 text-justify ${className}`}>
      {items.map((item, index) => (
        <li key={index} className="text-gray-700 leading-relaxed flex items-start">
          <span className="w-2 h-2 bg-neutral-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
          {typeof item === 'string' ? <span>{item}</span> : item}
        </li>
      ))}
    </ul>
  );
 } export default BulletList;