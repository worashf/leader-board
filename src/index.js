import './asset/style.css';
import Score from './Score';
import appendAllScores from './Render';

window.onload = () => {
  appendAllScores(Score);
};