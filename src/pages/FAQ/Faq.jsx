import React from "react";
import { useState } from "react";
// import megaphone from "../../assets/images/megaphone.png"
import CardButton from "../../components/CardButton";
import "./Faq.css";
function Faq() {
  const faqs = [
    {
      qstn: "What kind of events can I expect at Brahma'23?",
      ans: "You can expect to see events such as coding contests, cultural performances, debates, quizzes, sports competitions, and much more.",
    },
    {
      qstn: "How can I register for Brahma'23?",
      ans: "Typically, students can register online through the official website or in person at the college or university.",
    },
    {
      qstn: "Can I volunteer for Brahma'23?",
      ans: "Yes, you can volunteer for Brahma'23. The organizing team will put out a call for volunteers before the event.",
    },
    {
      qstn: "How can I stay updated on the latest news and information about Brahma'23?",
      ans: "You can stay updated on the latest news and information about us by visiting the official website and following the event on social media.",
    },
    {
      qstn: "Are there any registration fees for participating in the fest?",
      ans: "The registration fees, if any, will be mentioned on the website.",
    },
    {
      qstn: "Can I participate in more than one event?",
      ans: "Yes, you can participate in multiple events if they do not clash with each other.",
    },
  ];
  // const handleAccordian=(e)=>{
  //     const el=e.target;
  //     const ele = el.querySelector(".faq_answer p");
  //     if(ele.style.display=="none"){
  //         ele.style.display="block"
  //     }else{
  //         ele.style.display="none";
  //     }

  // }

  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };
  return (
    <>
      <div className="faq_main_container bg-accent">
        <div className="top_part">
          <div className="textpart text-primary font-morganite leading-[0.8]">
            <h1>FREQUENTLY ASKED QUESTIONS</h1>
          </div>
        </div>

        <p className="faq_part font-poppins">
          {/* <img src={megaphone} alt="" /> */}
          <div className="part1">
            {faqs.map((ele, index) => {
              return (
                <>
                  <article
                    className={`accordian_item${index} accordian_item`}
                    onClick={() => {
                      toggle(index);
                    }}
                  >
                    <div
                      className={`accordian_content${index} accordian_content text-primary`}
                    >
                      <h2>{ele.qstn}</h2>
                      <span className={`accordion_icon${index}`}></span>
                    </div>
                    <div className="faq_answer text-primary">
                      <h4
                        className={
                          selected === index
                            ? "text-sm pb-1 content-show"
                            : "content-hide"
                        }
                      >
                        {ele.ans}
                      </h4>
                    </div>
                  </article>
                </>
              );
            })}
          </div>
        </p>

        {/* <div className="reach_team w-full justify-start "> */}
          <div className="mx-auto pt-10 md:pt-0 md:ml-[25vw] md:mt-[2vw] mb-2 w-full md:w-[20vw] min-w-[16rem] self-end aspect-[7/3]">
            <CardButton
              text={{ head: "Reach", tail: "Our Team", caption: "Contact Us" }}
              onClick={(e) => {
                e.preventDefault();
                window.open(
                  "https://mail.google.com/mail/?view=cm&fs=1&to=brahma@adishankara.ac.in&su=Brahma%20Cultural%20Fest%20of%20ASIET&body=Hello%20Team,%0D%0A%0D%0AWe%20are%20reaching%20out%20to%20you..."
                );
              }}
              href="mailto:youremail@gmail.com?subject=Brahma%20Cultural%20Fest%20of%20ASIET&body=Hello%20Team,%0D%0A%0D%0AWe%20are%20reaching%20out%20to%20you..."
            />
          </div>
        {/* </div> */}
      </div>
    </>
  );
}

export default Faq;
