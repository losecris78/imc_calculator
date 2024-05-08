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