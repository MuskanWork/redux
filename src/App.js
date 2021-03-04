import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer';
import { AddTodo } from "../containers/AddTodo";
import { VisibleTodoist } from "../containers/VisbleTodoList";

function App() {
  return (
    <div className="App">
      <AddTodo />
      <VisibleTodoist />
      <Footer />
    </div>
  );
}

export default App;
