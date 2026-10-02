import React from 'react';
import { GYM_INFO } from '../data/gymInfo';

export const StatementSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 lg:py-32 bg-[#0A0A0A] relative overflow-hidden border-b border-zinc-900">
      <div className="max-w-5xl mx-auto px-6 sm:px-10 text-center relative z-10">
        <span className="text-yellow-500 font-bold uppercase tracking-[0.25em] text-xs sm:text-sm mb-4 block">
          Disciplina • Força • Superação
        </span>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black font-display text-white uppercase tracking-tight leading-[1.15] sm:leading-[1.1]">
          Mais que um treino, a sua forja de{' '}
          <span className="text-yellow-400">
            disciplina, força e superação
          </span>{' '}
          em Chapecó.
        </h2>
        <p className="mt-6 text-zinc-400 text-sm sm:text-lg max-w-2xl mx-auto font-light leading-relaxed">
          {GYM_INFO.tagline}. Estrutura completa de musculação pesada e tatame profissional com atendimento das 06h às 22h sem fechar ao meio-dia no bairro São Cristóvão.
        </p>
      </div>
    </section>
  );
};
