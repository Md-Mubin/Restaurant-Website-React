// ==================== All Import
import React, { useEffect, useState } from 'react'

const Blog = () => {

    // ==================== useState Hook
    const [blog, setBlog] = useState([])
    
    // ==================== To Fetch From Api
    useEffect(() => {
        fetch("https://api.jsonbin.io/v3/b/66d486d6e41b4d34e42890cd")
            .then(response => response.json())
            .then(json => setBlog(json.record))
    }, [])

    return (
        <>
            {/* ================= Blog Head Part ================= */}
            <section className='container text-center mt-[68px]'>
                <h1 className='font-PlayfairD font-normal text-[100px] leading-[96px]'>Our Blog & Articles</h1>
                <p className='mt-6 font-DM_sans font-normal text-lg'>We consider all the drivers of change gives you the components you need <br /> to change to create a truly happens.</p>
            </section>

            {/* ================= All Blogs Part ================= */}
            <section className='container mt-[72px] flex flex-wrap justify-center gap-10'>

                {/* ================= All Blogs Fetched From Api =================  */}
                {
                    blog.map((items) => (

                        <ul key={items.product_key} className='w-[306px] flex flex-col gap-5 border-2 rounded-xl pb-[26px] hover:scale-105 transition duration-800 will-change-transform'>
                            <img src={items.image} alt="blogs_images" />
                            <li className='ml-6 font-DM_sans font-medium text-sm'>{items.date}</li>
                            <li className='px-6 font-DM_sans font-medium text-xl'>{items.info}</li>
                        </ul>
                    ))
                }
            </section>
        </>
    )
}

export default Blog