
import React from "react";
import { CiSearch } from 'react-icons/ci';
import './Seach.css'

export default function SearchBar() {

    return (
        <div>
            <form action="" >
                <input type="search" name="" id="" placeholder='Busca de produtos' className='Seach__input' required />
                <button type='submit' className='seach__buton' >
                    <CiSearch />
                </button>
            </form>
        </div>
    )
}

