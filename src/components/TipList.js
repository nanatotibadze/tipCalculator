import "../index.css";
import Button from "./Button";
import Input from "./Input";

export default function TipList({onSetTip, tip}) {
  const TIP_LIST = [5, 10, 15, 25, 50];
  function handler(e) {
    if (isNaN(Number(e.target.value))) return;
    else onSetTip(Number(e.target.value));
  }

  return (
    <>
      <p className='tip_list_p'>select tip %</p>
      <div className='tip_list'>
        {TIP_LIST.map((item, index) => (
          <Button onClick={handler} value={item} key={index}>
            {`${item}%`}
          </Button>
        ))}
        <Input
          className='tip_input'
          placeholder='costum'
          onChange={handler}
        ></Input>
      </div>
    </>
  );
}
