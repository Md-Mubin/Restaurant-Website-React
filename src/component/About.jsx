// ==================== All Import
import React                     from 'react'
import Navbar                    from './Navbar'
import Footer                    from './Footer'
import { BsAlarm }               from 'react-icons/bs'
import { IoIosMail }             from 'react-icons/io'
import { GrMultiple }            from 'react-icons/gr'
import { RiWindowLine }          from 'react-icons/ri'
import { HiOutlineMapPin }       from 'react-icons/hi2'
import { FaGooglePlay, FaPhone } from 'react-icons/fa'

const About = () => {
    return (
        <>
            {/* ================= Navbar Part ================= */}
            <Navbar />

            {/* ================= About Header Part ================= */}
            <section className='container mt-[85px] flex justify-between'>

                {/* ---------- About Banner Part ---------- */}
                <ul>
                    <img src="../public/aboutBanner.png" alt="banner_image" />
                    <ul className='p-[50px] bg-[#474747] rounded-xl flex flex-col items-start w-[410px] text-white gap-[25px] translate-x-[300px] translate-y-[-200px]'>
                        <li className='mb-5 font-DM_sans font-bold text-2xl'>Come Visit With Us</li>
                        <a href='#' className='font-DM_sans text-base font-normal flex items-center hover:text-red-200'>
                            < FaPhone className='text-xl mr-5' />
                            (414) 857 - 0107
                        </a>
                        <a href='#' className='font-DM_sans text-base font-normal flex items-center hover:text-red-200'>
                            < IoIosMail className='text-xl mr-5' /> 
                            happytummy@restaurant.com
                        </a>
                        <a href='#' className='font-DM_sans text-base font-normal flex hover:text-red-200'>
                            < HiOutlineMapPin className='text-2xl mr-5' />
                            837 W. Marshall Lane Marshalltown, IA 50158, Los Angeles
                        </a>
                    </ul>
                </ul>

                {/* ---------- About Banner Info Part ---------- */}
                <ul className='w-[560px] flex flex-col gap-6 justify-start'>
                    <h3 className='font-PlayfairD font-medium text-[55px] leading-[60px]'>
                        We provide healthy food for your family.
                    </h3>
                    <p className='font-DM_sans font-medium text-lg text-[#2C2F24]'>
                        Our story began with a vision to create a unique dining experience that merges fine dining, exceptional service, and a vibrant ambiance. Rooted in city's rich culinary culture, we aim to honor our local roots while infusing a global palate.
                    </p>
                    <p className='font-DM_sans font-normal text-base text-[#414536]'>
                        At place, we believe that dining is not just about food, but also about the overall experience. Our staff, renowned for their warmth and dedication, strives to make every visit an unforgettable event.
                    </p>
                </ul>
            </section>

            {/* ================= About Video Part ================= */}
            <section className='w-full relative'>
                <img src="../public/aboutVideo.png" alt="about_video_image" className='w-full bg-cover' />
                <ul className='absolute top-[40%] left-[50%]'>
                    <button className='p-5 bg-white rounded-full text-xl hover:scale-125 transition duration-300'><FaGooglePlay /></button>
                    <li className='w-[596px] text-center font-PlayfairD font-medium text-[55px] leading-[60px] mt-[34px] absolute top-[60%] left-[-250px] text-white'>Feel the authentic & original taste from us</li>
                </ul>
            </section>

            {/* ================= All Benefits Part ================= */}
            <section className='container flex justify-between py-20'>

                {/* ------ multi benefit ------ */}
                <div className='w-[366px] flex gap-7'> 
                    <GrMultiple className='text-4xl mt-[-4px]' />
                    <ul>
                        <li className='font-DM_sans font-bold text-xl'>Multi Cuisine</li>
                        <li className='font-DM_sans font-normal text-sm mt-4'>In the new era of technology we look in the future with certainty life.</li>
                    </ul>
                </div>

                {/* ------ order benefit ------ */}
                <div className='w-[366px] flex gap-7'> 
                    <RiWindowLine className='text-4xl mt-[-4px]' />
                    <ul>
                        <li className='font-DM_sans font-bold text-xl'>Easy To Order</li>
                        <li className='font-DM_sans font-normal text-sm mt-4'>In the new era of technology we look in the future with certainty life.</li>
                    </ul>
                </div>

                {/* ------ delivery benefit ------ */}
                <div className='w-[366px] flex gap-7'> 
                    <BsAlarm className='text-4xl mt-[-4px]' />
                    <ul>
                        <li className='font-DM_sans font-bold text-xl'>Fast Delivery</li>
                        <li className='font-DM_sans font-normal text-sm mt-4'>In the new era of technology we look in the future with certainty life.</li>
                    </ul>
                </div>
            </section>

            {/* ================= Inside Info Part ================= */}
            <section className='w-full py-[120px] bg-[#F9F9F7]'>
                <div className='container flex justify-between'>
                    <ul className='w-[610px]'>
                        <h1 className='font-PlayfairD font-medium text-[55px] leading-[60px]'>A little information for our valuable guest</h1>
                        <p className='font-DM_sans font-normal text-base mt-5'>At place, we believe that dining is not just about food, but also about the overall experience. Our staff, renowned for their warmth and dedication, strives to make every visit an unforgettable event.</p>
                        
                        {/* ---------- inside info ---------- */}
                        <ul className='flex flex-wrap gap-6 mt-[60px]'>

                            {/* ---------- location part ---------- */}
                            <ul className='w-[290px] h-[175px] flex flex-col items-center justify-center gap-5 border-1 bg-white rounded-xl hover:scale-105 transition duration-300'>
                                <li className='font-PlayfairD font-medium text-[55px]'>3</li>
                                <li className='font-DM_sans font-medium text-lg'>Locations</li>
                            </ul>

                            {/* ---------- founded part ---------- */}
                            <ul className='w-[290px] h-[175px] flex flex-col items-center justify-center gap-5 border-1 bg-white rounded-xl hover:scale-105 transition duration-300'>
                                <li className='font-PlayfairD font-medium text-[55px]'>1995</li>
                                <li className='font-DM_sans font-medium text-lg'>Founded</li>
                            </ul>

                            {/* ---------- staff part ---------- */}
                            <ul className='w-[290px] h-[175px] flex flex-col items-center justify-center gap-5 border-1 bg-white rounded-xl hover:scale-105 transition duration-300'>
                                <li className='font-PlayfairD font-medium text-[55px]'>65+</li>
                                <li className='font-DM_sans font-medium text-lg'>Staff Members</li>
                            </ul>

                            {/* ---------- satisfied customer part ---------- */}
                            <ul className='w-[290px] h-[175px] flex flex-col items-center justify-center gap-5 border-1 bg-white rounded-xl hover:scale-105 transition duration-300'>
                                <li className='font-PlayfairD font-medium text-[55px]'>100%</li>
                                <li className='font-DM_sans font-medium text-lg'>Satisfied Customers</li>
                            </ul>
                        </ul>
                    </ul>

                    {/* ---------- inside part image ---------- */}
                    <ul>
                        <img src="../public/cooking.png" alt="cooking_image" />
                    </ul>
                </div>
            </section>

            {/* ================= Review Part ================= */}
            <section className='container py-[100px]'>

                {/* ------ header ------ */}
                <h4 className='font-PlayfairD font-medium text-[55px] leading-[60px] text-[#2C2F24] text-center'>What Our Customers  Say</h4>

                {/* ------ all reviewers ------ */}
                <div className='mt-16 flex justify-between '>

                    {/* ------ reviewer ------ */}
                    <ul className='w-[416px] p-[35px] flex flex-col bg-[#F9F9F7] gap-8'>
                        <li className='font-DM_sans font-bold text-2xl leading-[30px] text-[#AD343E]'>“The best restaurant”</li>
                        <li className='font-DM_sans font-normal text-lg leading-7'>Last night, we dined at place and were simply blown away. From the moment we stepped in, we were enveloped in an inviting atmosphere and greeted with warm smiles.</li>
                        <ul className='flex gap-5'>
                            <img src="../public/reviewer1.png" alt="reviewer_img" />
                            <ul className='flex flex-col justify-center gap-1'>
                                <li className='font-DM_sans font-bold text-base'>Sophire Robson</li>
                                <li className='font-DM_sans font-normal text-base'>Los Angeles, CA</li>
                            </ul>
                        </ul>
                    </ul>

                    {/* ------ reviewer ------ */}
                    <ul className='w-[416px] p-[35px] flex flex-col bg-[#F9F9F7] gap-8'>
                        <li className='font-DM_sans font-bold text-2xl leading-[30px] text-[#AD343E]'>“Simply delicious”</li>
                        <li className='font-DM_sans font-normal text-lg leading-7'>Place exceeded my expectations on all fronts. The ambiance was cozy and relaxed, making it a perfect venue for our anniversary dinner. Each dish was prepared and beautifully presented.</li>
                        <ul className='flex gap-5'>
                            <img src="../public/reviewer2.png" alt="reviewer_img" />
                            <ul className='flex flex-col justify-center gap-1'>
                                <li className='font-DM_sans font-bold text-base'>Matt Cannon</li>
                                <li className='font-DM_sans font-normal text-base'>San Diego, CA</li>
                            </ul>
                        </ul>
                    </ul>

                    {/* ------ reviewer ------ */}
                    <ul className='w-[416px] p-[35px] flex flex-col bg-[#F9F9F7] gap-8'>
                        <li className='font-DM_sans font-bold text-2xl leading-[30px] text-[#AD343E]'>“One of a kind restaurant”</li>
                        <li className='font-DM_sans font-normal text-lg leading-7'>The culinary experience at place is first to none. The atmosphere is vibrant, the food - nothing short of extraordinary. The food was the highlight of our evening. Highly recommended.</li>
                        <ul className='flex gap-5'>
                            <img src="../public/reviewer3.png" alt="reviewer_img" />
                            <ul className='flex flex-col justify-center gap-1'>
                                <li className='font-DM_sans font-bold text-base'>Andy Smith</li>
                                <li className='font-DM_sans font-normal text-base'>San Francisco, CA</li>
                            </ul>
                        </ul>
                    </ul>
                </div>
            </section>

            {/* ================= Footer part ================= */}
            <Footer />
        </>
    )
}

export default About