const students = [];
const voldysArmy = []; // starts as an empty array

const createId = (array) => {
  if (array.length) {
    const idArray = array.map((el) => el.id);
    return Math.max(...idArray) + 1;
  }
  return 0;
};

export { students, voldysArmy };
export default createId;
