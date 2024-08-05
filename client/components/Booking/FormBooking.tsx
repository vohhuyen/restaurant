import React from 'react'

const FormBooking = () => {
  return (
    <div className="container mx-auto py-[11%]  border-b-black">
    <div className=" reservation-container text-center text-[#C9AB81] mt-10 mb-3 ">
        <div className="elds-st-tagline">Your table </div>
        <div className=" flex items-center justify-center  ">
            {/* <!-- PNG Image Left --> */}
            <svg className="mr-4" xmlns="http://www.w3.org/2000/svg" width="41.125" height="9.146">
                <path fill="none" stroke="#9C7C57" stroke-miterlimit="10" d="M40.881 8.576L20.562.591.244 8.576">
                    <animate attributeName="stroke-dasharray" from="0, 50" to="50, 0" dur="1s" repeatCount="1" />

                </path>
                <path fill="none" stroke="#9C7C57" stroke-miterlimit="10" d="M40.881.591L20.562 8.576.243.591">
                    <animate attributeName="stroke-dasharray" from="0, 50" to="50, 0" dur="1s" repeatCount="1" />


                </path>
            </svg>
            <div className="reservation-title text-3xl text-[#C9AB81]  text-5xl">RESERVATION</div>
            {/* <!-- PNG Image Right --> */}
            <svg className="ml-4" xmlns="http://www.w3.org/2000/svg" width="41.125" height="9.146">
                <path fill="none" stroke="#9C7C57" stroke-miterlimit="10" d="M40.881 8.576L20.562.591.244 8.576">
                    <animate attributeName="stroke-dasharray" from="0, 50" to="50, 0" dur="1s" repeatCount="1" />
                    <animate attributeName="stroke-dashoffset" from="0" to="0" dur="1s" repeatCount="1" />
                </path>
                <path fill="none" stroke="#9C7C57" stroke-miterlimit="10" d="M40.881.591L20.562 8.576.243.591">
                    <animate attributeName="stroke-dasharray" from="0, 50" to="50, 0" dur="1s" repeatCount="1" />
                    <animate attributeName="stroke-dashoffset" from="0" to="0" dur="1s" repeatCount="1" />
                </path>
            </svg>





        </div>
        <div className="form flex justify-center space-x-7 mt-16">
            <select className="reservation-input  text-white w-[18%]  border  border-custom-brown p-2 bg-black">
                <option value=" 1">1 person</option>
                <option value=" 2">2 people</option>
                <option value=" 3">3 people</option>
                <option value=" 4">4 people</option>
                <option value=" 5">5 people</option>
                <option value=" 6">6 people</option>
                <option value=" 7">7 people</option>
                <option value=" 8">8 people</option>
                <option value=" 9">9 people</option>
                <option value=" 10">10 people</option>

            </select>


            <div className="bg-none relative w-[18%]  ">
                <input type="date" className="  text-white w-[100%]  reservation-input border  border-custom-brown p-2 bg-black" placeholder="Date black" />
                {/* <i className="fas fa-calendar-alt absolute top-1/2 right-2 transform -translate-y-1/2 text-white"></i>  */}

            </div>

            <select className="reservation-input  text-white  border  border-custom-brown p-2 bg-black w-[18%]  ">
                <option value="1">0:30 am</option>
                <option value="2">1:00 am</option>
                <option value="3">1:30 am</option>
                <option value="4">2:00 am</option>
                <option value="5">2:30 am</option>
                <option value="6">3:30 am</option>
                <option value="7">4:00 am</option>
                <option value="8">4:30 am</option>
                <option value="9">5:00 am</option>
                <option value="10">5:30 am</option>
                <option value="11">7:00 am</option>
                <option value="12">7:30 am</option>
                <option value="13">8:30 am</option>
                <option value="14">9:00 am</option>
                <option value="15">9:30 am</option>
                <option value="16">10:00 am</option>
                <option value="17">10:30 am</option>

                {/* <!-- Add more options here --> */}
            </select>
            <button className="book-now-button  border  border-custom-brown text-white w-[15%]  p-2">BOOK NOW</button>
        </div>

    </div>
    <div className="powered-by text-[#BAC5C0] ml-[11.5%] "> *Powered by OpenTable</div>
</div>
  )
}

export default FormBooking
