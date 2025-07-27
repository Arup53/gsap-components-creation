const Curvebox = ({ icon, text }) => {
  return (
    <div className="h-40 w-96 px-8 py-2  gap-8 rounded-full border-2 border-purple-600 flex  items-center">
      <div className="h-28 w-28  bg-red-500 rounded-full  flex justify-center items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125Z"
          />
        </svg>
      </div>
      <p className="text-xl ">{text}</p>
    </div>
  );
};

export default Curvebox;
