function OrderedList({ items, className = "", startNumber = 1 }) {
  return (
    <ol className={`ml-5 space-y-3 text-justify ${className}`} start={startNumber}>
      {items.map((item, index) => (
        <li key={index} className="text-gray-700 leading-relaxed list-decimal list-outside">
          {typeof item === 'string' ? <span>{item}</span> : item}
        </li>
      ))}
    </ol>
  );
} export default OrderedList;