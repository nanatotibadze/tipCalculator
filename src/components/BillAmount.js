import "../index.css";
import Input from "./Input";

export default function BillAmount({bill, onSetBill}) {
  function billHandler(e) {
    if (isNaN(Number(e.target.value))) {
      onSetBill(bill);
      return;
    } else {
      onSetBill(Number(e.target.value));
    }
  }
  return (
    <div>
      <label className='label'>Bill</label>
      <Input
        className='bill'
        defaultValue={bill}
        onChange={billHandler}
        placeholder={0}
        value={bill}
      ></Input>
    </div>
  );
}
