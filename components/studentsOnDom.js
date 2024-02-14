import renderToDOM from '../utils/renderToDom';

const studentsOnDom = (array) => {
  let domString = '<legend style="text-align:center">First Year\'s</legend>';

  array.forEach((item) => {
    domString += `
      <div class="card">
        <div class="card-header" id="card-color">
          
        </div>
        <div class="card-body">
          <h6 id="student">${item.name}</h6>
          <p class="card-text">${item.house}</p>
          <button type="submit" class="btn btn-danger" id="expel-${item.id}">Expel</button>
        </div>
      </div>
      `;
  });

  renderToDOM('#cardContainer', domString);
};

export default studentsOnDom;
