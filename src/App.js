import React from "react";
import ExpensesItem from "./components/ExpensesItem";

function App() {
  let expenseDate = new Date(2021, 3, 27);
  let expenseTitle = "School Fee";
  let expenseAmount = 300;
  return (
    <div>
      <h2>
        Let's get Started
        <ExpensesItem
          Date={expenseDate}
          Title={expenseTitle}
          Amount={expenseAmount}
        />
        <ExpensesItem
          Date={expenseDate}
          Title={expenseTitle}
          Amount={expenseAmount}
        />

<ExpensesItem
          Date={expenseDate}
          Title={expenseTitle}
          Amount={expenseAmount}
        />
      </h2>
    </div>
  );
}

export default App;
