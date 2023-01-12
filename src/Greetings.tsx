import React from "react";

type GreetingProps = {
    name: string;
    mark: string;
    optional? : string;
    onClick: (name: string) => void;
}

const Greeting = ({name, mark, optional, onClick}: GreetingProps) => {
    const handleClick = () => onClick(name);
   
    return (
    <div>
        Hello, {name}, {mark}
        {optional && <p>{optional}</p>}
        <button onClick={handleClick}>click me</button>
    </div>
    )
}

Greeting.defaultProps = {
    mark : "!"
}

export default Greeting;