// ==================== All Import
import React, { useState }   from 'react'
import Navbar  from './Navbar'
import Footer  from './Footer'

const Book = () => {

    // ==================== All Hooks
    const [date,         setDate]         = useState("")
    const [dateError,    setDateError]    = useState("")
    const [time,         setTime]         = useState("")
    const [timeError,    setTimeError]    = useState("")
    const [name,         setName]         = useState("")
    const [nameError,    setNameError]    = useState("")
    const [phone,        setPhone]        = useState("")
    const [phoneError,   setPhoneError]   = useState("")
    const [person,       setPerson]       = useState(1)
    const [personError,  setPersonError]  = useState("")
    
    // ==================== All Functions
    // -------- function for date
    const handleDate = (e)=>{
        setDate       (e.target.value)
        setDateError  ("")
    }

    // -------- function for time
    const handleTime = (e)=>{
        setTime       (e.target.value)
        setTimeError  ("")
    }

    // -------- function for name
    const handleName = (e)=>{
        setName       (e.target.value)
        setNameError  ("")
    }

    // -------- function for phone
    const handlePhone = (e)=>{
        setPhone      (e.target.value)
        setPhoneError ("")
    }

    // -------- function for person
    const handlePerson = (e)=>{
        setPerson      (e.target.value)
        setPersonError ("")
    }

    // ==================== Submit Function Condition
    const handleSubmit  = (e)=>{
        e.preventDefault()
        if(date == ""){
            setDateError   ("Please Select A Date")
        }
        if(time == ""){
            setTimeError   ("Please Select A Time")
        }
        if(name == ""){
            setNameError   ("Please Enter Your Name")
        }
        if(phone == ""){
            setPhoneError  ("Must Include Phone Number")
        }
        if(person > 6){
            setPersonError ("Sorry! No Booking for More Than 6 People")
        }
    }

    return (
        <>
            {/* ================= Booking part ================= */}
            <section >
                
                {/* ============== Info Part ============== */}
                <header className='container text-center mt-4'>
                    <h1 className='font-PlayfairD text-[100px] font-normal leading-[96px]'>Book A Table</h1>
                    <p className='font-DM_sans text-lg leading-[28px] font-normal mt-6'>We consider all the drivers of change gives you the components <br /> you need to change to create a truly happens.</p>
                </header>

                {/* ============== Form Part ============== */}
                <form onSubmit={handleSubmit} className='w-[800px] container p-10 mt-[72px] shadow-2xl rounded-2xl'>
                    <ul className='flex gap-6 flex-col'>
                        <ul className='flex gap-2'>

                            {/* for date */}
                            <li className='relative'>
                                <p className='ml-4 font-DM_sans font-bold text-base'>Date</p>
                                <input onChange={handleDate} type="date" placeholder='Enter Your Name' className='w-[350px] h-[60px] rounded-full border-2 px-4 mt-2 outline-none' />
                                <p className='font-DM_sans font-medium text-sm text-red-400 absolute top-0 right-5'>{dateError}</p>
                            </li>

                            {/* for time */}
                            <li className='relative'>
                                <p className='ml-4 font-DM_sans font-bold text-base'>Time</p>
                                <input onChange={handleTime} type="time" placeholder='Enter Your Email' className='w-[350px] h-[60px] rounded-full border-2 px-4 mt-2 outline-none' />
                                <p className='font-DM_sans font-medium text-sm text-red-400 absolute top-0 right-5'>{timeError}</p>
                            </li>
                        </ul>

                        <ul className='flex gap-2'>

                            {/* for name */}
                            <li className='relative'>
                                <p className='ml-4 font-DM_sans font-bold text-base'>Name</p>
                                <input onChange={handleName} type="text" placeholder='Enter Your Name' className='w-[350px] h-[60px] rounded-full border-2 px-4 mt-2 outline-none' />
                                <p className='font-DM_sans font-medium text-sm text-red-400 absolute top-0 right-5'>{nameError}</p>
                            </li>

                            {/* for phone */}
                            <li className='relative'>
                                <p className='ml-4 font-DM_sans font-bold text-base'>Phone</p>
                                <input onChange={handlePhone} type="number" placeholder='Enter Your phone' className='w-[350px] h-[60px] rounded-full border-2 px-4 mt-2 outline-none' />
                                <p className='font-DM_sans font-medium text-sm text-red-400 absolute top-0 right-5'>{phoneError}</p>
                            </li>
                        </ul>


                        {/* for persons */}
                        <ul className='relative'>
                            <p className='ml-4 font-DM_sans font-bold text-base'>Total Person</p>
                            <input onChange={handlePerson} type="Number" placeholder="1" className='w-full h-[60px] rounded-full border-2 pl-4 mt-2 outline-none' min={1} />
                            <p className='font-DM_sans font-medium text-sm text-red-400 absolute top-0 right-5'>{personError}</p>
                        </ul>

                        {/* for send button */}
                        <ul>
                            <button className='w-full py-5 bg-[#AD343E] text-white rounded-full font-DM_sans font-bold text-base hover:bg-red-500 active:scale-95 duration-200'>Send</button>
                        </ul>
                    </ul>
                </form>
            </section>
        </>
    )
}

export default Book