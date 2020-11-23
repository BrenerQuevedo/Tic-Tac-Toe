export const INITIAL_STATE = {
  squares: Array(9).fill(null),
  isWinner: '',
  isNext: true,
  history: [],
  hoverPreviewSquare: null
};

export default function reducer(state, action) {
  switch (action.type) {
    case 'RESET': {
      return INITIAL_STATE;
    }
    case 'UPDATE_WINNER': {
      return { ...state, isWinner: action.payload };
    }
    case 'UPDATE_SQUARES': {
      const { squares, history, isXNext, isWinner } = state;

      const newHistory = [
        ...history,
        {
          squares,
          isXNext,
          isWinner,
        },
      ];

      const newState = { ...state };

      newState.squares = action.payload;
      newState.isXNext = !isXNext;
      newState.isWinner = isWinner;
      newState.history = newHistory;

      return newState;
    }

    case 'UPDATE_HISTORY': {
      const [history, index] = action.payload;
      const { squares, isWinner, isXNext } = history[index];

      const newHistory = [...history];

      newHistory.splice(index, history.length);

      const newState = {
        ...state,
        squares,
        isWinner,
        isXNext,
        history: newHistory,
      };

      return newState;
    }
    
    case "MOUSE_HOVER":
        return {
          ...state,
          hoverPreviewSquare: action.key
        };
      case "MOUSE_LEAVE":
        return {
          ...state,
          hoverPreviewSquare: null
        };

    default:
      return state;
  }
}
