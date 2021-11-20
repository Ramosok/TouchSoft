//libraries
import React, {useState} from 'react';
//components
import OutputScreen from "./OutputScreen";
import Button from "./Button";
//styles
import './counter.css';

const Counter = () => {
    const [counter, setCounter] = useState(0)

    const increment = () => {
        setCounter(counter + 1)
    };
    const decrement = () => {
        setCounter(counter - 1)
        if (counter === 0) {
            setCounter(0)
            //другая реализация могла быть по counter === 0 присваевать атрибут disabled
        }
    }
    const reset = () => {
        setCounter(0)
    }

    return (
        <div className="counter">
            <OutputScreen
                className="counter__screen"
                action={counter}
            />
            <OutputScreen
                action={counter % 2 === 0 ? "Введено чётное число" : "Введено  нечётное число"}
                style={counter % 2 === 0 ? {backgroundColor: "#cb9b0e"} : {backgroundColor: "#064c01"}}
            />
            <div className="button__wrapper">
                <Button
                    сlickAction={increment}
                    title="increment"
                    className="button"
                />
                <Button
                    сlickAction={decrement}
                    title="decrement"
                    className="button"
                />
                <Button
                    сlickAction={reset}
                    title="reset"
                    className="button"
                />
            </div>
        </div>
    );
};

export default Counter;