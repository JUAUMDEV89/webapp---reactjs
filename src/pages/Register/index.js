import { Link } from 'react-router-dom';

import { GiAlliedStar } from "react-icons/gi";

import './style.css'

import Input from '../../components/Input';
import Button from '../../components/Button';

function Register (){
    return(
        <div className="page">
              <div className="container">
                  <div className="logo">
                    <GiAlliedStar fontSize="50"/>
                  </div>
                  <form>
                      <Input placeholder="nome" type="text" />
                      <Input placeholder="email" type="email" />
                      <Input placeholder="senha" type="password" />
                      <Button value="Registrar" />
                      <div className="links">
                        <Link to="/login">Já tenho um login</Link>           
                      </div>
                  </form>
              </div>
          </div>
    )
}

export default Register;