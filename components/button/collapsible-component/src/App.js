import React from "react";
import Collapsible from "./components/Collapsible";

function App(){
    return (
        <div>
            <Collapsible label="+">
                <h1>Componente Colapsavel</h1>

                <p>Esse é um exemplo de um componente colapsavel capaz de mostrar e esconder algum conteudo clicando em um botao</p>
            </Collapsible>
            <Collapsible label="+">
                <h1>Tecnologias usadas nesse projeto</h1>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Javascript</li>
                    <li>NodeJs</li>
                    <li>ReactJs</li>
                </ul>
            </Collapsible>
            <Collapsible label="+">
                <form>
                    <h1>Mais exemplos</h1>
                    <p>Voce pode criar um formulario que pode ser mostrado e escondido através do clique de um botao</p>
                    <input type="datetime-local" />
                    <button>Enviar</button>
                </form>
            </Collapsible>
        </div>
    )
}

export default App;