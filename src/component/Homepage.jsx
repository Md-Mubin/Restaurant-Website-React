import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { FiCoffee } from 'react-icons/fi'
import { BiBowlRice } from 'react-icons/bi'
import { LuGlassWater, LuShoppingCart } from 'react-icons/lu'
import { GiCakeSlice } from 'react-icons/gi'
import { FaPhone } from 'react-icons/fa'
import { IoIosMail, IoMdTime } from 'react-icons/io'
import { HiOutlineMapPin, HiOutlineReceiptPercent } from 'react-icons/hi2'
import { Link } from 'react-router-dom'

const Homepage = () => {
    return (
        <>
            <Navbar />
            <section className='relative'>
                <img src="../public/banner_bg.png" alt="banner_image" className='bg-cover w-full' />
                <header className='absolute top-[200px] left-[690px] text-center'>
                    <h1 className='font-PlayfairD text-[100px] font-normal leading-[96px]'>Best food for <br /> your taste</h1>
                    <p className='mt-8 font-DM_sans text-xl font-normal'>Discover delectable cuisine and unforgettable moments <br /> in our welcoming, culinary haven.</p>
                    <button className='mt-10 flex gap-4 ml-[100px] text-[#182226] text-base font-DM_sans font-bold'>
                        <button className='px-8 py-5 border-2 border-[#2C2F24] rounded-full hover:bg-[#AD343E] hover:text-white hover:border-[#AD343E] transition duration-200'>Book A Table</button>
                        <button className='px-8 py-5 border-2 border-[#2C2F24] rounded-full hover:bg-[#AD343E] hover:text-white hover:border-[#AD343E] transition duration-200'>Explore Manu</button>
                    </button>
                </header>
            </section>

            <section className='container pt-[92px] pb-[120px]'>
                <h2 className='font-PlayfairD font-medium text-[55px] leading-[60px] text-[#2C2F24] text-center'>Browse Our Menu</h2>

                <object className='mt-16 flex justify-between'>
                    <ul className='w-[305px] p-9 flex flex-col items-center gap-6 border-2 rounded-lg text-center'>
                        <li className='p-4 bg-[#e0e0e0] text-black text-[25px] rounded-full'><FiCoffee /></li>
                        <li className='font-DM_sans font-bold text-2xl leading-[30px]'>Breakfast</li>
                        <li className='font-DM_sans font-normal text-base leading-6'>In the new era of technology we look in the future with certainty and pride for our life.</li>
                        <li className='font-DM_sans font-bold text-base leading-6 text-[#AD343E]'>Explore Menu</li>
                    </ul>

                    <ul className='w-[305px] p-9 flex flex-col items-center gap-6 border-2 rounded-lg text-center'>
                        <li className='p-4 bg-[#e0e0e0] text-black text-[25px] rounded-full'><BiBowlRice /></li>
                        <li className='font-DM_sans font-bold text-2xl leading-[30px]'>Main Dishes</li>
                        <li className='font-DM_sans font-normal text-base leading-6'>In the new era of technology we look in the future with certainty and pride for our life.</li>
                        <li className='font-DM_sans font-bold text-base leading-6 text-[#AD343E]'>Explore Menu</li>
                    </ul>

                    <ul className='w-[305px] p-9 flex flex-col items-center gap-6 border-2 rounded-lg text-center'>
                        <li className='p-4 bg-[#e0e0e0] text-black text-[25px] rounded-full'><LuGlassWater /></li>
                        <li className='font-DM_sans font-bold text-2xl leading-[30px]'>Drinks</li>
                        <li className='font-DM_sans font-normal text-base leading-6'>In the new era of technology we look in the future with certainty and pride for our life.</li>
                        <li className='font-DM_sans font-bold text-base leading-6 text-[#AD343E]'>Explore Menu</li>
                    </ul>

                    <ul className='w-[305px] p-9 flex flex-col items-center gap-6 border-2 rounded-lg text-center'>
                        <li className='p-4 bg-[#e0e0e0] text-black text-[25px] rounded-full'><GiCakeSlice /></li>
                        <li className='font-DM_sans font-bold text-2xl leading-[30px]'>Desserts</li>
                        <li className='font-DM_sans font-normal text-base leading-6'>In the new era of technology we look in the future with certainty and pride for our life.</li>
                        <li className='font-DM_sans font-bold text-base leading-6 text-[#AD343E]'>Explore Menu</li>
                    </ul>
                </object>
            </section>

            <section className='bg-[#F9F9F7] py-[120px]'>
                <div className='container flex justify-between'>
                    <ul>
                        <img src="../public/visit_Image.png" alt="visit_image" />
                        <ul className='p-[50px] bg-[#474747] rounded-xl flex flex-col items-start w-[410px] text-white gap-[25px] translate-x-[240px] translate-y-[-250px]'>
                            <li className='mb-5 font-DM_sans font-bold text-2xl'>Come Visit With Us</li>
                            <a href='#' className='font-DM_sans text-base font-normal flex items-center hover:text-red-200'>< FaPhone className='text-xl mr-5' />(414) 857 - 0107</a>
                            <a href='#' className='font-DM_sans text-base font-normal flex items-center hover:text-red-200'>< IoIosMail className='text-xl mr-5' /> happytummy@restaurant.com</a>
                            <a href='#' className='font-DM_sans text-base font-normal flex hover:text-red-200'>< HiOutlineMapPin className='text-2xl mr-5' />837 W. Marshall Lane Marshalltown, IA 50158, Los Angeles</a>
                        </ul>
                    </ul>
                    <ul className='w-[560px] flex flex-col gap-6 justify-start'>
                        <h3 className='font-PlayfairD font-medium text-[55px] leading-[60px]'>We provide healthy food for your family.</h3>
                        <p className='font-DM_sans font-medium text-lg text-[#2C2F24]'>Our story began with a vision to create a unique dining experience that merges fine dining, exceptional service, and a vibrant ambiance. Rooted in city's rich culinary culture, we aim to honor our local roots while infusing a global palate.</p>
                        <p className='font-DM_sans font-normal text-base text-[#414536]'>At place, we believe that dining is not just about food, but also about the overall experience. Our staff, renowned for their warmth and dedication, strives to make every visit an unforgettable event.</p>
                        <button className='w-[180px] h-[65px] rounded-full border-2 border-[#2c2f24] font-DM_sans font-bold text-base text-[#182226] mt-4 hover:text-white hover:border-white hover:bg-black transition duration-800'>More About Us</button>
                    </ul>
                </div>
            </section>

            <section className='py-[120px] container'>
                <h3 className='font-PlayfairD font-medium text-[55px] leadin-[60px]'>We also offer unique <br /> services for your events</h3>
                <ul className='mt-16 flex justify-between'>
                    <ul className='flex flex-col justify-start gap-6 w-[306px]'>
                        <li><img src="../public/service1.png" alt="service1_image" /></li>
                        <li className='font-DM_sans font-bold text-2xl'>Caterings</li>
                        <li className='font-DM_sans font-normal text-base'>In the new era of technology we look in the future with certainty for life.</li>
                    </ul>

                    <ul className='flex flex-col justify-start gap-6 w-[306px]'>
                        <li><img src="../public/service2.png" alt="service2_image" /></li>
                        <li className='font-DM_sans font-bold text-2xl'>Birthdays</li>
                        <li className='font-DM_sans font-normal text-base'>In the new era of technology we look in the future with certainty for life.</li>
                    </ul>

                    <ul className='flex flex-col justify-start gap-6 w-[306px]'>
                        <li><img src="../public/service3.png" alt="service3_image" /></li>
                        <li className='font-DM_sans font-bold text-2xl'>Weddings</li>
                        <li className='font-DM_sans font-normal text-base'>In the new era of technology we look in the future with certainty for life.</li>
                    </ul>

                    <ul className='flex flex-col justify-start gap-6 w-[306px]'>
                        <li><img src="../public/service4.png" alt="service4_image" /></li>
                        <li className='font-DM_sans font-bold text-2xl'>Events</li>
                        <li className='font-DM_sans font-normal text-base'>In the new era of technology we look in the future with certainty for life.</li>
                    </ul>
                </ul>
            </section>

            <section className='bg-[#f9f9f7] py-[120px]'>
                <ul className='container flex justify-between'>
                    <ul className='flex gap-6'>
                        <li><img src="../public/chef.png" alt="chef_image" /></li>
                        <li className='mt-[30px] flex flex-col gap-6'>
                            <img src="../public/sour-curry.png" alt="sour_curry_image" />
                            <img src="../public/iron-salad.png" alt="iron_salad_image" />
                        </li>
                    </ul>
                    <ul className='w-[460px] flex flex-col gap-5 justify-center'>
                        <li className='font-PlayfairD font-medium text-[55px] leading-[60px]'>Fastest Food Delivery in City</li>
                        <li className='font-DM_sans font-normal text-base text-[#414536]'>Our visual designer lets you quickly and of drag a down your way to customapps for both keep desktop. </li>
                        <ul className='flex flex-col gap-4'>
                            <li className='flex items-center gap-4 text-xl font-DM_sans font-normal'><span className='p-2 text-white text-2xl bg-[#AD343E] rounded-full hover:bg-[#ca555f]'><IoMdTime/></span> Delivery within 30 minutes</li>
                            <li className='flex items-center gap-4 text-xl font-DM_sans font-normal'><span className='p-2 text-white text-2xl bg-[#AD343E] rounded-full hover:bg-[#ca555f]'><HiOutlineReceiptPercent/></span>Best Offer & Prices</li>
                            <li className='flex items-center gap-4 text-xl font-DM_sans font-normal'><span className='p-2 text-white text-2xl bg-[#AD343E] rounded-full hover:bg-[#ca555f]'><LuShoppingCart/></span>Online Services Available</li>
                        </ul>
                    </ul>
                </ul>
            </section >

            <section className='container py-[100px]'>
                <h4 className='font-PlayfairD font-medium text-[55px] leading-[60px] text-[#2C2F24] text-center'>What Our Customers  Say</h4>
                <div className='mt-16 flex justify-between '>
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

            <section className='container pt-[120px] py-5'>
                <ul className='flex justify-between'>
                    <h4 className='font-PlayfairD font-medium text-[55px] leading-[60px]'>Our Blog & Articles</h4>
                    <Link to = "/blog"><button className='w-[190px] h-[65px] bg-[#AD343E] text-white rounded-full hover:bg-red-600 transition duration-200'>Read All Articles</button></Link> 
                </ul>

                <ul className='mt-[130px] flex justify-between'>
                    <ul className='w-[836px] rounded-xl border-2'>
                        <img src="../public/burger.png" alt="burger_image" className='w-full'/>
                        <ul className='py-12 px-8 flex flex-col gap-[15px]'>
                            <li className='font-DM_sans font-medium text-base text-[#737865]'>January 3, 2023</li>
                            <li className='font-DM_sans font-medium text-xl'>The secret tips & tricks to prepare a perfect burger & pizza for our customers</li>
                            <li className='font-DM_sans font-normal text-base'>Lorem ipsum dolor sit amet consectetur of a adipiscing elitilmim semper adipiscing massa gravida nisi cras enim quis nibholm varius amet gravida ut facilisis neque egestas.</li>
                        </ul>
                    </ul>

                    <div className='w-[640px] flex flex-wrap gap-6'>
                        <ul className='w-[306px] rounded-xl border-2'>
                            <img src="../public/fries.png" alt="fries_image" />
                            <ul className='p-[25px]'>
                                <li className='font-DM_sans font-medium text-sm text-[#737865]'>January 3, 2023</li>
                                <li className='mt-3 font-DM_sans font-medium text-xl'>How to prepare the perfect french fries in an air fryer</li>
                            </ul>
                        </ul>

                        <ul className='w-[306px] rounded-xl border-2'>
                            <img src="../public/nugget.png" alt="nugget_image" />
                            <ul className='p-[25px]'>
                                <li className='font-DM_sans font-medium text-sm text-[#737865]'>January 3, 2023</li>
                                <li className='mt-3 font-DM_sans font-medium text-xl'>How to prepare delicious chicken tenders</li>
                            </ul>
                        </ul>

                        <ul className='w-[306px] rounded-xl border-2'>
                            <img src="../public/chocake.png" alt="chocake_image" />
                            <ul className='p-[25px]'>
                                <li className='font-DM_sans font-medium text-sm text-[#737865]'>January 3, 2023</li>
                                <li className='mt-3 font-DM_sans font-medium text-xl'>7 delicious cheesecake recipes you can prepare</li>
                            </ul>
                        </ul>

                        <ul className='w-[306px] rounded-xl border-2'>
                            <img src="../public/pizza.png" alt="pizza_image" />
                            <ul className='p-[25px]'>
                                <li className='font-DM_sans font-medium text-sm text-[#737865]'>January 3, 2023</li>
                                <li className='mt-3 font-DM_sans font-medium text-xl'>5 great pizza restaurants you should visit this city</li>
                            </ul>
                        </ul>
                    </div>
                </ul>
            </section>

            <Footer />
        </>
    )
}

export default Homepage