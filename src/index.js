import './asset/style.css';

import { refreshPage, addNewScore } from './Render';

import {
  scoreFrom, userInput, scoreInput, refreshBtn,
} from './Selector';

window.onload = () => {
  refreshPage();
};
const clearInputs = () => {
  userInput.value = '';
  scoreInput.value = '';
};

scoreFrom.addEventListener('submit', (e) => {
  e.preventDefault();
  const user = userInput.value;
  const score = scoreInput.value;

  addNewScore(user, score);
  clearInputs();
});
refreshBtn.addEventListener('click', (e) => {
  e.preventDefault();
  refreshPage();
});
