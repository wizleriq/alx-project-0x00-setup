import React from 'react'
import Image from 'next/image'
import house from "@/public/assets/house.png"
import Advanced from './Advanced'

const Button: React.FC= () => {
  return (
     <div className="h-[422px] w-[378.56px] cursor-pointer hover:shadow-md hover:rounded-lg ">
      <Image className="rounded-lg" src={house} width={378.56} height={299.37} alt="house image" />
      {/* <div className="p-2 flex gap-2 mt-2">
        <Advanced title="Top Villa" />
        <Advanced title="Self CheckIn" />
        <Advanced title="Free Reschedule" />
      </div> */}
      {/* <button>
        <Advanced title = "Wsdom" />
      </button> */}
       <div className="space-y-4">
        {/* Small Buttons */}
        <div className="space-x-4">
          <Advanced title="Small Rounded-sm" styles="text-sm rounded-sm" />
          <Advanced title="Small Rounded-md" styles="text-sm rounded-md" />
         <Advanced title="Small Rounded-full" styles="text-sm rounded-full" />
        </div>

        {/* Medium Buttons */}
        <div className="space-x-4">
         <Advanced title="Medium Rounded-sm" styles="text-base rounded-sm" />
        <Advanced title="Medium Rounded-md" styles="text-base rounded-md" />
          <Advanced title="Medium Rounded-full" styles="text-base rounded-full" />
        </div>

        {/* Large Buttons */}
        <div className="space-x-4">
         <Advanced title="Large Rounded-sm" styles="text-lg rounded-sm" />
          <Advanced title="Large Rounded-md" styles="text-lg rounded-md" />
          <Advanced title="Large Rounded-full" styles="text-lg rounded-full" />
        </div>
      </div>
      </div>
  )
}

export default Button