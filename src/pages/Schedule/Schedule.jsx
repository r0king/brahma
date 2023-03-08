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
            timing: "09:00 - 12:00",
            category: "Cultural",
            img: "https://images.pexels.com/photos/837358/pexels-photo-837358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            description: "Thyagaraj Program",
            personnel: "Main Stage"
        },
        {
            id: 1,
            timing: "10:00 - 12:00",
            category: "Cultural",
            img: "https://images.pexels.com/photos/39866/entrepreneur-startup-start-up-man-39866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            description: "Voice of Brahma - Preliminary",
            personnel: "CS Seminar Hall"
        },
        {
            id: 2,
            timing: "10:30 - 16:00",
            category: "General",
            img: "https://images.pexels.com/photos/445109/pexels-photo-445109.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            description: "Fun Zone",
            personnel: "Civil Block"
        },
        {
            id: 3,
            timing: "12:10 - 12:30",
            category: "Cultural",
            img: "https://images.pexels.com/photos/2102416/pexels-photo-2102416.jpeg",
            description: "Ranga Pooja",
            personnel: "Main Stage"
        },
        {
            id: 4,
            timing: "12:30 - 16:30",
            category: "General",
            img: "",
            description: "3D Printing Workshop",
            personnel: "CCF Lab"
        },
        {
            id: 5,
            timing: "12:30 - 14:30",
            category: "Cultural",
            img: "https://live.staticflickr.com/65535/52733810815_f8067e6406_z.jpg",
            description: "Percusion Instrument",
            personnel: "EC Seminar Hall"
        },
        {
            id: 6,
            timing: "12:30 - 14:30",
            category: "Cultural",
            img: "https://live.staticflickr.com/65535/52731093272_133dcda96c_z.jpg",
            description: "Raagam",
            personnel: "CS Seminar Hall"
        },
        {
            id: 7,
            timing: "12:30 - 16:30",
            category: "General",
            img: "",
            description: "Blind Fold",
            personnel: "TBD"
        },
        {
            id: 8,
            timing: "12:30 - 15:30",
            category: "Workshop",
            img: "",
            description: "Spotlight Acting Workshop",
            personnel: "TBD"
        },
        {
            id: 9,
            timing: "13:00 - 17:00",
            category: "General",
            img: "",
            description: "Game Of Rooms",
            personnel: "S6 EEE Class"
        },
        {
            id: 10,
            timing: "13:00 - 15:00",
            category: "Cultural",
            img: "https://live.staticflickr.com/65535/52733875633_642dab9705_z.jpg",
            description: "Voice Of Brahma - Final",
            personnel: "Main Stage"
        },
        {
            id: 11,
            timing: "13:00 - 17:00",
            category: "General",
            img: "",
            description: "Go Cart Expo",
            personnel: "TBD"
        },
        {
            id: 12,
            timing: "13:30 - 15:30",
            category: "General",
            img: "",
            description: "Best Manager",
            personnel: "MBA DEPT"
        },
        {
            id: 13,
            timing: "13:30 - 15:30",
            category: "General",
            img: "",
            description: "JAM",
            personnel: "Stage Near CCF"
        },
        {
            id: 14,
            timing: "15:30 - 17:30",
            category: "Cultural",
            img: "",
            description: "Melam",
            personnel: "Lobby Stairs"
        },
        {
            id: 15,
            timing: "17:00 - 21:00",
            category: "Cultural",
            img: "https://live.staticflickr.com/65535/52733389566_a89f348ae0_z.jpg",
            description: "Theme Show",
            personnel: "Main Stage"
        },
    ]

    const sched2 = [
        {
            id: 0,
            timing: "10:00 - 13:00",
            category: "Cultural",
            img: "https://live.staticflickr.com/65535/52732099308_1e05417470_b.jpg",
            description: "Mudhra",
            personnel: "Main Stage"
        },
        {
            id: 1,
            timing: "10:00 - 14:00",
            category: "Workshop",
            img: "https://images.pexels.com/photos/445109/pexels-photo-445109.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            description: "IEEE Workshop",
            personnel: "ADP Lab"
        },
        {
            id: 2,
            timing: "10:00 - 14:00",
            category: "General",
            img: "https://live.staticflickr.com/65535/52731603426_5c8bb9ec0e_z.jpg",
            description: "FIFA",
            personnel: "PL Lab"
        },
        {
            id: 3,
            timing: "10:30 - 12:00",
            category: "General",
            img: "https://images.pexels.com/photos/39866/entrepreneur-startup-start-up-man-39866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            description: "RJ Hunt",
            personnel: "Auditorium"
        },        
        
        {
            id: 4,
            timing: "10:30 - 14:30",
            category: "General",
            img: "https://images.pexels.com/photos/2102416/pexels-photo-2102416.jpeg",
            description: "Paint Ball",
            personnel: "Civil Parking"
        }
        ,
        {
            id: 5,
            timing: "11:00 - 15:00",
            category: "General",
            img: "https://images.pexels.com/photos/2102416/pexels-photo-2102416.jpeg",
            description: "Soapy Soccer",
            personnel: "TBD"
        },
        {
            id: 6,
            timing: "11:00 - 15:00",
            category: "General",
            img: "https://images.pexels.com/photos/2102416/pexels-photo-2102416.jpeg",
            description: "Cryogenic Museum",
            personnel: "Robotics Seminar Hall"
        },
        {
            id: 7,
            timing: "11:00 - 13:00",
            category: "Cultural",
            img: "https://live.staticflickr.com/65535/52733389601_f4897b2501_z.jpg",
            description: "Doodling",
            personnel: "EC Seminar Hall"
        },
        {
            id: 8,
            timing: "11:30 - 15:30",
            category: "Workshop",
            img: "https://images.pexels.com/photos/2102416/pexels-photo-2102416.jpeg",
            description: "IOT Workshop",
            personnel: "NP Lab"
        },
        {
            id: 9,
            timing: "11:30 - 14:00",
            category: "Cultural",
            img: "https://live.staticflickr.com/65535/52732874067_1154577282_z.jpg",
            description: "Stand Up Comedy",
            personnel: "Main Seminar Hall"
        },
        {
            id: 10,
            timing: "12:00 - 16:00",
            category: "General",
            img: "https://images.pexels.com/photos/2102416/pexels-photo-2102416.jpeg",
            description: "Glow Ball",
            personnel: "S1 ECA"
        },
        {
            id: 11,
            timing: "13:00 - 17:00",
            category: "General",
            img: "https://images.pexels.com/photos/2102416/pexels-photo-2102416.jpeg",
            description: "Treasure Hunt",
            personnel: "College Premises"
        },
        {
            id: 12,
            timing: "14:00 - 16:00",
            category: "Cultural",
            img: "https://live.staticflickr.com/65535/52733875698_d868d91a36_z.jpg",
            description: "Spot Dance",
            personnel: "Lobby"
        },
        {
            id: 13,
            timing: "14:00 - 16:00",
            category: "Cultural",
            img: "https://live.staticflickr.com/65535/52733883018_7b0bb8e7ee_z.jpg",
            description: "Mime",
            personnel: "Auditorium"
        },
        {
            id: 14,
            timing: "14:30 - 16:30",
            category: "General",
            img: "https://live.staticflickr.com/65535/52731850939_db76a22a31_z.jpg",
            description: "Band of Brahma",
            personnel: "Main Stage"
        },
        {
            id: 15,
            timing: "14:30 - 17:30",
            category: "General",
            img: "https://images.pexels.com/photos/2102416/pexels-photo-2102416.jpeg",
            description: "Maze",
            personnel: "EEE Classrooms"
        },
        {
            id: 16,
            timing: "18:00 - 21:00",
            category: "Cultural",
            img: "https://images.pexels.com/photos/2102416/pexels-photo-2102416.jpeg",
            description: "Choreo Night",
            personnel: "Main Stage"
        }
    ]

    const sched3 = [
        {
            id: 0,
            timing: "09:30 - 12:30",
            category: "Cultural",
            img: "https://live.staticflickr.com/65535/52732866917_75f4810146_z.jpg",
            description: "Step N Synchro",
            personnel: "Main Stage"
        },
        {
            id: 1,
            timing: "10:00 - 12:00",
            category: "General",
            img: "https://images.pexels.com/photos/445109/pexels-photo-445109.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            description: "Short Film",
            personnel: "Main Seminar Hall"
        },
        {
            id: 2,
            timing: "10:00 - 14:00",
            category: "Workshop",
            img: "https://images.pexels.com/photos/2102416/pexels-photo-2102416.jpeg",
            description: "IEI Workshop",
            personnel: "Simulation Lab"
        },
        {
            id: 3,
            timing: "10:00 - 13:00",
            category: "Workshop",
            img: "https://live.staticflickr.com/65535/52733650649_1742728873_z.jpg",
            description: "Mural Workshop",
            personnel: "AE&I Seminar Hall"
        },
        {
            id: 4,
            timing: "10:30 - 13:30",
            category: "General",
            img: "https://images.pexels.com/photos/2102416/pexels-photo-2102416.jpeg",
            description: "Knives Out",
            personnel: "S5 CSA"
        },
        {
            id: 5,
            timing: "10:30 - 12:30",
            category: "Cultural",
            img: "https://live.staticflickr.com/65535/52733803945_e804fa9df2_z.jpg",
            description: "Hip Hop Battle",
            personnel: "Auditorium"
        },
        {
            id: 6,
            timing: "10:30 - 14:30",
            category: "General",
            img: "https://images.pexels.com/photos/2102416/pexels-photo-2102416.jpeg",
            description: "Brain Cycle",
            personnel: "Infront of Lobby"
        },
        {
            id: 7,
            timing: "11:00 - 15:00",
            category: "General",
            img: "https://images.pexels.com/photos/2102416/pexels-photo-2102416.jpeg",
            description: "Soapy Soccer",
            personnel: "TBD"
        },
        {
            id: 8,
            timing: "11:00 - 15:00",
            category: "General",
            img: "https://images.pexels.com/photos/2102416/pexels-photo-2102416.jpeg",
            description: "Gun Expo",
            personnel: "Mechanical Block"
        },
        {
            id: 9,
            timing: "11:00 - 13:30",
            category: "Cultural",
            img: "https://live.staticflickr.com/65535/52733397331_0b3296a2b7_z.jpg",
            description: "DJ War",
            personnel: "Main Stage"
        },
        {
            id: 10,
            timing: "11:00 - 13:00",
            category: "Cultural",
            img: "https://live.staticflickr.com/65535/52733875663_cf9d22dc67_z.jpg",
            description: "Rap Battle",
            personnel: "EC Seminar Hall"
        },
        {
            id: 11,
            timing: "12:00 - 16:00",
            category: "Workshop",
            img: "https://images.pexels.com/photos/2102416/pexels-photo-2102416.jpeg",
            description: "CNC Workshop",
            personnel: "CNC Lab"
        },
        {
            id: 12,
            timing: "12:00 - 14:00",
            category: "Cultural",
            img: "https://images.pexels.com/photos/2102416/pexels-photo-2102416.jpeg",
            description: "Street Show",
            personnel: "Lobby"
        },
        {
            id: 13,
            timing: "13:00 - 15:00",
            category: "General",
            img: "https://images.pexels.com/photos/2102416/pexels-photo-2102416.jpeg",
            description: "Fire & Rescue Team + Dog Squad",
            personnel: "TBD"
        },
        {
            id: 14,
            timing: "15:00 -17:30",
            category: "General",
            img: "https://images.pexels.com/photos/2102416/pexels-photo-2102416.jpeg",
            description: "UnderArm Cricket",
            personnel: "Ground"
        },
        {
            id: 15,
            timing: "15:00 - 17:00",
            category: "General",
            img: "https://images.pexels.com/photos/2102416/pexels-photo-2102416.jpeg",
            description: "BasketBall 3S",
            personnel: "BasketBall Court"
        },
        {
            id: 16,
            timing: "17:00 - 22:00",
            category: "-",
            img: "https://images.pexels.com/photos/2102416/pexels-photo-2102416.jpeg",
            description: "Band and DJ",
            personnel: "Main Stage"
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
                    The schedule for our tech fest is packed with exciting events and activities, including workshops & events. Stay tuned for updates and timings for each event.
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
                        The schedule for our tech fest is packed with exciting events and activities, including workshops & events. Stay tuned for updates and timings for each vent.
                    </p>

                </div>
            </div>

            <div className='schedule-menu'>

                <div className="filter-schedule">
                    <select value={category} onChange={categorySelect}>
                        <option value="" selected>All</option>
                        <option value="Cultural">Cultural</option>
                        <option value="General">General</option>
                        <option value="Workshop">Workshop</option>
                    </select>
                </div>

                <div className="tabs">
                    <h3 className={`button  ${dayselect === 1 ? "btn1" : ""}`} onClick={() => { setSchedule(sched1); setdayselect(1) }}>Day 1</h3>
                    <h3 className={`button ${dayselect === 2 ? "btn2" : ""}`} onClick={() => { setSchedule(sched2); setdayselect(2) }}>Day 2</h3>
                    <h3 className={`button ${dayselect === 3 ? "btn3" : ""}`} onClick={() => { setSchedule(sched3); setdayselect(3) }}>Day 3</h3>
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