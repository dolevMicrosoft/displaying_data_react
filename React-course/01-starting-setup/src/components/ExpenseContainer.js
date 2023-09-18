import ExpenseItem from "./ExpenseItem";
import './ExpenseContainer.css';
import Card from './Card';
function ExpenseContainer(props) {
  return (
    <Card className="expenses">
      {props.exensesList.map((item) => (
        <ExpenseItem title={item.title} date={item.date} amount={item.amount} />
      ))}
    </Card>
  );
}

export default ExpenseContainer;
