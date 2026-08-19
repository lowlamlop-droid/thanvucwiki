export default function Home() {
  return (
    <div className="min-h-screen bg-[#07070b] text-white flex flex-col items-center justify-center p-6 text-center">
      <span className="bg-purple-500/10 text-purple-300 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-6 border border-purple-500/20">
        ✨ Thần Vực Network - Minecraft Tu Tiên
      </span>
      <h1 className="text-5xl font-black tracking-tight mb-6">THẦN VỰC NETWORK</h1>
      <p className="text-gray-400 max-w-xl mb-8">
        Thế giới tu tiên đỉnh cao trên Minecraft. Khám phá ngay cảnh giới, thể chất và hàng trăm thần binh độc đáo!
      </p>
      <div className="bg-purple-600/30 border border-purple-500/40 px-6 py-3 rounded-xl">
        <p className="text-xs text-purple-300 uppercase font-bold">IP Server</p>
        <p className="text-xl font-bold mt-1">thanvucmc.xyz</p>
      </div>
    </div>
  );
}
