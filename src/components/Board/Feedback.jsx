export default function Franchise() {
  return (
    <div className=" border-[#EAECF0] border-2 p-4 rounded-xl flex flex-col gap-4">
      <div className="flex flex-col gap-4">
        <h1 className="font-bold">Key Insights & Feedback</h1>
        <div className="flex justify-between">
          <div className="flex flex-col gap-2 ">
            <p className="font-semibold text-3xl">10%</p>
            <p className="">Sales Growth</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2 ">
            <img src="/performer.svg" alt="" className="w-[36px] h-[36px]" />

            <button className="bg-[#D5F2FF80] rounded-3xl px-4 h-6 text-[#279DD4] font-semibold text-[12px]">
              Top Performer
            </button>
          </div>
        </div>
      </div>
      <hr className=" w-full border-gray-200 rounded-sm" />
      <div className="rounded-xl bg-[#F6F7FB] flex flex-col px-6 py-4">
        <h2 className="font-semibold">Feedback</h2>
        <li className="text-[#455468]">
          Franchisees are requesting more detailed training materials.
        </li>
      </div>
    </div>
  );
}
