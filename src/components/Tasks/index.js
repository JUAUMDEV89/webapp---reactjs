import { FiTrash2 } from "react-icons/fi";

import './style.css';

function Tasks ({ name, hour, check }){
    return(
       <div className="tasks--container">
           <div className="close">
              <FiTrash2 />
           </div>
           <div className="tasks--name">
              <h4>{name}</h4>
           </div>
           <div className="tasks--infos">
              <p>{hour}</p>
              <button>concluir</button>
           </div>
       </div>
    )
}

export default Tasks;