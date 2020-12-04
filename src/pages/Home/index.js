import { useState } from 'react';

import { FiPlus } from "react-icons/fi";

import './style.css'

import Tasks from '../../components/Tasks';

function Home(){

   const [tasks, setTasks] = useState([
       {
        "id":1,
        "name":"programar",
        "hour":"17:00",
       },
       {
        "id":2,
        "name":"Tomar Banho",
        "hour":"22:10",
       },
    ]);

    return(
        <div className="page">
        <div className="home--page">
            <div className="home--header">
               <FiPlus fontSize="28"/>
               <h4>Olá João - Suas Tarefas</h4>
            </div>  
             
            { tasks.map(task=> (
                <Tasks
                  key={task.id}
                  name={task.name}
                  hour={task.hour}
                />
            )) }

        </div>
        </div>
    )
}

export default Home;