import { useReducer } from "react";
import { useSampleDispatch, useSampleState } from './SampleContext';

type Color = 'red' | 'orange' | 'yellow' 
type State = {
    count: number,
    text: string,
    color: Color,
    isGood: boolean,
}
type Action = {type: 'SET_COUNT', count: number} 
| {type: 'SET_TEXT', text: string,} 
| {type: 'SET_COLOR', color: Color} 
| {type: 'TOGGLE_GOOD'};

function reducer(state:State, action:Action){
    switch(action.type){
        case 'SET_COUNT':
            return {
                ...state,
                count: action.count,
            }
        case 'SET_TEXT': 
            return {
                ...state,
                text: action.text,
            }
        case 'SET_COLOR':
            return {
                ...state,
                color: action.color,
            }
        case 'TOGGLE_GOOD': 
            return {
                ...state,
                isGood: !state.isGood,
            }
        default:
            throw new Error('Unhandled action');
    }
}

const ReducerSample = () => {
    // const [state, dispatch] = useReducer(reducer, {
    //     count:0,
    //     text:'hello',
    //     color: 'red',
    //     isGood: true,
    // });

    // 만든 훅으로 쉽게 조회하여 사용
    const state = useSampleState();
    const dispatch = useSampleDispatch();

    const setCount = () => dispatch({type:'SET_COUNT', count: 5}); // count 를 넣지 않으면 에러발생
    const setText = () => dispatch({ type: 'SET_TEXT', text: 'bye' }); // text 를 넣지 않으면 에러 발생
    const setColor = () => dispatch({ type: 'SET_COLOR', color: 'green' }); // orange 를 넣지 않으면 에러 발생
    const toggleGood = () => dispatch({ type: 'TOOGLE_GOOD' });

    return (
        <div>
          <p>
            <code>count: </code> {state.count}
          </p>
          <p>
            <code>text: </code> {state.text}
          </p>
          <p>
            <code>color: </code> {state.color}
          </p>
          <p>
            <code>isGood: </code> {state.isGood ? 'true' : 'false'}
          </p>
          <div>
            <button onClick={setCount}>SET_COUNT</button>
            <button onClick={setText}>SET_TEXT</button>
            <button onClick={setColor}>SET_COLOR</button>
            <button onClick={toggleGood}>TOGGLE_GOOD</button>
          </div>
        </div>
      );
    }
    
    export default ReducerSample;
