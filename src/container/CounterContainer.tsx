import { useSelector, useDispatch } from "react-redux"
import Counter from './../components/Counter';
import { RootState } from "../modules";
import { increase, decrease, increaseBy } from "../modules/counter";

const CounterContainer = () => {
    // 상태를 조회합니다. 상태를 조회 할 때에는 state 의 타입을 RootState 로 지정
    const count = useSelector((state: RootState) => state.counter.count);
    const dispatch = useDispatch();

    // 각 액션들을 디스패치하는 함수들
    const onIncrease = () => {
        dispatch(increase());
    };

    const onDecrease = () => {
        dispatch(decrease());
    };

    const onIncreaseBy = (diff: number) => {
        dispatch(increaseBy(diff));
    }

    return (
    <Counter
        count={count}
        onIncrease={onIncrease}
        onDecrease={onDecrease}
        onIncreaseBy={onIncreaseBy}
    />
    )
};

export default CounterContainer;