import Link from "next/link";
const Navbar = () => {
  const navbar_array = [
    "Home",
    "Stages & Checklist",
    "Upload Docs",
    "Preferred Vendors",
    "Tech Stack",
    "Targets",
    "Zee Sales Targets",
    "MAI Settings",
    "Pending Questions",
  ];
  return (
    <div className="bg-[#11455D] w-[248px] h-[1062px] px-4">
      <div className="text-white/60 mt-[60px]">
        <div className=" flex flex-col gap-2 w-[216px] h-[32px] mt-[40px]">
          {navbar_array.map((element, index) => (
            <a
              href="#"
              key={index}
              className="text-20 hover:bg-white hover:text-[#11455D] transition-all duration-300 hover:rounded-sm px-4 py-2"
            >
              {element}
            </a>
          ))}
          <a
            href="#logout"
            className="text-20 hover:bg-gray-500 hover:rounded-sm px-2 py-2 mt-[500px]"
          >
            Logout
          </a>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
