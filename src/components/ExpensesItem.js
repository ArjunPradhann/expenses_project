import "./ExpensesItem.css";

const ExpensesItem = (props) => {
  return (
    <>
      <div clasName="expense-item">
        <div>{props.Date.toISOString()}</div>
        <div clasName="expense-item__description">
          <h2>{props.Title}</h2>
          <div clasName="expense-item__price">{props.Amount}</div>
        </div>
      </div>
    </>
  );
};

export default ExpensesItem;
