import React from 'react';
import './InputDeTexto.css';

function InputDeTexto (props) {
    return (
        <div>
            <form>
            <p>Usuário:</p>
            <input type="text" id="nome"/>
            <input type="text" id="texto"/>
            <input type="submit" value="Enviar"/>
            </form>
        </div>
    )
}

export default InputDeTexto;