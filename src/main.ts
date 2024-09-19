import "./style.css";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <a>reset</a>
    <img src="../public/catch.png" width="250px" />
    <p>Hier entsteht das beste Hangman aller Zeiten!</p>

    <div class="keystroke-container" />
  </div>
`;

// event listener for keydown
document.addEventListener('keydown', function(event){
  const key = event.key;
  if (/^[a-zA-Z]$/.test(key)) {
    const paragraph = document.createElement('p');
    paragraph.innerHTML = key.toUpperCase();
    document.querySelector<HTMLDivElement>(".keystroke-container")?.appendChild(paragraph);
  }
});
