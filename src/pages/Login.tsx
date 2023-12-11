import { useState } from "react";
import { useLogin } from "../hooks/useLogin";
import { useNavigate } from "react-router";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useLogin();

  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await login(username, password);
    navigate("/");
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-4 md:p-8">
      <div className="w-full rounded-lg bg-white p-4 shadow-md md:w-3/4 md:p-8 lg:w-1/2 xl:w-96">
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="mb-2 block font-semibold text-gray-600 md:text-lg">
              Username
            </label>
            <input
              className="w-full rounded-md border px-3 py-2 text-sm focus:outline-none md:text-base"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="mb-2 block font-semibold text-gray-600 md:text-lg">
              Password
            </label>
            <input
              type="password"
              className="w-full rounded-md border px-3 py-2 text-sm focus:outline-none md:text-base"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            className="block w-full rounded-lg bg-blue-500 py-2.5 font-semibold leading-6 text-white transition duration-200 hover:bg-blue-600"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
