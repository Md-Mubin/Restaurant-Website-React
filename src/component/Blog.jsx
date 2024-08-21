// ==================== All Import
import React   from 'react'
import Navbar  from './Navbar'
import Footer  from './Footer'

const Blog = () => {
    return (
        <>
            {/* ================= Navbar Part ================= */}
            <Navbar />

            {/* ================= Blog Head Part ================= */}
            <section className='container text-center mt-[68px]'>
                <h1 className='font-PlayfairD font-normal text-[100px] leading-[96px]'>Our Blog & Articles</h1>
                <p className='mt-6 font-DM_sans font-normal text-lg'>We consider all the drivers of change gives you the components you need <br /> to change to create a truly happens.</p>
            </section>

            {/* ================= All Article Part ================= */}
            <section className='container mt-[72px] flex flex-wrap justify-center gap-10'>

                {/* ------- items ------- */}
                <ul className='w-[306px] flex flex-col gap-5 border-2 rounded-xl pb-[26px] hover:scale-105 transition duration-800'>
                    <li><img src="../public/blog1.png" alt="blog_image" /></li>
                    <li className='ml-6 font-DM_sans font-medium text-sm'>January 3, 2023</li>
                    <li className='px-6 font-DM_sans font-medium text-xl'>How to prepare a delicious gluten free sushi</li>
                </ul>

                {/* ------- items ------- */}
                <ul className='w-[306px] flex flex-col gap-5 border-2 rounded-xl pb-[26px] hover:scale-105 transition duration-800'>
                    <li><img src="../public/blog2.png" alt="blog_image" /></li>
                    <li className='ml-6 font-DM_sans font-medium text-sm'>January 3, 2023</li>
                    <li className='px-6 font-DM_sans font-medium text-xl'>Exclusive baking lessons from the pastry king</li>
                </ul>

                {/* ------- items ------- */}
                <ul className='w-[306px] flex flex-col gap-5 border-2 rounded-xl pb-[26px] hover:scale-105 transition duration-800'>
                    <li><img src="../public/blog3.png" alt="blog_image" /></li>
                    <li className='ml-6 font-DM_sans font-medium text-sm'>January 3, 2023</li>
                    <li className='px-6 font-DM_sans font-medium text-xl'>How to prepare the perfect fries in an air fryer</li>
                </ul>

                {/* ------- items ------- */}
                <ul className='w-[306px] flex flex-col gap-5 border-2 rounded-xl pb-[26px] hover:scale-105 transition duration-800'>
                    <li><img src="../public/blog4.png" alt="blog_image" /></li>
                    <li className='ml-6 font-DM_sans font-medium text-sm'>January 3, 2023</li>
                    <li className='px-6 font-DM_sans font-medium text-xl'>How to prepare delicious chicken tenders</li>
                </ul>

                {/* ------- items ------- */}
                <ul className='w-[306px] flex flex-col gap-5 border-2 rounded-xl pb-[26px] hover:scale-105 transition duration-800'>
                    <li><img src="../public/blog5.png" alt="blog_image" /></li>
                    <li className='ml-6 font-DM_sans font-medium text-sm'>January 3, 2023</li>
                    <li className='px-6 font-DM_sans font-medium text-xl'>5 great cooking gadgets you can buy to save time</li>
                </ul>

                {/* ------- items ------- */}
                <ul className='w-[306px] flex flex-col gap-5 border-2 rounded-xl pb-[26px] hover:scale-105 transition duration-800'>
                    <li><img src="../public/blog6.png" alt="blog_image" /></li>
                    <li className='ml-6 font-DM_sans font-medium text-sm'>January 3, 2023</li>
                    <li className='px-6 font-DM_sans font-medium text-xl'>The secret tips & tricks to prepare a perfect burger</li>
                </ul>

                {/* ------- items ------- */}
                <ul className='w-[306px] flex flex-col gap-5 border-2 rounded-xl pb-[26px] hover:scale-105 transition duration-800'>
                    <li><img src="../public/blog7.png" alt="blog_image" /></li>
                    <li className='ml-6 font-DM_sans font-medium text-sm'>January 3, 2023</li>
                    <li className='px-6 font-DM_sans font-medium text-xl'>7 delicious cheesecake recipes you can prepare</li>
                </ul>

                {/* ------- items ------- */}
                <ul className='w-[306px] flex flex-col gap-5 border-2 rounded-xl pb-[26px] hover:scale-105 transition duration-800'>
                    <li><img src="../public/blog8.png" alt="blog_image" /></li>
                    <li className='ml-6 font-DM_sans font-medium text-sm'>January 3, 2023</li>
                    <li className='px-6 font-DM_sans font-medium text-xl'>5 great pizza restaurants you should visit this city</li>
                </ul>

                {/* ------- items ------- */}
                <ul className='w-[306px] flex flex-col gap-5 border-2 rounded-xl pb-[26px] hover:scale-105 transition duration-800'>
                    <li><img src="../public/blog9.png" alt="blog_image" /></li>
                    <li className='ml-6 font-DM_sans font-medium text-sm'>January 3, 2023</li>
                    <li className='px-6 font-DM_sans font-medium text-xl'>5 great cooking gadgets you can buy to save time</li>
                </ul>

                {/* ------- items ------- */}
                <ul className='w-[306px] flex flex-col gap-5 border-2 rounded-xl pb-[26px] hover:scale-105 transition duration-800'>
                    <li><img src="../public/blog10.png" alt="blog_image" /></li>
                    <li className='ml-6 font-DM_sans font-medium text-sm'>January 3, 2023</li>
                    <li className='px-6 font-DM_sans font-medium text-xl'>How to prepare a delicious gluten free sushi</li>
                </ul>

                {/* ------- items ------- */}
                <ul className='w-[306px] flex flex-col gap-5 border-2 rounded-xl pb-[26px] hover:scale-105 transition duration-800'>
                    <li><img src="../public/blog11.png" alt="blog_image" /></li>
                    <li className='ml-6 font-DM_sans font-medium text-sm'>January 3, 2023</li>
                    <li className='px-6 font-DM_sans font-medium text-xl'>Top 20 simple and quick desserts for kids</li>
                </ul>

                {/* ------- items ------- */}
                <ul className='w-[306px] flex flex-col gap-5 border-2 rounded-xl pb-[26px] hover:scale-105 transition duration-800'>
                    <li><img src="../public/blog12.png" alt="blog_image" /></li>
                    <li className='ml-6 font-DM_sans font-medium text-sm'>January 3, 2023</li>
                    <li className='px-6 font-DM_sans font-medium text-xl'>Top 20 simple and quick desserts for kids</li>
                </ul>
            </section>

            {/* ================= Footer Part ================= */}
            <Footer />
        </>
    )
}

export default Blog