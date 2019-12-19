let pELem = document.querySelector("p");



//let btn = document.createElement("BUTTON");   // Create a <button> element
//btn.innerHTML = "CLICK ME";                   // Insert text
//document.body.appendChild(btn);               // Append <button> to <body>


// Create a new Button element
let newNodeBtn = document.createElement('BUTTON');
newNodeBtn.innerHTML = 'Buy NOW';
newNodeBtn.classList.add("btn");

// Get the reference node
let referenceNodeP = document.querySelector('p');

// Insert the new node (Button) before the reference node
referenceNodeP.parentNode.insertBefore(newNodeBtn, referenceNodeP.nextSibling);

// Create a new Footer element
let newNodeFooter = document.createElement('FOOTER');
newNodeFooter.innerHTML = 'Constructuve & Co. Real Estate';
newNodeFooter.classList.add("footer");

// Get the reference node
let referenceNodeBtn = document.querySelector('BUTTON');

// Insert the new node (footer) before the reference node
referenceNodeBtn.parentNode.insertBefore(newNodeFooter, referenceNodeBtn.nextSibling);

// Add an eventListener to the new node (Button) 
newNodeBtn.addEventListener("click", function(){
    console.log("Button was clicked!!!");
    window.location.href='https://www.kilic.dk/';
    
});

