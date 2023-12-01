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


