import Head from 'next/head';
import React, { useEffect, useState } from 'react';

const Thu = () => {
    // const [selectedNumber, setSelectedNumber] = useState<number | null>(null);
    const [selectedNumber, setSelectedNumber] = useState<number>(1);

    // Mảng ánh xạ số đến nội dung
    const contentMap: { [key: number]: JSX.Element } = {
        1: (
            <div className="min-w-full slide-item-text">
                <p className="text-[#AFB8B8] my-7 font-miniver text-[22px] leading-[50px]">
                    Lorem ipsum dolor sit amet, consectetur adipisic sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua ut
                    enim ad.
                </p>
                <p className="my-7 text-[19px] font-caviar_dreamsbold uppercase text-[#C9AB81] whitespace-nowrap tracking-[2px]">
                    robert chang 1
                </p>
                <p className="text-white">Sommelier</p>
            </div>
        ),
        2: (
            <div className="min-w-full slide-item-text">
                <p className="text-[#AFB8B8] my-7 font-miniver text-[22px] leading-[50px]">
                    aaLorem ipsum dolor sit amet, consectetur adipisic sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua ut
                    enim ad.
                </p>
                <p className="my-7 text-[19px] font-caviar_dreamsbold uppercase text-[#C9AB81] whitespace-nowrap tracking-[2px]">
                    robert chang 2
                </p>
                <p className="text-white">Sommelier</p>
            </div>
        ),
        3: (
            <div className="min-w-full slide-item-text">
                <p className="text-[#AFB8B8] my-7 font-miniver text-[22px] leading-[50px]">
                    bbLorem ipsum dolor sit amet, consectetur adipisic sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua ut
                    enim ad.
                </p>
                <p className="my-7 text-[19px] font-caviar_dreamsbold uppercase text-[#C9AB81] whitespace-nowrap tracking-[2px]">
                    robert chang 3
                </p>
                <p className="text-white">Sommelier</p>
            </div>
        ),
    };

    // Hàm xử lý khi nhấp vào số
    const handleClick = (number: number) => {
        setSelectedNumber(number);
    };

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
                        <div className="w-full overflow-hidden">
                            <div className="flex w-full transition-transform duration-500" id="slidess">
                                {/* Nội dung này sẽ được điều khiển bởi selectedNumber */}
                                {selectedNumber !== null && contentMap[selectedNumber]}
                            </div>
                        </div>
                        <div className="flex justify-center mt-4 space-x-2 mt-5" id="numbers">
                            <button
                                onClick={() => handleClick(1)}
                                className={`transition-all text-[#C9AB81] text-center px-4 py-2 border-[#c9ab81] border-b-4 ${
                                    selectedNumber === 1 ? 'border-[#C9AB81] bg-[#0f1d22]' : 'border-transparent'
                                }`}
                            >
                                1
                            </button>
                            <button
                                onClick={() => handleClick(2)}
                                className={`transition-all text-[#C9AB81] text-center px-4 py-2 border-[#c9ab81] border-b-4 ${
                                    selectedNumber === 2 ? 'border-[#C9AB81] bg-[#0f1d22]' : 'border-transparent'
                                }`}
                            >
                                2
                            </button>
                            <button
                                onClick={() => handleClick(3)}
                                className={`transition-all text-[#C9AB81] text-center px-4 py-2 border-[#c9ab81] border-b-4 ${
                                    selectedNumber === 3 ? 'border-[#C9AB81] bg-[#0f1d22]' : 'border-transparent'
                                }`}
                            >
                                3
                            </button>
                        </div>
                    </div>
                </div>
                <div className="absolute w-[1000px] h-[800px] bg-cover right-[-50px]"></div>
                <img className="w-full h-full bg-cover" src="https://laurent.qodeinteractive.com/wp-content/uploads/2019/10/main-img-4.jpg" alt="" />
            </div>
        </>
    );
};

export default Thu;
