// We're going to make a Dev Skill App
// User needs to able to type in a dec skill
// Then we will get the value of that skill
// We need to add functionality to the button so that we get the value
// We will build a DOM element using that value
// Then we will add that element to the DOM
//We need to add a remove Skill Featur
// Add a delete button = span tag
// Add a function that will remove it from the dom

// State Variables
let $inputVal, $skillElement



// Event Listeners
$('button').on('click', getInputText)


// Functions
function getInputText(){
   $inputVal = $('input').val() //this takes the input and returns it 
   $('input').val('')  //this sets it to an empty value, it will remove the message that was in the input box after it has been submitted.
   createElement($inputVal)
}


function createElement(str){
    $skillElement = $(`<li><span>X</span>${str}</li>`)
    addSkill($skillElement)
}

function addSkill(element){
    $('section ul').append(element)
    $('span').on('click', removesSkill)
}

function removesSkill(evt){ //setting the evt "event object" makes sure it doesn't target the entire list
    $(evt.target).parent().remove()
}
