import AccountProgress from "../components/Board/AccountProgress";
import Franchise from "./Board/Franchise";
import Finance from "./Board/Finance";
import Feedback from "./Board/Feedback";
import Leads from "./Board/Leads";
export default function Board() {
  return (
    <div className="ml-10 p-4 grid grid-cols-9 gap-4">
      <AccountProgress />
      <div className="flex flex-col gap-6 col-span-3">
        <Franchise />
        <Finance />
      </div>

      <div className="flex flex-col gap-6 col-span-3">
        <Feedback />
        <Leads />
      </div>
    </div>
  );
}
