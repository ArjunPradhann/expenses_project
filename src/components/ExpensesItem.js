import './ExpenseItem.css';

const ExpenseItem = (props) => {
    return (
        <div clasName= "expense-item">
            <div>{props.date}</div>
            <div clasName="expense-item__description">
                <h2>{props.title}</h2>
                <div clasName="expense-item__price">{props.amount}</div>
            </div>
        </div>  
    );
}

export default ExpenseItem;