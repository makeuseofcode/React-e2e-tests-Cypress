import React, { useState,useRef } from 'react'
import './App.css'
import Products from './components/Products'

function App() {
  const [searchInput, setSearchInput] = useState('')
  const searchInputRef = useRef('');

  const handleSubmit = (e) => {
    setSearchInput(searchInputRef.current.value);
  }

  return (
    <div>
      <h1>Cypress Testing Library tutorial</h1>
        <label htmlFor="input">Input</label>
      
        <input
          id="text"
          type="text"
          ref={searchInputRef}
        />
        <button id="btn" type="button" onClick={handleSubmit}>Submit</button>
      <Products data-testid="products-component" searchInput={searchInput} />
      
    </div>
  )
}

export default App
