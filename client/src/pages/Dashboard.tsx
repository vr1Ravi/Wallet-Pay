import Appbar from "../components/Appbar";
import Balance from "../components/Balance";

const Dashboard = () => {
  return (
    <section>
      <Appbar />
      <main className="mt-4 p-2">
        <Balance amount={3000} title="Your Balance" />
        <div className="mt-2 p-2">
          <h1 className="my-2 text-2xl font-bold">Users</h1>
          <input
            type="text"
            className="w-1/2 rounded-md border p-2 outline-none"
            placeholder="Search users..."
          />
        </div>
      </main>
    </section>
  );
};

export default Dashboard;
