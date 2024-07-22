
import './App.css'
// import Todo from "./components/Todo"
import TicketNum from "./components/TicketNum";
import Ticket from "./components/Ticket";
function App() {

  return (
   <>
   {/* <Todo/> */}
   <Ticket ticket={[2,3,4]}/>
   </>
  )
}

export default App;
