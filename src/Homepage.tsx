import "./Homepage.css";
import carolineImg from './assets/caroline.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faStrava } from '@fortawesome/free-brands-svg-icons';
import { faStamp } from '@fortawesome/free-solid-svg-icons';

export default function Homepage() {
    return (
      <div className="Homepage">
        <header className="Homepage-header">
          <img src={carolineImg} className="Homepage-logo" alt="" />
          <h1 className="Homepage-title">Caroline's Pages</h1>
        </header>
        <div className="Homepage-body"> 
            <p className="Homepage-pages">
            <FontAwesomeIcon icon={faStamp} className="stampd"/>
            <a href="https://ceven.github.io/stamp-duty-calculator/">
                Stamp Duty Calculator
            </a>
            </p>
            <p className="Homepage-pages">
            <FontAwesomeIcon icon={faStrava} className="stravad" />
            <a href="https://ceven.github.io/stravad/">
                Stravad
            </a>
            </p>
        </div>
        <footer className="Homepage-footer">
            <FontAwesomeIcon icon={faGithub} /> 
            <a href="https://github.com/ceven">Find me on Github</a>
        </footer>
      </div>
    );
}
