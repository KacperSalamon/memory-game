
const Colors = ["yellow", "yellow", "cyan", "cyan", "lightgreen", "lightgreen", "red", "red", "royalblue", "royalblue", "salmon", "salmon", "violet", "violet", "brown", "brown", "darkgoldenrod", "darkgoldenrod", "coral", "coral"];


let Cards = document.querySelectorAll("div"); 
Cards = [...Cards]; 


const Time = new Date().getTime(); 

let Active = ""; 
const Actives = []; 

const GameOfLength = Cards.length / 2; 

let ResultOfGame = 0;



const ClickFunction = function () {

    Active = this; 

    if (Active== Actives[0]) return;

    Active.classList.remove("hidden"); 

   
    if (Actives.length === 0) {
        Actives[0] = Active; 
        return;

    }
    
    else {
        Cards.forEach(Card => Card.removeEventListener("click", ClickFunction))
        Actives[1] = Active;

        setTimeout(function () {
            if (Actives[0].className === Actives[1].className) {
                Actives.forEach(Card => Card.classList.add("off"))
                ResultOfGame++;
                Cards = Cards.filter(Card => !Card.classList.contains("off"));
                if (ResultOfGame == GameOfLength) {
                    const EndTime = new Date().getTime();
                    const Game = (EndTime - Time) / 1000
                    alert(`Gratulacje! Twój czas to ${Game} sekund`)
                    location.reload();
                }
            }
            else {
                Actives.forEach(Card => Card.classList.add("hidden"))
            }
           
            Active = ""; 
            Actives.length = 0; 
            Cards.forEach(Card => Card.addEventListener("click", ClickFunction))

        }, 650)
    }
};



const Main= () => {
  
    Cards.forEach(Card => {
    
        const Position = Math.floor(Math.random() * Colors.length); 
      
        Card.classList.add(Colors[Position]);
    
        Colors.splice(Position, 1);
    })
    
    setTimeout(function () {
        Cards.forEach(Card => {
            Card.classList.add("hidden")
            Card.addEventListener("click", ClickFunction)
        })
    }, 3000)
};

Main()
