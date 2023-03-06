import React from 'react'
import { useState } from 'react'
// import megaphone from "../../assets/images/megaphone.png"
import CardButton from '../../components/CardButton'
import "./Faq.css"
function Faq() {
       const faqs=[
        {
            qstn:"What kind of events can I expect at Brahma'23?",
            ans:"You can expect to see events such as coding contests, cultural performances, debates, quizzes, sports competitions, and much more."
        },
        {
            qstn:"How can I register for Brahma'23?",
            ans:"Typically, students can register online through the official website or in person at the college or university."
        },
        {
            qstn:"Can I volunteer for Brahma'23?",
            ans:"Yes, you can volunteer for Brahma'23. The organizing team will put out a call for volunteers before the event."
        },
        {
            qstn:"How can I stay updated on the latest news and information about Brahma'23?",
            ans:"You can stay updated on the latest news and information about us by visiting the official website and following the event on social media."
        },
        {
            qstn:"Are there any registration fees for participating in the fest?",
            ans:"The registration fees, if any, will be mentioned on the website."
        },
        {
            qstn:"Can I participate in more than one event?",
            ans:"Yes, you can participate in multiple events if they do not clash with each other."
        }
       ]
    // const handleAccordian=(e)=>{
    //     const el=e.target;
    //     const ele = el.querySelector(".faq_answer p");
    //     if(ele.style.display=="none"){
    //         ele.style.display="block"
    //     }else{
    //         ele.style.display="none";     
    //     }

    // }

    const [selected,setSelected] = useState(null)

    const toggle=(i)=>{
        if(selected === i){
            return setSelected(null)
        }
        setSelected(i)
    }
  return (
    <>
      <div className="faq_main_container bg-accent">
        <div className="top_part">
          <div className="textpart text-primary font-morganite">
            <h1>HOW CAN WE HELP YOU ?</h1>
            <div className="reach_team">
            <button className="reach_container w-[45vw] md:w-[20vw] h-[30vw] md:h-[8vw]">
            <CardButton text={{head:"Reach",tail:"Our Team",caption:"Contact Us"}}/>
              {/* <p>Contact us</p>
              <div className="reach_bottom_part">
                  <span>Reach Our Team</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                    >
                    <path
                        strokelinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                    />
                    </svg>
              </div> */}
            </button>
          </div>
          </div>
          
        </div>
        <div className="faq_part font-poppins">
            {/* <img src={megaphone} alt="" /> */}
            <div className="part1">
            {
                faqs.map((ele,index)=>{
                    return(<>
                    <article className={`accordian_item${index} accordian_item`} onClick={()=>{toggle(index)}}>
                        <div className={`accordian_content${index} accordian_content text-primary`} >
                            <h1>{ele.qstn}</h1>
                            <span className={`accordion_icon${index}`}></span>
                        </div>
                        <div className="faq_answer text-primary">
                            <p className={selected===index?'content-show':'content-hide'}>
                                {ele.ans}
                            </p>
                        </div>
                    </article>
                    </>)
                })
            }
                
            </div>
        </div>
        {/* <div className="part2 font-poppins">
            <div className="additional_contact text-primary">
                <h1 className='text-secondary font-morganite'>Additional Contact</h1>
                <p className='name'>Ajay Antu</p>
                <p className='role'>Sample Role here</p>
                <p className='email'>name@gmail.com</p>
            </div>
        </div> */}
      </div>
    </>
  )
}

export default Faq