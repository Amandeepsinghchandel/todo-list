import { useState } from "react";
import { randomNumGen, sum } from "./helper";

const Lottery = ({ n }) => {
  let [ticket, setTicket] = useState(randomNumGen(n));
  let isWinner = sum(ticket) === 20;

  let buyTicket = () => {
    setTicket(randomNumGen(4));
  };

  return (
    <div>
      <div>
        <span>{ticket[0]}</span>
        <span>{ticket[1]}</span>
        <span>{ticket[2]}</span>
        <span>{ticket[3]}</span>
      </div>

      <div>
        {isWinner ? <h1>Congrats🎉 Youre the winner </h1> : ""}

        <button onClick={buyTicket}>Buy Ticket</button>
      </div>
    </div>
  );
};

export default Lottery;