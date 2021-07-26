//select the element container
const container = document.querySelector("#container");

//creating the <a> element with red text
const pRed = document.createElement("p");
pRed.setAttribute("style", "color: red;");
pRed.textContent = "Hey I'm red!"
container.append(pRed);

//an <h3> with blue text that says “I’m a blue h3!”
const h3 = document.createElement("h3");
h3.textContent = "I'm a blue h3!";
h3.style.color = "blue";
container.append(h3);

//a <div> with a black border and pink background color
const container2 = document.createElement("div");
container2.style.cssText = "border-style: solid; border-color: black; background: pink;";
container.append(container2);

//inside container2: 
//another <h1> that says “I’m in a div”
const h1 = document.createElement("h1");
h1.textContent = "I'm in a div";
container2.append(h1);

//a <p> that says “ME TOO!”
const p2 = document.createElement("p");
p2.textContent = "ME TOO!";
container2.append(p2);

