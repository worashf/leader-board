const scoreList = document.querySelector('.score-list');

const createScore = (score) => {
  const li = document.createElement('li');
  li.classList.add('score');
  const p = document.createElement('p');
  p.classList.add('text');
  p.textContent = `${score.name}:${score.score}`;
  li.appendChild(p);
  return li;
};
const appendAllScores = (scores) => {
  const scoreElements = [];
  scores.forEach((score) => {
    scoreElements.push(createScore(score));
  });
  scoreElements.forEach((score) => {
    scoreList.appendChild(score);
  });
};
export default appendAllScores;