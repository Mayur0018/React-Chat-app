import { useState } from "react";
import axios from "axios";

const projectID = "942b6dd5-12f0-4e46-b40c-3a8212b13752";

const Modal = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const authObject = {
      "Project-ID": projectID,
      "User-Name": username,
      "User-Secret": password,
    };

    try {
      await axios.get("https://api.chatengine.io/chats", {
        headers: authObject,
      });

      localStorage.setItem("username", username);
      localStorage.setItem("password", password);

      setError("");
      window.location.reload();
    } catch (err) {
      setError("Oops, incorrect credentials.");
    }
  };

  return (
    <div className="wrapper flex items-center justify-center min-h-screen bg-gray-100">
      <div className="form bg-white p-6 rounded-lg shadow-md">
        <h1 className="title text-2xl font-bold mb-6">Chat Application</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="input w-full p-2 border rounded-md"
            placeholder="Username"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input w-full p-2 border rounded-md"
            placeholder="Password"
            required
          />
          <div className="text-center">
            <button type="submit" className="button bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
              <span>Start chatting</span>
            </button>
          </div>
        </form>
        {error && <h1 className="error text-red-500 mt-4">{error}</h1>}
      </div>
    </div>
  );
};

export default Modal;
