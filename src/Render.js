import { scoreList } from './Selector';
import { getScores, addGames } from './gameFunctions';

export const createScore = (leader) => {
  const { user, score } = leader;
  const li = document.createElement('li');
  li.classList.add('score');
  const p = document.createElement('p');
  p.classList.add('text');
  p.textContent = `${user}:${score}`;
  li.appendChild(p);
  return li;
};
export const refreshPage = async () => {
  // load the data
  scoreList.innerHTML = '<li><p>Loading </p></li>';
  const leaders = await getScores();

  // clear
  scoreList.innerHTML = '';
  const scoreElements = [];
  leaders.forEach((leader) => {
    scoreElements.push(createScore(leader));
  });
  scoreElements.forEach((li) => {
    scoreList.appendChild(li);
  });
};

export const addNewScore = async (user, score) => {
  const leader = await addGames(user, score);
  if (leader) {
    refreshPage();
  }
};
