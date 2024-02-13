import renderToDOM from '../utils/renderToDom';

const htmlStructure = () => {
  const domString = `
  <div id="createCardContainer"></div>
  <div id="filterBtnsConatiner"></div>
  <div id="containerOfCards">
    <div id="cardContainer"></div>
    <div id="expelled"></div>
  </div>
    `;

  renderToDOM('#app', domString);
};

export default htmlStructure;
