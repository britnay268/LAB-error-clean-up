import '../styles/main.scss'; // You have to import your styles for them to work. Comment in this line
import htmlStructure from '../components/htmlStructure';
import header from '../components/header';
import startSortingBtn from '../components/startSortingBtn';
import events from '../components/events';

// ********** HTML Components  ********** //
// the basic HMTL structure of app

// Create a new ID for the students

// ********** LOGIC  ********** //
// sorts student to a house and then place them in the students array

// add form to DOM on start-sorting click.
// Add events for form after the form is on the DOM

const startApp = () => {
  htmlStructure(); // always load first
  header();
  startSortingBtn();
  events(); // always load last
};

startApp();
