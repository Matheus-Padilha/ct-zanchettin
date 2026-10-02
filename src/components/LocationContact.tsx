import React from 'react';
import { GYM_INFO } from '../data/gymInfo';
import { MapPin, Navigation, Phone, Star, ShieldCheck, Clock, Award } from 'lucide-react';

export const LocationContact: React.FC = () => {
  const unit = GYM_INFO.units[0];

  return (
    <section id="localizacao" className="py-24 bg-white relative border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-yellow-600 font-bold tracking-[0.2em] text-xs sm:text-sm uppercase mb-2 block">
            Onde Estamos
          </span>
          <h2 className="text-3xl sm:text-5xl font-black font-display text-zinc-950 uppercase tracking-tight">
            Nossa <span className="text-yellow-500">Localização & Estrutura</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-600">
            Localizado no bairro São Cristóvão em Chapecó, com estrutura de ponta para musculação e tatame profissional.
          </p>
        </div>

        {/* Card Principal da Sede com cantos rounded-lg sóbrios */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="p-8 sm:p-10 rounded-lg bg-zinc-50 border border-zinc-200 hover:border-yellow-500 hover:bg-white hover:shadow-lg transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-md text-xs font-bold uppercase tracking-wider bg-yellow-50 text-yellow-800 border border-yellow-300">
                  <MapPin className="w-4 h-4 text-yellow-600" />
                  Bairro São Cristóvão • Chapecó - SC
                </span>
                <div className="flex items-center gap-1.5 text-amber-600 text-sm font-extrabold bg-white px-3 py-1.5 rounded-md border border-zinc-200 shadow-2xs">
                  <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                  <span>5.0 ★ Nota Máxima no Google (93 Avaliações)</span>
                </div>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black font-display text-zinc-950 group-hover:text-yellow-600 transition-colors">
                {GYM_INFO.name}
              </h3>
              
              <p className="text-zinc-600 text-base mt-2 leading-relaxed flex items-center gap-2">
                <MapPin className="w-5 h-5 text-yellow-500 shrink-0" />
                <span>{GYM_INFO.address.full}</span>
              </p>

              {/* Informações adicionais */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6 pt-6 border-t border-zinc-200">
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-yellow-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-bold text-zinc-900 block uppercase">Horário Flexível</span>
                    <span className="text-xs text-zinc-600">Seg-Sex: 06h às 22h<br />Sáb: 08h às 16h</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-yellow-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-bold text-zinc-900 block uppercase">Tradição & Títulos</span>
                    <span className="text-xs text-zinc-600">Referência em Muay Thai, Boxe & Musculação</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-yellow-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-bold text-zinc-900 block uppercase">Treino Gratuito</span>
                    <span className="text-xs text-zinc-600">Primeira aula experimental sem custo</span>
                  </div>
                </div>
              </div>

              {/* Diferenciais da unidade */}
              <div className="mt-6 pt-6 border-t border-zinc-200 space-y-2">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-zinc-700">
                  {unit.features.map((feat: string, idx: number) => (
                    <div key={idx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-yellow-500" />
                      <span className="text-zinc-700 font-medium">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Botões de Ação da Unidade com cantos rounded-lg */}
            <div className="mt-8 pt-6 border-t border-zinc-200 flex flex-col sm:flex-row items-center gap-4">
              <a
                href={GYM_INFO.contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-lg bg-yellow-500 hover:bg-yellow-400 text-zinc-950 font-black text-xs sm:text-sm uppercase tracking-wider shadow-xs hover:shadow-md transition-all"
              >
                <Phone className="w-4 h-4" />
                <span>Chamar no WhatsApp (49) 99197-9794</span>
              </a>

              <a
                href={GYM_INFO.address.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-lg bg-white hover:bg-zinc-100 text-zinc-800 border border-zinc-300 font-bold text-xs sm:text-sm uppercase tracking-wider transition-all"
              >
                <Navigation className="w-4 h-4 text-yellow-600" />
                <span>Abrir no Google Maps</span>
              </a>
            </div>
          </div>
        </div>

        {/* Mapa Embed do Google Maps */}
        <div className="max-w-4xl mx-auto rounded-lg overflow-hidden border border-zinc-200 shadow-sm h-80 sm:h-96">
          <iframe
            title="Localização do Centro de Treinamento Zanchettin"
            src="https://maps.google.com/maps?q=Rua+Martinho+Lutero,+220+-+S%C3%A3o+Crist%C3%B3v%C3%A3o,+Chapec%C3%B3+-+SC&t=&z=16&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* Banner de Atendimento Central com cantos rounded-lg */}
        <div className="max-w-4xl mx-auto mt-12 rounded-lg bg-zinc-50 border border-zinc-200 p-8 sm:p-10 text-center relative overflow-hidden shadow-xs">
          <div className="relative z-10 space-y-4">
            <h3 className="text-2xl sm:text-3xl font-black font-display text-zinc-950 uppercase">
              Venha fazer seu treino experimental sem custo
            </h3>
            <p className="text-zinc-600 text-sm sm:text-base max-w-xl mx-auto">
              Nossa equipe está pronta para receber você, apresentar o tatame, a musculação e orientar sua jornada.
            </p>
            <div className="pt-2">
              <a
                href={GYM_INFO.contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-yellow-500 hover:bg-yellow-400 text-zinc-950 font-black text-sm uppercase tracking-wider shadow-sm hover:shadow-md transition-all duration-300"
              >
                <Phone className="w-4 h-4" />
                <span>Agendar Aula Gratuita Agora</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
