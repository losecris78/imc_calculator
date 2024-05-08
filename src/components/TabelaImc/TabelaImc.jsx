import Calculos from "../Data/Data";
import './tabelaImc.modules.css'

const AvaliaImc =()=>{

    return(
        <>
        <table>
            <thead>
                <td>IMC</td>
                <td>Observacoes</td>
            </thead>
            <tbody>
                <tr>
                    <td>0-18.5</td>
                    <td>Abaixo do indice recomendado</td>
                </tr>
                <tr>
                    <td>18.6 -24.9</td>
                    <td>Normal, saudavel</td>
                </tr>
                <tr>
                    <td>25-29.9</td>
                    <td>Sobrepeso</td>
                </tr>
                <tr>
                    <td>30-34.9</td>
                    <td>Obesidade grau I</td>
                </tr>
                <tr>
                    <td>35-39.9</td>
                    <td>Obesidade grau II</td>
                </tr>
                <tr>
                    <td>40 ++</td>
                    <td>Obesidade grau III</td>
                </tr>
                
            </tbody>
        </table>
    </>
    )
}
export default AvaliaImc;