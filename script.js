

document.getElementById("greeting").textContent = "welcome!";
document.getElementById("h1").textContent = "Hello There....?";

let items = document.getElementsByClassName(".blackclass");
for (let i = 0; i < items.length; i++)
{
    items[i].textContent = "Text change";
}
const red = document.querySelectorAll(".blackclass");


const header = document.querySelector("h1");
const textbox = document.getElementById ("Text_Box");
let name = ""; 
document.getElementById("click").addEventListener("click", () => 
{
    event.preventDefault();
    name = textbox.value;  
    header.textContent = "Hello, " + name + "!"; // grabbing item by id
});


    const btn = document.getElementById('submit'); // get the input field by its id
    const input = document.getElementById('name');
    btn.addEventListener('click', (event) => // prevent the default action of the button
    {
        const name = input.value; //get the paragraph element by its id
        const para = document.getElementById('greeting'); // set the text content of the paragraph element
        para.textContent = `Welcome, ${name}!`;// clear the input field
        input.value = '';
    });

    


/*This is where you implement your Event Listener. 
Remember to use the element ids.*/

/*
run this to host site: php -S localhost:3006 -t ./
*/