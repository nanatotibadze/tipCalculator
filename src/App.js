import {useState} from "react";
// import TotalAmount from "./components/TotalAmount";
// // import TipAmount from "./components/TipAmount";
// import FirstTip from "./components/FirstTip";

// import SecondTip from "./components/SecondTip";
// import TotalTip from "./components/TotalTip";
import "./index.css";

import BillAmount from "./components/BillAmount";

import TipList from "./components/TipList";
import PeopleNum from "./components/PeopleNum";
import Sum from "./components/Sum";

function App() {
  const [bill, setBill] = useState(0);
  // console.log(bill);
  const [tip, setTip] = useState(0);

  const [numPeople, setNumPeople] = useState(0);

  // const [amount, setAmount] = useState(0);
  // const [tipFirst, setTipFirst] = useState(0);
  // const [tipSecond, setTipSecond] = useState(0);
  // const tip = (tipFirst + tipSecond) / 2;
  // const totalPay = amount * (tip / 100);
  // console.log(totalPay);
  // return (
  //   <>
  //     <TotalAmount amount={amount} onAddAmount={setAmount} />
  //     <FirstTip tipFirst={tipFirst} onAddTip={setTipFirst} />
  //     <SecondTip tipSecond={tipSecond} onAddTipSecond={setTipSecond} />
  //     <TotalTip amount={amount} tip={tip} totalPay={totalPay}></TotalTip>
  //   </>
  // );

  let totalTip = 0;
  if (bill !== 0 || tip !== 0 || numPeople !== 0) {
    totalTip = (bill * (tip * numPeople)) / 100;
  }
  // const totalTip = (bill * (tip * numPeople)) / 100;
  let total = bill;
  if (bill !== 0) total = (totalTip + bill).toFixed(2);

  return (
    <main className='app'>
      <div className='info'>
        <BillAmount bill={bill} onSetBill={setBill}></BillAmount>
        <TipList onSetTip={setTip} tip={tip} />
        <PeopleNum onSetNumPeople={setNumPeople} numPeople={numPeople} />
      </div>
      <div className='sum'>
        <Sum
          totalTip={totalTip}
          total={total}
          onSetBill={setBill}
          onSetTip={setTip}
          onSetNumPeople={setNumPeople}
          bill={bill}
          tip={tip}
          numPeople={numPeople}
        ></Sum>
      </div>
    </main>
  );
}

export default App;
