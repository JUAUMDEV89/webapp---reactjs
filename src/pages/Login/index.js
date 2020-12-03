import { Link } from 'react-router-dom';

import { GiAlliedStar } from "react-icons/gi";

import './style.css'

import Input from '../../components/Input';
import Button from '../../components/Button';

function Login (){
    return(
        <>
          <div className="page">
              <div className="container">
                  <div className="logo">
                    <GiAlliedStar fontSize="50"/>
                  </div>
                  <form>
                      <Input placeholder="email" type="email" />
                      <Input placeholder="senha" type="password" />
                      <Button value="Entrar" />
                      <div className="links">
                        <Link to="/register">Quero Cadastrar</Link>           
                        <Link to="/forgot">Esqueci minha senha</Link>
                      </div>
                  </form>
              </div>
          </div>
        </>
    )
}

export default Login;