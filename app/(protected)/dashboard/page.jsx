"use client"
import { SiGoogleforms } from "react-icons/si";
import { LuUsers } from "react-icons/lu";
import { CiSquareCheck } from "react-icons/ci";
import { IoMdAddCircleOutline } from "react-icons/io";
import { useRouter } from "next/navigation";

//TODO: HANDLE THE TOGGLE PASSWORD BUTTON IN LOGIN AND SIGNUP FORMS

export default function DashboardPage() {
  const router = useRouter();
  return (
    <div className="min-h-screen bg-[#FFF7EF]">

      <main className="px-8 py-6">
        {/* Greeting */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-[#4A2E1F]">Hare Krishna! 🙏</h1>
          <p className="text-[#7A5A4A] mt-1">
            Welcome to your form management dashboard
          </p>
        </div>

        {/* Stat Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="group bg-white rounded-xl border border-[#F2E6D8] p-6 hover:bg-[#FFF1E3] hover:text-[#F58220] transition:transform duration-200">
            <div className="flex justify-between items-start">
              <p className="text-sm text-[#7A5A4A]">Total Forms</p>
              <SiGoogleforms className="text-[#9A7A6A] group-hover:text-[#F58220]" />
            </div>
            <h2 className="text-3xl font-bold text-[#4A2E1F] mt-2 group-hover:text-[#F58220]">
              3
            </h2>
            <p className="text-xs text-[#9A7A6A] mt-1">Active forms</p>
          </div>

          <div className="group bg-white rounded-xl border border-[#F2E6D8] p-6 hover:bg-[#FFF1E3] hover:text-[#F58220] transition:transform duration-200">
            <div className="flex justify-between items-start">
              <p className="text-sm text-[#7A5A4A]">Total Responses</p>
              <LuUsers className="text-[#9A7A6A] group-hover:text-[#F58220]" />
            </div>
            <h2 className="text-3xl font-bold text-[#4A2E1F] mt-2 group-hover:text-[#F58220]">
              5
            </h2>
            <p className="text-xs text-[#9A7A6A] mt-1">
              Submissions received
            </p>
          </div>

          <div className="group bg-white rounded-xl border border-[#F2E6D8] p-6 hover:bg-[#FFF1E3] hover:text-[#F58220] transition:transform duration-200">
            <div className="flex justify-between items-start">
              <p className="text-sm text-[#7A5A4A]">Quizzes</p>
              <CiSquareCheck className="text-[#9A7A6A] group-hover:text-[#F58220]" />
            </div>
            <h2 className="text-3xl font-bold text-[#4A2E1F] mt-2 group-hover:text-[#F58220]">
              1
            </h2>
            <p className="text-xs text-[#9A7A6A] mt-1">
              Assesement Forms
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Quick Actions */}
          <div className="bg-white rounded-xl border border-[#F2E6D8] p-6">
            <h3 className="text-xl font-semibold text-[#4A2E1F]">
              Quick Actions
            </h3>
            <p className="text-sm text-[#7A5A4A] mb-4">
              Common tasks at your fingertips
            </p>

            <button onClick={() => router.push("/forms/new")} className="cursor-pointer w-full bg-[#F58220] text-white py-3 px-4 rounded-lg mb-3 flex items-center justify-start gap-2">
              <IoMdAddCircleOutline />
              Create New Form
            </button>

            <button onClick={() => router.push("/forms")} className="cursor-pointer w-full border border-[#F2E6D8] py-3 px-4 rounded-lg text-[#4A2E1F] flex items-center justify-start gap-2 hover:bg-[#FFF1E3] hover:text-[#F58220] transition-colors duration-200">
              <SiGoogleforms />
              View All Forms
            </button>
          </div>

          {/* Recent Responses */}
          <div className="bg-white rounded-xl border border-[#F2E6D8] p-6">
            <h3 className="text-xl font-semibold text-[#4A2E1F]">
              Recent Responses
            </h3>
            <p className="text-sm text-[#7A5A4A] mb-4">
              Latest form submissions
            </p>

            <ul className="space-y-4 text-sm">
              <li className="flex justify-between items-center">
                <div>
                  <p className="text-[#4A2E1F]">
                    Bhagavad Gita Basics Quiz
                  </p>
                  <span className="text-[#9A7A6A]">21/01/2024</span>
                </div>

                <span className="bg-[#E6F4EA] text-[#2E7D32] text-xs font-medium px-3 py-1 rounded-full">
                  Score: 1/3
                </span>
              </li>

              <li>
                <p className="text-[#4A2E1F]">
                  Sunday Feast Registration
                </p>
                <span className="text-[#9A7A6A]">17/01/2024</span>
              </li>

              <li>
                <p className="text-[#4A2E1F]">
                  Sunday Feast Registration
                </p>
                <span className="text-[#9A7A6A]">16/01/2024</span>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
