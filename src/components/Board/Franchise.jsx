export default function Franchise() {
  return (
    <div className="col-span-4 h-full border-[#EAECF0] border-2 p-4 rounded-xl flex flex-col gap-4">
      <div className="flex flex-col gap-4">
        <h1 className="font-semibold text-[16px] font-inter">
          Total Franchisees Onboard
        </h1>
        <div className="flex justify-between">
          <div className="inline-flex gap-4 items-center">
            <p className="font-semibold text-3xl">14</p>
            <img src="/raise-1.svg" alt="Raise" className="h-6" />
          </div>
          <div className="flex ">
            <img src="/Avatars.svg" alt="" />
          </div>
        </div>
      </div>
      <div className="flex gap-2">
        <hr className="bg-[#1F7EAA] w-26 h-[12px] rounded-sm" />
        <hr className="bg-[#2FBDFF] w-1/5 h-[12px]  rounded-sm" />
        <hr className="bg-[#97DEFF] w-1/2 h-[12px] rounded-sm" />
      </div>
      <div className="flex flex-col gap-2 p-2">
        <ul>
          <div className="flex justify-between">
            <li className="flex items-center gap-2">
              <div className="w-[10px] h-[10px] rounded-sm bg-[#1F7EAA]"></div>
              Stage 1 (Initial Inquiry)
            </li>
            <p className="font-semibold text-xl">02</p>
          </div>
          <div className="flex justify-between">
            <li className="flex items-center gap-2">
              <div className="w-[10px] h-[10px] bg-[#2FBDFF] rounded-sm"></div>
              Stage 2 (Document Submission)
            </li>
            <p className="font-semibold text-xl">07</p>
          </div>
          <div className="flex justify-between">
            <li className="flex items-center gap-2">
              <div className="w-[10px] h-[10px] bg-[#97DEFF] rounded-sm"></div>
              Stage 3 ((Training))
            </li>{" "}
            <p className="font-semibold text-xl">05</p>
          </div>
        </ul>
      </div>
    </div>
  );
}
