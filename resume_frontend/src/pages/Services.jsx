import React from "react";
import { useNavigate } from "react-router-dom";

function Services() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#0a0a0c] text-white py-24 px-6">
      
      {/* Header */}
      <h1 className="text-center text-5xl font-extrabold bg-gradient-to-r from-purple-400 to-fuchsia-500 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(168,85,247,0.6)]">
        Our Services
      </h1>

      <p className="text-center text-gray-400 mt-4 max-w-3xl mx-auto text-lg">
        Empower your career journey with our cutting-edge, AI-driven resume tools.
        Designed for modern job seekers aiming for excellence, speed, and ATS-friendly results.
      </p>

      {/* Grid Section */}
      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto mt-16">
        
        {/* SERVICE 1 */}
        <div className="p-8 bg-[#111113] rounded-2xl shadow-lg border border-purple-600/20 hover:border-purple-500/60 transition-all duration-300 hover:shadow-[0_0_30px_rgba(132,0,255,0.4)]">
          <h3 className="text-2xl font-semibold text-purple-400">AI Resume Generator</h3>
          <p className="mt-3 text-gray-400">
            Instantly generate a professional resume using advanced AI models 
            trained on thousands of hiring patterns.
          </p>
          <ul className="mt-4 space-y-2 text-gray-300 text-sm">
            <li>• Smart formatting & layout optimization</li>
            <li>• ATS-friendly keyword integration</li>
            <li>• Multiple resume styles</li>
          </ul>
        </div>

        {/* SERVICE 2 */}
        <div className="p-8 bg-[#111113] rounded-2xl shadow-lg border border-fuchsia-600/20 hover:border-fuchsia-500/60 transition-all duration-300 hover:shadow-[0_0_30px_rgba(244,63,94,0.4)]">
          <h3 className="text-2xl font-semibold text-fuchsia-400">Smart Resume Editor</h3>
          <p className="mt-3 text-gray-400">
            Edit every element of your resume with an intuitive interface powered 
            by real-time improvement suggestions.
          </p>
          <ul className="mt-4 space-y-2 text-gray-300 text-sm">
            <li>• Drag-and-drop sections</li>
            <li>• AI writing enhancements</li>
            <li>• Auto-grammar optimization</li>
          </ul>
        </div>

        {/* SERVICE 3 */}
        <div className="p-8 bg-[#111113] rounded-2xl shadow-lg border border-blue-600/20 hover:border-blue-500/60 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.4)]">
          <h3 className="text-2xl font-semibold text-blue-400">Resume Analytics</h3>
          <p className="mt-3 text-gray-400">
            Get insights about how your resume performs, what’s missing, and how 
            to boost your hiring chances.
          </p>
          <ul className="mt-4 space-y-2 text-gray-300 text-sm">
            <li>• ATS score breakdown</li>
            <li>• Keyword match analysis</li>
            <li>• Improvement suggestions</li>
          </ul>
        </div>
      </div>

      {/* Additional Section */}
      <div className="max-w-5xl mx-auto text-center mt-24">
        <h2 className="text-4xl font-bold text-purple-300 drop-shadow-[0_0_20px_rgba(168,85,247,0.3)]">
          Why Choose Our Platform?
        </h2>
        <p className="text-gray-400 mt-3 max-w-3xl mx-auto text-lg">
          We combine design, intelligence, and automation to give you a resume 
          that stands out—whether you're a fresher, professional, or switching careers.
        </p>

        <div className="flex flex-col md:flex-row mt-12 gap-6 justify-center">
          <div className="bg-[#131315] px-6 py-5 rounded-xl border border-purple-500/20 shadow-lg hover:shadow-[0_0_25px_rgba(147,51,234,0.35)] transition">
            <h3 className="text-xl font-bold text-purple-400">⚡ Ultra-Fast</h3>
            <p className="text-gray-400 mt-2">
              Generate a complete resume in under 10 seconds.
            </p>
          </div>

          <div className="bg-[#131315] px-6 py-5 rounded-xl border border-fuchsia-500/20 shadow-lg hover:shadow-[0_0_25px_rgba(244,63,94,0.35)] transition">
            <h3 className="text-xl font-bold text-fuchsia-400">🎯 ATS-Optimized</h3>
            <p className="text-gray-400 mt-2">
              Ensures your resume passes modern ATS scanning systems.
            </p>
          </div>

          <div className="bg-[#131315] px-6 py-5 rounded-xl border border-blue-500/20 shadow-lg hover:shadow-[0_0_25px_rgba(59,130,246,0.35)] transition">
            <h3 className="text-xl font-bold text-blue-400">🤖 AI-Enhanced</h3>
            <p className="text-gray-400 mt-2">
              AI refines your writing and boosts professional tone.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="mt-24 text-center">
        <h2 className="text-4xl font-bold text-purple-300 drop-shadow-[0_0_20px_rgba(168,85,247,0.3)]">
          Ready to Begin?
        </h2>
        <p className="text-gray-400 mt-3 max-w-xl mx-auto text-lg">
          Start generating your professional resume with our smart AI Resume Builder.
        </p>

        <button
          onClick={() => navigate("/generate-resume")}
          className="mt-6 bg-purple-600 hover:bg-purple-700 transition px-10 py-3 rounded-xl text-lg font-medium shadow-[0_0_15px_rgba(168,85,247,0.6)] hover:shadow-[0_0_25px_rgba(168,85,247,0.8)]"
        >
          Get Started
        </button>
      </div>

    </div>
  );
}

export default Services;
