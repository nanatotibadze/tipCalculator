import "../index.css";

export default function Button({children, value, onClick}) {
  return (
    <button value={value} onClick={onClick} className='tip_btn'>
      {children}
    </button>
  );
}
