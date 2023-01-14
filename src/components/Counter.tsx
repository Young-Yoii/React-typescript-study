import { useReducer } from "react";

// type Action = {type: 'INCREASE'} | {type: 'DECREASE'}; // 이렇게 액션을 | 으로 연달아서 쭉 나열

// function reducer(state: number, action: Action):number {
//     switch (action.type) {
//         case 'INCREASE': 
//             return state + 1;
//         case 'DECREASE':
//             return state - 1;
//         default: 
//         throw new Error('Unknown action')
//     }
// }

type CounterPorps = {
    count: number,
    onIncrease : () => void,
    onDecrease : () => void,
    onIncreaseBy: (diff: number) => void,
}

const Counter = ({count, onIncrease, onDecrease, onIncreaseBy} : CounterPorps) => {
    return (
        <div>
            <h1>{count}</h1>
            <div>
                <button onClick={onIncrease}>+1</button>
                <button onClick={onDecrease}>-1</button>
                <button onClick={() => onIncreaseBy(5)}>+5</button>
            </div>
        </div>
    )
};

export default Counter;