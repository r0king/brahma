import React, {useState} from 'react'
import './schedule.css'

const Schedule = () => {

    const [image, setImage] = useState(-1)


   
    const sched = [
        {
        id: 0,
        timing: "09:00 - 16:00",
        category: "buisness",
        img: "https://images.pexels.com/photos/837358/pexels-photo-837358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description: "How to create and sell digital collectibles with no code",
        personnel: "Pablo Stanley"
    },
    {
        id: 1,
        timing: "10:00 - 15:00",
        category: "Fasion",
        img: "https://images.pexels.com/photos/39866/entrepreneur-startup-start-up-man-39866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description: "How to create and sell digital collectibles with no code",
        personnel: "larry"
    },
    {
        id: 2,
        timing: "09:00 - 16:00",
        category: "buisness",
        img:"https://images.pexels.com/photos/445109/pexels-photo-445109.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description: "How to create and sell digital collectibles with no code",
        personnel: "Pablo Stanley"
    },
    {
        id: 3,
        timing: "09:00 - 16:00",
        category: "buisness",
        img:"https://images.pexels.com/photos/2102416/pexels-photo-2102416.jpeg",
        description: "How to create and sell digital collectibles with no code",
        personnel: "Pablo Stanley"
    }
    ]

    return (
        <div className='schedule'>
            <table className='sched-table' cellPadding={15}>
                <tbody>
                    {
                        sched.map((item) => {
                            console.log("helo")
                            return (

                                <tr key={item.id} onMouseEnter={()=>{setImage(item.id)}} onMouseLeave={()=>{setImage(-1)}}>
                                    <td className='timing'>{item.timing}</td>
                                    <td className='description'>
                                        <li className='category'>{item.category}</li>
                                        <li>{item.description}</li>
                                    </td>
                                    <td>{item.personnel}</td>
                                </tr>)
                        }

                        )
                    }


                </tbody>
            </table>

            <div className="images">
                {image!==-1&&<img className='person-image' src={sched[image].img} alt="" />}
            </div>

        </div>
    )
}

export default Schedule