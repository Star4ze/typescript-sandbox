import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Actions from '../../../state/Actions';
import { StateContext } from '../App/App';
import './StartingScreen.scss'

// type UseContextType = { state: any, dispatch: React.Dispatch<any> }

function StartingScreen() {
    const [player1, setPlayer1] = useState<string>('');
    const [player2, setPlayer2] = useState<string>('');
    const [isPlayer1, setIsPlayer1] = useState<boolean>(false);
    const [isPlayer2, setIsPlayer2] = useState<boolean>(false);
    const [err, setErr] = useState<string>('_')

    const { state, dispatch } = useContext<any>(StateContext);  //whats the correct type!

    const navigate = useNavigate();

    function showError(msg: string): void {
        setErr(msg);
        setTimeout(() => setErr(' '), 1500);
    }

    const buttonPlayer1 = (): void => {
        if (!player1) {
            showError('Enter Player 1')
        } else {
            dispatch({ type: Actions.setPlayer1, payload: player1 });
            setIsPlayer1(true);
        }
    };

    const buttonPlayer2 = (): void => {
        if (!player2) {
            showError('Enter Player 2')
        } else {
            dispatch({ type: Actions.setPlayer2, payload: player2 });
            setIsPlayer2(true);
        }
    };

    function start(e: any): void {
        e.preventDefault();
        if (isPlayer1 && isPlayer2) {
            dispatch({ type: Actions.setCategory, payload: e.target[0].value });
            navigate('/start')
        } else {
            showError('Please Enter Player Names!')
        }
    }

    return (
        <form className='StartingScreen' onSubmit={start}>
            {isPlayer1
                ? <span>Hello {state.player1.name}!</span>
                : <div className='StartingScreen_player'>
                    <p> Enter Player 1 :</p>
                    <input type='text' onChange={e => { setPlayer1(e.target.value) }} />
                    <button onClick={buttonPlayer1} >Enter</button>
                </div>}

            {isPlayer2
                ? <span>Hello {state.player2.name}!</span>
                : <div className='StartingScreen_player'>
                    <p> Enter Player 2 :  </p>
                    <input type='text' onChange={e => { setPlayer2(e.target.value) }} />
                    <button onClick={buttonPlayer2} >Enter</button>
                </div>}
            <hr />
            <label>Choose the trivia category </label>
            <select name="category" defaultValue="movies">
                <option value="movies">Movies & TV</option>
                <option value="genknw">General Knowledge</option>
                <option value="music">Music</option>
            </select>
            <span className='StartingScreen_err'>{err}</span>
            <input type='submit' value='Start!' />
        </form>
    );
}

export default StartingScreen;
