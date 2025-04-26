export default function Finance() {
  return (
    <div className="col-span-4 h-full border-[#EAECF0] border-2 p-6 rounded-xl flex flex-col gap-4">
      <div className="flex flex-col gap-4">
        <h1 className="font-semibold text-[16px] font-inter">
          Financial Wellbeing
        </h1>
        <div className="flex justify-between">
          <div className="flex flex-col">
            <p className="font-semibold text-3xl">20</p>
            <p className=" text-gray-600 ">Total Franchises</p>
          </div>
          <img src="/raise-2.svg" alt="" />
        </div>
        <hr className=" w-full border-gray-200 rounded-sm" />
      </div>
      <div className="w-full flex gap-2 p-2">
        <div className="w-1/2 bg-gray-100 rounded-sm flex flex-col items-center gap-2 py-4 mb-2">
          <p className="text-[#455468] font-semibold">Target</p>
          <p className="font-semibold text-2xl">$500,000</p>
        </div>
        <div className="w-1/2 bg-gray-100 rounded-sm flex flex-col items-center gap-2 py-4 mb-2">
          <p className="text-[#455468] font-semibold">Current</p>
          <p className="font-semibold text-2xl">$450,000</p>
        </div>
      </div>
    </div>
  );
}
