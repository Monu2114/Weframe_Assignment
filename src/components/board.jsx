import AccountProgress from "../components/Board/AccountProgress";
export default function Board() {
  return (
    <div className="p-4 flex flex-col flex-1/3">
      <AccountProgress />
      {/* <div className="flex flex-1/2">
        <Franchise />
        <Finance />
      </div>
      <div className="flex flex-1/2">
        <Feedback />
        <Leads />
      </div> */}
    </div>
  );
}
