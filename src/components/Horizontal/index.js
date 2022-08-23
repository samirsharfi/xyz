import "./style.css";
import LetterX from "./LetterX/LetterX";
import LetterY from "./LetterY/LetterY";
import LetterZ from "./LetterZ/LetterZ";

function Horizontal() {
  return (
    <div className="root">
     <LetterX/>
     <LetterX/>
     <LetterY/>
     <LetterZ/>
    </div>
  );
}

export default Horizontal;