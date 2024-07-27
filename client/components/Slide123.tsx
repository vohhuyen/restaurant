
import Head from 'next/head'
import Script from 'next/script';
import React, { useEffect, useState } from 'react'


const Slide123 = () => {
    const [items, setItems] = useState<NodeListOf<Element> | null>(null);
    useEffect(() => {
        // Chỉ chạy mã này trên client-side
        const items = document.querySelectorAll('#slidess .slide-item-text');
        console.log(items);
      }, []); // Mảng phụ thuộc rỗng để đảm bảo useEffect chỉ chạy một lần sau khi component được render
    
      

   
    return (
        <>

        
            <Head>
                <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet" />
                <script src="https://cdn.tailwindcss.com"></script>
            </Head>
            <div className="relative main-about flex py-10 w-full">
                <div className="absolute h-[800px] z-[1] bg-[#0f1d22] flex justify-center items-center w-[50%]">
                    <div className="w-[40%] text-center py-10">
                        <img className="my-7 mx-auto" src="/img/quote-mark.png" alt="" />
                        <div className=" w-full overflow-hidden ">


                            <div className="flex w-full transition-transform duration-500" id="slidess">
                                <div className="min-w-full slide-item-text">
                                    <p className="text-[#AFB8B8] my-7 font-miniver text-[22px] leading-[50px]">
                                        Lorem ipsum dolor sit amet, consectetur adipisic sed do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua ut
                                        enim ad.
                                    </p>
                                    <p className="my-7 text-[19px] font-caviar_dreamsbold uppercase text-[#C9AB81] whitespace-nowrap tracking-[2px]">robert chang 1</p>
                                    <p className="text-white">Sommelier</p>
                                </div>
                                <div className="min-w-full slide-item-text">
                                    <p className="text-[#AFB8B8] my-7 font-miniver text-[22px] leading-[50px]">
                                        aaLorem ipsum dolor sit amet, consectetur adipisic sed do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua ut
                                        enim ad.
                                    </p>
                                    <p className="my-7 text-[19px] font-caviar_dreamsbold uppercase text-[#C9AB81] whitespace-nowrap tracking-[2px]">robert chang 2</p>
                                    <p className="text-white">Sommelier</p>
                                </div>
                                <div className="min-w-full slide-item-text">
                                    <p className="text-[#AFB8B8] my-7 font-miniver text-[22px] leading-[50px]">
                                        bbLorem ipsum dolor sit amet, consectetur adipisic sed do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua ut
                                        enim ad.
                                    </p>
                                    <p className="my-7 text-[19px] font-caviar_dreamsbold uppercase text-[#C9AB81] whitespace-nowrap tracking-[2px]">robert chang 3</p>
                                    <p className="text-white">Sommelier</p>
                                </div>
                            </div>


                        </div>
                        <div className="flex justify-center mt-4 space-x-2 mt-5 " id="numbers">
                            <button className="transition-all text-[#C9AB81] text-center px-1 py-1 border-[#c9ab81] mb-[15px] border-double border-b-4" >1</button>
                            <button className="transition-all text-[#C9AB81] text-center px-1 py-1 border-[#c9ab81] border-b">2</button>
                            <button className="transition-all text-[#C9AB81] text-center px-1 py-1 border-[#c9ab81] border-b">3</button>
                        </div>
                    </div>
                </div>
                <div className="absolute w-[1000px] h-[800px] bg-cover right-[-50px]" ></div>
                <img className="w-full h-full bg-cover" src="https://laurent.qodeinteractive.com/wp-content/uploads/2019/10/main-img-4.jpg" alt="" />
            </div>
            
        </>
    )
   
}

export default Slide123
