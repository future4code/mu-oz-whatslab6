import React from 'react';
import './App.css';



class Whatslab extends React.Component {
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
        <div>
           <p className="fala">{props.usuario} diz:</p><p>{props.texto}</p>
        </div>
      )

    })

    return(
      <div>

        <div id="main">
           {nossaConversa}
        </div>

        <div id="form">
          <p className="fala">Usuário:</p>
          <input value={this.state.valorUsuario} placeHolder="Seu nome" type="text" id="nome" onChange={this.onChangeUsuario}/>
          <input value={this.state.valorTexto} placeHolder="Escreva sua mensagem aqui" type="text" id="texto" onChange={this.onChangeTexto}/>
          <button onClick={this.onClickEnviar}>Enviar</button>
        </div>

      </div>

    )}
}

export default Whatslab;
