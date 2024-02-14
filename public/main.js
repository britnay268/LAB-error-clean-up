import '../styles/main.scss'; // You have to import your styles for them to work. Comment in this line
// import * as bootstrap from 'bootstrap';
import { students, expelled } from '../utils/data/students';
import houses from '../utils/data/houses';
import htmlStructure from '../components/htmlStructure';
import header from '../components/header';
import filterBtnRow from '../components/filterBtnRow';
import studentsOnDom from '../components/studentsOnDom';
import expelledStudentsOnDom from '../components/expelledStudentsOnDom';

// ********** LOGIC  ********** //
// sorts student to a house and then place them in the students array
// Create a new ID for the students
// const createId = (array) => {
//   if (array.length) {
//     const idArray = array.map((el) => el.id);
//     return Math.max(...idArray) + 1;
//   }
//   return 0;
// };

// // add form to DOM on start-sorting click.
// // Add events for form after the form is on the DOM

// const sortStudent = (e) => {
//   e.preventDefault();
//   const sortingHat = houses[Math.floor(Math.random() * houses.length)];

//   if (e.target.id === 'sorting') {
//     const student = document.querySelector('#student-name');

//     // create the new student object
//     students.push({
//       id: createId(students),
//       name: student.value,
//       house: sortingHat.house
//     });

//     student.value = ''; // reset value of input
//     studentsOnDom('#students', students);
//   }
// };

// const form = () => {
//   const domString = `<form id="sorting" class="d-flex flex-column form-floating ">
//     <input
//     type="text"
//     class="form-control mb-1"
//     id="student-name"
//     placeholder="Enter a name"
//     required
//   />
//   <label for="floatingInputValue">Name to be sorted</label>
// <button type="submit" class="btn btn-success">Get Sorted!</button>
// </form>`;

//   renderToDOM('#form-container', domString);

//   // has to be put on the DOM after form is on DOM, not before
//   // on form submit, sort student
//   document.querySelector('#sorting').addEventListener('submit', sortStudent);
// };

// const events = () => {
//   // get form on the DOM on button click
//   document.querySelector('#start-sorting').addEventListener('click', () => {
//     // put html elements on the DOM on click
//     form(); // form
//     filterBtnRow(); // filter buttons
//     // studentAreas(); // students and voldy's army divs
//   });

//   // target expel buttons to move to voldys army
//   document
//     .querySelector('#student-container')
//     .addEventListener('click', (e) => {
//       if (e.target.id.includes('expel')) {
//         const [, id] = e.target.id.split('--');
//         const index = students.findIndex((student) => student.id === Number(id));

//         // move from one array to another
//         voldysArmy.push(...students.splice(index, 1));
//         // get both sets of students on the DOM
//         studentsOnDom('#students', students);
//         studentsOnDom('#voldy', voldysArmy);
//       }
//     });

//   // target filter buttons on Dom
//   document.querySelector('#filter-container').addEventListener('click', (e) => {
//     if (e.target.id.includes('filter')) {
//       const [, house] = e.target.id.split('--');

//       if (house === 'all') {
//         studentsOnDom('#students', students);
//       } else if (house) {
//         const filter = students.filter((student) => student.house === house);
//         studentsOnDom('#students', filter, house);
//       }
//     }
//   });
// };

const events = () => {
  const filterBtns = document.querySelector('#filterBtnsConatiner');
  filterBtns.addEventListener('click', (e) => {
    // console.log(e.target.id)

    if (e.target.id === 'all') {
      studentsOnDom(students);
    } else if (e.target.id) {
      const card = students.filter((c) => c.house.toLowerCase() === e.target.id);
      studentsOnDom(card);
    }
  });

  const cards = document.querySelector('#cardContainer');
  cards.addEventListener('click', (e) => {
    if (e.target.id.includes('expel')) {
      const [, id] = e.target.id.split('-');

      const index = students.findIndex((student) => student.id === Number(id));

      // this gets the object of the array
      const person = students.find((el) => el.id === Number(id));

      // This removes the object clicked
      students.splice(index, 1);

      // This pushes deleted object to the expelled array
      expelled.push(person);

      // This shows expelled student
      expelledStudentsOnDom(expelled);

      document.querySelector('#expelled').style.border = '1px solid black';
      document.querySelector('#expelled').style.backgroundColor = 'black';

      // This shows the remaining cards after the expelled student was removed.
      studentsOnDom(students);
    }

    // console.log(e.target.id)
  });

  // const formModal = new bootstrap.Modal(
  //   document.querySelector('#exampleModal')
  // );

  const submitForm = document.querySelector('form');
  submitForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const selectedHouse = houses[Math.floor(Math.random() * houses.length)];

    const newStudent = {
      // Its data length + 1 starts from one vs data.length starts from 0
      id: students.length + 1,
      name: document.querySelector('#student').value,
      house: selectedHouse,
    };

    students.push(newStudent);

    // Sorts students by student name
    students.sort((a, b) => a.name.localeCompare(b.name));

    studentsOnDom(students);
    filterBtnRow();

    // formModal.hide();
    submitForm.reset();

    cards.style.border = '1px solid #E8E8E8';
  });
};

const startApp = () => {
  htmlStructure(); // always load first
  header();
  // startSortingBtn();
  events(); // always load last
};

startApp();
