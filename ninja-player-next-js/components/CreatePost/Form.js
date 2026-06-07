import React, { useEffect, useState } from "react";
import Data from "../../shared/Data";
import { useSession } from "next-auth/react";
import { db } from "./../../shared/FirebaseConfig";
import { doc, setDoc } from "firebase/firestore";
import Toast from "../Toast";

function Form() {
  const [inputs, setInputs] = useState({});
  const [showToast, setShowToast] = useState(false);
  const [imageOption, setImageOption] = useState("url"); // "url" or "file"

  const { data: session } = useSession();

  useEffect(() => {
    if (session) {
      setInputs((values) => ({ ...values, userName: session.user?.name }));
      setInputs((values) => ({ ...values, userImage: session.user?.image }));
      setInputs((values) => ({ ...values, email: session.user?.email }));
    }
  }, [session]);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setInputs((values) => ({ ...values, image: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!inputs.image) {
      alert("Please add an image!");
      return;
    }
    setShowToast(true);
    await setDoc(doc(db, "posts", Date.now().toString()), inputs);
  };

  return (
    <div className="mt-4">
      {showToast ? (
        <div className="absolute top-10 right-10">
          <Toast
            msg={"Post Created Successfully"}
            closeToast={() => setShowToast(false)}
          />
        </div>
      ) : null}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          required
          onChange={handleChange}
          className="w-full mb-4 border-[1px] p-2 rounded-md"
        />
        <textarea
          name="desc"
          className="w-full mb-4 outline-blue-400 border-[1px] p-2 rounded-md"
          required
          onChange={handleChange}
          placeholder="Write Description here"
        />
        <input
          type="date"
          name="date"
          required
          onChange={handleChange}
          className="w-full mb-4 border-[1px] p-2 rounded-md"
        />
        <input
          type="text"
          placeholder="Location"
          name="location"
          required
          onChange={handleChange}
          className="w-full mb-4 border-[1px] p-2 rounded-md"
        />
        <input
          type="text"
          placeholder="Zip"
          name="zip"
          required
          onChange={handleChange}
          className="w-full mb-4 border-[1px] p-2 rounded-md"
        />
        <select
          name="game"
          onChange={handleChange}
          required
          className="w-full mb-4 border-[1px] p-2 rounded-md"
        >
          <option disabled defaultValue>
            Select Game
          </option>
          {Data.GameList.map((item) => (
            <option key={item.id}>{item.name}</option>
          ))}
        </select>

        {/* Image Option Toggle */}
        <div className="flex gap-4 mb-3">
          <label className="flex items-center gap-1 cursor-pointer">
            <input
              type="radio"
              value="url"
              checked={imageOption === "url"}
              onChange={() => setImageOption("url")}
            />
            Image URL
          </label>
          <label className="flex items-center gap-1 cursor-pointer">
            <input
              type="radio"
              value="file"
              checked={imageOption === "file"}
              onChange={() => setImageOption("file")}
            />
            Upload File
          </label>
        </div>

        {imageOption === "url" ? (
          <input
            type="text"
            placeholder="Paste Image URL here"
            name="image"
            required
            onChange={handleChange}
            className="w-full mb-4 border-[1px] p-2 rounded-md"
          />
        ) : (
          <input
            type="file"
            onChange={handleFileChange}
            accept="image/gif, image/jpeg, image/png"
            className="mb-5 border-[1px] w-full p-2 rounded-md"
          />
        )}

        <button
          type="submit"
          className="bg-blue-500 w-full p-1 rounded-md text-white"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;