import { useState } from "react";
import { useDispatch } from "react-redux";
import { userLogin } from "../../redux/features/authSlice";

const Login = () => {
  const [input, setInput] = useState({ userEmail: "", userPassword: "" });
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(userLogin(true));
  };

  function handleChange(event) {
    let name = event.target.name;
    let value = event.target.value;
    setInput((values) => ({ ...values, [name]: value }));
  }
  return (
    <div className="flex justify-center h-screen items-center ">
      <div className="bg-zinc-800 p-10">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="User Email"
            name="userEmail"
            value={input.userEmail}
            onChange={handleChange}
          />
          <input
            type="password"
            placeholder="Password"
            name="userPassword"
            value={input.userPassword}
            onChange={handleChange}
          />
          <input type="submit" />
        </form>
      </div>
    </div>
  );
};

export default Login;
