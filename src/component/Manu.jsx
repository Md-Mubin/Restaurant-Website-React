// ==================== All Import
import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Manu = () => {

    // ==================== useState Hook
    const [foodData, setFoodData] = useState([])

    // ==================== To Fetch From Api
    useEffect(() => {
        fetch("https://api.jsonbin.io/v3/b/66d3f631ad19ca34f89e1fe7")
            .then(response => response.json())
            .then(json => setFoodData(json.record))
    }, [])

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

                {/* ================= All Manus Fetched From Api =================  */}
                {
                    foodData.map((item) => (
                        <ul key={item.product_id} className='w-[306px] pb-[34px] flex flex-col items-center gap-6 border-2 rounded-xl hover:scale-105 transition duration-400 will-change-transform' >
                            <img src={item.image} alt="" />
                            <li className='font-DM_sans font-bold text-2xl text-[#AD343E]'>{item.price}</li>
                            <li className='font-DM_sans font-bold text-xl'>{item.name}</li>
                            <li className='px-[30px] text-center font-DM_sans font-normal text-base'>{item.info}</li>
                        </ul>
                    ))
                }

            </section >

            {/* ================= All Orders Way Part ================= */}
            <section className='bg-[#F9F9F7]' >
                <ul className='container py-[120px] flex justify-between items-center'>
                    <li className='w-[346px]'>
                        <h4 className='font-PlayfairD font-medium text-[55px] leading-[60px]'>You can order through apps</h4>
                        <p className='mt-5 font-PlayfairD font-medium  text-base leading-[24px]'>Lorem ipsum dolor sit amet consectetur adipiscing elit enim bibendum sed et aliquet aliquet risus tempor semper.</p>
                    </li>

                    {/* ------- All The Apps for Order ------- */}
                    <ul className='w-[830px] flex flex-wrap justify-center'>
                        <a href='#' className='w-[220px] hover:scale-125 transition duration-300'><img src='/uberEats.png'  alt="ubereats_image" /></a>
                        <a href='#' className='w-[220px] hover:scale-125 transition duration-300'><img src='/grubHub.png'   alt="grubhub_image" /></a>
                        <a href='#' className='w-[220px] hover:scale-125 transition duration-300'><img src='/postMates.png' alt="postMates_image" /></a>
                        <a href='#' className='w-[260px] hover:scale-125 transition duration-300'><img src='/doorDash.png'  alt="doorDash_image" /></a>
                        <a href='#' className='w-[260px] hover:scale-125 transition duration-300'><img src='/foodPanda.png' alt="foodPanda_image" /></a>
                        <a href='#' className='w-[260px] hover:scale-125 transition duration-300'><img src='/delivero.png'  alt="delivero_image" /></a>
                        <a href='#' className='w-[220px] hover:scale-125 transition duration-300'><img src='/inscart.png'   alt="inscart_image" /></a>
                        <a href='#' className='w-[220px] hover:scale-125 transition duration-300'><img src='/justeat.png'   alt="justeat_image" /></a>
                        <a href='#' className='w-[220px] hover:scale-125 transition duration-300'><img src='/didifood.png'  alt="didifood_image" /></a>
                    </ul>
                </ul>
            </section >

            {/* ================= Footer part ================= */}
            < Footer />
        </>
    )
}

export default Manu