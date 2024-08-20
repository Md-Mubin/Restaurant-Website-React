import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Book = () => {
    return (
        <>
            {/* ================= Navbar part ================= */}
            <Navbar />

            {/* ================= Booking part Start ================= */}

            {/* ============== Ingo Part ============== */}
            <section >
                <header className='container text-center mt-4'>
                    <h1 className='font-PlayfairD text-[100px] font-normal leading-[96px]'>Book A Table</h1>
                    <p className='font-DM_sans text-lg leading-[28px] font-normal mt-6'>We consider all the drivers of change gives you the components <br /> you need to change to create a truly happens.</p>
                </header>

                {/* ============== Form Part ============== */}
                <form className='w-[800px] container p-10 mt-[72px] shadow-2xl rounded-2xl'>
                    <ul className='flex gap-6 flex-col'>
                        <ul className='flex gap-2'>

                            {/* for date */}
                            <li>
                                <p className='ml-4 font-DM_sans font-bold text-base'>Date</p>
                                <input type="date" placeholder='Enter Your Name' className='w-[350px] h-[60px] rounded-full border-2 px-4 mt-2 outline-none' />
                            </li>

                            {/* for time */}
                            <li>
                                <p className='ml-4 font-DM_sans font-bold text-base'>Time</p>
                                <input type="time" placeholder='Enter Your Email' className='w-[350px] h-[60px] rounded-full border-2 px-4 mt-2 outline-none' />
                            </li>
                        </ul>

                        <ul className='flex gap-2'>

                            {/* for name */}
                            <li>
                                <p className='ml-4 font-DM_sans font-bold text-base'>Date</p>
                                <input type="text" placeholder='Enter Your Name' className='w-[350px] h-[60px] rounded-full border-2 px-4 mt-2 outline-none' />
                            </li>

                            {/* for phone */}
                            <li>
                                <p className='ml-4 font-DM_sans font-bold text-base'>Phone</p>
                                <input type="number" placeholder='Enter Your phone' className='w-[350px] h-[60px] rounded-full border-2 px-4 mt-2 outline-none' />
                            </li>
                        </ul>


                        {/* for subject */}
                        <ul>
                            <p className='ml-4 font-DM_sans font-bold text-base'>Total Person</p>
                            <input type="Number" placeholder='1' className='w-full h-[60px] rounded-full border-2 pl-4 mt-2 outline-none' />
                        </ul>

                        {/* for send button */}
                        <ul>
                            <button className='w-full py-5 bg-[#AD343E] text-white rounded-full font-DM_sans font-bold text-base'>Send</button>
                        </ul>
                    </ul>
                </form>
            </section>

            {/* ================= Footer part ================= */}
            <Footer />

        </>
    )
}

export default Book