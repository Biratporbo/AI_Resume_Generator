import React from "react";

function Contact() {
  return (
    <div className="min-h-screen bg-[#0d0d0f] text-white py-24 px-6">
      <h1 className="text-center text-4xl font-extrabold text-purple-400 drop-shadow-[0_0_15px_#a855f7]">
        Contact Us
      </h1>

      <p className="text-center text-gray-400 mt-3 max-w-2xl mx-auto">
        Have questions, feedback, or collaboration ideas?  
        We’d love to hear from you.
      </p>

      <div className="max-w-xl mx-auto mt-12 bg-[#151518] p-10 rounded-2xl shadow-[0_0_20px_#5b21b6] border border-purple-900/20">
        <form
          className="space-y-6"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Message Sent Successfully!");
          }}
        >
          {/* Name */}
          <div>
            <label className="block mb-1 text-purple-300 font-medium">
              Your Name
            </label>
            <input
              type="text"
              className="w-full px-4 py-3 bg-[#0f0f12] border border-purple-700/40 rounded-xl text-white 
              focus:outline-none focus:border-purple-500 focus:shadow-[0_0_10px_#a855f7] transition"
              placeholder="Enter your name"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-1 text-purple-300 font-medium">
              Email Address
            </label>
            <input
              type="email"
              className="w-full px-4 py-3 bg-[#0f0f12] border border-purple-700/40 rounded-xl text-white 
              focus:outline-none focus:border-purple-500 focus:shadow-[0_0_10px_#a855f7] transition"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Message */}
          <div>
            <label className="block mb-1 text-purple-300 font-medium">
              Message
            </label>
            <textarea
              rows="5"
              className="w-full px-4 py-3 bg-[#0f0f12] border border-purple-700/40 rounded-xl text-white 
              focus:outline-none focus:border-purple-500 focus:shadow-[0_0_10px_#a855f7] transition resize-none"
              placeholder="Write your message here..."
              required
            ></textarea>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 transition px-10 py-3 rounded-lg
            text-lg font-medium shadow-xl shadow-purple-900/40 hover:shadow-purple-700/60"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Footer Text */}
      <p className="text-center text-gray-500 mt-10 text-sm">
        We usually respond within 24 hours ✨
      </p>
    </div>
  );
}

export default Contact;
