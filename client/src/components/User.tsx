import { IModal } from "../types/types";

const User = ({ setShowModal }: IModal) => {
  return (
    <div className="flex justify-between p-2">
      <div className="flex items-center gap-3">
        <div className="ml-3 h-[40px] w-[40px] rounded-full bg-slate-100  py-2 text-center text-black">
          U1
        </div>
        <h3 className="tsxt-xl font-medium">User 1</h3>
      </div>
      <button
        onClick={() => setShowModal(true)}
        className="rounded-md bg-black px-3 py-1 text-white"
      >
        Send Money
      </button>
    </div>
  );
};

export default User;
