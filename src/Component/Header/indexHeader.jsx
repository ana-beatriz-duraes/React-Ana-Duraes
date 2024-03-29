import '../Header/CssHeader.css'
import Navigation from "../Navigation"
import Logotipo from "../Logotipo"
import Carrinho from "../Carrinho"
import { CiSearch } from 'react-icons/ci';
import React from 'react'


export default function Header() {
    return (

        <header className="back display">
            <Logotipo />
            <form action="" >
                <input type="search" name="" id="" placeholder='Busca de produtos' className='Seach__input' required />
                <button type='submit' className='seach__buton' >
                    <CiSearch />
                </button>
            </form>
            <Navigation />
            <Carrinho />
        </header>
    )
}