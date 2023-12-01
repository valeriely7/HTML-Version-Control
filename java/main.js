let greetings = 'Hello World'
  console.log(greetings)

//Footer Year 
const Z = new Date();
let year = Z.getFullYear();
    document.getElementById("year").outerHTML= year;

//Alert and Hover Button
const send = document.getElementById("btn-alert");
    let sent = "Hello World";
    send.addEventListener("click", () => {
        alert(sent);
    })

const Hover = document.getElementById("btn-alert");
    Hover.addEventListener("mouseover", () =>{
        Hover.style.backgroundColor = "pink";
        if(Hover.addEventListener("mouseout",() =>{
            Hover.style.backgroundColor = "";
        })){
    }})

const element = document.getElementById("btn-alert");
console.log(element.outerHTML);

element.onmouseover = () => {
    element.innerText = "Have a nice day :)";
};

element.onmouseleave = () => {
    element.innerText = "Click Me!";
};

// Incrementing Button 
let count = 0;
let textCounter = document.getElementById("Up");
let incrementor = document.getElementById("Counter")
textCounter.addEventListener("click", () => {
    count++;
    incrementor.textContent = count.toString()
    if (count % 2 ==0) {
        incrementor.classList.add("Even");
        incrementor.classList.remove("Odd");
    }else{
        incrementor.classList.add("Odd")
        incrementor.classList.remove("Even");
    }
});

//Loop
const numberList = document.getElementById("numbers");

for(let index = 1; index <= 100; index++) {
    const newListItem = document.createElement("li");
    
    const even = index % 2 == 0; 

    newListItem.innerHTML = even ? "Even": "Odd";

    numberList.appendChild(newListItem);
    
    if(even) newListItem.classList.add("even");
    else newListItem.classList.add("odd");
};

