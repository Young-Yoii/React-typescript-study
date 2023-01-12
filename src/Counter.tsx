import { useState } from "react";

const Counter = () => {
    //useState를 사용 할 때 Generics 를 사용하지 않아도 알아서 타입을 유추하기 때문에 생략해도 상관없다.
    const [counter, setCounter] = useState<number>(0);
    //그러나 상태가 null일 수도 있고 아닐수도 있을때 Generics 를 활용하시면 좋다.
    // ex)
    // type Information = {name: string, description: string};
    // const [info, setInfo] = useState<Information | null>(null);

    const onIncrease = () => setCounter(counter + 1);
    const onDecrease = () => setCounter(counter - 1);

    return (
        <div>
            <h1>{counter}</h1>
            <div>
                <button onClick={onIncrease}>+1</button>
                <button onClick={onDecrease}>-1</button>
            </div>
        </div>
    )
};

export default Counter;