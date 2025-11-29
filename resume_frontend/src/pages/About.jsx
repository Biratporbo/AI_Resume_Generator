import React from "react";
import { Rocket, Globe2, Handshake, CheckCircle2 } from "lucide-react";

function LandingPage() {
  const date = new Date();

  const features = [
    {
      title: "AI Resume Builder",
      text: "Generate optimized resumes using advanced AI templates.",
    },
    {
      title: "Instant PDF Export",
      text: "Download high-quality resumes with just one click.",
    },
    {
      title: "Smart Suggestions",
      text: "Improve your resume with real-time AI recommendations.",
    },
  ];

  const testimonials = [
    {
      name: "Amit Sharma",
      role: "Software Engineer",
      company: "Google",
      quote:
        "This is the best resume builder I’ve ever used — clean, fast, and powerful!",
    },
    {
      name: "Priya Verma",
      role: "Product Manager",
      company: "4xl",
      quote:
        "The AI suggestions helped me increase interview calls drastically.",
    },
    {
      name: "Rohit Das",
      role: "Data Analyst",
      company: "Amazon",
      quote:
        "I created a professional resume in minutes. Absolutely loved it.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0d0d0f] text-white">
      {/* HERO SECTION */}
      <section className="py-24 bg-gradient-to-br from-[#1a1a1f] to-[#0d0d0f] text-center">
        <h1 className="text-5xl font-bold text-purple-400 drop-shadow-lg">
          Transform Your Resume with AI
        </h1>

        <p className="text-gray-300 mt-6 max-w-xl mx-auto text-lg">
          Elevate your resume with our AI-powered builder designed to impress
          hiring managers.
        </p>

        <div className="mt-10 flex flex-col md:flex-row justify-center items-center gap-6">
          <span className="text-gray-400 font-medium">
            {date.toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>

          <div className="w-28 h-3 bg-gray-700 rounded-full overflow-hidden">
            <div className="h-full bg-purple-500 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="py-24 max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-purple-400 mb-10">
          About Us
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          <div className="bg-[#1a1a1f] p-8 rounded-xl shadow-xl hover:-translate-y-2 hover:shadow-purple-600/20 transition transform border border-gray-800">
            <Rocket size={48} className="text-purple-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-purple-300 mb-2">
              Mission
            </h3>
            <p className="text-gray-400">
              Deliver innovative solutions that transform ideas into reality.
            </p>
          </div>

          <div className="bg-[#1a1a1f] p-8 rounded-xl shadow-xl hover:-translate-y-2 hover:shadow-purple-600/20 transition transform border border-gray-800">
            <Globe2 size={48} className="text-purple-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-purple-300 mb-2">
              Vision
            </h3>
            <p className="text-gray-400">
              Empower businesses with smart tools that accelerate success.
            </p>
          </div>

          <div className="bg-[#1a1a1f] p-8 rounded-xl shadow-xl hover:-translate-y-2 hover:shadow-purple-600/20 transition transform border border-gray-800">
            <Handshake size={48} className="text-purple-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-purple-300 mb-2">
              Values
            </h3>
            <p className="text-gray-400">
              Integrity, collaboration, and continuous learning.
            </p>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="py-24 max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-purple-400 mb-10">
          Powerful Features
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f, index) => (
            <div
              key={index}
              className="p-8 bg-[#121215] rounded-xl border border-gray-800 shadow-lg hover:shadow-purple-500/20 transition"
            >
              <CheckCircle2 size={40} className="text-purple-400 mb-4" />
              <h3 className="text-xl font-bold text-purple-300 mb-4">
                {f.title}
              </h3>
              <p className="text-gray-400">{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="py-24 max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-purple-400 mb-10">
          What Our Users Say
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-[#1a1a1f] p-8 rounded-xl border border-gray-800 shadow-lg"
            >
              <p className="text-gray-300 italic">"{t.quote}"</p>
              <p className="mt-4 font-bold text-purple-300">{t.name}</p>
              <p className="text-gray-500">
                {t.role} at {t.company}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-white py-12 text-center border-t border-gray-800">
        <p className="text-gray-400">© 2025 AI Resume Generator. All Rights Reserved.</p>

        <div className="flex justify-center gap-6 mt-6 text-gray-500">
          <a href="#" className="hover:text-purple-400">Privacy Policy</a>
          <a href="#" className="hover:text-purple-400">Terms of Service</a>
          <a href="#" className="hover:text-purple-400">Contact</a>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;
