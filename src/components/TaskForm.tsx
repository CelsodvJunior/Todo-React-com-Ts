import React, {useState, ChangeEvent, FormEvent, useEffect} from "react";

//CSS
import styles from './TaskForm.module.css'

//INTERFACE
import { ITask } from "../interfaces/Task";

interface Props {
    btnText: string
    taskList: ITask[]
    setTaskList?: React.Dispatch<React.SetStateAction<ITask[]>>
}

const TaskForm = ({btnText, taskList, setTaskList}:Props) => {
    const [id, setId] = useState<number>(0);
    const[title, setTatle] = useState<string>('');
    const [difficulty, setDifficulty]  = useState<number>(0);

    const addTaskHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const id = Math.floor(Math.random() * 1000)

        const newTask: ITask = {id, title, difficulty};

        setTaskList!([...taskList, newTask])

        setTatle("");
        setDifficulty(0);

        console.log(taskList);
        
    }

    const handleChanch = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.name === 'title') {
            setTatle(e.target.value)
        } else {
            setDifficulty(parseInt(e.target.value))
        }
    }


    return <form onSubmit={addTaskHandler} className={styles.form}>
        <div className={styles.input_container}>
            <label htmlFor="title">Título:</label>
            <input type="text" name="title" id="title" placeholder="Título da tarefa" onChange={handleChanch}
            value={title}/>
        </div>
        
        <div className={styles.input_container}>
            <label htmlFor="title">Dificuldade:</label>
            <input type="text" name="title" id="title" placeholder="Dificuldade da tarefa" onChange={handleChanch}
            value = {difficulty}/>
        </div>
        <input type="submit" value={btnText} />
    </form>
}

export default TaskForm