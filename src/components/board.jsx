import AccountProgress from "../components/Board/AccountProgress";
import Franchise from "./Board/Franchise";
import Finance from "./Board/Finance";
export default function Board() {
  return (
    <div className="mt-6 p-4 flex gap-8 h-1/2 w-full">
      <AccountProgress />
      <div className="flex flex-col gap-6 w-[586px]">
        <Franchise />
        <Finance />
      </div>
      {/* <div className="flex flex-1/2">
        
       
      </div>
      <div className="flex flex-1/2">
        <Feedback />
        <Leads />
      </div> */}
    </div>
  );
}
