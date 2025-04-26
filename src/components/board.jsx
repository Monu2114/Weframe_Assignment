import AccountProgress from "../components/Board/AccountProgress";
import Franchise from "./Board/Franchise";
export default function Board() {
  return (
    <div className="mt-6 p-4 flex gap-10 h-1/2 w-full">
      <AccountProgress />
      <div className="flex">
        <Franchise />
      </div>
      {/* <div className="flex flex-1/2">
        
        <Finance />
      </div>
      <div className="flex flex-1/2">
        <Feedback />
        <Leads />
      </div> */}
    </div>
  );
}
