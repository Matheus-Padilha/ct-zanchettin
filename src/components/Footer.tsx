import React from 'react';
import { GYM_INFO } from '../data/gymInfo';
import { MapPin, Phone, Instagram, Star } from 'lucide-react';
import logoZanchettin from '../assets/logo.png';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-zinc-200 pt-16 pb-12 text-zinc-600 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Coluna 1: Logo e Marca */}
          <div className="space-y-4">
            <div className="flex items-center">
              <img
                src={logoZanchettin}
                alt={`${GYM_INFO.name} Logo`}
                className="h-12 w-auto object-contain"
              />
            </div>
            <p className="text-zinc-500 text-sm leading-relaxed">
              Força, disciplina e alta performance em Chapecó. Escola de Muay Thai tradicional, Musculação pesada, Boxe e MMA no bairro São Cristóvão.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={GYM_INFO.contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-zinc-100 hover:bg-yellow-50 text-zinc-600 hover:text-yellow-600 flex items-center justify-center transition-colors border border-zinc-200"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={GYM_INFO.contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-zinc-100 hover:bg-yellow-50 text-zinc-600 hover:text-yellow-600 flex items-center justify-center transition-colors border border-zinc-200"
                aria-label="WhatsApp"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Coluna 2: Navegação Rápida */}
          <div>
            <h4 className="text-zinc-900 font-bold text-sm uppercase tracking-wider mb-4">Navegação</h4>
            <ul className="space-y-2.5">
              <li>
                <a href="#inicio" className="hover:text-yellow-600 transition-colors">Início</a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-yellow-600 transition-colors">Sobre o CT</a>
              </li>
              <li>
                <a href="#modalidades" className="hover:text-yellow-600 transition-colors">Modalidades</a>
              </li>
              <li>
                <a href="#planos" className="hover:text-yellow-600 transition-colors">Planos & Preços</a>
              </li>
              <li>
                <a href="#horarios" className="hover:text-yellow-600 transition-colors">Horários de Funcionamento</a>
              </li>
              <li>
                <a href="#localizacao" className="hover:text-yellow-600 transition-colors">Localização & Estrutura</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-yellow-600 transition-colors">Dúvidas Frequentes</a>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Localização & Reputação */}
          <div>
            <h4 className="text-zinc-900 font-bold text-sm uppercase tracking-wider mb-4">Localização & Reputação</h4>
            <div className="space-y-3 text-zinc-500 text-xs sm:text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-yellow-600 shrink-0 mt-0.5" />
                <span>R. Martinho Lutero, 220 - São Cristóvão, Chapecó - SC, 89803-300</span>
              </div>
              <div className="flex items-center gap-1.5 text-amber-600 font-bold pt-1">
                <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                <span>5.0 ★ Nota Máxima no Google (93 Avaliações)</span>
              </div>
              <p className="text-zinc-500 text-xs pt-1">
                Identifica-se como empresa de empreendedoras.
              </p>
            </div>
          </div>

          {/* Coluna 4: Atendimento & Horário */}
          <div>
            <h4 className="text-zinc-900 font-bold text-sm uppercase tracking-wider mb-4">Atendimento</h4>
            <div className="space-y-2 text-zinc-500 text-xs sm:text-sm">
              <p className="font-semibold text-zinc-800">Segunda a Sexta:</p>
              <p>06:00 às 22:00 (Sem fechar ao meio-dia)</p>
              <p className="font-semibold text-zinc-800 pt-2">Sábados:</p>
              <p>08:00 às 16:00</p>
              <p className="pt-3">
                <a
                  href={GYM_INFO.contact.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-yellow-600 hover:text-yellow-500 transition-colors"
                >
                  WhatsApp: (49) 99197-9794
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Rodapé inferior com direitos autorais */}
        <div className="pt-8 border-t border-zinc-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>© {new Date().getFullYear()} {GYM_INFO.name}. Todos os direitos reservados. Chapecó - SC.</p>
          <p className="flex items-center gap-1">
            Centro de Treinamento Especializado • São Cristóvão
          </p>
        </div>
      </div>
    </footer>
  );
};
