import { useState, FormEvent } from 'react'
import './App.css'

import logoImg from './assets/logo-aplicação.png'

//Cálculo: álcool / gasolina 
// E se o resultado for menor que 0.7 comp-ensa usar o álcool

interface InfoProps{
  title: string
  gasolina: string | number
  alcool: string | number
}


function App() {
  const [gasolinaInput, SetGasolinaInput] = useState ("")
  const [alcoolInput, SetAlcoollInput] = useState ("")
  const [info, setInfo] = useState<InfoProps>()
  function calcular(event: FormEvent){
    event.preventDefault() //Não dá o refresh na página
    let calculo = (alcoolInput / gasolinaInput)

    if(calculo <= 0.7){
      setInfo({
        title: "Vale usar álcool",
        gasolina: formatarMoeda(gasolinaInput),
        alcool: formatarMoeda(alcoolInput)
      })
    }else{
      setInfo({
        title: "Vale usar gasolina",
        gasolina: formatarMoeda(gasolinaInput),
        alcool: formatarMoeda(alcoolInput)
      })
    }
  }

 //Função de formatação da moeda
  function formatarMoeda(valor: number){
    let valorFormatado = valor.toLocaleString("pt-br",
    {
      style: "currency",
      currency: "BRL"
    })
    return valorFormatado
  }

  return (
      <div>
        <main className='container'>
          <img 
          src={logoImg} 
          alt='logo-da-aplicação'
          />
          <h1 className='title'>Qual à melhor opção?</h1>
          <form className='form' onSubmit={calcular}>
            <label>Álcool (Preço por litro)</label>
          <input 
            className='input'
            type='number'
            placeholder='4.99'
            min="1"
            step="0.01"
            value={alcoolInput}
            onChange={ (e) => SetAlcoollInput(Number(e.target.value)) }
            required
          />

          <label>Gasolina (Preço por litro)</label>
          <input 
            className='input'
            type='number'
            placeholder='4.99'
            min="1"
            step="0.01"
            value={gasolinaInput}
            onChange={ (e) => SetGasolinaInput(Number(e.target.value)) }
            required
          />

          <input className='button' type="submit" value="Calcular" />
          </form>

          
         {info && Object.keys(info).length > 0 && (
          //redenrização condicional
          <section className='result'>
           <h2 className='result-title'>
            {info.title}
           </h2>

           <span>Álcool: {info.alcool}</span>
           <span>Gasolina: {info.gasolina}</span>
         </section>
         )}
        </main>
      </div>
  )
}

export default App
