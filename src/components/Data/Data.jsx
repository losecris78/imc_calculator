import { useEffect, useState } from "react";
import './Data.module.css'
const Calculos = ()=>{
    let [Peso, setPeso] = useState ();
    let [Tamanho, setTamanho] = useState();
    let [Nome, setNome] = useState('');
    
    const imc =() => { 
        const resultado = Peso / (Tamanho * Tamanho);
        const arredondado = resultado.toFixed(2);
        
        if (arredondado >=0){
            return(
                <p>{Nome}, teu índice de massa corporal é de: {arredondado}</p>
            
        )}else{
            return(
                <p>Por favor ingresa tus datos.</p>
            )
        }
        /*if (arredondado > 0 ){
            if (arredondado <= 18.5){
                return(
                    <p>O teu índice de massa corporal está abaixo do recomendado.</p>
                )
            } if({arredondado} >= 18.6 && {arredondado} <= 24.9) {
                return(
                    <p>O teu índice de massa corporal está normal.</p>
                )
            }if({arredondado} >= 25.0 && {arredondado} <= 29.9) {
                return(
                    <p>O teu índice de massa corporal está em sobrepeso.</p>
                )
            }if({arredondado} >= 30.0 && {arredondado} <= 34.9) {
                return(
                    <p>O teu índice de massa corporal está em obesidade grau I.</p>
                )
            }if({arredondado} >= 35.0 && {arredondado} <= 39.9) {
                return(
                    <p>O teu índice de massa corporal está em obesidade grau II.</p>
                )
            }if ({arredondado} >= 40) {
                return(
                    <p>O teu índice de massa corporal está em obesidade grau III.</p>
                )
            }
            return(
                
            )
        } else{
            return( 
                <p>Por favor ingresa teus dados no formato certo, peso em Kg e altura em metros.</p>
            )
        }*/
    }
    

    return(
        <>
        <form>
            <input type="text" placeholder="Digita teu nome?" onChange={evento =>setNome(evento.target.value)} />
            <input type="number"placeholder="Peso em Kg" onChange={evento => setPeso(evento.target.value)} />
            <input type="number" placeholder="Altura em m" onChange={evento =>setTamanho(evento.target.value)}/>
    {imc()}
    
    
    </form>

        
        </>
    )
}
export default Calculos;