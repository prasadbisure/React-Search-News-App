const initialState = {
    result: {}
};
const Reducer = ({state=initialState}, {paylod, type}) => {
    switch (type) {
        case "succesResult":
            return {...state, result: paylod.result}
        default:
            return state;
    }
};
export default Reducer