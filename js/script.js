// We're going to make a Dev Skill App
// User needs to able to type in a dec skill
// Then we will get the value of that skill
// We need to add functionality to the button so that we get the value
// We will build a DOM element using that value
// Then we will add that element to the DOM

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
    $skillElement = $(`<li>${str}</li>`)
    addSkill($skillElement)
}

function addSkill(element){
    $('section ul').append(element)
}

