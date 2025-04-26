export default function AccountProgress() {
  return (
    <div className="h-[586px] rounded-sm flex flex-col items-center">
      <h1>Account Progress</h1>
      <hr className="h-px my-8 border-0 dark:bg-gray-700"></hr>
      <div className="ml-10 bg-[#F6F7FB] rounded-sm px-4 w-260px h-28">
        <div className="flex flex-col gap-3">
          <div>
            <h2 className="font-semibold ml-4">Steps Completed</h2>
          </div>
          <div>
            <li className="">Profile Setup</li>
            <li className="">Initial Training</li>
            <li className="">Legal Documents</li>
          </div>
        </div>
      </div>
    </div>
  );
}
