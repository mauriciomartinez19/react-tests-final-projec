import logo from './giphy.gif';
import './Menu.css';
import { data } from "./data";
import React, { useState, useEffect } from 'react'
import Menu from './menu';
import Navbar from './navbar';
import InputBar from './inputbar';

function MenuPage() {
  const [showFood, setShowFood] = useState([])
  const [isLoading, setIsLoading] = useState(true)


  const selectType = (e) => {
    const { name } = e.target
    name === 'all' ? setShowFood(data) :
      setShowFood(data.filter((food) => food.type === name))
  }
  const handleChange = (e) => {
    const { value } = e.target
    setIsLoading(true)
    if (value) {
      const showFood = data.filter((food) => food.title.toUpperCase().includes(value.toUpperCase()))
      const newFood = (showFood.length ? (showFood) : false)
      setShowFood(newFood)
    } else { setShowFood(data) }
    setTimeout(() => { setIsLoading(false) },
      1000)
  }

  useEffect(() => {
    setTimeout(() => {
      setShowFood(data)
      setIsLoading(false)
    },
      1000)
  }, [])

  return (
    <div className="App-menu">
      <h1 className='title'>Our Menu</h1>
      <div className='line' />
      <Navbar selectType={selectType} />
      <InputBar handleChange={handleChange} />
      {isLoading ? <img className='loading-logo' src={logo} alt='is loading' /> :
        (showFood ? <Menu showFood={showFood} />
          : <h1>No hay coincidencias</h1>)
      }
    </div >
  );
}

export default MenuPage;
