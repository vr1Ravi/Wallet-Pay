import { useState } from "react";
import Appbar from "../components/Appbar";
import Balance from "../components/Balance";
import User from "../components/User";
import Modal from "../components/Modal";

const Dashboard = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <section className="relative h-screen w-screen">
      <Appbar />
      <main className="mt-4 p-2">
        <Balance amount={3000} title="Your Balance" />
        <div className="mt-2 p-2">
          <h1 className="my-2 text-2xl font-bold">Users</h1>
          <input
            type="text"
            className="w-full rounded-md border p-2 outline-none md:w-1/2"
            placeholder="Search users..."
          />
        </div>

        <div className="mt-3">
          <User setShowModal={setShowModal} />
        </div>
      </main>
      {showModal && <Modal />}
    </section>
  );
};

export default Dashboard;
