import React from 'react'

export default function CampoConArray(props) {
    console.log(props);
    // let {titulo} = props
    // let {datos} = props
    let {datos} = props // saco dos propiedades del objeto props
  return (
    <div className='datos white flex a-center'>
    <p> {datos}</p>
  </div>
  )
}

/* <div className='datos white flex a-center'>
<p>Comidas: lasaña y hamburguesa</p>
</div> */