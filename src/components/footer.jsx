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
    <div className="grid grid-cols-2">
      <div className="flex flex-col">
        <div>Pending Questions</div>
        <hr className=" w-full border-gray-200 rounded-sm" />
        {questions.map((post) => {
          return (
            <div className="flex flex-col min-h-32">
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
    </div>
  );
}
