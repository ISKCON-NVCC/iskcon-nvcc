"use client";
import React from "react";
import { useRouter } from "next/navigation";  


const page = () => {
  const router = useRouter();
  return (
    <main className="min-h-screen bg-linear-to-b from-[#FDF6EE] to-[#FFF9F4] text-[#3A2E2A]">

      {/* ================= HERO ================= */}
      <section className="flex flex-col items-center text-center px-6 pt-24 pb-28">

        {/* Om icon */}
        <div className="w-[60px] h-[60px] rounded-full bg-[#F5821F] flex items-center justify-center mb-[24px]">
          <span className="text-white text-[32px] font-bold leading-none">ॐ</span>
        </div>
        
        {/* Title */}
        <h1
          className="text-5xl md:text-6xl lg:text-7xl leading-tight text-[#3A2E2A]"
          style={{ fontWeight: 700 }}
        >
          ISKCON NVCC
        </h1>

        {/* Subtitle */}
        <p className="mt-4 text-[#F7931E] text-xl md:text-2xl font-medium tracking-wide">
          Form Management System
        </p>

        {/* Description */}
        <p className="mt-6 max-w-[800px] text-lg md:text-xl leading-relaxed text-[#6B5A55]">
          Streamline event registrations, volunteer onboarding,
          and spiritual assessments — all in one peaceful, organized platform.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex gap-4">
          <button onClick={() => {router.push('/login')}} className="flex items-center gap-2 bg-[#F7931E] text-white px-8 py-3 rounded-xl text-base md:text-lg font-medium shadow hover:brightness-105 transition">
            👤 Admin Login
          </button>

          <button onClick={() => {router.push('/forms')}} className="flex items-center gap-2 bg-white border border-[#EADFD5] text-[#3A2E2A] px-8 py-3 rounded-xl text-base md:text-lg font-medium shadow-sm hover:bg-[#FFF3E8] transition">
            📄 View Public Forms
          </button>
        </div>
      </section>

      {/* ================= FEATURES (SEPARATE COLOR) ================= */}
      <section className="bg-[#FFF9F4] py-24 px-6">

        <h2
          className="text-center text-4xl md:text-5xl font-bold mb-16 text-[#3A2E2A]"
        >
          Everything You Need
        </h2>

        <div className="max-w-[1100px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          <FeatureCard
            icon="📄"
            title="Form Builder"
            desc="Create custom forms with text, number, and multiple choice questions."
          />

          <FeatureCard
            icon="📝"
            title="Quiz & Assessments"
            desc="Auto-scored quizzes for spiritual education and volunteer training."
          />

          <FeatureCard
            icon="✨"
            title="AI Assistance"
            desc="Get intelligent question suggestions for your forms and quizzes."
          />

        </div>
      </section>
      

      

    </main>
  );
};

const FeatureCard = ({ icon, title, desc }) => {
  return (
    <div className="bg-white rounded-2xl p-8 text-center shadow-sm border border-[#F0E2D6] hover:shadow-md transition">
      <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-[#FFF1E4] flex items-center justify-center text-3xl">
        {icon}
      </div>

      <h3 className="font-bold mb-3 text-2xl text-[#3A2E2A]">
        {title}
      </h3>

      <p className="text-base md:text-lg leading-relaxed text-[#6B5A55]">
        {desc}
      </p>
    </div>
  );
};

export default page;
