import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { GYM_INFO } from '../data/gymInfo';
import fotoMusculacao from '../assets/imagem musculacao.png';
import fotoMuayThai from '../assets/imagem jiu jitsu.png';
import fotoBoxe from '../assets/imagem boxe.png';

interface ModalityItem {
  id: string;
  title: string;
  description: string;
  highlights: string[];
  image: string;
  alt: string;
  imageScale?: string;
}

const MODALITIES: ModalityItem[] = [
  {
    id: 'muay-thai',
    title: 'Muay Thai Tradicional',
    description:
      'Uma das escolas de Muay Thai mais conceituadas de Santa Catarina, com atletas campeões em nível nacional e com experiência na Tailândia. Desenvolva técnica apurada, condicionamento cardiovascular explosivo e disciplina.',
    highlights: ['Tradição & Atletas de Elite', 'Técnica e Condicionamento', 'Do Iniciante ao Avançado', 'Graduação e Disciplina'],
    image: fotoMuayThai,
    alt: 'Muay Thai Tradicional no Centro de Treinamento Zanchettin Chapecó',
    imageScale: '',
  },
  {
    id: 'musculacao',
    title: 'Musculação & Força',
    description:
      'Salão completo com aparelhos biomecânicos pretos e amarelos e ampla área de pesos livres para hipertrofia, ganho de força, resistência e emagrecimento, com orientação atenta de professores no salão.',
    highlights: ['Hipertrofia & Força Máxima', 'Aparelhos Biomecânicos', 'Instrutores Presentes', 'Treino Seguro & Eficiente'],
    image: fotoMusculacao,
    alt: 'Musculação Pesada e Biomecânica no CT Zanchettin Chapecó',
    imageScale: '',
  },
  {
    id: 'boxe',
    title: 'Boxe Clássico & Combate',
    description:
      'A nobre arte em sua essência: footwork refinado, esquivas rápidas, combinações de golpes precisos e queima calórica intensa, melhorando reflexos, foco e autoconfiança inabalável.',
    highlights: ['Potência & Velocidade', 'Coordenação e Esquiva', 'Defesa Pessoal Prática', 'Queima Calórica Intensa'],
    image: fotoBoxe,
    alt: 'Boxe Clássico e Combate no CT Zanchettin Chapecó',
    imageScale: '',
  },
];

export const Modalities: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [remainingSeconds, setRemainingSeconds] = useState(6);
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);
  const isDragging = useRef<boolean>(false);
  const isDragActionRef = useRef<boolean>(false);

  useEffect(() => {
    const currentSection = sectionRef.current;
    if (!currentSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    observer.observe(currentSection);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isInView) return;

    const duration = 6000;
    const intervalTime = 50;
    const step = (intervalTime / duration) * 100;

    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + step;
        if (next >= 100) {
          setCurrentIndex((idx) => (idx + 1) % MODALITIES.length);
          return 0;
        }
        setRemainingSeconds(Math.ceil(((100 - next) / 100) * (duration / 1000)));
        return next;
      });
    }, intervalTime);

    return () => clearInterval(interval);
  }, [currentIndex, isInView]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setProgress(0);
    setRemainingSeconds(6);
  };

  const nextSlide = () => {
    goToSlide((currentIndex + 1) % MODALITIES.length);
  };

  const prevSlide = () => {
    goToSlide((currentIndex - 1 + MODALITIES.length) % MODALITIES.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchEndX.current = e.touches[0].clientX;
    isDragActionRef.current = false;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
    if (Math.abs(touchStartX.current - touchEndX.current) > 10) {
      isDragActionRef.current = true;
    }
  };

  const handleTouchEnd = () => {
    if (!isDragActionRef.current) return;
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 50) {
      nextSlide();
    } else if (diff < -50) {
      prevSlide();
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    touchStartX.current = e.clientX;
    touchEndX.current = e.clientX;
    isDragActionRef.current = false;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    touchEndX.current = e.clientX;
    if (Math.abs(touchStartX.current - touchEndX.current) > 10) {
      isDragActionRef.current = true;
    }
  };

  const handleMouseUp = () => {
    if (!isDragging.current) return;
    isDragging.current = false;
    if (isDragActionRef.current) {
      const diff = touchStartX.current - touchEndX.current;
      if (diff > 50) {
        nextSlide();
      } else if (diff < -50) {
        prevSlide();
      }
    }
  };

  return (
    <section
      id="modalidades"
      ref={sectionRef}
      className="py-24 bg-zinc-50 relative overflow-hidden select-none border-b border-zinc-200/80"
    >
      {/* Background glow sutil em dourado */}
      <div className="absolute top-1/4 -right-40 w-[500px] h-[500px] bg-yellow-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-40 w-[500px] h-[500px] bg-yellow-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header da seção */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <span className="text-yellow-600 font-bold tracking-[0.2em] text-xs sm:text-sm uppercase block mb-2">
          Treinamento Especializado
        </span>
        <h2 className="text-3xl sm:text-5xl font-black font-display text-zinc-950 uppercase tracking-tight">
          Nossas <span className="text-yellow-500">Modalidades</span>
        </h2>
        <p className="mt-3 text-zinc-600 text-sm sm:text-base max-w-2xl mx-auto">
          Muay Thai de elite, Musculação pesada e Boxe com instrutores atenciosos. Agende sua <strong>aula experimental gratuita</strong>!
        </p>
      </div>

      {/* Carrossel Interativo */}
      <div className="relative w-full overflow-hidden">
        <div
          ref={sliderRef}
          className="flex transition-transform duration-500 ease-out cursor-grab active:cursor-grabbing"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onTouchCancel={handleTouchEnd}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          {MODALITIES.map((item, index) => (
            <div
              key={item.id}
              className="w-full flex-shrink-0 min-w-full px-5 sm:px-12 lg:px-24"
            >
              <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                {/* Coluna Esquerda: Textos e Barra de Progresso */}
                <div className="lg:col-span-7 flex flex-col justify-center order-2 lg:order-1">
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm font-bold tracking-widest text-zinc-500 uppercase mb-2 sm:mb-4">
                    <span className="text-yellow-600 text-sm sm:text-lg font-black">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="text-zinc-300">/</span>
                    <span className="text-zinc-500">{String(MODALITIES.length).padStart(2, '0')}</span>
                    <span className="text-zinc-300">•</span>
                    <span className="text-zinc-700 uppercase tracking-wider">{GYM_INFO.name}</span>
                  </div>

                  <h3 className="text-3xl sm:text-5xl lg:text-6xl font-black font-display text-zinc-950 uppercase tracking-tight leading-none mb-4">
                    {item.title}
                  </h3>

                  <p className="text-zinc-600 text-sm sm:text-lg font-normal leading-relaxed max-w-2xl mb-6">
                    {item.description}
                  </p>

                  {/* Diferenciais rápidos */}
                  <div className="grid grid-cols-2 gap-2 mb-8 max-w-md">
                    {item.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-zinc-700 font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-yellow-500" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>

                  {/* Barra de Progresso do Slide */}
                  <div className="w-full max-w-lg pt-4 border-t border-zinc-200">
                    <div className="flex justify-between items-center text-[11px] sm:text-xs font-semibold tracking-wider text-zinc-500 uppercase mb-2">
                      <span className="text-zinc-600">
                        {isInView ? 'Troca Automática' : 'Pausado'}
                      </span>
                      <span className="text-yellow-600 font-mono font-bold text-xs sm:text-sm">
                        {remainingSeconds}s
                      </span>
                    </div>
                    <div className="h-1.5 sm:h-2 w-full bg-zinc-200 rounded-full overflow-hidden p-0.5">
                      <div
                        className="h-full bg-yellow-500 rounded-full transition-all ease-linear shadow-xs shadow-yellow-500/50"
                        style={{
                          width:
                            currentIndex === index
                              ? `${progress}%`
                              : index < currentIndex
                                ? '100%'
                                : '0%',
                        }}
                      />
                    </div>
                  </div>
                </div>

                {/* Coluna Direita: Imagem Real da Modalidade com Elemento Orgânico em Dourado */}
                <div className="lg:col-span-5 flex items-center justify-center order-1 lg:order-2 overflow-visible px-2 sm:px-6">
                  <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg flex items-center justify-center h-[260px] sm:h-[380px] lg:h-[540px]">
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
                      <svg
                        viewBox="0 0 1000 1450"
                        className="w-full h-full max-h-[500px] text-[#EAB308]/25 object-contain select-none"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M 780,40 C 890,40 945,130 945,280 C 945,430 920,580 940,740 C 960,890 985,990 980,1110 C 975,1250 905,1350 820,1390 C 720,1435 570,1440 470,1400 C 370,1360 285,1280 220,1170 C 130,1030 30,880 20,700 C 10,500 70,360 180,290 C 290,220 440,240 560,190 C 660,150 700,40 780,40 Z" />
                      </svg>
                    </div>

                    <img
                      src={item.image}
                      alt={item.alt}
                      draggable={false}
                      className={`relative z-10 max-h-full max-w-full object-contain drop-shadow-xl select-none pointer-events-none ${item.imageScale || ''}`}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Seta esquerda com cantos rounded-lg sóbrios */}
      <button
        onClick={prevSlide}
        aria-label="Modalidade anterior"
        className="absolute left-2 sm:left-4 lg:left-8 top-1/2 -translate-y-1/2 z-30 text-zinc-700 hover:text-zinc-950 bg-white/90 hover:bg-white backdrop-blur-md rounded-lg transition-all duration-200 cursor-pointer p-2.5 sm:p-3 border border-zinc-200 shadow-xs"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-zinc-800" />
      </button>

      {/* Seta direita com cantos rounded-lg sóbrios */}
      <button
        onClick={nextSlide}
        aria-label="Próxima modalidade"
        className="absolute right-2 sm:right-4 lg:right-8 top-1/2 -translate-y-1/2 z-30 text-zinc-700 hover:text-zinc-950 bg-white/90 hover:bg-white backdrop-blur-md rounded-lg transition-all duration-200 cursor-pointer p-2.5 sm:p-3 border border-zinc-200 shadow-xs"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-zinc-800" />
      </button>

      {/* Indicadores de slides */}
      <div className="flex justify-center items-center gap-2 mt-10 z-30">
        {MODALITIES.map((_, dotIndex) => (
          <button
            key={dotIndex}
            onClick={() => goToSlide(dotIndex)}
            aria-label={`Ir para modalidade ${dotIndex + 1}`}
            className={`h-2 transition-all duration-300 cursor-pointer rounded-sm ${
              currentIndex === dotIndex
                ? 'w-8 bg-yellow-500 shadow-xs'
                : 'w-2.5 bg-zinc-300 hover:bg-zinc-400'
            }`}
          />
        ))}
      </div>
    </section>
  );
};
