import renderToDOM from '../utils/renderToDom';

const expelledStudentsOnDom = (array) => {
  let domString = '<legend style="text-align:center; color:red;">The Voldemort Army😈</legend>';

  array.forEach((item) => {
    domString += `
    <div class="voldemort-card" style="width: 15rem;">
      <img src="https://qph.cf2.quoracdn.net/main-qimg-565e9b565b0ce8c9fc467d58b23ae254" class="card-img-top" alt="...">
      <div class="card-body">
        <p class="card-text" style="font-weight:bold; margin-top:10px; margin-bottom:5px; color:white; text-align:center;">Welcome to the dark side <span id="expelled-student">${item.student}</span></p>
      </div>
    </div>`;
  });

  renderToDOM('#expelled', domString);
};

export default expelledStudentsOnDom;
