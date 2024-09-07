// ==================== All Import
import React       from 'react'

const Blog_burger_details = () => {
    return (
        <>
            {/* ================= Item's Images ================= */}
            <section className='container mt-12 text-center'>
                <h1 className='font-PlayfairD font-medium text-[55px] leading-[60px]'>The secret tips & tricks to prepare a perfect burger & pizza for our customers</h1>
                <img src="/burger.png" alt="burger_image" className='w-full mt-[62px]' />
            </section>

            {/* ================= Making part ================= */}
            <section className='container mt-16'>
                <ul>
                    <h2 className='font-DM_sans font-bold text-2xl'>What do you need to prepare a home-made burger?</h2>
                    <ul className='w-[1080px] font-DM_sans font-normal text-lg leading-[28px] text-[#414536] mt-5'>
                        <p className='mb-5'>Creating the perfect burger and pizza is an art, combining ingredients, techniques, and passion to craft dishes that truly delight the palate. Today, we'll unveil some closely guarded secrets and insider tips for mastering these beloved staples of the culinary world.</p>
                        <li className='flex gap-2 mt-4'><span>1.</span> Quality Beef: The heart of a perfect burger is top-notch beef. Opt for fresh, high-quality ground beef with a fat content of about 20% for the juiciest, most flavorful results.</li>
                        <li className='flex gap-2 mt-4'><span>2.</span> Seasoning: Simplicity is key here. A generous pinch of salt and black pepper just before cooking will enhance the beef's natural flavors without overshadowing them.</li>
                        <li className='flex gap-2 mt-4'><span>3.</span> Don't Overwork the Meat: When forming your patties, be gentle. Overworking the meat can lead to dense, tough burgers. You want a patty that's firm enough to hold together, but not compressed.</li>
                        <li className='flex gap-2 mt-4'><span>4.</span> Cooking: High heat is crucial. Whether you're grilling or pan-searing, make sure your cooking surface is hot enough to form a nice crust on the patty, sealing in those delicious juices.</li>
                        <li className='flex gap-2 mt-4'><span>5.</span> Resting: Allow your cooked burgers to rest for a few minutes before serving. This lets the juices redistribute throughout the patty, ensuring a moist and flavorful bite.</li>
                    </ul>
                </ul>
            </section>

            {/* ================= Ingredients part ================= */}
            <section className='container mt-12'>
                <ul>
                    <h2 className='font-DM_sans font-bold text-2xl'>What are the right ingredients to make it delicious?</h2>
                    <ul className='w-[1080px] font-DM_sans font-normal text-lg leading-[28px] text-[#414536] mt-5'>
                        <p className='mb-5'>Creating the perfect burger and pizza is an art, combining ingredients, techniques, and passion to craft dishes that truly delight the palate. Today, we'll unveil some closely guarded secrets and insider tips for mastering these beloved staples of the culinary world.</p>
                        <li className='flex gap-2 mt-4'><span>1.</span> Quality Beef: The heart of a perfect burger is top-notch beef. Opt for fresh, high-quality ground beef with a fat content of about 20% for the juiciest, most flavorful results.</li>
                        <li className='flex gap-2 mt-4'><span>2.</span> Seasoning: Simplicity is key here. A generous pinch of salt and black pepper just before cooking will enhance the beef's natural flavors without overshadowing them.</li>
                        <li className='flex gap-2 mt-4'><span>3.</span> Don't Overwork the Meat: When forming your patties, be gentle. Overworking the meat can lead to dense, tough burgers. You want a patty that's firm enough to hold together, but not compressed.</li>
                        <li className='flex gap-2 mt-4'><span>4.</span> Cooking: High heat is crucial. Whether you're grilling or pan-searing, make sure your cooking surface is hot enough to form a nice crust on the patty, sealing in those delicious juices.</li>
                        <li className='flex gap-2 mt-4'><span>5.</span> Resting: Allow your cooked burgers to rest for a few minutes before serving. This lets the juices redistribute throughout the patty, ensuring a moist and flavorful bite.</li>
                    </ul>
                </ul>
            </section>

            {/* ================= Delicious Ingredients part ================= */}
            <section className='container w-[1080px] mt-12 pb-[105px]'>
                <h3 className='font-DM_sans font-bold text-2xl leading-8'>What are the right ingredients to make it delicious?</h3>
                <p className='mt-5 font-DM_sans font-normal text-lg'>Proin faucibus nec mauris a sodales, sed elementum mi tincidunt. Sed eget viverra egestas nisi in consequat. Fusce sodales augue a accumsa Cras sollicitudin, le ligula, porttitor eu, consequat vitae, eleifend ac, enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit lobortis arcu enim urna adipiscing praesent velit viverra sit semper lorem eu cursus ve of all hendrerit elementum morbi curabitur etiam nibh justo, lorem aliquet donec sed sit mi dignissim at ante massa mattis magna sit amet purus gravida quis blandit turpis..</p>
            </section>

            {/* ================= More Article part ================= */}
            <section className='container mt-20 '>
                <ul className='flex flex-col items-center gap-6'>
                    <h4 className='font-PlayfairD font-medium text-[55px] leading-[60px] '>Read More Articles</h4>
                    <p className='w-[632px] text-center'>We consider all the drivers of change gives you the components you need to change to create a truly happens.</p>
                </ul>

                <div className='mt-[72px] flex justify-between'>

                    {/* ------ items ------ */}
                    <ul className='w-[306px] flex flex-col gap-5 border-2 rounded-xl pb-[26px] hover:scale-105 transition duration-800 will-change-transform'>
                        <li><img src="/blog1.png" alt="blog_image" /></li>
                        <li className='ml-6 font-DM_sans font-medium text-sm'>January 3, 2023</li>
                        <li className='px-6 font-DM_sans font-medium text-xl'>How to prepare a delicious gluten free sushi</li>
                    </ul>

                    {/* ------ items ------ */}
                    <ul className='w-[306px] flex flex-col gap-5 border-2 rounded-xl pb-[26px] hover:scale-105 transition duration-800 will-change-transform'>
                        <li><img src="/blog2.png" alt="blog_image" /></li>
                        <li className='ml-6 font-DM_sans font-medium text-sm'>January 3, 2023</li>
                        <li className='px-6 font-DM_sans font-medium text-xl'>Exclusive baking lessons from the pastry king</li>
                    </ul>

                    {/* ------ items ------ */}
                    <ul className='w-[306px] flex flex-col gap-5 border-2 rounded-xl pb-[26px] hover:scale-105 transition duration-800 will-change-transform'>
                        <li><img src="/blog3.png" alt="blog_image" /></li>
                        <li className='ml-6 font-DM_sans font-medium text-sm'>January 3, 2023</li>
                        <li className='px-6 font-DM_sans font-medium text-xl'>How to prepare the perfect fries in an air fryer</li>
                    </ul>

                    {/* ------ items ------ */}
                    <ul className='w-[306px] flex flex-col gap-5 border-2 rounded-xl pb-[26px] hover:scale-105 transition duration-800 will-change-transform'>
                        <li><img src="/blog4.png" alt="blog_image" /></li>
                        <li className='ml-6 font-DM_sans font-medium text-sm'>January 3, 2023</li>
                        <li className='px-6 font-DM_sans font-medium text-xl'>How to prepare delicious chicken tenders</li>
                    </ul>
                </div>
            </section>
        </>
    )
}

export default Blog_burger_details