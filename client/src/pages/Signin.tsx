import Heading from "../components/Heading";
import LabeledInput from "../components/LabeledInput";
import Subheadeing from "../components/Subheadeing";
import { Link } from "react-router-dom";
const Signin = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <main className=" w-[350px] rounded-lg border bg-white p-3">
        <div className="mb-4">
          <Heading text="Sign In" style="text-center" />
          <Subheadeing
            text="Enter your information to create an account"
            style={"mt-2 text-center"}
          />
        </div>
        <form className="justify-centerp-2 flex w-full flex-col items-center">
          <LabeledInput
            label="Email"
            plcaeholder="jhondoe@example.com"
            id="email"
            name="email"
          />
          <LabeledInput
            label="Password"
            plcaeholder="xxxxxx"
            id="password"
            name="password"
          />
          <button className="my-2 w-full rounded-md bg-black p-2 text-white">
            Sign In
          </button>
          <p className="mx-auto ">
            Don't have an account?{" "}
            <Link className="underline" to={"/signup"}>
              Sign up
            </Link>
          </p>
        </form>
      </main>
    </div>
  );
};

export default Signin;
