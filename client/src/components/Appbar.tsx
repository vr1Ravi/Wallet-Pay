const Appbar = () => {
  return (
    <header className="flex h-[8vh] w-screen border p-2">
      <h1 className="mr-auto text-2xl font-bold">Wallet Pay</h1>
      <div className="flex items-center">
        <p>Hello, User</p>
        <button className="ml-3 h-[40px] w-[40px] rounded-full bg-slate-100 p-2 text-black">
          U
        </button>
      </div>
    </header>
  );
};

export default Appbar;
