import React, {useState, ChangeEvent, FormEvent, useEffect} from "react";

//CSS
import styles from './TaskForm.module.css'

//INTERFACE
import { ITask } from "../interfaces/Task";

interface Props {
    btnText: string
}

const TaskForm = ({btnText}:Props) => {
    const [id, setId] = useState<number>(0);
    const[title, setTatle] = useState<string>('');
    const [difficulty, setDifficulty]  = useState<number>(0);

    const addTaskHandler = () => {}

    const handleChanch = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.name === 'title') {
            setTatle(e.target.value)
        } else {
            setDifficulty(parseInt(e.target.value))
        }
        console.log(title);
        console.log(difficulty);
        
        
    }


    return <form onSubmit={addTaskHandler} className={styles.form}>
        <div className={styles.input_container}>
            <label htmlFor="title">Título:</label>
            <input type="text" name="title" id="title" placeholder="Título da tarefa" onChange={handleChanch}/>
        </div>
        
        <div className={styles.input_container}>
            <label htmlFor="title">Dificuldade:</label>
            <input type="text" name="title" id="title" placeholder="Dificuldade da tarefa" onChange={handleChanch}/>
        </div>
        <input type="submit" value={btnText} />
    </form>
}

export default TaskForm