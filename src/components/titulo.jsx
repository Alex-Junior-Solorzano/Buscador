import React from 'react'

const Titulo = () => {
  return (
    <div>
        <div className='titulo'>
        <img className='logo'
          src={require(`../images/k2.png`)}
          alt='Logo'
        />
        <h1>Buscador </h1><br />
      </div>
    </div>
  )
}

export default Titulo