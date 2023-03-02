import { useState } from "react";
import './AddToDo.css';

type todo = { task: string, date: string, prio: number };
type addtodo = { addTodo: (todo: todo) => any };

function AddToDo(props: addtodo) {
    const [inputTask, setInputTask] = useState<string>('');
    const [inputDate, setInputDate] = useState<string>('');
    const [inputPrio, setInputPrio] = useState<string>('3');

    const onSubmit = (e: React.FormEvent<Element>) => {
        e.preventDefault();
        props.addTodo({ task: inputTask, date: inputDate, prio: parseInt(inputPrio) });
        setInputTask('');
        setInputDate('');
        setInputPrio('3');
    };

    return (
        <form onSubmit={onSubmit} className='addToDo'>
            <div>
                <div>
                    <label htmlFor='task'>Task :</label>
                    <label htmlFor='date'>Due Date :</label>
                    <label htmlFor='prio'>Priority :</label>
                </div>
                <div>
                    <input type="text" id='task' value={inputTask} onInput={e => setInputTask((e.target as HTMLInputElement).value)} /> 
                    <input type="date" id='date' value={inputDate} onInput={e => setInputDate((e.target as HTMLInputElement).value)} />
                    <input type="range" id='prio' value={inputPrio} min='1' max='5' onInput={(e: any) => setInputPrio((e.target as HTMLInputElement).value)} />
                </div>
            </div>
            <input type="submit" value="Add" className="form-submit-button" />
        </form>
    )

}

export default AddToDo;
