import "../index.css";
import Input from "./Input";
import {useState} from "react";

export default function PeopleNum({onSetNumPeople, numPeople}) {
  const [isError, setIsError] = useState(false);
  function peopleNumHandler(e) {
    if (isNaN(Number(e.target.value))) return;

    if (Number(e.target.value) === 0) {
      setIsError(true);
    } else {
      setIsError(false);
      onSetNumPeople(Number(e.target.value));
    }
  }

  return (
    <form className='people_num' onChange={peopleNumHandler}>
      <div className='title'>
        <label className='label'>Number of people</label>
        {isError && <p className='error'>Can't be zero</p>}
      </div>

      <Input
        className='people'
        // // defaultValue={bill}
        // onChange={(e) => onSetBill(Number(e.target.value))}
        placeholder={0}
        value={numPeople}
      ></Input>
    </form>
  );
}
