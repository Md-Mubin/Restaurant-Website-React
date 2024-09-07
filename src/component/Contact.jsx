// ==================== All Import
import React, { useState }    from 'react'
import Navbar   from './Navbar'
import Footer   from './Footer'

const Contact = () => {

    // ==================== All Hooks
    const [name,         setName]         = useState("")
    const [nameError,    setNameError]    = useState("")
    const [email,        setEmail]        = useState("")
    const [emailError,   setEmailError]   = useState("")
    const [massage,      setMassage]      = useState("")
    const [massageError, setMassageError] = useState("")
    
    // ==================== All Functions
    // -------- function for name
    const handleName    = (e)=>{
        setName      (e.target.value)
        setNameError ("")
    }

    // -------- function for email
    const handleEmail   = (e)=>{
        setEmail      (e.target.value)
        setEmailError ("")
    }

    // -------- function for massage
    const handleMassage = (e)=>{
        setMassage      (e.target.value)
        setMassageError ("")
    }

    // ==================== Submit Function Condition
    const handleSubmit  = (e)=>{
        e.preventDefault()
        if(name == ""){
            setNameError    ("Please Enter Your Name")
        }
        if(email == ""){
            setEmailError   ("Please Enter Your Email")
        }
        if(massage == ""){
            setMassageError ("Please Write A Massage Below")
        }
    }

    return (
        <>
            {/* ============== Contact Part Start ============== */}
            <section>
                <header className='container text-center mt-4'>
                    <h1 className='font-PlayfairD text-[100px] font-normal leading-[96px]'>Contact Us</h1>
                    <p  className='font-DM_sans text-lg leading-[28px] font-normal mt-6'>We consider all the drivers of change gives you the components <br /> you need to change to create a truly happens.</p>
                </header>

                {/* ============== Form Part ============== */}
                <form onSubmit={handleSubmit} className='w-[800px] container p-10 mt-[72px] shadow-2xl rounded-2xl'>
                    <ul className='flex gap-6 flex-col'>
                        <ul className='flex gap-2'>
                            
                            {/* for name */}
                            <li className='relative'>
                                <p className='ml-4 font-DM_sans font-bold text-base'>Name</p>
                                <input onChange={handleName} type="text" placeholder='Enter Your Name' className='w-[350px] h-[60px] rounded-full border-2 pl-4 mt-2 outline-none' />
                                <p className='font-DM_sans font-medium text-sm text-red-400 absolute top-0 right-5'>{nameError}</p>
                            </li>

                            {/* for email */}
                            <li className='relative'>
                                <p className='ml-4 font-DM_sans font-bold text-base'>Email</p>
                                <input onChange={handleEmail} type="text" placeholder='Enter Your Email' className='w-[350px] h-[60px] rounded-full border-2 pl-4 mt-2 outline-none' />
                                <p className='font-DM_sans font-medium text-sm text-red-400 absolute top-0 right-5'>{emailError}</p>
                            </li>
                        </ul>

                        {/* for subject */}
                        <ul>
                            <p className='ml-4 font-DM_sans font-bold text-base'>Subject</p>
                            <input type="text" placeholder='Write A Subject' className='w-full h-[60px] rounded-full border-2 pl-4 mt-2 outline-none' />
                        </ul>

                        {/* for massage */}
                        <ul className='flex flex-col gap-2 relative'>
                            <p className='ml-4 font-DM_sans font-bold text-base'>Massage</p>
                            <input onChange={handleMassage} type="text" placeholder='Write Your Massage' className='h-[155px] border-2 outline-none rounded-md p-6' />
                            <p className='font-DM_sans font-medium text-sm text-red-400 absolute top-0 right-5'>{massageError}</p>
                        </ul>

                        {/* for send button */}
                        <ul>
                            <button className='w-full py-5 bg-[#AD343E] text-white rounded-full font-DM_sans font-bold text-base hover:bg-red-500 active:scale-95 duration-200'>Send</button>
                        </ul>
                    </ul>
                </form>

                {/* ============== Contact Info Part ============== */}
                <div className='container w-[780px] flex justify-between mt-[82px]'>

                    {/* number */}
                    <ul className='flex flex-col gap-6'>
                        <li className='text-[#2C2F24] font-bold font-DM_sans text-xl'>Call Us:</li>
                        <a href='#' className='text-[#AD343E] font-bold font-DM_sans text-2xl hover:text-red-400 duration-200'>+1-234-567-8900</a>
                    </ul>

                    {/* hour time */}
                    <ul className='flex flex-col gap-6'>
                        <li className='text-[#2C2F24] font-bold font-DM_sans text-xl'>Hours:</li>
                        <li className='text-[#2C2F24] font-normal font-DM_sans text-lg'>Mon-Fri: 11am - 8pm Sat,<br /> Sun: 9am - 10pm</li>
                    </ul>

                    {/* location */}
                    <ul className='flex flex-col gap-6'>
                        <li className='text-[#2C2F24] font-bold font-DM_sans text-xl'>Our Location:</li>
                        <li className='text-[#2C2F24] font-normal font-DM_sans text-lg'>123 Bridge Street <br /> Nowhere Land, LA 12345 <br /> United States</li>
                    </ul>
                </div>
            </section>
        </>
    )
}

export default Contact