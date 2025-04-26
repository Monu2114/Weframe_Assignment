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
    <div className="border-t-2 border-[#D7DFE9] h-full grid grid-cols-4">
      <div className="flex flex-col border-r-2 border-[#D7DFE9]">
        <p className="text-lg font-semibold  py-2 px-6">Pending Questions</p>
        <hr className="w-82 border-gray-200 rounded-sm" />
        {questions.map((post, index) => {
          return (
            <div key={index} className="flex flex-col p-2 min-h-20 mt-2">
              <div className="inline-flex justify-between">
                <div className="flex gap-3">
                  <img src={`${encodeURIComponent(post.name)}.svg`} alt="" />
                  <div className="flex flex-col">
                    <p className="text-[#344054] font-semibold">{post.name}</p>
                    <p className="text-[#475467]">{post.id}</p>
                  </div>
                </div>
                <p className="text-[#475467]">{post.time} ago</p>
              </div>
              <p>{post.question}</p>
              <hr className="w-96 mt-4 border-gray-200 rounded-sm" />
            </div>
          );
        })}
      </div>
      <div className="col-span-3 flex flex-col justify-center items-center gap-3 bg-gray-50">
        <img src="/Logo.svg" alt="" className="w-20 h-20" />
        <h1 className="text-3xl font-semibold">
          Welcome to the AI Chat Assistant
        </h1>
        <textarea
          placeholder="Ask your question here.."
          className="px-4 py-1 w-[680px] h-10 border-2 bg-white border-[#D7DFE9] text-gray-700 rounded-sm resize-none"
        >
          {" "}
        </textarea>
        {/* <svg
          width="20"
          height="21"
          viewBox="0 0 20 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M1.95413 2.64905C2.07852 2.54099 2.23215 2.47224 2.3956 2.45147C2.55906 2.4307 2.725 2.45886 2.87246 2.53238L17.8725 10.0324C18.0111 10.1015 18.1278 10.2079 18.2093 10.3396C18.2909 10.4714 18.3341 10.6233 18.3341 10.7782C18.3341 10.9332 18.2909 11.085 18.2093 11.2168C18.1278 11.3485 18.0111 11.4549 17.8725 11.524L2.87246 19.024C2.72501 19.0978 2.55899 19.1262 2.39541 19.1056C2.23183 19.085 2.07804 19.0163 1.9535 18.9083C1.82895 18.8002 1.73926 18.6577 1.69576 18.4987C1.65226 18.3396 1.65691 18.1713 1.70913 18.0149L3.84413 11.6115H8.33329C8.55431 11.6115 8.76627 11.5237 8.92255 11.3675C9.07883 11.2112 9.16663 10.9992 9.16663 10.7782C9.16663 10.5572 9.07883 10.3452 8.92255 10.189C8.76627 10.0327 8.55431 9.94488 8.33329 9.94488H3.84413L1.70829 3.54155C1.65634 3.38522 1.65189 3.21701 1.6955 3.05816C1.73911 2.89931 1.82965 2.75694 1.95413 2.64905Z"
            fill="#1C222B"
            fill-opacity="0.3"
          />
        </svg> */}
      </div>
    </div>
  );
}
