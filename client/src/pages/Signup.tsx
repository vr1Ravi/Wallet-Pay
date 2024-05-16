import Heading from "../components/Heading";
import LabeledInput from "../components/LabeledInput";
import Subheadeing from "../components/Subheadeing";
import { Link } from "react-router-dom";
const Signup = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <main className=" w-[350px] rounded-lg border bg-white p-3">
        <div className="mb-4">
          <Heading text="Sign Up" style="text-center" />
          <Subheadeing
            text="Enter your credentials to access your account"
            style={"mt-2 text-center"}
          />
        </div>
        <form className="justify-centerp-2 flex w-full flex-col items-center">
          <LabeledInput
            label="First Name"
            plcaeholder="Jhon"
            id="firstname"
            name="firstname"
          />
          <LabeledInput
            label="Last Name"
            plcaeholder="Doe"
            id="lastname"
            name="lastname"
          />
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
            Sign Up
          </button>
          <p className="mx-auto ">
            Already have an account?{" "}
            <Link className="underline" to={"/signin"}>
              Sign in
            </Link>
          </p>
        </form>
      </main>
    </div>
  );
};

export default Signup;
