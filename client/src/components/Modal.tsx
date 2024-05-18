const Modal = () => {
  return (
    <div className="absolute left-1/2 top-1/2 z-10 flex  h-[100vh] w-[100vw] -translate-x-1/2  -translate-y-1/2 items-center justify-center bg-white opacity-90">
      <div className="w-[350px] rounded-md border pb-4 shadow-lg">
        <h1 className="mb-10 mt-6 text-center text-3xl font-bold">
          Send Money
        </h1>
        <div className="flex flex-col justify-start gap-3 px-4">
          <div className="flex items-center gap-2">
            <div className="ml-3 h-[40px] w-[40px] rounded-full bg-green-600  py-2 text-center text-white">
              N
            </div>
            <h1>Name</h1>
          </div>
          <strong>{"Amount (in Rs)"}</strong>
          <input
            type="number"
            placeholder="Enter amount"
            className="rounded-md border p-2 outline-none"
          />
          <button className="rounded-md bg-green-600 p-2 text-white">
            Initiate Transfer
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
