import "./style.css";
import LetterX from "./LetterX/LetterX";
import LetterY from "./LetterY/LetterY";
import LetterZ from "./LetterZ/LetterZ";

function Vertical() {
  return (
    <div className="column">
     <LetterX/>
     <LetterX/>
     <LetterY/>
     <LetterZ/>
    </div>
  );
}

export default Vertical;