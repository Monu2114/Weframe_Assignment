export default function Franchise() {
  return (
    <div className="w-[338px] h-[284px] max-w-4xl border-black border-2 p-4 rounded-xl flex flex-col gap-4">
      <div className="flex flex-col gap-4">
        <h1 className="font-bold">Total Franchisees Onboard</h1>
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
        <div className="flex justify-between">
          <li className="bullet-increase">Stage 1 (Intital Inquiry)</li>
          <p className="font-semibold text-xl">02</p>
        </div>
        <div className="flex justify-between">
          <li className="bullet-increase">Stage 2 (Document Submission)</li>
          <p className="font-semibold text-xl">07</p>
        </div>
        <div className="flex justify-between">
          <li className="bullet-increase">Stage 3 ((Training))</li>
          <p className="font-semibold text-xl">05</p>
        </div>
      </div>
    </div>
  );
}
