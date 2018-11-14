import {types} from './../action';

const initState = {
    num: 10
}

export default (state = initState, action) => {
    switch (action.type) {
        case types.TEST_ADD:
            return {
                ...state,
                num: state.num + 1
            };
        case types.TEST_MINUS:
            return {
                ...state,
                num: state.num - 1
            };
        default:
            return {
                ...state
            };
    }
}
