"use client";
import React from "react";
import Footer from "../components/footer";

const page = () => {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#FDF6EE] to-[#FFF9F4] text-[#3A2E2A]">

      {/* ================= HERO ================= */}
      <section className="flex flex-col items-center text-center px-6 pt-24 pb-28">

        {/* Om icon */}
        <div className="w-[60px] h-[60px] rounded-full bg-[#F5821F] flex items-center justify-center mb-[24px]">
          <span className="text-white text-[32px] font-bold leading-none">ॐ</span>
        </div>
        
        {/* Title */}
        <h1
          className="font-[var(--font-playfair)] text-[40px] leading-[48px]"
          style={{ fontWeight: 600 }}
        >
          ISKCON NVCC
        </h1>

        {/* Subtitle */}
        <p className="mt-2 text-[#F7931E] text-[15px] leading-[20px] font-medium">
          Form Management System
        </p>

        {/* Description */}
        <p className="mt-6 max-w-[720px] text-[14px] leading-[24px] text-[#6B5A55]">
          Streamline event registrations, volunteer onboarding,
          and spiritual assessments — all in one peaceful, organized platform.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex gap-4">
          <button className="flex items-center gap-2 bg-[#F7931E] text-white px-6 py-[10px] rounded-lg text-[14px] font-medium shadow hover:brightness-105 transition">
            👤 Admin Login
          </button>

          <button className="flex items-center gap-2 bg-white border border-[#EADFD5] text-[#3A2E2A] px-6 py-[10px] rounded-lg text-[14px] font-medium shadow-sm hover:bg-[#FFF3E8] transition">
            📄 View Public Forms
          </button>
        </div>
      </section>

      {/* ================= FEATURES (SEPARATE COLOR) ================= */}
      <section className="bg-[#FFF9F4] py-24 px-6">

        <h2
          className="text-center font-[var(--font-playfair)] text-[30px] leading-[38px] font-semibold mb-14"
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
      <Footer />

      

    </main>
  );
};

const FeatureCard = ({ icon, title, desc }) => {
  return (
    <div className="bg-white rounded-2xl p-6 text-center shadow-sm border border-[#F0E2D6] hover:shadow-md transition">
      <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-[#FFF1E4] flex items-center justify-center text-xl">
        {icon}
      </div>

      <h3 className="font-semibold mb-2 text-[16px]">
        {title}
      </h3>

      <p className="text-[14px] leading-[22px] text-[#6B5A55]">
        {desc}
      </p>
    </div>
  );
};

export default page;
