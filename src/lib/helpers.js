import genreData from './constants/WizardConfig';

export const getNextId = () => {
  const usedIdsList = genreData.genres.map(genre => genre.id) // add genre ids list
                      .concat(genreData.genres.map(genre => genre.subgenres.map(sub => sub.id))) // add subgenre ids lists
                      .reduce((acum, e) => acum.concat(e), []) // flatten matrix
                      .sort((a, b) => b - a);
  return usedIdsList[0] + 1;
}

export const toggleButtons = (e) => {
  const allButtons = e.target.parentNode.children;
  for (let button of allButtons) button.classList.remove("active");
  e.target.classList.add("active");
}
