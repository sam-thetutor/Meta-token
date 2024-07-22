import React from 'react'

const Footter = () => {
  return (
    <div className='w-screen py-3 px-1 bg-gradient-to-r from-[#211500] to-[#211500] text-white'>
    <div className='max-w-[1240px] text-center m-auto'>
        <ul className='flex justify-center gap-1'>
            <li className='nav-item'>
                <a href='/'>Home</a>
            </li>
            <li className='nav-item'>
                <a href='#about'>About</a>
            </li>
            <li className='nav-item'>
                <a href='#tokenomics'>Tokenomics</a>
            </li>
            <li className='nav-item'>
                <a href='#buy'>Buy</a>
            </li>
        </ul>
        <div className='pt-1 text-center'>
            <span className='mb-1'></span>
            <p>2024, Inc. All rights reserved</p>
        </div>
    </div>
</div>
  )
}

export default Footter
