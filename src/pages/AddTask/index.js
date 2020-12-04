import { useState } from 'react';

import { Link } from 'react-router-dom';

import './style.css';

import Input from '../../components/Input';
import Button from '../../components/Button';

function AddTask (){

    const [ showWarning, setShowWarning ] = useState(false); 
    const [ warningPosition, setWarningPosition ] = useState(0); 

    function handleWarning(e) {
      e.preventDefault();
      setShowWarning(true);
    }

    return(
           
        <div className="page--addtasks">
         <div className="tasks--created" style={{ top: warningPosition, display: showWarning ? 'flex': 'none' }}>
             <span>Tarefa Criada!</span>
         </div>

         <div className="container">
            
            <form onSubmit={handleWarning}>
                  <Input placeholder="nome da tarefa" type="text" />
                  <Input placeholder="horario" type="text" />             
                  <Button value="Criar"/>
                  <div className="links">
                    <Link to="/">Voltar</Link>           
                  </div>
            </form>
        </div>
      </div>
     
    )
}

export default AddTask;