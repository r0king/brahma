import React, { useRef } from "react";


const ContactUs = () => {

    const myRef = useRef(null);

    // useEffect(() => {
    //   if (myRef.current) {
    //     myRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    //   }
    // }, []);

    return (
        <div id="contact" ref={myRef} className="flex p-3 pb-5 md:p-6 bg-[#212121] justify-center items-center relative z-10">
            <div
                className="
         w-[90vw]    
         border-[1px] border-[#fafafa75] sm:rounded-tr-[4vw]   rounded-tr-[10vw]  
         bg-clip-padding   
         overflow-hidden"
                
            >
                <div className="grid grid-cols-6 md:grid-cols-5">
                     

                    {/* :CONTACT INFOS CONTAINER */}
                    <div
                        className="col-span-full sm:col-span-3 md:col-span-2 
             p-5 sm:p-10
             flex flex-col w-full h-full mx-auto"
                    >
                        {/* <img src={"Logo"} alt="Asiet Logo" className="   pl-0 md:pl-0    md:pt-0 pb-5" srcSet="" /> */}
                        {/* ::Title Contact */}
                        <h2 className="text-4xl  text-[#f0f0f0] font-poppins tracking-wide">
                            Contact Us
                        </h2>

                        {/* ::Address */}
                        <div className="mt-5 sm:mt-5 space-y-3">
                            <h3 className="text-lg text-[#f0f0f0] font-poppins">Address</h3>
                            <p className="text-base text-[#f0f0f0] font-poppins text-opacity-60">
                                5CHJ+758,
                                <br /> Vidya Bharathi Nagar, <br /> Mattoor, Kalady,
                                <br /> Ernakulam, Kerala 683574
                            </p>
                        </div>

                        {/* ::Office Hours
            <div className="mt-5 sm:mt-5 space-y-3">
              <h3 className="text-base font-medium">Office Hours</h3>
              <p className="text-base text-[#f0f0f0] text-opacity-60"> 8AM-4PM</p>
            </div> */}

                        {/* ::Contact */}
                        <div className="mt-5 sm:mt-5 space-y-3">
                            <h3 className="text-base text-[#f0f0f0] font-medium">Contact</h3>
                            <div className="space-y-1 text-base text-[#f0f0f0] text-opacity-60">
                                <p className="font-poppins">
                                    qwer : +91 1234567
                                    <br />
                                    asdf : +91 12345
                                    <br />

                                </p>
                                <a
                                    href="mailto:Brahma.in"
                                    aria-label="mail"
                                    className="inline-block font-poppins hover:text-[#f0f0f0]"
                                >
                                    Brahma.in
                                </a>
                            </div>
                        </div>

                        {/* ::Social */}
                        <div className="mt-5 sm:mt-5 flex items-center ">
                            <h3 className="text-lg text-[#f0f0f0]   font-poppins uppercase tracking-wider">
                                Social
                            </h3>
                            <div className="ml-3 flex space-x-2">
                                {/* :::facebook */}
                                <a
                                    href="#facebook"
                                    aria-label="facebook"
                                    className="p-1 inline-flex justify-center items-center text-accent hover:text-[#4e4e4e]"
                                >
                                    <svg
                                        className="w-5 h-5 fill-current"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M16.403,9H14V7c0-1.032,0.084-1.682,1.563-1.682h0.868c0.552,0,1-0.448,1-1V3.064c0-0.523-0.401-0.97-0.923-1.005C15.904,2.018,15.299,1.999,14.693,2C11.98,2,10,3.657,10,6.699V9H8c-0.552,0-1,0.448-1,1v2c0,0.552,0.448,1,1,1l2-0.001V21c0,0.552,0.448,1,1,1h2c0.552,0,1-0.448,1-1v-8.003l2.174-0.001c0.508,0,0.935-0.381,0.993-0.886l0.229-1.996C17.465,9.521,17.001,9,16.403,9z" />
                                    </svg>
                                </a>
                                {/* :::twitter */}
                                <a
                                    href="#twitter"
                                    aria-label="twitter"
                                    className="m-2 p-1 inline-flex justify-center items-center text-accent hover:text-[#4e4e4e]"
                                >
                                    <svg
                                        className="w-4 h-4 fill-current"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                                    </svg>
                                </a>
                                {/* :::intagram */}
                                <a
                                    href="#instagrap"
                                    aria-label="instagrap"
                                    className="m-2 p-1 inline-flex justify-center items-center text-accent hover:text-[#4e4e4e]"
                                >
                                    <svg
                                        className="w-4 h-4 fill-current"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                    </svg>
                                </a>
                                {/* :::linkedin */}
                                <a
                                    href="#linkedin"
                                    aria-label="linkedin"
                                    className="m-2 p-1 inline-flex justify-center items-center text-accent hover:text-[#4e4e4e]"
                                >
                                    <svg
                                        className="w-4 h-4 fill-current"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* :MAP CONTAINER */}
                    <div className="col-span-full sm:col-span-3 border-t-[1px] border-[#fafafa3d]  rounded-tr-[3vw]">
                        {/* Embed Google map */}
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6214.8211700506645!2d76.428809361558!3d10.17761954352797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0807bfa8906d61%3A0x11ad08dbd85357dc!2sAdi%20Shankara%20Institute%20of%20Engineering%20and%20Technology%20Kaladi!5e0!3m2!1sen!2sin!4v1672305829425!5m2!1sen!2sin"
                            title="map"
                            scrolling="no"
                            frameBorder="0"
                            className="w-full h-64 sm:h-full"
                            loading="lazy"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
