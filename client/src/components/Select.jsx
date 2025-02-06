import React from "react";

const Select = ({ icon: Icon, value, onChange, ...props }) => {
  return (
    <div className="relative mb-6">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <Icon className="size-5 text-green-500" />
      </div>
      <select
        {...props}
        value={value}
        onChange={onChange}
        className="appearance-none w-full pl-10 pr-3 py-2 bg-gray-800 bg-opacity-50 rounded-lg border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-400 transition duration-200"
      >
        <option value="">Select Gender</option>
        <option value="male">male</option>
        <option value="female">female</option>
        <option value="other">other</option>
      </select>
    </div>
  );
};

export default Select;
