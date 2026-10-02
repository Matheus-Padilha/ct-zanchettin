export interface GymHours {
  day: string;
  shortDay: string;
  dayIndex: number;
  shifts: string[];
  note?: string;
  isOpenDay: boolean;
  intervals: Array<{ start: number; end: number }>;
}

export interface GymUnit {
  id: string;
  name: string;
  badge?: string;
  neighborhood: string;
  address: string;
  phone: string;
  whatsappRaw: string;
  mapsUrl: string;
  rating: string;
  reviewsCount?: string;
  features: string[];
}

export const GYM_INFO = {
  name: "Centro de Treinamento Zanchettin",
  shortName: "CT Team Zanchettin",
  tagline: "Força, Disciplina & Performance Máxima 🥊",
  subTagline: "O Centro de Treinamento Especializado Mais Completo de Chapecó: Musculação, Muay Thai, Boxe e MMA",
  slogan: "Encontre sua melhor versão e supere seus limites no CT Zanchettin",
  ratingNumber: "5.0",
  ratingCount: "93 avaliações",
  ratingStars: "★★★★★",
  address: {
    street: "R. Martinho Lutero, 220",
    neighborhood: "São Cristóvão",
    city: "Chapecó",
    state: "SC",
    zipCode: "89803-300",
    full: "R. Martinho Lutero, 220 - São Cristóvão, Chapecó - SC, 89803-300",
    googleMapsUrl: "https://maps.google.com/?q=Centro+de+Treinamento+Zanchettin+Chapeco",
    googleMapsEmbedUrl: "https://maps.google.com/maps?q=Centro+de+Treinamento+Zanchettin+Chapeco&t=&z=16&ie=UTF8&iwloc=&output=embed"
  },
  contact: {
    phoneFormatted: "(49) 99197-9794",
    whatsappFormatted: "(49) 99197-9794",
    whatsappRaw: "5549991979794",
    whatsappLink: "https://wa.me/5549991979794?text=Ol%C3%A1!%20Vim%20pelo%20site%20do%20CT%20Zanchettin%20e%20gostaria%20de%20agendar%20minha%20aula%20experimental%20gratuita.",
    instagramHandle: "@ctteamzanchettin",
    instagramUrl: "https://www.instagram.com/ctteamzanchettin/",
    firstClassFreeText: "Agende seu treino experimental gratuito sem custo! Venha viver a experiência do CT Zanchettin."
  },
  units: [
    {
      id: "matriz-sao-cristovao",
      name: "Centro de Treinamento Zanchettin",
      badge: "5.0 ★ Nota Máxima no Google",
      neighborhood: "São Cristóvão",
      address: "R. Martinho Lutero, 220 - São Cristóvão, Chapecó - SC",
      phone: "(49) 99197-9794",
      whatsappRaw: "5549991979794",
      mapsUrl: "https://maps.google.com/?q=Centro+de+Treinamento+Zanchettin+Chapeco",
      rating: "5.0 ★",
      reviewsCount: "93 avaliações",
      features: [
        "Escola de Muay Thai com títulos nacionais e internacionais",
        "Salão completo de musculação pesada e biomecânica",
        "Aulas dinâmicas de Boxe clássico e MMA",
        "Ambiente climatizado com vestiários estruturados"
      ]
    }
  ] as GymUnit[],
  modalities: [
    {
      id: "muay-thai",
      name: "Muay Thai Tradicional",
      description: "Uma das escolas de Muay Thai mais conceituadas de Santa Catarina, com atletas que competiram internacionalmente e na Tailândia. Desenvolva técnica apurada, condicionamento cardiovascular explosivo e defesa pessoal."
    },
    {
      id: "musculacao",
      name: "Musculação & Hipertrofia",
      description: "Aparelhos ergonômicos e pesos livres de padrão industrial para hipertrofia, força, resistência e definição muscular, com acompanhamento próximo de professores no salão."
    },
    {
      id: "boxe",
      name: "Boxe Clássico",
      description: "A nobre arte em sua essência: footwork, velocidade, potência de golpes, esquivas e queima calórica intensa em treinos individuais e em grupo."
    },
    {
      id: "mma",
      name: "MMA & Artes Marciais",
      description: "Integração dinâmica de combate em pé e controle no solo para condicionamento atlético total, coordenação motora, foco mental e autoconfiança inabalável."
    }
  ],
  schedule: [
    {
      day: "Segunda-feira",
      shortDay: "Seg",
      dayIndex: 1,
      shifts: ["06:00 às 22:00"],
      note: "06h às 22h sem fechar ao meio-dia",
      isOpenDay: true,
      intervals: [{ start: 6 * 60, end: 22 * 60 }]
    },
    {
      day: "Terça-feira",
      shortDay: "Ter",
      dayIndex: 2,
      shifts: ["06:00 às 22:00"],
      note: "06h às 22h sem fechar ao meio-dia",
      isOpenDay: true,
      intervals: [{ start: 6 * 60, end: 22 * 60 }]
    },
    {
      day: "Quarta-feira",
      shortDay: "Qua",
      dayIndex: 3,
      shifts: ["06:00 às 22:00"],
      note: "06h às 22h sem fechar ao meio-dia",
      isOpenDay: true,
      intervals: [{ start: 6 * 60, end: 22 * 60 }]
    },
    {
      day: "Quinta-feira",
      shortDay: "Qui",
      dayIndex: 4,
      shifts: ["06:00 às 22:00"],
      note: "06h às 22h sem fechar ao meio-dia",
      isOpenDay: true,
      intervals: [{ start: 6 * 60, end: 22 * 60 }]
    },
    {
      day: "Sexta-feira",
      shortDay: "Sex",
      dayIndex: 5,
      shifts: ["06:00 às 22:00"],
      note: "06h às 22h sem fechar ao meio-dia",
      isOpenDay: true,
      intervals: [{ start: 6 * 60, end: 22 * 60 }]
    },
    {
      day: "Sábado",
      shortDay: "Sáb",
      dayIndex: 6,
      shifts: ["08:00 às 16:00"],
      note: "08h às 16h",
      isOpenDay: true,
      intervals: [{ start: 8 * 60, end: 16 * 60 }]
    },
    {
      day: "Domingo",
      shortDay: "Dom",
      dayIndex: 0,
      shifts: ["Fechada"],
      note: "Descanso e recuperação",
      isOpenDay: false,
      intervals: []
    }
  ]
};

export function getGymOpenStatus(now = new Date()): {
  isOpen: boolean;
  statusText: string;
  detailText: string;
} {
  const dayIndex = now.getDay();
  const currentMinutes = now.getHours() * 60 + now.getMinutes();
  const currentDaySchedule = GYM_INFO.schedule.find(s => s.dayIndex === dayIndex);

  if (currentDaySchedule && currentDaySchedule.isOpenDay) {
    const matchingInterval = currentDaySchedule.intervals.find(
      i => currentMinutes >= i.start && currentMinutes < i.end
    );

    if (matchingInterval) {
      const endHour = Math.floor(matchingInterval.end / 60);
      const endMin = matchingInterval.end % 60;
      const timeFormatted = `${String(endHour === 24 ? 0 : endHour).padStart(2, '0')}:${String(endMin).padStart(2, '0')}`;
      return {
        isOpen: true,
        statusText: "Aberto Agora",
        detailText: `Até às ${timeFormatted}`
      };
    }

    const nextIntervalToday = currentDaySchedule.intervals.find(i => i.start > currentMinutes);
    if (nextIntervalToday) {
      const startHour = Math.floor(nextIntervalToday.start / 60);
      const startMin = nextIntervalToday.start % 60;
      const timeFormatted = `${String(startHour).padStart(2, '0')}:${String(startMin).padStart(2, '0')}`;
      return {
        isOpen: false,
        statusText: "Fechado",
        detailText: `Reabre hoje às ${timeFormatted}`
      };
    }
  }

  for (let offset = 1; offset <= 7; offset++) {
    const nextDayIndex = (dayIndex + offset) % 7;
    const nextDaySchedule = GYM_INFO.schedule.find(s => s.dayIndex === nextDayIndex);

    if (nextDaySchedule && nextDaySchedule.isOpenDay && nextDaySchedule.intervals.length > 0) {
      const firstInterval = nextDaySchedule.intervals[0];
      const startHour = Math.floor(firstInterval.start / 60);
      const startMin = firstInterval.start % 60;
      const timeFormatted = `${String(startHour).padStart(2, '0')}:${String(startMin).padStart(2, '0')}`;

      if (offset === 1) {
        return {
          isOpen: false,
          statusText: "Fechado",
          detailText: `Reabre amanhã às ${timeFormatted}`
        };
      } else {
        return {
          isOpen: false,
          statusText: "Fechado",
          detailText: `Abre ${nextDaySchedule.day.toLowerCase()} às ${timeFormatted}`
        };
      }
    }
  }

  return {
    isOpen: false,
    statusText: "Fechado",
    detailText: "Consulte nossos horários"
  };
}
