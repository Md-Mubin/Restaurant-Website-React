// ==================== All Import
import React            from 'react'
import { Link }         from 'react-router-dom'
import footer_logo      from '../assets/footerLogo.png'
import footer_img1      from '../assets/footerImg1.png'
import footer_img2      from '../assets/footerImg2.png'
import footer_img3      from '../assets/footerImg3.png'
import footer_img4      from '../assets/footerImg4.png'
import { FaFacebookF, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa'

const Footer = () => {
    return (
        <>
            {/* ================= Footer Part ================= */}
            <footer className='mt-[125px] w-full bg-[#474747] px-[150px] pt-[120px] pb-[55px]'>
                <ul className=' flex justify-between'>
                    <ul className='flex flex-col gap-[30px] text-white'>

                        {/* ------- Footer Logo ------- */}
                        <li className='flex items-center '>
                            <img src={footer_logo} alt="footer_logo_Image" />
                            <h3 className='ml-3 font-PlayfairD font-semibold text-[33px] italic leading-[30px]'>Bistro Biliss</h3>
                        </li>

                        {/* ------- Footer Info ------- */}
                        <li>
                            In the new era of technology we look a <br /> in the future with certainty and pride to <br /> for our company and.
                        </li>

                        {/* ------- All Social Links ------- */}
                        <li className='flex gap-3'>
                            <a href="#" className='text-[20px] p-[10px] bg-[#AD343E] hover:bg-red-600 rounded-full'><FaTwitter /></a>
                            <a href="#" className='text-[20px] p-[10px] bg-[#AD343E] hover:bg-red-600 rounded-full'><FaFacebookF /></a>
                            <a href="#" className='text-[20px] p-[10px] bg-[#AD343E] hover:bg-red-600 rounded-full'><FaInstagram /></a>
                            <a href="#" className='text-[20px] p-[10px] bg-[#AD343E] hover:bg-red-600 rounded-full'><FaGithub /></a>
                        </li>
                    </ul>

                    {/* ================= All Pages Link Part ================= */}
                    <ul className='text-white'>
                        <h4 className='font-DM_sans font-bold text-base'>Pages</h4>
                        <li className=' flex flex-col gap-5 font-DM_sans font-normal text-base mt-10 '>
                            <Link to = "/" className='hover:text-red-400'>Home</Link>
                            <Link to = "/about" className='hover:text-red-400'>About</Link>
                            <Link to = "/manu" className='hover:text-red-400'>Manu</Link>
                            <Link to = "/blog" className='hover:text-red-400'>Blog</Link>
                            <Link to = "/contact" className='hover:text-red-400'>Contact</Link>
                            <Link to = "#" className='hover:text-red-400'>Delivery</Link>
                        </li>
                    </ul>

                    {/* ================= All Utility Pages Link Part ================= */}
                    <ul className='text-white'>
                        <h4 className='font-DM_sans font-bold text-base'>Utility Pages</h4>
                        <li className=' flex flex-col gap-5 font-DM_sans font-normal text-base mt-10 '>
                            <Link to = "#" className='hover:text-red-400'>Start Here</Link>
                            <Link to = "#" className='hover:text-red-400'>Styleguide</Link>
                            <Link to = "#" className='hover:text-red-400'>Password Protected</Link>
                            <Link to = "#" className='hover:text-red-400'>404 Not Found</Link>
                            <Link to = "#" className='hover:text-red-400'>Licenses</Link>
                            <Link to = "#" className='hover:text-red-400'>Changelog</Link>
                            <Link to = "#" className='hover:text-red-400'>View More</Link>
                        </li>
                    </ul>

                    {/* ================= Footer Images Part ================= */}
                    <ul>
                        <a href='#' className='text-white font-DM_sans font-bold text-base hover:text-red-300 duration-200'>Follow Us On Instagram</a>
                        <li className='w-[405px] mt-10 flex flex-wrap gap-3'>
                            <img src={footer_img1} alt="footer_img1" className='hover:scale-105 duration-300' />
                            <img src={footer_img2} alt="footer_img2" className='hover:scale-105 duration-300' />
                            <img src={footer_img3} alt="footer_img3" className='hover:scale-105 duration-300' />
                            <img src={footer_img4} alt="footer_img4" className='hover:scale-105 duration-300' />
                        </li>
                    </ul>
                </ul>

                {/* ================= Copy-Right Part ================= */}
                <p className='mt-[130px] text-[#ADB29E] text-base font-DM_sans font-normal text-center'>Copyright © 2023 Hashtag Developer. All Rights Reserved</p>  
            </footer>
        </>
    )
}

export default Footer