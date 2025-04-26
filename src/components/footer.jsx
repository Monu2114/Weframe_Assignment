export default function Footer() {
  const questions = [
    {
      name: "Phoenix Baker",
      time: "5min",
      id: "@phonenix",
      question: "What are the requirements for opening a new store?",
    },
    {
      name: "Koray Okumus",
      time: "4hr",
      id: "@koray",
      question: "How do I manage inventory effectively?",
    },
  ];
  return (
    <div className="border-t-2 border-black h-full grid grid-cols-4">
      <div className=" flex flex-col border-r-2 border-black">
        <div>Pending Questions</div>
        <hr className="w-64 border-gray-200 rounded-sm" />
        {questions.map((post, index) => {
          return (
            <div key={index} className="flex flex-col min-h-20">
              <div className="inline-flex justify-between">
                <div className="flex gap-2">
                  <img src={`${post.name}`.svg} alt="" />
                  <div className="flex flex-col">
                    {post.name}
                    {post.id}
                  </div>
                </div>
              </div>
              <p>{post.question}</p>
            </div>
          );
        })}
      </div>
      <div className="col-span-3 flex flex-col justify-center items-center gap-4 bg-gray-100">
        <img src="/Logo.svg" alt="" className="w-20 h-20" />
        <h1 className="text-3xl font-semibold">
          Welcome to the AI Chat Assistant
        </h1>
        <textarea
          placeholder="Ask your question here.."
          className="p-2 w-96 h-10 border-2 border-gray-100 text-gray-700 rounded-sm"
        ></textarea>
      </div>
    </div>
  );
}
