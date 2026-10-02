export interface PlanPricing {
  monthlyEquivalent: number;
  totalPeriod: number;
  installments?: string;
  savingsPercentage?: number;
}

export interface PlanItem {
  id: string;
  name: string;
  badge?: string;
  isPopular?: boolean;
  description: string;
  periodMonths: number;
  pricing: {
    livre: PlanPricing;
  };
  benefits: string[];
}

export const GYM_PLANS: PlanItem[] = [
  {
    id: 'experimental',
    name: 'Treino Experimental',
    badge: '100% Gratuito',
    isPopular: false,
    description: 'Venha conhecer o CT Zanchettin no bairro São Cristóvão e vivencie nossa metodologia sem nenhum custo.',
    periodMonths: 0,
    pricing: {
      livre: {
        monthlyEquivalent: 0,
        totalPeriod: 0,
        installments: 'Agende pelo WhatsApp',
      }
    },
    benefits: [
      'Escolha: Muay Thai, Musculação, Boxe ou MMA',
      'Acompanhamento de mestres e professores graduados',
      'Salão completo com pesos livres e máquinas',
      'Estrutura com tatame, ringue e vestiários',
      'Agendamento rápido e direto pelo WhatsApp'
    ],
  },
  {
    id: 'plano-combat-forca',
    name: 'Plano Força & Combate',
    badge: 'Mais Escolhido',
    isPopular: true,
    description: 'O combo mais procurado: Musculação pesada + Arte Marcial (Muay Thai ou Boxe) integrados para máxima performance.',
    periodMonths: 1,
    pricing: {
      livre: {
        monthlyEquivalent: 0,
        totalPeriod: 0,
        installments: 'Consulte condições exclusivas',
      }
    },
    benefits: [
      'Acesso livre ao salão de musculação',
      'Grade de aulas de Muay Thai ou Boxe inclusa',
      'Horário flexível: 06h às 22h sem fechar ao meio-dia',
      'Treinos de técnica, força e queima calórica',
      'Professores atenciosos e suporte no salão',
      'Ambiente climatizado e estrutura de alto padrão'
    ],
  },
  {
    id: 'plano-black-pass',
    name: 'Plano Black Pass Total',
    badge: 'Acesso Irrestrito',
    isPopular: false,
    description: 'Para quem busca o máximo desempenho físico e marcial: Musculação, Muay Thai, Boxe e MMA sem limites.',
    periodMonths: 12,
    pricing: {
      livre: {
        monthlyEquivalent: 0,
        totalPeriod: 0,
        installments: 'Condição facilitada no cartão',
      }
    },
    benefits: [
      'Acesso ilimitado a todas as modalidades do CT',
      'Muay Thai + Boxe + MMA + Musculação liberados',
      'Treine com atletas de nível nacional e internacional',
      'Evolução rápida de condicionamento e defesa pessoal',
      'Condições especiais para planos anuais/semestrais',
      'Bloqueio de férias sem custo adicional'
    ],
  }
];
