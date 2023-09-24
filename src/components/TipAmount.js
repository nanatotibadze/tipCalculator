export default function TipAmount({children, value}) {
  return (
    <>
      <h4>{children}</h4>
      <select
        value={value}
        //   defaultValue={sortBy}
        //   onChange={(e) => {
        //     setSortBy(e.target.value);
        //   }}
      >
        <option value={0}>disatisfied (0%)</option>
        <option value={5}>it was okay (5%)</option>
        <option value={10}> it was good (10%)</option>
        <option value={20}>Amazing (20%)</option>
      </select>
    </>
  );
}
