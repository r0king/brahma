import React, { useState } from 'react'
import './schedule.css'
import blank from '../../assets/images/blankimg.png'

const Schedule = () => {

    const [image, setImage] = useState(-1)
    const [hovering, sethovering] = useState(false)
    const [category, setcategory] = useState("")
    const [dayselect, setdayselect] = useState(1)

    const categorySelect = (e) => {
        setcategory(e.target.value)
    }

    const sched1 = [
        {
            id: 0,
            timing: "09:00 - 16:00",
            category: "Business",
            img: "https://images.pexels.com/photos/837358/pexels-photo-837358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            description: "How to create and sell digital collectibles with no code",
            personnel: "Pablo Stanley"
        },
        {
            id: 1,
            timing: "10:00 - 15:00",
            category: "Fashion",
            img: "https://images.pexels.com/photos/39866/entrepreneur-startup-start-up-man-39866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            description: "How to create and sell digital collectibles with no code",
            personnel: "larry"
        },
        {
            id: 2,
            timing: "09:00 - 16:00",
            category: "Entertainment",
            img: "https://images.pexels.com/photos/445109/pexels-photo-445109.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            description: "Bike Workshop",
            personnel: "Leonardo Dicaprio"
        },
        {
            id: 3,
            timing: "09:00 - 16:00",
            category: "Technology",
            img: "https://images.pexels.com/photos/2102416/pexels-photo-2102416.jpeg",
            description: "Full stack development",
            personnel: "michael"
        }
    ]

    const sched2 = [
        {
            id: 0,
            timing: "09:00 - 16:00",
            category: "aoshdoasd",
            img: "https://images.pexels.com/photos/837358/pexels-photo-837358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            description: "How to create and sell digital collectibles with no code",
            personnel: "Pablo Stanley"
        },
        {
            id: 1,
            timing: "10:00 - 15:00",
            category: "Fashion",
            img: "https://images.pexels.com/photos/39866/entrepreneur-startup-start-up-man-39866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            description: "How to create and sell digital collectibles with no code",
            personnel: "larry"
        },
        {
            id: 2,
            timing: "09:00 - 16:00",
            category: "Business",
            img: "https://images.pexels.com/photos/445109/pexels-photo-445109.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            description: "How to create and sell digital collectibles with no code",
            personnel: "Pablo Stanley"
        },
        {
            id: 3,
            timing: "09:00 - 16:00",
            category: "Business",
            img: "https://images.pexels.com/photos/2102416/pexels-photo-2102416.jpeg",
            description: "How to create and sell digital collectibles with no code",
            personnel: "Pablo Stanley"
        }
    ]


    const [schedule, setSchedule] = useState(sched1)




    return (
        <>

            <div className="flex mt-[8vw] ml-[16vw] md:hidden">
                <p
                    className=" text-secondary self-end font-semibold font-poppins text-lg 
           w-full leading-[0.9] tracking-tighter p-2  pb-[5vw]  mr-auto"
                >
                    Roll Up Your Sleeves For Practical Learning, Based On Real Projects From Industry Pros.
                    Meet Like-Minded Classmates & Upskill Your Creative Toolkit.
                </p>
            </div>

            <div className='justify-between md:flex'>
                <div className=' font-morganite md:static text-primary text-[40vw] md:text-[26vw] pl-1 md:pt-[8%]'>
                    <h1 className='leading-[0.75]'>FULL</h1>
                    <h1 className='leading-[0.75]'>SCHEDULE</h1>
                </div>
                <div className=" hidden mb-[18vw] ml-[12vw]  mt-[5vw] md:flex">
                    <p
                        className="mb-[12.8vw]  text-secondary self-end font-semibold font-poppins text-2xl md:text-[2.14rem] 
           w-full leading-[0.9] tracking-tighter p-2 md:p-0 md:w-[calc((100vw-9.375rem)*4/14+2.5rem)] pb-[5vw] md:ml-3 md:leading-none mr-auto"
                    >
                        Roll Up Your Sleeves For Practical Learning, Based On Real Projects From Industry Pros. Meet Like-Minded Classmates & Upskill Your Creative Toolkit.
                    </p>

                </div>
            </div>

            <div className='schedule-menu'>

                <div className="filter-schedule">
                    <select value={category} onChange={categorySelect}>
                        <option value="" selected>All</option>
                        <option value="Business">Business</option>
                        <option value="Entertainment">Entertainment</option>
                        <option value="Fashion">Fashion</option>
                        <option value="Technology">Technology</option>
                    </select>
                </div>

                <div className="tabs">
                    <h3 className={`button  ${dayselect === 1 ? "btn1" : ""}`} onClick={() => { setSchedule(sched1); setdayselect(1) }}>Day 1</h3>
                    <h3 className={`button ${dayselect === 2 ? "btn2" : ""}`} onClick={() => { setSchedule(sched2); setdayselect(2) }}>Day 2</h3>
                    <h3 className={`button ${dayselect === 3 ? "btn3" : ""}`} onClick={() => { setSchedule([]); setdayselect(3) }}>Day 3</h3>
                </div>
            </div>


            <div className='schedule'>
                <div className='sched-table'>
                    {
                        schedule.map((item) => {
                            if (category === "")
                                return (

                                    <li className='row group' key={item.id} onMouseEnter={() => { setImage(item.id); sethovering(true) }} onMouseLeave={() => { setImage(-1); sethovering(false) }}>
                                        <li className='timing group-hover:text-accent'>{item.timing}</li>
                                        <li className='description'>
                                            <li className='category'>{item.category}</li>
                                            <li>{item.description}</li>
                                        </li>
                                        <li className='personnel'>{item.personnel}</li>
                                    </li>)
                            else {
                                return (
                                    category === item.category &&
                                    <li className='row group' key={item.id} onMouseEnter={() => { setImage(item.id); sethovering(true) }} onMouseLeave={() => { setImage(-1); sethovering(false) }}>
                                        <li className='timing group-hover:text-accent'>{item.timing}</li>
                                        <li className='description'>
                                            <li className='category'>{item.category}</li>
                                            <li>{item.description}</li>
                                        </li>
                                        <li className='personnel'>{item.personnel}</li>
                                    </li>)
                            }
                        }

                        )
                    }

                    {schedule.length === 0 && <h2 style={{ padding: "10%", width: "max-content" }}>No Schedule Available</h2>}

                </div>

                <div className={`images ${hovering ? "slidein" : "slideout"}`}>
                    <img className='person-image ' src={image === -1 ? setTimeout(() => { return blank }, 1000) : schedule[image].img} alt="" />
                </div>

            </div>
        </>
    )
}

export default Schedule