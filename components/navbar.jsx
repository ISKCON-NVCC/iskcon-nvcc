"use client";


export default function Navbar() {
return (
<nav className="w-full bg-[#FFF7EF] border-b border-[#F2E6D8] px-6 py-3 flex items-center justify-between">
{/* Left */}
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-full bg-[#F58220] flex items-center justify-center text-white font-bold">
ॐ
</div>
<span className="font-semibold text-lg text-[#4A2E1F]">ISKCON NVCC</span>
</div>


{/* Right */}
<div className="flex items-center gap-6 text-sm">
<button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#F58220] text-white">
Dashboard
</button>
<button className="text-[#6B4A3A]">All Forms</button>
<button className="text-[#6B4A3A]">Create Form</button>
<button className="text-red-500">Logout</button>
</div>
</nav>
);
}