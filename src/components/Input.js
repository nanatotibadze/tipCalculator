import "../index.css";

export default function Input({
  children,
  className,
  onChange,
  onClick,
  placeholder,
  value,
}) {
  return (
    <form>
      {children}
      <input
        type='text'
        className={className}
        onChange={onChange}
        placeholder={placeholder}
        value={value}
      ></input>
    </form>
  );
}
