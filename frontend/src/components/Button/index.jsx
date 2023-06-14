import React from 'react';
import { ButtonAdd } from './styles'
import { AiOutlinePlus } from 'react-icons/ai';

function Button(){
    return(
        <ButtonAdd>
            <AiOutlinePlus style={{width:'25px',height:'25px', color:'#fff',}}/>
        </ButtonAdd>
    )
}

export default Button;