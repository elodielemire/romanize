import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {useEffect, useState} from "react";

function App() {
    const [number, setNumber] = useState('');
    const [answer, setAnswer] = useState('');
    const [showAnswer, setShowAnswer] = useState(false);

    useEffect(() => {
        number && submitNumber();
    }, [number]);

    const submitNumber = () => {
        let provisionalAnswer='';
        let provisionalEntry=number;

        Object.keys(intToRomanConverter).forEach(function(key) {
            const add = Math.floor(provisionalEntry / intToRomanConverter[key]);

            if (add !== 0) {
                for(let i = 0; i<add; i++) {
                    provisionalAnswer += key;
                }
            }

            provisionalEntry %= intToRomanConverter[key];

            if (provisionalEntry === 0) {
                setAnswer(provisionalAnswer);
            }
        });

        setShowAnswer(true);
    }

    const intToRomanConverter = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1,
    };

    const resetForm = () => {
        setNumber('');
        setShowAnswer(false);
    }

    const onChangeNumber = e => {
        setNumber(parseInt(e.target.value));
    }

    return (
        <div className="App">
            <h1 className="text-center">
                Romanizer
            </h1>
            <div className="m-auto px-4 col-sm-6 col-xs-12">
                <form className="mb-3">
                    <label htmlFor="number" className="form-label mt-3 text-primary">Enter a number</label>
                    <input
                        value={number}
                        onChange={e => onChangeNumber(e)}
                        type="number"
                        className="form-control"
                        id="number"/>
                </form>
                <button onClick={resetForm} className="bg-danger text-white mt-2 btn d-block m-auto">Reset</button>

                {showAnswer && <>
                    <p className="text-primary">Result : </p>
                    <p>{answer}</p>
                </>}
            </div>
        </div>
    );
}

export default App;
