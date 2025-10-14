function OrderedList({ items, className = "", startNumber = 1 }) {
  return (
    <ol className={`ml-5 space-y-3 ${className}`} start={startNumber}>
      {items.map((item, index) => (
        <li key={index} className="text-sm md:text-md text-gray-700 leading-relaxed list-decimal list-outside">
          {typeof item === 'string' ? <span>{item}</span> : item}
        </li>
      ))}
    </ol>
  );
} export default OrderedList;