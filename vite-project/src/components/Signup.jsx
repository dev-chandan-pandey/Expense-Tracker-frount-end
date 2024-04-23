import React, { useState } from "react";
import axios from "axios";

const Signup = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://expense-tracker-json-server-tlf2.onrender.com/users",
        formData
      );
      console.log("Signup Success:", response.data);
      alert("Signup Successful!");
    } catch (error) {
      console.error("Signup Error:", error);
      alert("Signup Failed!");
    }
  };

  return (
    <div className=" justify-center   bg-blue-700 mt-[30px]">
      <h1 className=" text-center text-[34px] font-bold text-white ">SIGNUP</h1>
      <form
        className=" flex flex-col gap-[12px] mt-[20px] p-[10px]"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="Full Name"
          required
        
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          required
         
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
          required
          
        />
        <button
          type="submit"
          className=" bg-red-300 text-gray-100 w-[20%] m-auto px-[20px] py-[10px] rounded-md font-semibold hover:bg-blue-500 hover:text-gray-400"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;
