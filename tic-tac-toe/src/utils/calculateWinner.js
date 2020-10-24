export default function calculateWinner(squares) {
    const winningLines = [
        //horizontal
        [0,1,2],
        [3,4,5],
        [6,7,8],
        
        //vertical
        [0,3,6],
        [1,4,7],
        [2,5,8],

        //diagonal
        [0,4,8],
        [2,4,6]
    ];

    winningLines.map((lines, index) => {
        const [a,b,c] = lines[index];

        if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    });
    return null;

};