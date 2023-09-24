import "../index.css";
import SumTitle from "./SumTitle";
import {useState} from "react";

export default function Sum({
  totalTip,
  total,
  onSetBill,
  onSetTip,
  onSetNumPeople,
  tip,
  numPeople,
  bill,
}) {
  function resetHandler() {
    onSetBill(0);
    onSetTip("");
    onSetNumPeople(0);
  }

  return (
    <>
      <SumTitle title={`Tip amount`} amount={totalTip} />

      <SumTitle title={`Total`} amount={total} />
      <button className='sum_btn' onClick={resetHandler}>
        reset
      </button>
    </>
  );
}
