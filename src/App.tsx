import { useState } from 'react'
import './App.css'

import logoImg from './assets/logo-aplicação.png'



function App() {
  
  return (
      <div>
        <main className='container'>
          <img 
          src={logoImg} 
          alt='logo-da-aplicação'
          />
          <h1 className='title'>Qual à melhor opção?</h1>
          <form className='form'>
            <label>Álcool (Preço por litro)</label>
          <input 
            className='input'
            type='number'
            placeholder='4.99'
            min="1"
            step="0.01"
            required
          />

          <label>Gasolina (Preço por litro)</label>
          <input 
            className='input'
            type='number'
            placeholder='4.99'
            min="1"
            step="0.01"
            required
          />

          <input className='button' type="submit" value="Calcular" />
          </form>
        </main>
      </div>
  )
}

export default App
