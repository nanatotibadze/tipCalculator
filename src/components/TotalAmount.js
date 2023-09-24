export default function TotalAmount({amount, onAddAmount}) {
  function amountHandler(e) {
    if (isNaN(+e.target.value)) {
      onAddAmount(amount);
      return;
    } else {
      onAddAmount(+e.target.value);
    }
  }
  return (
    <form onSubmit={amountHandler}>
      <h4>How much was the bill? 😍 </h4>
      <input
        type='text'
        placeholder='enter amount'
        defaultValue={amount}
        onChange={amountHandler}

        // value={description}
        // onChange={(e) => setDescription(e.target.value)}
      ></input>
    </form>
  );
}
