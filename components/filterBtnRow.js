import renderToDOM from '../utils/renderToDom';

const filterBtnRow = () => {
  // const domString = `<div class="btn-group" role="group" aria-label="Basic example">
  //     <button type="button" id="filter--hufflepuff" class="btn btn-warning btn-sm">Hufflepuff</button>
  //     <button type="button" class="btn btn-primary btn-sm" id="filter--ravenclaw">Ravenclaw</button>
  //     <button type="button" class="btn btn-success btn-sm" id="filter--slytherin">Slytherin</button>
  //     <button type="button" class="btn btn-danger btn-sm" id="filter--gryffindor">Gryffindor</button>
  //     <button type="button" class="btn btn-secondary btn-sm" id="filter--all">All</button>
  //   </div>`;

  // renderToDOM('#filter-container', domString);
  const domString = `
  <legend style ="text-align:center; color:white; text-shadow:0px 0px 15px black;">Filter Students</legend>
  <div class="btn-group d-flex wrapper" role="group" aria-label="Basic outlined example">
    <button type="button" class="btn btn-outline-primary" id="all">All</button>
    <button type="button" class="btn btn-outline-primary" id="gryffindor">Gryffindor</button>
    <button type="button" class="btn btn-outline-primary" id="hufflepuff">Hufflepuff</button>
    <button type="button" class="btn btn-outline-primary" id="ravenclaw">Ravenclaw</button>
    <button type="button" class="btn btn-outline-primary" id="slytherin">Slytherin</button>
  </div>  
  `;

  renderToDOM('#filterBtnsConatiner', domString);
};

export default filterBtnRow;
