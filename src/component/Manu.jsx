// ==================== All Import
import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Manu = () => {
    return (
        <>
            {/* ================= Navbar part ================= */}
            <Navbar />

            {/* ================= Manu Selection part ================= */}
            <section className='container mt-[85px] text-center'>
                <h1 className='font-PlayfairD font-normal text-[100px] leading-[96px]'>Our Manu</h1>
                <p className='mt-5 font-DM_sans font-normal text-lg text-[#495460]'>We consider all the drivers of change gives you the components you need to change to create a truly happens.</p>

                {/* ---------- All Selection ---------- */}
                <ul className='flex justify-center gap-4 mt-[50px] font-DM_sans font-bold text-base text-[#2C2F24]'>
                    <button className='w-[150px] h-12 hover:bg-[#AD343E] hover:text-white rounded-full border-2 transition duration-400'>All</button>
                    <button className='w-[150px] h-12 hover:bg-[#AD343E] hover:text-white rounded-full border-2 transition duration-400'>Breakfast</button>
                    <button className='w-[150px] h-12 hover:bg-[#AD343E] hover:text-white rounded-full border-2 transition duration-400'>Main Dishes</button>
                    <button className='w-[150px] h-12 hover:bg-[#AD343E] hover:text-white rounded-full border-2 transition duration-400'>Drinks</button>
                    <button className='w-[150px] h-12 hover:bg-[#AD343E] hover:text-white rounded-full border-2 transition duration-400'>Desserts</button>
                </ul>
            </section>

            {/* ================= All Manus part ================= */}
            <section className='container mt-[88px] pb-[132px] flex flex-wrap justify-center gap-6'>

                {/* ------- items ------- */}
                <ul className='w-[306px] pb-[34px] flex flex-col items-center gap-6 border-2 rounded-xl hover:scale-105 transition duration-400'>
                    <li><img src="../public/friedEggs.png" alt="fried_eggs_image" /></li>
                    <li className='font-DM_sans font-bold text-2xl text-[#AD343E]'>$ 9.99</li>
                    <li className='font-DM_sans font-bold text-xl'>Fried Eggs</li>
                    <li className='px-[30px] text-center font-DM_sans font-normal text-base'>Made with eggs, lettuce, salt, oil and other ingredients.</li>
                </ul>

                {/* ------- items ------- */}
                <ul className='w-[306px] pb-[34px] flex flex-col items-center gap-6 border-2 rounded-xl hover:scale-105 transition duration-400'>
                    <li><img src="../public/hwaiPizza.png" alt="hwaipizza_image" /></li>
                    <li className='font-DM_sans font-bold text-2xl text-[#AD343E]'>$ 15.99</li>
                    <li className='font-DM_sans font-bold text-xl'>Hawaiian Pizza</li>
                    <li className='px-[30px] text-center font-DM_sans font-normal text-base'>Made with eggs, lettuce, salt, oil and other ingredients.</li>
                </ul>

                {/* ------- items ------- */}
                <ul className='w-[306px] pb-[34px] flex flex-col items-center gap-6 border-2 rounded-xl hover:scale-105 transition duration-400'>
                    <li><img src="../public/cocktail.png" alt="cocktail_image" /></li>
                    <li className='font-DM_sans font-bold text-2xl text-[#AD343E]'>$ 7.25</li>
                    <li className='font-DM_sans font-bold text-xl'>Martinez Cocktail</li>
                    <li className='px-[30px] text-center font-DM_sans font-normal text-base'>Made with eggs, lettuce, salt, oil and other ingredients.</li>
                </ul>

                {/* ------- items ------- */}
                <ul className='w-[306px] pb-[34px] flex flex-col items-center gap-6 border-2 rounded-xl hover:scale-105 transition duration-400'>
                    <li><img src="../public/butterCake.png" alt="butter_cake_image" /></li>
                    <li className='font-DM_sans font-bold text-2xl text-[#AD343E]'>$ 20.99</li>
                    <li className='font-DM_sans font-bold text-xl'>Butterscotch Cake</li>
                    <li className='px-[30px] text-center font-DM_sans font-normal text-base'>Made with eggs, lettuce, salt, oil and other ingredients.</li>
                </ul>

                {/* ------- items ------- */}
                <ul className='w-[306px] pb-[34px] flex flex-col items-center gap-6 border-2 rounded-xl hover:scale-105 transition duration-400'>
                    <li><img src="../public/lemonade.png" alt="lemonade_image" /></li>
                    <li className='font-DM_sans font-bold text-2xl text-[#AD343E]'>$ 5.89</li>
                    <li className='font-DM_sans font-bold text-xl'>Mint Lemonade</li>
                    <li className='px-[30px] text-center font-DM_sans font-normal text-base'>Made with eggs, lettuce, salt, oil and other ingredients.</li>
                </ul>

                {/* ------- items ------- */}
                <ul className='w-[306px] pb-[34px] flex flex-col items-center gap-6 border-2 rounded-xl hover:scale-105 transition duration-400'>
                    <li><img src="../public/chocoIce.png" alt="chocoIce_image" /></li>
                    <li className='font-DM_sans font-bold text-2xl text-[#AD343E]'>$ 18.05</li>
                    <li className='font-DM_sans font-bold text-xl'>Chocolate Icecream</li>
                    <li className='px-[30px] text-center font-DM_sans font-normal text-base'>Made with eggs, lettuce, salt, oil and other ingredients.</li>
                </ul>

                {/* ------- items ------- */}
                <ul className='w-[306px] pb-[34px] flex flex-col items-center gap-6 border-2 rounded-xl hover:scale-105 transition duration-400'>
                    <li><img src="../public/cheeseBurger.png" alt="cheese_urger_image" /></li>
                    <li className='font-DM_sans font-bold text-2xl text-[#AD343E]'>$ 12.55</li>
                    <li className='font-DM_sans font-bold text-xl'>Cheese Burger</li>
                    <li className='px-[30px] text-center font-DM_sans font-normal text-base'>Made with eggs, lettuce, salt, oil and other ingredients.</li>
                </ul>

                {/* ------- items ------- */}
                <ul className='w-[306px] pb-[34px] flex flex-col items-center gap-6 border-2 rounded-xl hover:scale-105 transition duration-400'>
                    <li><img src="../public/waffle.png" alt="waffle_image" /></li>
                    <li className='font-DM_sans font-bold text-2xl text-[#AD343E]'>$ 12.99</li>
                    <li className='font-DM_sans font-bold text-xl'>Classic Waffles</li>
                    <li className='px-[30px] text-center font-DM_sans font-normal text-base'>Made with eggs, lettuce, salt, oil and other ingredients.</li>
                </ul>
            </section>

            {/* ================= All Orders Way Part ================= */}
            <section className='bg-[#F9F9F7]'>
                <ul className='container py-[120px] flex justify-between items-center'>
                    <li className='w-[346px]'>
                        <h4 className='font-PlayfairD font-medium text-[55px] leading-[60px]'>You can order through apps</h4>
                        <p className='mt-5 font-PlayfairD font-medium  text-base leading-[24px]'>Lorem ipsum dolor sit amet consectetur adipiscing elit enim bibendum sed et aliquet aliquet risus tempor semper.</p>
                    </li>

                    {/* ------- All The Apps for Order ------- */}
                    <ul className='w-[830px] flex flex-wrap justify-center'>
                        <a href='#' className='w-[220px] hover:scale-125 transition duration-300'><img src="../public/uberEats.png"  alt="ubereats_image" /></a>
                        <a href='#' className='w-[220px] hover:scale-125 transition duration-300'><img src="../public/grubHub.png"   alt="grubhub_image" /></a>
                        <a href='#' className='w-[220px] hover:scale-125 transition duration-300'><img src="../public/postMates.png" alt="postMates_image" /></a>
                        <a href='#' className='w-[260px] hover:scale-125 transition duration-300'><img src="../public/doorDash.png"  alt="doorDash_image" /></a>
                        <a href='#' className='w-[260px] hover:scale-125 transition duration-300'><img src="../public/foodPanda.png" alt="foodPanda_image" /></a>
                        <a href='#' className='w-[260px] hover:scale-125 transition duration-300'><img src="../public/delivero.png"  alt="delivero_image" /></a>
                        <a href='#' className='w-[220px] hover:scale-125 transition duration-300'><img src="../public/inscart.png"   alt="inscart_image" /></a>
                        <a href='#' className='w-[220px] hover:scale-125 transition duration-300'><img src="../public/justeat.png"   alt="justeat_image" /></a>
                        <a href='#' className='w-[220px] hover:scale-125 transition duration-300'><img src="../public/didifood.png"  alt="didifood_image" /></a>
                    </ul>
                </ul>
            </section>

            {/* ================= Footer part ================= */}
            <Footer />
        </>
    )
}

export default Manu