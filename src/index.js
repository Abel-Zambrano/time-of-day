import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

const date = new Date();
const currentTime = date.getHours();
const dayColor = {
  color: ''
} 


const display = (time) => {
  let timeOfDay = 'Hello';
  if(time >= 1 && time <= 11) {
    timeOfDay = 'Good Morning';
    dayColor.color = 'orange';
  }
  if(time >= 12 && time <= 18) {
    timeOfDay = 'Good Afternoon';
    dayColor.color = 'green';
  } 
  if(time >= 19 && time <= 24) {
    timeOfDay = 'Good Night';
    dayColor.color = 'blue';
  }
  return timeOfDay
}

const today = display(currentTime);


ReactDOM.render(
  <h1 className="heading" style={dayColor}>{today}</h1>, 
  document.getElementById('root')
);