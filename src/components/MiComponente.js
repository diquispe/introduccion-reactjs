import React, {Component} from "react";

class MiComponente extends React.Component {
    render() {
        let receta = {
            nombre: 'pizza',
            ingredientes : [
                'tomate',
                'queso',
                'jamon'
            ],
            calorias: 400
        }
        return (
            <div>
                <h1>HOla soy el componente llamado mi compoenete</h1>
                <h2>Estoy probando el componente</h2>
                <div>{ receta.nombre } - { receta.calorias }</div>
                <ol>
                    {
                        receta.ingredientes.map((ingrediente,i) => {
                            return (
                                <li key={i}>
                                    { ingrediente }
                                </li>
                            )
                        })
                    }
                </ol>
                <hr/>
            </div>
        )
    }
}

export default MiComponente;