
var button=$('#addButton');
var textInput=$('.event-input')
var activity=$('#activity')

function addEvent(){
  event.preventDefault();
  var eventToAdd = textInput.val();
  console.log(eventToAdd);
  activity.append(`<p>${eventToAdd}</p>`)
}

button.on("click", addEvent);
