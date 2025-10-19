import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

function OfertaEspecial() {
  const [timeLeft, setTimeLeft] = useState(3 * 60 * 60); // 3 horas em segundos

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${String(h).padStart(2, "0")} : ${String(m).padStart(2, "0")} : ${String(s).padStart(2, "0")}`;
  };

  return (
    <section className="bg-black/60 border border-blue-500/20 rounded-2xl text-center p-8 mb-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/30 via-blue-700/10 to-transparent opacity-60 pointer-events-none" />

      {/* Etiqueta de desconto */}
      <div className="relative inline-block bg-red-600 text-white font-bold px-4 py-1 text-sm mb-4 rounded-sm rotate-[-3deg]">
        50% OFF
      </div>

      {/* Cronômetro */}
      <div className="text-3xl font-mono font-semibold mb-2">
        {timeLeft > 0 ? (
          <>
            <span className="text-white">{formatTime(timeLeft).split(":")[0]}</span> :
            <span className="text-blue-400">{formatTime(timeLeft).split(":")[1]}</span> :
            <span className="text-white">{formatTime(timeLeft).split(":")[2]}</span>
          </>
        ) : (
          <span className="text-red-500">00 : 00 : 00</span>
        )}
      </div>
      <div className="text-sm text-slate-300 tracking-widest mb-4">
        HORAS &nbsp; MINUTOS &nbsp; SEGUNDOS
      </div>

      {/* Aviso de urgência */}
      <p className="text-red-500 font-bold text-lg mb-4">
        {timeLeft > 0 ? "RESTAM POUCAS VAGAS" : "TEMPO ESGOTADO!"}
      </p>

      {/* Preços */}
      <div className="mb-6">
        <p className="text-slate-400 line-through text-lg">DE R$497,00</p>
        <p className="text-3xl font-bold text-white">
          POR APENAS <span className="text-blue-400">R$297,00</span>
        </p>
        <p className="text-slate-200 text-sm mt-1">em até 12x de R$30,72</p>
      </div>

      {/* Benefícios */}
      <ul className="text-left inline-block text-slate-200 mb-8 space-y-1 text-sm">
        <li>✔ Acesso vitalício</li>
        <li>✔ Todas as atualizações incluídas</li>
        <li>✔ Acesso imediato</li>
        <li>✔ Bônus exclusivos</li>
        <li>✔ Suporte direto comigo</li>
        <li>✔ Mentoria semanal sem mensalidade</li>
      </ul>

      <br />

      {/* Botão CTA */}
      <Button
        asChild
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg px-8 py-4 rounded-full transition-all shadow-[0_0_20px_-5px_rgba(59,130,246,0.6)]"
      >
        <a href="#curso">QUERO COMEÇAR AGORA</a>
      </Button>

      <p className="text-yellow-400 text-xs mt-2 font-semibold">
        SÓ HOJE: MENOS DE 0,97 CENTAVOS POR DIA
      </p>
    </section>
  );
}

export default OfertaEspecial;
