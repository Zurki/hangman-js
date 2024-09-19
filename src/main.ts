import "./style.css";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
    <a style="cursor: pointer" id="reset">🔁</a>
    <div>
      <img src="../public/catch.png" width="250px" />
      <p>Hier entsteht das beste Hangman aller Zeiten!</p>

      <div class="keystroke-container" />
    </div
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

document.querySelector<HTMLAnchorElement>("#reset")!.addEventListener("click", () => {
  document.querySelector<HTMLDivElement>(".keystroke-container")!.innerHTML = "";
});