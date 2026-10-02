import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { GYM_INFO } from '../data/gymInfo';

export const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Como funciona o treino experimental gratuito no CT Zanchettin?',
      answer:
        'O treino experimental é 100% gratuito e sem compromisso! Basta nos chamar pelo WhatsApp para agendar o melhor dia e horário. Você poderá vivenciar uma aula de Muay Thai, Boxe, MMA ou fazer um treino completo no nosso salão de musculação.',
    },
    {
      question: 'Nunca pratiquei artes marciais antes. Posso começar agora?',
      answer:
        'Com certeza! Todas as nossas modalidades atendem desde quem nunca colocou uma luva na vida até atletas competitivos de alto rendimento. Nossos mestres e instrutores ensinam os fundamentos com paciência, respeito e foco absoluto na sua segurança e integridade física.',
    },
    {
      question: 'Como funciona o salão de musculação?',
      answer:
        'Nosso salão de musculação conta com máquinas biomecânicas pretas e amarelas de alta resistência, anilhas olímpicas e ampla área de pesos livres. Ficamos abertos de segunda a sexta das 06:00 às 22:00 ininterruptamente, sem fechar ao meio-dia.',
    },
    {
      question: 'Posso combinar Musculação e Artes Marciais no mesmo plano?',
      answer:
        'Sim! Nosso plano mais procurado é o Plano Força & Combate, que une o acesso livre à musculação pesada com as aulas de Muay Thai ou Boxe. Também temos o Black Pass para quem deseja acesso ilimitado a todas as modalidades.',
    },
    {
      question: 'Onde o CT Zanchettin está localizado em Chapecó?',
      answer:
        'Estamos localizados na Rua Martinho Lutero, 220, no bairro São Cristóvão em Chapecó - SC (CEP 89803-300). Contamos com ambiente amplo, climatizado, vestiários completos e nota máxima 5.0 estrelas no Google.',
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-zinc-50 relative border-b border-zinc-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho */}
        <div className="text-center mb-16">
          <span className="text-yellow-600 font-bold tracking-[0.2em] text-xs sm:text-sm uppercase mb-2 block">
            Tire Suas Dúvidas
          </span>
          <h2 className="text-3xl sm:text-5xl font-black font-display text-zinc-950 uppercase tracking-tight">
            Perguntas <span className="text-yellow-500">Frequentes</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-600">
            Tudo o que você precisa saber para começar a treinar no Centro de Treinamento Zanchettin.
          </p>
        </div>

        {/* Lista de FAQ em cards rounded-lg sóbrios */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-lg bg-white border border-zinc-200/90 overflow-hidden transition-all duration-200 shadow-2xs"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="font-bold text-base sm:text-lg text-zinc-900">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-yellow-500 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-zinc-600 leading-relaxed border-t border-zinc-100">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* CTA final no rodapé do FAQ com cantos rounded-lg */}
        <div className="mt-12 text-center">
          <p className="text-zinc-600 text-sm mb-4">Ainda ficou com alguma dúvida sobre modalidades ou horários?</p>
          <a
            href={GYM_INFO.contact.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-white hover:bg-zinc-50 text-zinc-950 border border-yellow-400 font-black text-xs sm:text-sm uppercase tracking-wider shadow-xs hover:border-yellow-500 transition-all"
          >
            <HelpCircle className="w-4 h-4 text-yellow-500" />
            <span>Falar com o CT Zanchettin no WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
