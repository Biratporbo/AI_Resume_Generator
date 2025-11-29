import React, { useState } from "react";

export default function ATSScore() {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const handleUpload = () => {
    if (!file) return;
    setLoading(true);

    // Mock AI Score Response (Replace with API)
    setTimeout(() => {
      setResult({
        score: 82,
        requiredSkills: [
          "JavaScript",
          "React.js",
          "Tailwind CSS",
          "REST API",
          "Git",
        ],
        improvements: [
          "Add action-based achievements.",
          "Increase keyword-job relevance.",
          "Add measurable accomplishments.",
        ],
      });
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0c] text-white py-24 px-6">

      {/* Header */}
      <h1 className="text-center text-5xl font-extrabold bg-gradient-to-r from-purple-400 to-fuchsia-500 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(168,85,247,0.6)]">
        ATS Score Analyzer
      </h1>

      <p className="text-center text-gray-400 mt-4 max-w-3xl mx-auto text-lg">
        Upload your resume PDF to analyze ATS score, skill match, and improvements.
      </p>

      {/* Upload Section */}
      <div className="max-w-2xl mx-auto mt-16 bg-[#111113] p-10 rounded-2xl 
          shadow-[0_0_25px_rgba(147,51,234,0.25)] 
          border border-purple-700/30">

        <div className="space-y-6 text-center">

          {/* File Input */}
          <input
            type="file"
            accept="application/pdf"
            onChange={(e) => setFile(e.target.files[0])}
            className="w-full text-gray-300"
          />

          {/* Analyze Button */}
          <button
            onClick={handleUpload}
            disabled={loading || !file}
            className="w-full bg-purple-600 hover:bg-purple-700 transition px-10 py-3 
              rounded-lg text-lg font-medium shadow-xl shadow-purple-900/40 
              hover:shadow-purple-700/60 disabled:opacity-50"
          >
            {loading ? "Analyzing..." : "Analyze Resume"}
          </button>
        </div>
      </div>

      {/* Results Section */}
      {result && (
        <div className="max-w-3xl mx-auto mt-16 space-y-10">

          {/* Score Box */}
          <div className="bg-[#131315] p-8 rounded-2xl border border-purple-600/20 
            shadow-[0_0_30px_rgba(168,85,247,0.25)]">

            <h2 className="text-3xl font-bold text-purple-400 mb-3">
              ATS Score
            </h2>
            <p className="text-5xl font-extrabold text-white drop-shadow-[0_0_10px_rgba(168,85,247,0.4)]">
              {result.score}%
            </p>
          </div>

          {/* Required Skills */}
          <div className="bg-[#131315] p-8 rounded-2xl border border-fuchsia-600/20 
            shadow-[0_0_30px_rgba(244,63,94,0.25)]">

            <h2 className="text-3xl font-bold text-fuchsia-400 mb-4">
              Required Skills
            </h2>

            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              {result.requiredSkills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>

          {/* Improvements */}
          <div className="bg-[#131315] p-8 rounded-2xl border border-blue-600/20 
            shadow-[0_0_30px_rgba(59,130,246,0.25)]">

            <h2 className="text-3xl font-bold text-blue-400 mb-4">
              Improvements
            </h2>

            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              {result.improvements.map((tip, index) => (
                <li key={index}>{tip}</li>
              ))}
            </ul>
          </div>

        </div>
      )}

    </div>
  );
}
