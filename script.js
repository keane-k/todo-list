const input_box = document.getElementById("input-box");
const list_container = document.getElementById("list-container");


// When 'Add' button is clicked, add user input into the ToDo List
function addTask(){
    // First, let's ensure the user input cannot be an empty field, we'll prompt an alert message
    if(input_box.value === ""){
        alert("Field cannot be empty, please write something!");
    }
    else{
        let li = document.createElement("li");      // create HTML element with tag name <li>
        li.innerHTML = input_box.value;             // grab user input text and put inside the text section of <li>
                                                    // using .innerHTML
        list_container.appendChild(li);             // add <li> to the ToDo list

        // Add a Cross using <span> next to each <li> items for user to remove items manually
        let span = document.createElement("span");  // create HTML element with <span> tag
        span.innerHTML = "\u00d7";                  // add Cross icon into <span> tag
        li.appendChild(span);                       // add <span> into <li>
                                                    // Use CSS to 'decorate' and position the Cross icon as per your preference
    }

    // Clear the textbox, QOL improvement
    input_box.value = "";

    // Whenever the button 'Add' is clicked, save data
    saveData();
}


// Add functions for 1.Checking and 2.Remove List Items via Cross icon
list_container.addEventListener("click",function(e){
    // Determine what tag is being clicked since both <li> and <span> tag falls under list_container
    if(e.target.tagName === "LI"){                  // if <li> is clicked,
        e.target.classList.toggle("checked");       // checked the list item

        saveData();                                 // Whenever checked or unchecked, save data
    }
    else if (e.target.tagName === "SPAN"){          // if <span> is clicked,
        e.target.parentElement.remove();            // remove the <li> element which is the parent element since <span> is tagged to it

        saveData();                                 // Whenever something is removed, save data
    }
}, false);


// Save Data feature, refreshing the webpage will not erase existing data
function saveData(){
    localStorage.setItem("data",list_container.innerHTML);   // name is 'data', value is the entire list_container.innerHTML
}


// Show Data, allows user to return from their last working point
function showData(){
    list_container.innerHTML = localStorage.getItem("data");    // simply saying list_container.innerHTML to take data from name 'data'

}
showData();

