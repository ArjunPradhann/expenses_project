import "./App.css";
import ExpenseItem from "./components/ExpensesItem";

function App() {
let expneseDate = new Date(2023, 3, 25);
let expneseTitle = "School Fee";
let expneseAmount = 300;

 return (
    <div>
        <h2>Let's get started</h2>
      <ExpenseItem date={expneseDate} title={expneseTitle} amount={expneseAmount} />
    </div>
  );
}

export default App;
