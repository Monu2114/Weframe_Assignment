export default function Leads() {
  const users = [
    { name: "Wade Warren", Stage: "Initial Inquiry" },
    { name: "Ava Wright", Stage: "Initial Inquiry" },
    { name: "Cody Fisher", Stage: "Initial Inquiry" },
  ];
  return (
    <div className=" h-full border-black border-2 p-6 rounded-xl flex flex-col gap-2">
      <div className="flex flex-col gap-4">
        <h1 className="font-bold text-lg">Prospect Leads</h1>
        <div className="ml-2 flex flex-col gap-2 rounded-xl">
          {users.map((user, index) => (
            <div
              key={index}
              className="bg-[#F6F7FB] rounded-sm flex justify-between p-4"
            >
              <div className="inline-flex justify-between gap-2">
                <img src={`/users/${index}.svg`} alt="" className="w-8 h-8" />
                <p>{user.name}</p>
              </div>
              <div>Stage: {user.Stage}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
