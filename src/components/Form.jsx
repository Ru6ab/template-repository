import React from 'react'

export default function Form() {
  return (
    <div id="form" className='flex flex-col gap-8 bg-black pt-16 pb-20 '>
      <div className="flex justify-center items-center flex-col gap-4 px-4  sm:px-20 md:px-40 lg:px-[355px]  pt-[24px]">
        <h1 className="text-white font-bold sm:text-[25px]  raleway-font text-[30px] raleway-font">Get in touch</h1>
        <p
          className="text-[14px] font-md text-neutral-400 ibm-font max-w-[540px] word-spacing-[8px]  leading-loose"
          style={{ wordSpacing: "5px" }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>



<div className="flex flex-col items-center justify-center px-4 sm:px-8 md:px-16 lg:px-32 xl:px-48 py-2 ibm-font ">
  
    <form className="flex flex-col gap-4 w-[350px] sm:w-[380px] md:w-[360px]">

    <label className="flex flex-col text-white font-md text-[12px] sm:text-[15px] md:text-[12px]">
      Email:
      <input
        type="email"
        placeholder="Enter your email"
        className="border border-gray-300 rounded-md p-2 mt-1 focus:outline-none focus:ring-1 focus:ring-lime-700 bg-white placeholder-neutral-400 placeholder:text-[12px] text-black"
      />
    </label>

    <label className="flex flex-col text-white font-md text-[14px] sm:text-[15px] md:text-[12px]">
      Mobile:
      <input
        type="tel"
        placeholder="Enter your mobile number"
        className="border border-gray-300 rounded-md p-2 mt-1 focus:outline-none focus:ring-1 focus:ring-lime-700 bg-white placeholder-neutral-400 placeholder:text-[12px] text-black"
      />
    </label>

    <label className="flex flex-col text-white font-md text-[14px] sm:text-[15px] md:text-[12px]">
      Message:
      <textarea
        placeholder="Write your message"
        rows="4"
        className="border border-gray-300 rounded-md p-2 mt-1 focus:outline-none focus:ring-1 focus:ring-lime-700 bg-white placeholder-neutral-400 placeholder:text-[12px] text-black"
      ></textarea>
    </label>

    <button
      type="submit"
      className="bg-lime-700 text-white py-3 w-full rounded-md font-semibold hover:bg-lime-800 text-[14px] transition rounded ibm-font
          [box-shadow:0_2px_8px_#65A30D20,2px_0_8px_#65A30D20,0_-2px_8px_#65A30D20,-2px_0_8px_#65A30D20]
          mx-auto md:mx-0 transition hover:bg-lime-600"
    >
      Submit
    </button>
  </form>
</div>


      </div>
  )
}
