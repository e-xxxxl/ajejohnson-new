import React, { useState, useEffect } from "react";

const TicTacToe = () => {
  const getStoredScores = () => {
    const saved = localStorage.getItem("ttt-scores");
    return saved ? JSON.parse(saved) : { player: 0, ai: 0, draw: 0 };
  };

  const [board, setBoard] = useState(Array(9).fill(null));
  const [isPlayerTurn, setIsPlayerTurn] = useState(true);
  const [scores, setScores] = useState(getStoredScores);

  const checkWinner = (b) => {
    const lines = [
      [0,1,2],[3,4,5],[6,7,8],
      [0,3,6],[1,4,7],[2,5,8],
      [0,4,8],[2,4,6]
    ];

    for (let [a,b1,c] of lines) {
      if (b[a] && b[a] === b[b1] && b[a] === b[c]) {
        return b[a];
      }
    }
    return null;
  };

  const isDraw = (b) => b.every(cell => cell !== null);

  const minimax = (newBoard, isMaximizing) => {
    const winner = checkWinner(newBoard);

    if (winner === "O") return 1;
    if (winner === "X") return -1;
    if (isDraw(newBoard)) return 0;

    if (isMaximizing) {
      let bestScore = -Infinity;
      newBoard.forEach((cell, i) => {
        if (!cell) {
          newBoard[i] = "O";
          let score = minimax(newBoard, false);
          newBoard[i] = null;
          bestScore = Math.max(score, bestScore);
        }
      });
      return bestScore;
    } else {
      let bestScore = Infinity;
      newBoard.forEach((cell, i) => {
        if (!cell) {
          newBoard[i] = "X";
          let score = minimax(newBoard, true);
          newBoard[i] = null;
          bestScore = Math.min(score, bestScore);
        }
      });
      return bestScore;
    }
  };

  const bestMove = (b) => {
    let bestScore = -Infinity;
    let move;

    b.forEach((cell, i) => {
      if (!cell) {
        b[i] = "O";
        let score = minimax(b, false);
        b[i] = null;

        if (score > bestScore) {
          bestScore = score;
          move = i;
        }
      }
    });

    return move;
  };

  const updateScores = (result) => {
    const newScores = { ...scores };

    if (result === "X") newScores.player += 1;
    else if (result === "O") newScores.ai += 1;
    else newScores.draw += 1;

    setScores(newScores);
    localStorage.setItem("ttt-scores", JSON.stringify(newScores));
  };

  const handleClick = (index) => {
    if (!isPlayerTurn || board[index] || checkWinner(board)) return;

    const newBoard = [...board];
    newBoard[index] = "X";
    setBoard(newBoard);
    setIsPlayerTurn(false);

    setTimeout(() => {
      const aiMove = bestMove(newBoard);
      if (aiMove !== undefined) {
        newBoard[aiMove] = "O";
        setBoard([...newBoard]);
      }
      setIsPlayerTurn(true);
    }, 400);
  };

  useEffect(() => {
    const winner = checkWinner(board);

    if (winner) updateScores(winner);
    else if (isDraw(board)) updateScores("draw");
  }, [board]);

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsPlayerTurn(true);
  };

  const resetScores = () => {
    const reset = { player: 0, ai: 0, draw: 0 };
    setScores(reset);
    localStorage.setItem("ttt-scores", JSON.stringify(reset));
  };

  const winner = checkWinner(board);

  return (
    <section id="fun" className="w-full bg-black py-24 md:py-40 px-4 border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
        <div className="flex flex-col gap-8 text-center lg:text-left">
          <div className="flex items-center gap-3 justify-center lg:justify-start">
            <div className="w-8 h-px bg-white/30"></div>
            <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-gray-500">Playground</span>
          </div>
          
          <h3 className="text-4xl md:text-6xl font-display uppercase leading-[0.9] tracking-tight text-white">
            Beat the <br />
            <span className="text-gray-500 italic">Algorithm</span>
          </h3>

          <p className="text-lg md:text-xl font-light text-gray-400 max-w-lg mx-auto lg:mx-0 leading-relaxed">
            All work and no play makes Emmanuel a dull boy. Take a break and try to beat my AI in a game of Tic Tac Toe. It's harder than it looks.
          </p>

          <div className="flex justify-center lg:justify-start gap-12 mt-4">
            <div className="flex flex-col">
              <span className="text-[10px] font-mono text-gray-600 uppercase tracking-widest mb-1">Player</span>
              <span className="text-3xl font-bold text-white">{scores.player}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-mono text-gray-600 uppercase tracking-widest mb-1">AI</span>
              <span className="text-3xl font-bold text-white">{scores.ai}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-mono text-gray-600 uppercase tracking-widest mb-1">Draw</span>
              <span className="text-3xl font-bold text-white">{scores.draw}</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center w-full max-w-md mx-auto">
          <div className="mb-8 text-center h-8">
            <p className="text-xs md:text-sm font-mono text-white uppercase tracking-[0.3em]">
              {winner
                ? `Winner: ${winner}`
                : isDraw(board)
                ? "Draw!"
                : isPlayerTurn
                ? "Your Turn"
                : "AI Thinking..."}
            </p>
          </div>

          <div className="grid grid-cols-3 gap-3 md:gap-4 w-full aspect-square p-4 bg-white/5 rounded-3xl border border-white/10">
            {board.map((cell, index) => (
              <button
                key={index}
                onClick={() => handleClick(index)}
                disabled={!isPlayerTurn || !!cell || !!winner}
                className="w-full h-full bg-black/40 border border-white/5 flex items-center justify-center text-3xl md:text-5xl font-display uppercase cursor-pointer transition-all duration-300 hover:bg-white/10 hover:border-white/20 rounded-2xl disabled:cursor-default"
              >
                {cell === "X" && <span className="text-white">X</span>}
                {cell === "O" && <span className="text-gray-500">O</span>}
              </button>
            ))}
          </div>

          <div className="mt-12 flex gap-4">
            <button
              onClick={resetGame}
              className="nav-pill px-10 py-3"
            >
              Restart
            </button>
            <button
              onClick={resetScores}
              className="text-[10px] font-mono uppercase tracking-widest text-gray-600 hover:text-white transition-colors"
            >
              Reset Score
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TicTacToe;
