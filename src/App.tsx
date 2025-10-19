import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { Command } from "lucide-react";
import { motion } from "framer-motion";
import OfertaEspecial from "./components/Oferta";

const features = [
  {
    title: "Aulas Práticas e Diretas",
    desc: "Aprenda passo a passo como criar, lançar e vender produtos digitais na Kiwify.",
  },
  {
    title: "Estratégias de Alta Conversão",
    desc: "Descubra técnicas modernas de tráfego, copywriting e funis de vendas.",
  },
  {
    title: "Mentoria Personalizada",
    desc: "Tenha acompanhamento direto comigo, para escalar seus lucros.",
  },
];

export default function LandingPageAlessonSilva() {
  return (
    <div className="min-h-screen text-white antialiased relative bg-gradient-to-br from-[#0a0f2d] via-[#0b3b78] to-[#00a2ff] overflow-hidden">
      {/* Fundo decorativo azul com partículas */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        {/* Gradiente pulsante */}
        <div className="absolute inset-0 animate-[pulse_8s_infinite_alternate] bg-[radial-gradient(circle_at_top,_#00c6ff20_0%,_transparent_70%)]" />

        {/* Círculos e linhas suaves */}
        <svg
          className="absolute -top-20 left-1/2 -translate-x-1/2 opacity-20"
          width="1200"
          height="400"
          viewBox="0 0 1200 400"
          fill="none"
        >
          <defs>
            <linearGradient id="g1" x1="0" x2="1">
              <stop offset="0" stopColor="#00c6ff" stopOpacity="0.2" />
              <stop offset="1" stopColor="#0072ff" stopOpacity="0.05" />
            </linearGradient>
          </defs>
          <circle cx="600" cy="200" r="250" stroke="url(#g1)" strokeWidth="2" />
          <circle cx="400" cy="120" r="90" stroke="url(#g1)" strokeWidth="1.5" />
          <circle cx="820" cy="90" r="60" stroke="url(#g1)" strokeWidth="1" />
        </svg>

        {/* Partículas flutuantes */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-white/30 rounded-full blur-[1px]"
              style={{
                width: `${Math.random() * 3 + 2}px`,
                height: `${Math.random() * 3 + 2}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `float ${6 + Math.random() * 8}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 6}s`,
              }}
            />
          ))}
        </div>
      </div>

      <style>
        {`
          @keyframes float {
            0%, 100% {
              transform: translateY(0) scale(1);
              opacity: 0.8;
            }
            50% {
              transform: translateY(-20px) scale(1.2);
              opacity: 1;
            }
          }
        `}
      </style>

      <main className="max-w-5xl mx-auto px-6 py-16">
        {/* Header */}
        <header className="flex flex-col items-center gap-6 mb-12">
          <Avatar className="w-28 h-28 ring-4 ring-white/10">
            <img src="/foto.png" alt="Alesson Silva" />
          </Avatar>
          <motion.h1
            initial={{ y: 12, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl font-serif tracking-tight relative"
          >
            <span className="relative inline-block">
              Alesson Silva
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-[shine_3s_linear_infinite]" />
            </span>
          </motion.h1>
          <p className="max-w-2xl text-center text-slate-200">
            Aprenda comigo como vender muito na Kiwify e transformar conhecimento em lucro.
            Estratégias, atalhos e segredos de quem vive de marketing digital.
          </p>
        </header>

        <style>
          {`
            @keyframes shine {
              0% { transform: translateX(-100%); }
              100% { transform: translateX(100%); }
            }
          `}
        </style>

        {/* Hero / CTA */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
          <motion.div
            initial={{ x: -24, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-semibold">Domine as Vendas na Kiwify</h2>
            <p className="text-slate-200">
              Descubra como construir sua renda online com estratégias simples e aplicáveis.
              Transforme o seu conhecimento em um negócio digital altamente lucrativo.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                asChild
                className="bg-blue-500 hover:bg-blue-600 text-white transition-colors"
              >
                <a href="#curso" className="inline-flex items-center gap-2">
                  <Command className="h-4 w-4" />
                  ACESSAR O CURSO
                </a>
              </Button>

              <Button
                variant="outline"
                asChild
                className="bg-blue-500 border-blue-500 text-white hover:bg-blue-600 hover:text-white transition-colors"
              >
                <a
                  href="https://wa.me/559199999999"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  Falar com Alesson
                </a>
              </Button>
            </div>

            <div className="mt-6 flex flex-wrap gap-3 text-sm text-slate-300">
              <span className="inline-flex items-center gap-2">🚀 Estratégias testadas e comprovadas</span>
              <span className="inline-flex items-center gap-2">💰 Resultados reais e sustentáveis</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 24, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="p-6 rounded-2xl bg-gradient-to-b from-black/40 via-black/30 to-transparent border border-white/5"
          >
            <div className="relative mx-auto w-[260px] md:w-[300px] aspect-[9/16] overflow-hidden rounded-2xl border border-white/10 shadow-[0_0_25px_-5px_rgba(0,150,255,0.6)]">
              <video
                src="/db9fd820d44641bdb27d72e2cf8e6243.mp4"
                className="object-cover w-full h-full"
                playsInline
                autoPlay
                loop
                controls 
              />
              {/* Glow com gradiente moderno */}
              <div className="absolute inset-0 pointer-events-none rounded-2xl bg-gradient-to-t from-[#0a0f2d40] via-transparent to-[#00a2ff20]" />
            </div>
            <div className="mt-4">
              <h3 className="font-medium">Vendas na Kiwify — O Método Alesson Silva</h3>
              <p className="text-sm text-slate-300 mt-1">
                Aprenda as táticas que realmente geram lucro e constroem audiência fiel.
              </p>
            </div>
          </motion.div>
        </section>

        <OfertaEspecial />




        {/* Serviços / Benefícios */}
        <section className="mb-12">
          <h3 className="text-2xl font-semibold mb-6 text-center text-blue-400">
            O que você vai aprender
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {features.map((f) => (
              <Card
                key={f.title}
                className="bg-gradient-to-b from-blue-900/40 to-blue-800/10 border border-blue-500/20 hover:border-blue-400/40 hover:shadow-[0_0_20px_-5px_rgba(59,130,246,0.5)] transition-all duration-300"
              >
                <CardContent>
                  <h4 className="font-medium mb-2 text-blue-300">{f.title}</h4>
                  <p className="text-sm text-slate-300">{f.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Depoimentos */}
        <section className="mb-12">
          <h3 className="text-2xl font-semibold mb-6 text-center text-blue-400">
            Histórias de Sucesso
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                text: '"Depois do curso, fiz minhas primeiras 10 vendas em uma semana!"',
                name: "Vicente Souza",
                role: "Aluno",
                img: "/a05444e9-70d2-4acb-ab75-eb3fc4d7e6a5.webp",
              },
              {
                text: '"Aplicando as técnicas do Alesson, bati 5 dígitos em 30 dias!"',
                name: "Rafael",
                role: "Aluno",
                img: "/download.jpg",
              },
              {
                text: '"Conteúdo claro, direto e motivador. Hoje vivo 100% das minhas vendas online!"',
                name: "Lucas",
                role: "Aluno",
                img: "/teste.jpg",
              },
            ].map((dep) => (
              <Card
                key={dep.name}
                className="bg-gradient-to-b from-blue-900/40 to-blue-800/10 border border-blue-500/20 hover:border-blue-400/40 hover:shadow-[0_0_20px_-5px_rgba(59,130,246,0.4)] transition-all duration-300 p-4"
              >
                <CardContent>
                  <p className="text-slate-200 italic">{dep.text}</p>
                  <div className="mt-4 flex items-center gap-3">
                    <Avatar className="w-10 h-10 ring-2 ring-blue-500/30">
                      <img src={dep.img} alt={dep.name} />
                    </Avatar>
                    <div>
                      <div className="text-sm font-medium text-blue-300">
                        {dep.name}
                      </div>
                      <div className="text-xs text-slate-400">{dep.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Footer / CTA Final */}
        <footer className="mt-12 py-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div>
              <div className="text-lg font-medium">
                Pronto para mudar sua vida financeira?
              </div>
              <div className="text-sm text-slate-300">
                Entre para o método que está transformando iniciantes em vendedores profissionais.
              </div>
            </div>

            <div className="flex gap-3 items-center">
              <Button asChild className="bg-blue-500 hover:bg-blue-600 text-white transition-colors">
                <a href="#curso">Acessar o Curso</a>
              </Button>
              <Button variant="outline" asChild className="bg-blue-500 hover:bg-blue-600 text-white transition-colors">
                <a
                  href="https://wa.me/559199999999"
                  target="_blank"
                  rel="noreferrer"
                >
                  Falar com Alesson
                </a>
              </Button>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
