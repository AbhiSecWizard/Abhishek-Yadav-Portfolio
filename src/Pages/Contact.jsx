import { useState } from "react";
import SplineTool from "../component/Spline";
import "../Custom/Custome.css";

export const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    setResult("Sending...");

    const formData = new FormData(e.target);
    formData.append("access_key", "f7cc6224-ae7c-45aa-92db-aacb8ed2ff3a");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form submitted successfully ✅");
        e.target.reset();
      } else {
        setResult("Something went wrong ❌");
      }
    } catch (error) {
      setResult("Network error ❌",error);
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 px-6">

        {/* CONTACT FORM */}
        <form
          onSubmit={onSubmit}
          className="bg-gray-800 p-8 rounded-2xl shadow-lg space-y-6"
        >
          <h2 className="text-3xl font-semibold text-white text-center">
            Contact Me
          </h2>

          {/* Name */}
          <div className="flex flex-col">
            <label htmlFor="name" className="text-gray-300 mb-2">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              required
              className="p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label htmlFor="email" className="text-gray-300 mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
              className="p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Message */}
          <div className="flex flex-col">
            <label htmlFor="message" className="text-gray-300 mb-2">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Enter your message"
              required
              className="p-3 h-32 resize-none rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
            ></textarea>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-[#10b981] hover:bg-green-600 transition-all duration-300 text-white font-semibold py-3 rounded-lg"
          >
            Send Message
          </button>

          {/* Result */}
          {result && (
            <p className="text-center text-green-400 font-medium">
              {result}
            </p>
          )}
        </form>

        {/* SPLINE MODEL */}
        <div className="w-full h-[450px] flex flex-col items-center justify-center p-11 gap-7 mt-12">
         <h1 className="text-5xl font-bold text-amber-300"> Let's build something together 🚀</h1>
<p className="font-medium text-3xl font-sans text-gray-300">
  I'm always open to discussing <span className="text-amber-300 italic">new projects</span>,
creative ideas or opportunities to be <span className="text-amber-300 italic">part
of your vision.</span>
</p>
        </div>
      </div>
      
      
      
    </section>
  );
};
