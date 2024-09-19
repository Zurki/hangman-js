import "./style.css";
import { setupCounter } from "./counter.ts";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <img src="../public/catch.png" width="250px" />
    <p>Hier entsteht das beste Hangman aller Zeiten!</p>
  </div>
`;

setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);
