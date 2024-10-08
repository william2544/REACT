// 1 2 3
// 4 5 6
// 7 8 9
import { useEffect, useState } from 'react'
import './styles.css'

function Square({value,onclick}){
    return <button onClick={onclick} className="square">{value}</button>
}

export default function TicTacToe() {
    const [square,setSquare] = useState(Array(9).fill(''))
    const [isXTrue,setIsXTrue] =useState(true)
    const [status, setStatus] =useState('')

    function hundleClick(getCurrentSquare) {
        let cpySquares = [...square]
        if( getWinner(cpySquares) || cpySquares[getCurrentSquare])return;
        cpySquares[getCurrentSquare] = isXTrue?'X':'O'
        setIsXTrue(!isXTrue)
        setSquare(cpySquares)
    }

    function getWinner(square) {
        const winningPatern =[
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [2, 5, 8],
            [1, 4, 7],
            [0, 3, 6],
            [0, 4, 8],
            [2, 4, 6]
        ]
        for (let i = 0; i < winningPatern.length; i++) {
            const [x, y, z] = winningPatern[i];
            if (square[x] && square[x] === square[y] && square[x] === square[z]) {
                return square[x]
            }
        }
        return null
    }


    useEffect(()=>{
        if(!getWinner(square) && square.every(item =>item !=='')){
            setStatus('This is a draw, Please restart the game')
        }else if(getWinner(square)){
            setStatus(`Winner is ${getWinner(square)}`)
        }else{
            setStatus(`Next player is ${isXTrue?'X':'O'}`)
        }
    },[square,isXTrue])

    

    function handleRestart(){
        setIsXTrue(true)
        setSquare(Array(9).fill(''))
    }

    return(
    <div  className='container'>
        <div className="tic-tac-toe-container">
            <div className="raw">
                <Square value={square[0]} onclick={()=>hundleClick(0)}/>
                <Square value={square[1]} onclick={()=>hundleClick(1)}/>
                <Square value={square[2]} onclick={()=>hundleClick(2)}/>
            </div>
            <div className="raw">
                <Square value={square[3]} onclick={()=>hundleClick(3)}/>
                <Square value={square[4]} onclick={()=>hundleClick(4)}/>
                <Square value={square[5]} onclick={()=>hundleClick(5)}/>
            </div>
            <div className="raw">
                <Square value={square[6]} onclick={()=>hundleClick(6)}/>
                <Square value={square[7]} onclick={()=>hundleClick(7)}/>
                <Square value={square[8]} onclick={()=>hundleClick(8)}/>
            </div>
        </div>
        
        <h2>{status}</h2>
        <button onClick={()=>handleRestart()}>Restart</button>


    </div>
 )   
}