import './App.css';
import {useState} from "react";

function App() {

    const [flag, setFlag] = useState(true);

    let shape;

    if (flag === true) {
        shape = "square"
    } else {
        shape = "circle"
    }

    return (
        <div>
            <div className={shape} onClick={() => setFlag(!flag)}>
            </div>
        </div>
    );
}

export default App;
