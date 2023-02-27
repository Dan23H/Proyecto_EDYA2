import { FormatoMensaje } from "../componentes/FormatoMensaje"

export const Mensajes = () => {
    return (
        <>
            <table>
                <thead>
                    <h1>Mensajes</h1>
                </thead>
                <tbody>
                    <FormatoMensaje />
                    <FormatoMensaje />
                    <FormatoMensaje />
                    <FormatoMensaje />
                    <FormatoMensaje />
                </tbody>
            </table>
        </>
    )
}