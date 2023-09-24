import "../index.css";

export default function SumTitle({title, amount}) {
  return (
    <div className='sum_title'>
      <div>
        <p className='sum_title_intro'>{title}</p>
        <span className='sum_title_span'>/ person</span>
      </div>
      <div>
        <h1>{` $${amount}`}</h1>
      </div>
    </div>
  );
}
