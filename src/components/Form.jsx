import React from 'react'

export default function Form() {
  return (
    <div id="form" className='flex flex-col gap-8 bg-black pb-24 min-h-screen'>
      <div className="flex justify-center items-center flex-col gap-4 px-4 sm:px-20 md:px-40 lg:px-[355px]  pt-[24px]">
        <h1 className="text-white font-bold sm:text-[25px] text-[30px]">Get in touch</h1>
        <p
          className="text-[14px] font-md text-neutral-400  max-w-[540px] word-spacing-[8px] tracking-widest leading-loose"
          style={{ wordSpacing: "5px" }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

  {/* <div className="flex flex-col items-center justify-center px-2 sm:px-4">
  <form className="flex flex-col gap-4 w-[350px]">
    <label className="flex flex-col text-white font-md text-[14px]">
      Email:
      <input
        type="email"
        placeholder="Enter your email"
        className="border border-gray-300 rounded-md p-2 mt-1 focus:outline-none focus:ring-1 focus:ring-lime-700 bg-white placeholder-neutral-600 text-black"
      />
    </label>

    <label className="flex flex-col text-white font-md text-[14px]">
      Mobile:
      <input
        type="tel"
        placeholder="Enter your mobile number"
        className="border border-gray-300 rounded-md p-2 mt-1 focus:outline-none focus:ring-lime-700 bg-white placeholder-neutral-600 text-black"
      />
    </label>

    <label className="flex flex-col text-white font-md text-[14px]">
      Message:
      <textarea
        placeholder="Write your message"
        rows="4"
        className="border border-gray-300 rounded-md p-2 mt-1 focus:outline-none  focus:ring-lime-700 bg-white placeholder-neutral-600 text-black"
      ></textarea>
    </label>

    <button
      type="submit"
      className="bg-lime-700 text-white py-2 rounded-md font-semibold hover:bg-lime-800 transition"
    >
      Submit
    </button>
  </form>
</div> */}

<div className="flex flex-col items-center justify-center px-4 sm:px-8 md:px-16 lg:px-32 xl:px-48 py-8">
  {/* <form className="flex flex-col gap-4 w-full max-w-[400px] sm:max-w-[500px] md:max-w-[600px]"> */}
    <form className="flex flex-col gap-4 w-[350px] sm:w-[380px] md:w-[400px]">

    <label className="flex flex-col text-white font-medium text-[14px] sm:text-[15px] md:text-[16px]">
      Email:
      <input
        type="email"
        placeholder="Enter your email"
        className="border border-gray-300 rounded-md p-2 mt-1 focus:outline-none focus:ring-1 focus:ring-lime-700 bg-white placeholder-neutral-600 text-black"
      />
    </label>

    <label className="flex flex-col text-white font-medium text-[14px] sm:text-[15px] md:text-[16px]">
      Mobile:
      <input
        type="tel"
        placeholder="Enter your mobile number"
        className="border border-gray-300 rounded-md p-2 mt-1 focus:outline-none focus:ring-1 focus:ring-lime-700 bg-white placeholder-neutral-600 text-black"
      />
    </label>

    <label className="flex flex-col text-white font-medium text-[14px] sm:text-[15px] md:text-[16px]">
      Message:
      <textarea
        placeholder="Write your message"
        rows="4"
        className="border border-gray-300 rounded-md p-2 mt-1 focus:outline-none focus:ring-1 focus:ring-lime-700 bg-white placeholder-neutral-600 text-black"
      ></textarea>
    </label>

    <button
      type="submit"
      className="bg-lime-700 text-white py-2 rounded-md font-semibold hover:bg-lime-800 transition"
    >
      Submit
    </button>
  </form>
</div>


      </div>
  )
}
