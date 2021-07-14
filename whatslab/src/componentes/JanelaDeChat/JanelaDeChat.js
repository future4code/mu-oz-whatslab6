import React from 'react';
import './JanelaDeChat.css';
import styled from 'styled-components'

const BalaoDeMensagem = styled.div`
    background-color: #DDF7C8;
    padding: 0.9em 0.8em;
    border-radius: 0.5em;
    font-weight: 450;
    line-height: 1.3;
    display:flex;
    align-self: flex-end;
    max-width: 60%;
    min-width: 8%;
    margin-bottom: 1em;
`

class JanelaDeChat extends React.Component {
    state = {
      valorUsuario: "",
      valorTexto: "",
      conversa: []
    }
    
    onChangeUsuario = (e) =>{
      this.setState({valorUsuario: e.target.value})
    }
  
    onChangeTexto = (e) =>{
      this.setState({valorTexto: e.target.value})
    }
  
    onClickEnviar = () =>{
      if (this.state.valorUsuario && this.state.valorTexto) {
      const novaMensagem ={
        usuario: this.state.valorUsuario,
        texto: this.state.valorTexto,
      }
   
      const novaConversa = [...this.state.conversa, novaMensagem]
  
      this.setState({conversa: novaConversa})
      this.setState({valorUsuario:"", valorTexto:""})
     }
    }
  
    render () {
  
      const nossaConversa = this.state.conversa.map((props) => {
          
        return(
        <BalaoDeMensagem>  
          <div>
             <p className="fala"> {props.usuario} </p><p>{props.texto}</p>
          </div>
        </BalaoDeMensagem>
        )
  
      })
  
      return(
        
        <div>
          
          <div id="main">
             {nossaConversa}
          </div>

          
          <div id="form">
            <p className="fala">Usuário:</p>
            <input className="textarea" value={this.state.valorUsuario} placeHolder="Seu nome" type="text" id="nome" onChange={this.onChangeUsuario}/>
            <input className="textarea" value={this.state.valorTexto} placeHolder="Digite aqui" type="text" id="texto" onChange={this.onChangeTexto}/>
            <img className="enviar" src="https://cdn4.iconfinder.com/data/icons/flat-circle-content/800/circle-content-send-512.png" onClick={this.onClickEnviar}></img>
          </div>
          
  
        </div>
  
      )}
  }

  export default JanelaDeChat;