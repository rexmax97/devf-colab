import React, { useState, useEffect } from 'react'

const Form = () => {
  const [title, setTitle] = useState('Título')
  const [subtitle, setSubtitle] = useState('Subtítulo')
  useEffect(() => {
    console.log('Solo cuando inicia')
  }, [])

  useEffect(() => {
  console.log('Efecto en título o subtítulo')
  }, [subtitle, title])

  const handleTitle = (e) => {
    setTitle(e.target.value)
  } 
  const handleSubtitle = (e) => {
    setSubtitle(e.target.value)
  } 
  return (
    <React.Fragment>
      <h1> { title } </h1>
      <h3> { subtitle } </h3>
      <input onChange={handleTitle} value={title}/>
      <input onChange={handleSubtitle} value={subtitle}/>
    </React.Fragment>
  )
}

export default Form
