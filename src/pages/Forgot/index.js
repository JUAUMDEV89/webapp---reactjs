import { GiAlliedStar } from "react-icons/gi";
import { FiArrowLeft } from "react-icons/fi";

import { Link } from 'react-router-dom';

import './style.css'

import Input from '../../components/Input';
import Button from '../../components/Button';

function Forgot (){
    return(
        <>
          <div className="page">
              <div className="container">
                  <div className="logo">
                    <GiAlliedStar fontSize="50"/>
                  </div>
                  <form>
                      <Input placeholder="email de recuperação" type="email" />
                      <Button value="Enviar" />
                      <Link to="/login" style={{width:'100', display:'flex', justifyContent:'center', marginTop:'40'}}>
                        <FiArrowLeft fontSize="30" color="white"/>
                      </Link>
                  </form>
              </div>
          </div>
        </>
    )
}

export default Forgot;