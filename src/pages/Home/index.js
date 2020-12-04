import { useState } from 'react';

import { Link } from 'react-router-dom';

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
                <Link to="/addtask">
                    <FiPlus fontSize="28" />
                </Link>
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