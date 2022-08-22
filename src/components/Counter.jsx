import React, {useState}from 'react';

const Counter = () => {
    // Компонент это функция которая возврвщает какойто JSX
    const  [likes, setLikes] = useState(5)
    const  [value, setValue] = useState("Education")

    function increment () {
        setLikes(likes + 1)
    }

    function dicrement () {
        setLikes(likes + 1)
    }
    return (
        <div className="App">
            <h1>{likes}</h1>
            <h1>{value}</h1>
            <input
                type="text"
                value={value}
                //двух сторонее связывание, управляемый компонент, изменив значение компонента мы изменим состояние компонента
                onChange={event => setValue(event.target.value)}
            />
            <button onClick={increment}>Increment</button>
            <button onClick={dicrement}>Dicrement</button>
        </div>
    );
};

export default Counter;