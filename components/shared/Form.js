"use client"
import React, { useState } from 'react';
import Image from 'next/image';

function Form() {
  const [advanced, setAdvanced] = useState(false);

  return (
    <div className="flex flex-col items-center py-8 w-[489px] h-[562px] bg-[rgba(0,0,0,0.78)] mt-10 ml-[110px] rounded-[10px]">
      {/* Tabs */}
      <div className="w-[417px] max-w-md rounded-t-lg flex items-center p-2 gap-x-1 justify-between relative top-2">
        <button className="flex-1 text-center text-sm py-2 border border-transparent w-[88px] h-[44px] rounded-t-[7px] bg-white">All</button>
        <button className="flex-1 text-center text-sm py-2 border border-transparent w-[88px] h-[44px] rounded-t-[7px] bg-purple-100 text-white font-bold">Find</button>
        <button className="flex-1 text-center text-sm py-2 border border-transparent w-[88px] h-[44px] rounded-t-[7px] bg-white">Quick Pick</button>
        <div className="flex-1 text-center text-sm py-2 border border-transparent w-[88px] h-[44px] rounded-t-[7px] bg-white flex justify-around items-center">
          <button>Scan</button>
          <Image src="/assets/icons/scan.svg" alt="scan" width={19} height={19} />
        </div>
      </div>

      {/* Search Fields */}
      <form className="h-[345px]">
        <div className="bg-white p-4 max-w-md rounded-b-lg shadow-md w-[401px]">
          <div className="grid grid-cols-2 gap-2 text-xs font-normal">
            <select className="border rounded-lg p-2 h-10">
              <option>Major</option>
            </select>
            <select className="border rounded-lg p-2 h-10">
              <option>Category</option>
            </select>

            <select className="border rounded-lg p-2 h-10">
              <option>Type</option>
            </select>
            <div className="flex space-x-2">
              <select className="border rounded-lg p-2 w-1/2 h-10">
                <option>Year</option>
              </select>
              <p className="text-xs relative top-[14px]">To</p>
              <select className="border rounded-lg p-2 w-1/2 h-10">
                <option>Year</option>
              </select>
            </div>

            <select className="border rounded-lg p-2 h-10">
              <option>Make</option>
            </select>
            <select className="border rounded-lg p-2 h-10">
              <option>Model</option>
            </select>

            <select className="border rounded-lg p-2 h-10">
              <option>Location</option>
            </select>
            <select className="border rounded-lg p-2 h-10">
              <option>Country</option>
            </select>
          </div>

          {/* Advanced Toggle */}
          <button
            onClick={() => setAdvanced(!advanced)}
            className="text-black font-bold mt-2 text-right w-full flex justify-end items-center gap-x-4"
          >
            Advance
            {advanced ? (
              <div className="flex-col">
                <Image
                  src="/assets/icons/selectarrow.svg"
                  alt="Arrow Icon"
                  width={14}
                  height={14}
                />
                <Image
                  src="/assets/icons/selectarrow.svg"
                  alt="Arrow Icon"
                  width={14}
                  height={14}
                />
              </div>
            ) : (
              <Image
                src="/assets/icons/selectarrow.svg"
                alt="Arrow Icon"
                width={14}
                height={14}
              />
            )}
          </button>

          {/* Filters & Actions */}
          <div className="grid grid-cols-4 gap-[10px] mt-2 select">
            <select className="border rounded-lg py-2 w-[88px] h-[35px]"></select>
            <select className="border rounded-lg py-2 w-[88px] h-[35px]"></select>
            <select className="border rounded-lg py-2 w-[88px] h-[35px]"></select>
            <select className="border rounded-lg py-2 w-[88px] h-[35px]"></select>
          </div>
          <div className="grid grid-cols-4 gap-[10px] mt-3">
            <div className="w-[88px] h-[35px] bg-dark-100 rounded-lg border border-dark-200 flex items-center justify-center"><p className="font-normal text-sm">Sort</p></div>
            <div className="w-[88px] h-[35px] bg-dark-100 rounded-lg border border-dark-200 flex items-center justify-center"><p className="font-normal text-sm">Stock Filter</p></div>
            <div className="w-[88px] h-[35px] bg-dark-100 rounded-lg border border-dark-200 flex items-center justify-center"><p className="font-normal text-sm">Sale Filter</p></div>
            <div className="w-[88px] h-[35px] bg-dark-100 rounded-lg border border-dark-200 flex items-center justify-center"><p className="font-normal text-sm">Map</p></div>
          </div>
        </div>
        {/* Search Button */}
        <div className="flex justify-end mt-[15px]">
          <button className="bg-purple-100 text-white py-2 px-8 rounded-lg w-[163px] h-10 text-sm font-normal">Search</button>
        </div>
      </form>

      {/* Short Keys */}
      <div className="mt-[40px]">
        <p className="font-bold text-white mb-2">
          Short Keys
        </p>
        <div className="flex justify-center gap-x-[10px] ">
          <button className="flex justify-center items-center bg-purple-100 text-white py-2 px-4 rounded-lg h-[35px] w-[94px]">Inventory</button>
          <button className="flex justify-center items-center bg-white py-2 px-4 rounded-lg h-[35px] w-[94px]">Auction</button>
          <button className="flex justify-center items-center bg-white py-2 px-4 rounded-lg h-[35px] w-[94px]">Vendor</button>
          <button className="flex justify-center items-center bg-white py-2 px-4 rounded-lg h-[35px] w-[94px]">Location</button>
        </div>
      </div>
    </div>
  );
}

export default Form;
