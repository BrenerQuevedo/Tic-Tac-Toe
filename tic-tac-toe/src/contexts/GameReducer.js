export const INITIAL_STATE = {
    squares: Array(9).fill(null),
    isWinner: "",
    isNext: true,
    history: []
}

export default function reducer(state, action) {
    switch(action.type) {
        case "RESET": {
            return INITIAL_STATE;
        }
    }
}