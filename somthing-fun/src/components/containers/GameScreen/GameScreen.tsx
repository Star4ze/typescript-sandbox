import React, { useContext, useMemo, useState } from 'react'
import { StateContext } from '../App/App';
import './GameScreen.scss'

type QuizType = { question: string, answer: string, answers: string[] }

function GameScreen() {
    const [msg, setMsg] = useState<string>('');
    const [quiz, setQuiz] = useState<QuizType>({
        question: "Which film contains the character 'Dr. Evil'?",
        answer: 'Austin Powers: International Man of Mystery',
        answers: [
            'Austin Powers: International Man of Mystery',
            "Die Hard",
            "The Adventures of Robin Hood",
            "Pulp Fiction"
        ]
    });

    const { state, dispatch } = useContext<any>(StateContext);

    //to fix

    // const q = {
    //     category: "Film & TV",
    //     id: "622a1c347cc59eab6f94f922",
    //     correctAnswer: "Austin Powers: International Man of Mystery",
    //     incorrectAnswers: [
    //         "Die Hard",
    //         "The Adventures of Robin Hood",
    //         "Pulp Fiction"
    //     ],
    //     question: "Which film contains the character 'Dr. Evil'?",
    //     tags: [
    //         "acting",
    //         "film",
    //         "film_and_tv"
    //     ],
    //     type: "Multiple Choice",
    //     difficulty: "easy",
    //     regions: [],
    //     isNiche: false
    // }

    // setQuiz({
    //     question: q.question,
    //     answer: q.correctAnswer,
    //    answers: q.incorrectAnswers.splice(Math.floor(Math.random() * 4), 0, q.correctAnswer),
    //  
    // });

    //to here

    // useMemo(() => fetchQuizes(state.category), [state.category]).then(
    //     (quizes: any) => {
    //         for (let q of quizes) {
    //             setTimeout(() => { }, 10000);
    //             setQuiz({
    //                 question: q.question,
    //                 answer: q.correctAnswer,
    //                 answers: [...q.incorrectAnswers, q.correctAnswer],
    //                 id: parseInt(q.id)
    //             });
    //             console.log(quiz);
    //         }
    //     }
    // );

    function showMessage(msg: string): void {
        setMsg(msg);
        setTimeout(() => setMsg(''), 1500);
    }

    function keyListner(e: any) {
        const incorrectMsg = "Answer is Incorrect! "
        const p1ScoredMsg = `${state.player1.name} Scored!`
        const p2ScoredMsg = `${state.player2.name} Scored!`
        console.log('key detected');

        function checkAnswer(k: string, i: number) {
            if (quiz.answer === quiz.answers[i]) {
                if (e.key === k) {
                    dispatch.player1Scored();
                    showMessage(p1ScoredMsg)
                } else {
                    dispatch.player2Scored();
                    showMessage(p2ScoredMsg)
                }
            } else {
                showMessage(incorrectMsg)
            }
        }
        switch (e.key) {
            case ('a' || 'k'):
                console.log('a or k detected');
                checkAnswer('a', 1);
                break;
            case ('s' || 'l'):
                checkAnswer('s', 1);
                break;
            case ('z' || 'm'):
                checkAnswer('z', 1);
                break;
            case ('x' || ','):
                checkAnswer('x', 1);
                break;
        }
    }

    return (
        <div className='GameScreen' onKeyUp={keyListner}>
            <h2>{quiz.question}</h2>
            <span>{msg}</span>
            <ol>
                {quiz.answers.map((a, i) => <li key={i}>{a}</li>)}
            </ol>
            <div>
                <h3>{state.player1.name} Score {state.player1.score}</h3>
                <h3>{state.player2.name} Score {state.player2.score}</h3>
            </div>
        </div>
    );
}

export default GameScreen;
