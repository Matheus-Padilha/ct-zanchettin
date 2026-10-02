import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import heroBg from '../assets/imagem de fundo hero section.jpeg';
import { GYM_INFO } from '../data/gymInfo';
import { ArrowRight, MessageCircle, Star } from 'lucide-react';

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.from(
        '.hero-title',
        {
          y: 40,
          opacity: 0,
          duration: 0.9,
          delay: 0.1,
        }
      )
      .from(
        '.hero-desc',
        {
          y: 30,
          opacity: 0,
          duration: 0.8,
        },
        '-=0.5'
      )
      .from(
        '.hero-ctas',
        {
          y: 20,
          opacity: 0,
          duration: 0.7,
        },
        '-=0.4'
      );
    },
    { scope: containerRef }
  );

  return (
    <section
      id="inicio"
      ref={containerRef}
      className="relative min-h-[92vh] sm:min-h-[95vh] lg:min-h-screen flex items-end justify-center overflow-hidden bg-black isolate pb-14 sm:pb-20 lg:pb-24 pt-32"
    >
      {/* Imagem de fundo real do salao */}
      <img
        src={heroBg}
        alt={`Salão e equipamentos do ${GYM_INFO.name} Chapecó`}
        className="hero-bg absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none brightness-85 contrast-105"
      />

      {/* Fade preto de baixo para cima com destaque e contraste cinematográfico */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/85 via-45% sm:via-black/75 to-transparent pointer-events-none z-[5]" />

      {/* Vinheta lateral sutil e glow dourado suave */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-transparent pointer-events-none z-[5]" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-yellow-500/15 rounded-full blur-3xl pointer-events-none z-[5]" />

      {/* Conteúdo Centralizado */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
        <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6">

          {/* Título Principal Sóbrio (Sem Pílulas Neon) */}
          <h1 className="hero-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black font-display text-white tracking-tight uppercase leading-[1.08] max-w-4xl mx-auto">
            <span>Força & Disciplina</span> <br />
            <span className="text-yellow-400 drop-shadow-[0_0_30px_rgba(234,179,8,0.45)]">
              CT Zanchettin
            </span>
          </h1>

          {/* Descrição */}
          <p className="hero-desc text-base sm:text-lg md:text-xl text-zinc-300 font-light leading-relaxed max-w-2xl mx-auto">
            O <strong>{GYM_INFO.name}</strong> é o centro de treinamento mais completo de Chapecó no bairro São Cristóvão: <strong>Musculação Pesada</strong>, <strong>Muay Thai Tradicional</strong>, <strong>Boxe</strong> e <strong>MMA</strong> em um ambiente de alto nível.
          </p>

          {/* Botões de Ação Direta em formato Pílula (rounded-full) */}
          <div className="hero-ctas pt-3 sm:pt-4 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-md mx-auto">
            <a
              href="#planos"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-yellow-500 hover:bg-yellow-400 text-zinc-950 font-extrabold text-sm uppercase tracking-wider transition-all shadow-lg shadow-yellow-500/25 hover:shadow-yellow-500/40 hover:-translate-y-0.5 active:scale-95 group"
            >
              <span>Conhecer Nossos Planos</span>
              <ArrowRight className="w-4 h-4 text-zinc-950 transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href={GYM_INFO.contact.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold text-sm uppercase tracking-wider backdrop-blur-md transition-all active:scale-95"
            >
              <MessageCircle className="w-4 h-4 text-yellow-400" />
              <span>Fale no WhatsApp</span>
            </a>
          </div>

          {/* Garantias / Diferenciais sutis */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs text-zinc-400 font-medium">
            <span className="flex items-center gap-1.5 text-yellow-400 font-semibold">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              Nota 5.0 no Google (93 Avaliações)
            </span>
            <span>•</span>
            <span>06h às 22h Sem Fechar</span>
            <span>•</span>
            <span>Treino Experimental Gratuito</span>
          </div>
        </div>
      </div>
    </section>
  );
};
