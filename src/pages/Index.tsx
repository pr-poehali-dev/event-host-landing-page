import { useState } from 'react';
import Icon from '@/components/ui/icon';
import {
  Dialog,
  DialogContent,
} from '@/components/ui/dialog';

const HERO      = 'https://cdn.poehali.dev/projects/0dd0b1db-f65f-489b-8e58-06dfc0c8d999/bucket/aa7da986-8d6d-41f2-a23c-75370debd1a8.png';
const HERO_CUT  = 'https://cdn.poehali.dev/projects/0dd0b1db-f65f-489b-8e58-06dfc0c8d999/bucket/914078a4-5d52-484d-b023-8fff45583b81.jpg';
const HERO_BG   = '#ffffff';
const ABOUT_IMG = 'https://cdn.poehali.dev/projects/0dd0b1db-f65f-489b-8e58-06dfc0c8d999/bucket/219325d4-fec0-48ed-8e57-c649f8929396.jpg';

const PHOTOS = [
  { src: 'https://cdn.poehali.dev/projects/0dd0b1db-f65f-489b-8e58-06dfc0c8d999/bucket/03a6cf58-895a-4288-b61d-3b80722a6504.jpg', caption: 'Открытие ресторана' },
  { src: 'https://cdn.poehali.dev/projects/0dd0b1db-f65f-489b-8e58-06dfc0c8d999/bucket/d60c1279-8815-4dc5-b5ba-8058e41a214f.jpg', caption: 'Корпоратив' },
  { src: 'https://cdn.poehali.dev/projects/0dd0b1db-f65f-489b-8e58-06dfc0c8d999/bucket/5e2b6738-6f04-47b0-975f-c14595ca525e.jpg', caption: 'Свадьба' },
  { src: 'https://cdn.poehali.dev/projects/0dd0b1db-f65f-489b-8e58-06dfc0c8d999/bucket/2d530a69-7796-49c3-be91-6cdce8cdf250.jpg', caption: 'Свадьба' },
  { src: 'https://cdn.poehali.dev/projects/0dd0b1db-f65f-489b-8e58-06dfc0c8d999/bucket/aa7da986-8d6d-41f2-a23c-75370debd1a8.png', caption: 'Антон в кадре' },
];

const WHATSAPP = 'https://wa.me/79161234567?text=Привет%2C+Макс!';
const TELEGRAM = 'https://t.me/anton';
const PHONE    = 'tel:+79990000000';

const reviews = [
  { type: 'Свадьба', src: 'WhatsApp' },
  { type: 'Корпоратив', src: 'Telegram' },
  { type: 'Юбилей', src: 'Авито' },
  { type: 'Свадьба', src: 'WhatsApp' },
  { type: 'Камерный вечер', src: 'Telegram' },
  { type: 'Корпоратив', src: 'Авито' },
];

const faq = [
  { q: 'Можно ли без пошлых конкурсов?', a: 'Да, это мой принцип. Никаких «лопни шарик» и танцев с тазиком — только нормальный юмор и современные интерактивы.' },
  { q: 'Работаете ли с DJ?', a: 'Да, я работаю с диджеем и у нас есть профессиональное оборудование — звук и свет под любой формат.' },
  { q: 'Можно ли караоке?', a: 'Да, добавляется по согласованию.' },
  { q: 'Можно ли созвониться?', a: 'Да, конечно — можем созвониться, так будет даже проще. Обсудим детали и я отвечу на все вопросы.' },
  { q: 'Как забронировать дату?', a: 'Давайте обсудим ваше мероприятие — я сориентирую по дальнейшим шагам. Предоплата всего 10%.' },
];

const steps = [
  { n: '01', t: 'Заявка', d: 'Пишете дату и формат' },
  { n: '02', t: 'Уточнение', d: 'Обсуждаем формат и гостей' },
  { n: '03', t: 'Созвон', d: 'Знакомимся, отвечаю на вопросы' },
  { n: '04', t: 'Бронь', d: 'Фиксируем ваш день' },
  { n: '05', t: 'Программа', d: 'Сценарий под вашу компанию' },
  { n: '06', t: 'Праздник', d: 'Весело, современно, без стыда' },
];

const MARQUEE_CLIENTS = ['Мегафон', 'МТС Банк', 'Росгосстрах', 'РЖД', 'Додо Пицца', 'Сбер', 'Яндекс', 'Лукойл'];

const DotsGrid = () => (
  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(8, 10px)', gap: '8px' }}>
    {Array.from({ length: 48 }).map((_, i) => (
      <span key={i} style={{ width: 10, height: 10, borderRadius: '50%', background: 'hsl(4 90% 52%)', display: 'block' }} />
    ))}
  </div>
);

const Index = () => {
  const [openPhoto, setOpenPhoto]   = useState<number | null>(null);
  const [openReview, setOpenReview] = useState<number | null>(null);
  const [photoSlide, setPhotoSlide] = useState(0);
  const [faqOpen, setFaqOpen]       = useState<number | null>(null);
  const [whySlide, setWhySlide]     = useState(0);
  const [stepSlide, setStepSlide]   = useState(0);

  const prevPhoto = () => setPhotoSlide(p => (p - 1 + PHOTOS.length) % PHOTOS.length);
  const nextPhoto = () => setPhotoSlide(p => (p + 1) % PHOTOS.length);

  const WHY_CARDS = [
    { n: '01', tag: '3 ГОДА В STAND UP', title: 'Живой юмор\nи импровизация', text: 'Три года выступаю в Stand Up. Хорошее чувство юмора — не просто слова: ваше событие пройдёт весело, естественно и без натяжки.', dark: false },
    { n: '02', tag: 'МТС · РЖД · МЕГАФОН', title: 'Крупные\nкомпании', text: 'Вёл корпоративы для федеральных брендов. Меня выбирают снова — потому что я хорошо делаю своё дело и не подвожу.', dark: true },
    { n: '03', tag: 'ЛИГА ДЕБАТОВ', title: 'Речь как\nинструмент', text: 'Полуфиналист Всероссийской лиги дебатов. Качественная, чёткая, живая речь — это то, что держит зал и делает вечер цельным.', dark: true },
    { n: '04', tag: 'ГОРЮ ДЕЛОМ', title: 'Каждое событие\nвсерьёз', text: 'Я люблю своё дело по-настоящему. Не отрабатываю смену — стараюсь сделать для вас лучшее мероприятие.', dark: false },
  ];

  return (
    <div className="min-h-screen overflow-x-hidden" style={{ background: '#ffffff', color: 'hsl(0 0% 6%)' }}>

      {/* ─── HEADER ─────────────────────────────────────────── */}
      <header style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50, background: 'hsl(0 0% 95% / 0.92)', backdropFilter: 'blur(12px)', borderBottom: '1px solid hsl(0 0% 80%)' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 56, padding: '0 1.5rem' }}>
          <a href="#top" style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 700, fontSize: '1.4rem', letterSpacing: '0.05em', textTransform: 'uppercase', color: 'hsl(0 0% 6%)' }}>
            АНТОН<span style={{ color: 'hsl(4 90% 52%)' }}>.</span>
          </a>
          <nav style={{ display: 'flex', gap: '2rem', fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'hsl(0 0% 40%)' }} className="hidden lg:flex">
            {[['#about','О ведущем'],['#events','Мероприятия'],['#photo','Фото'],['#why','Почему я'],['#reviews','Отзывы'],['#faq','FAQ']].map(([h,l]) => (
              <a key={h} href={h} style={{ transition: 'color 0.2s' }} onMouseEnter={e => (e.currentTarget.style.color='hsl(4 90% 52%)')} onMouseLeave={e => (e.currentTarget.style.color='hsl(0 0% 40%)')}>{l}</a>
            ))}
          </nav>
          <a href={WHATSAPP} target="_blank" rel="noreferrer">
            <button className="btn-red">Написать Максу</button>
          </a>
        </div>
      </header>

      {/* ─── HERO (01) ───────────────────────────────────────── */}
      <section id="top" style={{ paddingTop: 56, minHeight: '100vh', background: HERO_BG, position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>

        {/* Верхняя строка */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '2rem 1.5rem 0', maxWidth: 1280, margin: '0 auto', width: '100%', position: 'relative', zIndex: 3 }}>
          <span className="label-sm" style={{ color: 'hsl(0 0% 40%)' }}>Ведущий мероприятий</span>
          <span className="sec-num" style={{ color: 'hsl(0 0% 50%)' }}>(01)</span>
        </div>

        {/* Основной контент */}
        <div style={{ flex: 1, position: 'relative', maxWidth: 1280, margin: '0 auto', width: '100%', padding: '0 1.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', paddingBottom: '3rem' }}>

          {/* Огромный текст */}
          <div className="animate-fade-up" style={{ position: 'relative', zIndex: 1 }}>
            <span style={{ fontFamily: 'Golos Text, sans-serif', fontSize: 'clamp(0.75rem, 1.8vw, 0.95rem)', letterSpacing: '0.28em', textTransform: 'uppercase', color: 'hsl(0 0% 42%)' }}>— Антон</span>
            <div style={{
              fontFamily: 'Oswald, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(5.5rem, 23vw, 19rem)',
              lineHeight: 0.82,
              letterSpacing: '-0.02em',
              textTransform: 'uppercase',
              color: 'hsl(0 0% 8%)',
              userSelect: 'none',
              marginTop: '0.25rem',
            }}>
              КТО<br /><span style={{ color: 'hsl(4 90% 52%)' }}>Я?</span>
            </div>
          </div>

          {/* Фото — поверх текста справа */}
          <div style={{
            position: 'absolute',
            bottom: 0,
            right: '3%',
            height: '95%',
            zIndex: 2,
            pointerEvents: 'none',
            display: 'flex',
            alignItems: 'flex-end',
          }}
          className="hero-silhouette">
            <img
              src={HERO_CUT}
              alt="Антон"
              style={{
                height: '100%',
                width: 'auto',
                objectFit: 'contain',
                objectPosition: 'bottom center',
                mixBlendMode: 'multiply',
              }}
            />
          </div>

          {/* Нижняя строка: описание + кнопки */}
          <div style={{ marginTop: '2.5rem', display: 'flex', flexWrap: 'wrap', gap: '2rem', alignItems: 'flex-end', justifyContent: 'space-between', position: 'relative', zIndex: 3 }} className="animate-fade-up">
            <div style={{ maxWidth: 360 }}>
              <p style={{ fontSize: '0.95rem', lineHeight: 1.65, color: 'hsl(0 0% 30%)' }}>
                Ведущий мероприятий и Stand Up комик.<br />
                Свадьбы, корпоративы, юбилеи — без пошлости и конкурсов из 90-х.
              </p>
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginTop: '1.25rem' }}>
                <a href={WHATSAPP} target="_blank" rel="noreferrer">
                  <button className="btn-red">Связаться со мной</button>
                </a>
                <a href="#about">
                  <button className="btn-outline-dark">Обо мне</button>
                </a>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
              {['8 лет опыта', 'Ведущий + DJ', 'Stand Up', 'Без кринжа'].map(t => (
                <span key={t} style={{ fontFamily: 'Golos Text, sans-serif', fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', padding: '0.25rem 0.8rem', border: '1px solid hsl(0 0% 65%)', color: 'hsl(0 0% 35%)', background: 'transparent' }}>{t}</span>
              ))}
            </div>
          </div>
        </div>

        <div style={{ height: 1, background: 'hsl(0 0% 78%)', position: 'relative', zIndex: 3 }} />

        <style>{`
          @media (max-width: 640px) {
            .hero-silhouette {
              right: -8% !important;
              height: 52% !important;
              opacity: 0.22 !important;
            }
          }
          @media (min-width: 641px) and (max-width: 1024px) {
            .hero-silhouette {
              height: 72% !important;
              right: 1% !important;
              opacity: 0.65 !important;
            }
          }
        `}</style>
      </section>

      {/* ─── DIVIDER ─────────────────────────────────────────── */}
      <div className="divider-light" />

      {/* ─── ABOUT / КРАТКО (02) ─────────────────────────────── */}
      <section id="about" style={{ background: '#0d1117', color: 'hsl(0 0% 96%)', padding: '5rem 0', position: 'relative', overflow: 'hidden' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }} className="grid grid-cols-1 lg:grid-cols-2">

            {/* Фото */}
            <div style={{ position: 'relative' }}>
              <img
                src="https://cdn.poehali.dev/projects/0dd0b1db-f65f-489b-8e58-06dfc0c8d999/bucket/66bbd83c-3a15-4790-9d4c-99d510549310.jpg"
                alt="Антон"
                style={{ width: '100%', aspectRatio: '3/4', objectFit: 'cover', objectPosition: 'top', display: 'block' }}
              />
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '40%', background: 'linear-gradient(to top, #0d1117 0%, transparent 100%)' }} />
            </div>

            {/* Текст */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div>
                <span style={{ fontFamily: 'Golos Text, sans-serif', fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'hsl(4 90% 52%)' }}>Я постараюсь кратко</span>
                <div style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 700, fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', textTransform: 'uppercase', lineHeight: 0.9, marginTop: '0.75rem', color: '#fff' }}>
                  КТО<br />ТАКОЙ<br /><span style={{ color: 'hsl(4 90% 52%)' }}>АНТОН?</span>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <span style={{ flexShrink: 0, width: 32, height: 32, background: 'hsl(4 90% 52%)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Oswald, sans-serif', fontWeight: 700, fontSize: '0.75rem', color: '#fff' }}>8</span>
                  <p style={{ fontSize: '0.9rem', lineHeight: 1.65, color: 'hsl(0 0% 65%)', margin: 0 }}>
                    Всем привет. Я веду мероприятия уже <strong style={{ color: '#fff' }}>8 лет</strong> — опытный специалист, готовый ко всему.
                  </p>
                </div>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <span style={{ flexShrink: 0, width: 32, height: 32, background: 'hsl(4 90% 52%)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Oswald, sans-serif', fontWeight: 700, fontSize: '0.75rem', color: '#fff' }}>3</span>
                  <p style={{ fontSize: '0.9rem', lineHeight: 1.65, color: 'hsl(0 0% 65%)', margin: 0 }}>
                    <strong style={{ color: '#fff' }}>3 года выступал в Stand Up</strong> — вам будет весело на мероприятиях со мной.
                  </p>
                </div>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <span style={{ flexShrink: 0, width: 32, height: 32, background: 'hsl(0 0% 15%)', border: '1px solid hsl(0 0% 25%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Icon name="Trophy" size={14} color="hsl(4 90% 52%)" />
                  </span>
                  <p style={{ fontSize: '0.9rem', lineHeight: 1.65, color: 'hsl(0 0% 65%)', margin: 0 }}>
                    <strong style={{ color: '#fff' }}>Полуфиналист Всероссийской лиги дебатов</strong> — говорю красиво и без слов-паразитов.
                  </p>
                </div>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <span style={{ flexShrink: 0, width: 32, height: 32, background: 'hsl(0 0% 15%)', border: '1px solid hsl(0 0% 25%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Icon name="Heart" size={14} color="hsl(4 90% 52%)" />
                  </span>
                  <p style={{ fontSize: '0.9rem', lineHeight: 1.65, color: 'hsl(0 0% 65%)', margin: 0 }}>
                    А ещё я <strong style={{ color: '#fff' }}>очень люблю свою работу</strong> — и это всегда чувствуется.
                  </p>
                </div>
              </div>

              <a href={WHATSAPP} target="_blank" rel="noreferrer" style={{ alignSelf: 'flex-start' }}>
                <button className="btn-red">Узнать свободна ли дата</button>
              </a>
            </div>
          </div>
        </div>
        <div className="sec-num" style={{ position: 'absolute', top: '3rem', right: '2rem', color: 'hsl(0 0% 30%)' }}>(02)</div>
      </section>

      {/* ─── CLIENTS MARQUEE ─────────────────────────────────── */}
      <div style={{ background: 'hsl(0 0% 6%)', padding: '2rem 0', borderTop: '1px solid hsl(0 0% 15%)', borderBottom: '1px solid hsl(0 0% 15%)' }}>
        <div className="marquee-wrap">
          <div className="marquee-track">
            {[...MARQUEE_CLIENTS, ...MARQUEE_CLIENTS].map((name, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '2rem', paddingRight: '2rem' }}>
                <span style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 700, fontSize: '1.1rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'hsl(0 0% 60%)', whiteSpace: 'nowrap' }}>{name}</span>
                <span style={{ color: 'hsl(4 90% 52%)', fontSize: '0.6rem' }}>●</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ─── ПОЧЕМУ Я (03) ───────────────────────────────────── */}
      <section id="why" style={{ background: '#ffffff', padding: '6rem 0', position: 'relative', overflow: 'hidden' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '3rem' }}>
            <div>
              <span className="label-sm" style={{ color: 'hsl(0 0% 45%)', display: 'block', marginBottom: '0.5rem' }}>Да сколько можно</span>
              <div className="display-xl">ПОЧЕМУ<br /><span style={{ color: 'hsl(4 90% 52%)' }}>ВЫБИРАЮТ</span></div>
            </div>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <button onClick={() => setWhySlide(p => (p - 1 + WHY_CARDS.length) % WHY_CARDS.length)} style={{ width: 44, height: 44, border: '1px solid hsl(0 0% 75%)', background: 'transparent', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.background='hsl(4 90% 52%)', e.currentTarget.style.borderColor='hsl(4 90% 52%)', e.currentTarget.style.color='white')}
                onMouseLeave={e => (e.currentTarget.style.background='transparent', e.currentTarget.style.borderColor='hsl(0 0% 75%)', e.currentTarget.style.color='inherit')}>
                <Icon name="ChevronLeft" size={20} />
              </button>
              <button onClick={() => setWhySlide(p => (p + 1) % WHY_CARDS.length)} style={{ width: 44, height: 44, border: '1px solid hsl(0 0% 75%)', background: 'transparent', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.background='hsl(4 90% 52%)', e.currentTarget.style.borderColor='hsl(4 90% 52%)', e.currentTarget.style.color='white')}
                onMouseLeave={e => (e.currentTarget.style.background='transparent', e.currentTarget.style.borderColor='hsl(0 0% 75%)', e.currentTarget.style.color='inherit')}>
                <Icon name="ChevronRight" size={20} />
              </button>
            </div>
          </div>

          {/* Слайдер */}
          <div style={{ position: 'relative', overflow: 'hidden' }}>
            <div style={{ display: 'flex', transition: 'transform 0.4s ease', transform: `translateX(-${whySlide * 100}%)` }}>
              {WHY_CARDS.map(w => (
                <div key={w.n} style={{
                  minWidth: '100%',
                  background: w.dark ? 'hsl(0 0% 6%)' : '#f8f8f8',
                  color: w.dark ? 'hsl(0 0% 96%)' : 'hsl(0 0% 6%)',
                  padding: 'clamp(2rem, 5vw, 4rem)',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.5rem',
                  minHeight: 280,
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <span style={{ fontFamily: 'Golos Text, sans-serif', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'hsl(4 90% 52%)' }}>{w.tag}</span>
                    <span style={{ fontFamily: 'Oswald, sans-serif', fontSize: '3rem', fontWeight: 700, lineHeight: 1, color: w.dark ? 'hsl(0 0% 15%)' : 'hsl(0 0% 88%)' }}>{w.n}</span>
                  </div>
                  <h3 style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 700, fontSize: 'clamp(2rem, 5vw, 3.5rem)', textTransform: 'uppercase', lineHeight: 0.95, whiteSpace: 'pre-line' }}>{w.title}</h3>
                  <p style={{ fontSize: '1rem', lineHeight: 1.7, color: w.dark ? 'hsl(0 0% 55%)' : 'hsl(0 0% 38%)', maxWidth: 560 }}>{w.text}</p>
                  <div style={{ position: 'absolute', bottom: 0, left: 0, width: '4rem', height: 3, background: 'hsl(4 90% 52%)' }} />
                </div>
              ))}
            </div>
          </div>

          {/* Точки-индикаторы */}
          <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1.5rem' }}>
            {WHY_CARDS.map((_, i) => (
              <button key={i} onClick={() => setWhySlide(i)} style={{ width: i === whySlide ? 32 : 8, height: 8, background: i === whySlide ? 'hsl(4 90% 52%)' : 'hsl(0 0% 80%)', border: 'none', cursor: 'pointer', transition: 'all 0.3s', padding: 0 }} />
            ))}
          </div>
        </div>
        <div className="sec-num" style={{ position: 'absolute', top: '3rem', right: '2rem' }}>(03)</div>
      </section>

      {/* ─── PHOTO (04) ──────────────────────────────────────── */}
      <section id="photo" style={{ background: '#000', position: 'relative' }}>
        {/* Слайдер — полноэкранный */}
        <div style={{ position: 'relative', width: '100%', aspectRatio: '4/3', overflow: 'hidden' }} className="photo-full">
          {PHOTOS.map((p, i) => (
            <div key={i} style={{ position: 'absolute', inset: 0, opacity: i === photoSlide ? 1 : 0, transition: 'opacity 0.6s ease' }}>
              <img src={p.src} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            </div>
          ))}
          {/* Стрелки поверх фото */}
          <button onClick={prevPhoto} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', width: 48, height: 48, background: 'rgba(0,0,0,0.4)', border: '1px solid rgba(255,255,255,0.2)', color: 'white', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2, backdropFilter: 'blur(4px)', transition: 'background 0.2s' }}
            onMouseEnter={e => (e.currentTarget.style.background='hsl(4 90% 52%)')}
            onMouseLeave={e => (e.currentTarget.style.background='rgba(0,0,0,0.4)')}>
            <Icon name="ChevronLeft" size={22} />
          </button>
          <button onClick={nextPhoto} style={{ position: 'absolute', right: '1rem', top: '50%', transform: 'translateY(-50%)', width: 48, height: 48, background: 'rgba(0,0,0,0.4)', border: '1px solid rgba(255,255,255,0.2)', color: 'white', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2, backdropFilter: 'blur(4px)', transition: 'background 0.2s' }}
            onMouseEnter={e => (e.currentTarget.style.background='hsl(4 90% 52%)')}
            onMouseLeave={e => (e.currentTarget.style.background='rgba(0,0,0,0.4)')}>
            <Icon name="ChevronRight" size={22} />
          </button>
          {/* Счётчик */}
          <div style={{ position: 'absolute', bottom: '1.25rem', right: '1.25rem', background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(4px)', padding: '0.3rem 0.8rem', zIndex: 2 }}>
            <span style={{ fontFamily: 'Oswald, sans-serif', fontSize: '0.8rem', color: 'white', letterSpacing: '0.1em' }}>{photoSlide + 1} / {PHOTOS.length}</span>
          </div>
          {/* Точки */}
          <div style={{ position: 'absolute', bottom: '1.25rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '0.4rem', zIndex: 2 }}>
            {PHOTOS.map((_, i) => (
              <button key={i} onClick={() => setPhotoSlide(i)} style={{ width: i === photoSlide ? 24 : 8, height: 8, background: i === photoSlide ? 'hsl(4 90% 52%)' : 'rgba(255,255,255,0.5)', border: 'none', cursor: 'pointer', padding: 0, transition: 'all 0.3s' }} />
            ))}
          </div>
        </div>
        <style>{`.photo-full { aspect-ratio: 4/3; } @media(min-width:768px){ .photo-full { aspect-ratio: 16/7; } }`}</style>
        <div className="sec-num" style={{ position: 'absolute', top: '1.25rem', left: '1.25rem', color: 'rgba(255,255,255,0.4)', zIndex: 3 }}>(04)</div>
      </section>

      {/* ─── REVIEWS (06) ────────────────────────────────────── */}
      <section id="reviews" style={{ background: '#ffffff', padding: '6rem 0', position: 'relative' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '1rem', marginBottom: '3rem' }}>
            <div>
              <div className="display-xl">ОТЗЫВЫ</div>
            </div>
            <a href={WHATSAPP} target="_blank" rel="noreferrer">
              <button className="btn-red">Узнать свободна ли дата</button>
            </a>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', background: 'hsl(0 0% 75%)' }} className="grid grid-cols-2 lg:grid-cols-3">
            {reviews.map((r, i) => (
              <button key={i} onClick={() => setOpenReview(i)} style={{ background: '#ffffff', aspectRatio: '3/4', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1rem', cursor: 'pointer', border: 'none', transition: 'background 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.background='hsl(0 0% 93%)')}
                onMouseLeave={e => (e.currentTarget.style.background='#ffffff')}>
                <Icon name="MessageSquare" size={36} color="hsl(4 90% 52%)" />
                <div>
                  <div style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 700, fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.25rem' }}>{r.type}</div>
                  <div style={{ fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'hsl(0 0% 50%)' }}>{r.src}</div>
                </div>
              </button>
            ))}
          </div>
        </div>
        <div className="sec-num" style={{ position: 'absolute', top: '3rem', right: '2rem' }}>(06)</div>
      </section>

      {/* ─── STEPS (05) ──────────────────────────────────────── */}
      <section style={{ background: 'hsl(0 0% 6%)', color: 'hsl(0 0% 96%)', padding: '6rem 0', position: 'relative', overflow: 'hidden' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '3.5rem' }}>
            <div>
              <span className="label-sm" style={{ color: 'hsl(0 0% 40%)', display: 'block', marginBottom: '0.4rem' }}>Всё просто</span>
              <div className="display-xl" style={{ color: 'hsl(0 0% 96%)' }}>КАК МЫ<br /><span style={{ color: 'hsl(4 90% 52%)' }}>РАБОТАЕМ</span></div>
            </div>
            {/* Стрелки — только на мобиле */}
            <div style={{ display: 'flex', gap: '0.5rem' }} className="lg:hidden">
              <button onClick={() => setStepSlide(p => Math.max(0, p - 1))} style={{ width: 44, height: 44, border: '1px solid hsl(0 0% 25%)', background: 'transparent', color: 'white', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Icon name="ChevronLeft" size={20} />
              </button>
              <button onClick={() => setStepSlide(p => Math.min(steps.length - 1, p + 1))} style={{ width: 44, height: 44, border: '1px solid hsl(0 0% 25%)', background: 'transparent', color: 'white', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Icon name="ChevronRight" size={20} />
              </button>
            </div>
          </div>

          {/* Десктоп — сетка */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', background: 'hsl(0 0% 15%)' }} className="hidden lg:grid">
            {steps.map(s => (
              <div key={s.n} style={{ background: 'hsl(0 0% 6%)', padding: '2.5rem 2rem' }}>
                <div style={{ fontFamily: 'Oswald, sans-serif', fontSize: '4rem', fontWeight: 700, color: 'hsl(4 90% 52%)', lineHeight: 1, marginBottom: '1rem' }}>{s.n}</div>
                <h3 style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 700, fontSize: '1.3rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.6rem', color: 'hsl(0 0% 96%)' }}>{s.t}</h3>
                <p style={{ fontSize: '0.85rem', color: 'hsl(0 0% 50%)', lineHeight: 1.6 }}>{s.d}</p>
              </div>
            ))}
          </div>

          {/* Мобиль — слайдер */}
          <div style={{ overflow: 'hidden' }} className="lg:hidden">
            <div style={{ display: 'flex', transition: 'transform 0.4s ease', transform: `translateX(-${stepSlide * 100}%)` }}>
              {steps.map(s => (
                <div key={s.n} style={{ minWidth: '100%', background: 'hsl(0 0% 8%)', padding: '2.5rem 2rem', border: '1px solid hsl(0 0% 15%)' }}>
                  <div style={{ fontFamily: 'Oswald, sans-serif', fontSize: '5rem', fontWeight: 700, color: 'hsl(4 90% 52%)', lineHeight: 1, marginBottom: '1.5rem' }}>{s.n}</div>
                  <h3 style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 700, fontSize: '1.8rem', textTransform: 'uppercase', marginBottom: '0.75rem', color: 'hsl(0 0% 96%)' }}>{s.t}</h3>
                  <p style={{ fontSize: '0.95rem', color: 'hsl(0 0% 55%)', lineHeight: 1.7 }}>{s.d}</p>
                </div>
              ))}
            </div>
            {/* Точки */}
            <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1.5rem' }}>
              {steps.map((_, i) => (
                <button key={i} onClick={() => setStepSlide(i)} style={{ width: i === stepSlide ? 28 : 8, height: 8, background: i === stepSlide ? 'hsl(4 90% 52%)' : 'hsl(0 0% 25%)', border: 'none', cursor: 'pointer', padding: 0, transition: 'all 0.3s' }} />
              ))}
            </div>
          </div>
        </div>
        <div className="sec-num" style={{ position: 'absolute', top: '3rem', right: '2rem', color: 'hsl(0 0% 35%)' }}>(05)</div>
      </section>

      {/* ─── FAQ (08) ────────────────────────────────────────── */}
      <section id="faq" style={{ background: '#ffffff', padding: '6rem 0', position: 'relative' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 1.5rem' }}>
          <span className="label-sm" style={{ color: 'hsl(0 0% 45%)', display: 'block', marginBottom: '0.4rem' }}>Частые вопросы</span>
          <div className="display-xl" style={{ marginBottom: '3.5rem' }}>FAQ</div>

          <div>
            {faq.map((f, i) => (
              <div key={i} style={{ borderTop: '1px solid hsl(0 0% 78%)' }}>
                <button
                  onClick={() => setFaqOpen(faqOpen === i ? null : i)}
                  style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.5rem 0', background: 'none', border: 'none', cursor: 'pointer', gap: '2rem', textAlign: 'left' }}
                >
                  <span style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 600, fontSize: '1.1rem', textTransform: 'uppercase', letterSpacing: '0.04em', color: 'hsl(0 0% 6%)' }}>{f.q}</span>
                  <span style={{ color: 'hsl(4 90% 52%)', flexShrink: 0, fontSize: '1.5rem', lineHeight: 1 }}>{faqOpen === i ? '−' : '+'}</span>
                </button>
                {faqOpen === i && (
                  <div style={{ paddingBottom: '1.5rem', paddingRight: '3rem' }}>
                    <p style={{ fontSize: '0.95rem', lineHeight: 1.7, color: 'hsl(0 0% 35%)' }}>{f.a}</p>
                  </div>
                )}
              </div>
            ))}
            <div style={{ borderTop: '1px solid hsl(0 0% 78%)' }} />
          </div>
        </div>
        <div className="sec-num" style={{ position: 'absolute', top: '3rem', right: '2rem' }}>(08)</div>
      </section>

      {/* ─── FINAL CTA ───────────────────────────────────────── */}
      <section style={{ background: 'hsl(0 0% 6%)', padding: '8rem 0', position: 'relative', overflow: 'hidden' }}>
        {/* Декоративные точки */}
        <div style={{ position: 'absolute', top: '3rem', left: '3rem', opacity: 0.7 }}>
          <DotsGrid />
        </div>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 1.5rem', textAlign: 'center', position: 'relative', zIndex: 2 }}>
          <div style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 700, fontSize: 'clamp(3rem, 8vw, 7rem)', textTransform: 'uppercase', lineHeight: 0.9, color: 'hsl(0 0% 96%)', marginBottom: '2.5rem' }}>
            ХОТИТЕ<br /><span style={{ color: 'hsl(4 90% 52%)' }}>ПРАЗДНИК</span><br />БЕЗ КРИНЖА?
          </div>
          <p style={{ fontSize: '1rem', color: 'hsl(0 0% 55%)', marginBottom: '3rem', maxWidth: 480, margin: '0 auto 3rem' }}>
            Напишите — расскажу о свободных датах и цене. Отвечаю быстро.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={WHATSAPP} target="_blank" rel="noreferrer">
              <button style={{ background: '#ffffff', color: '#1a1a2e', fontFamily: 'Oswald, sans-serif', fontWeight: 600, fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase', padding: '0.75rem 1.75rem', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <img src="https://cdn.poehali.dev/projects/0dd0b1db-f65f-489b-8e58-06dfc0c8d999/bucket/c1713a5f-22be-4e48-bcfb-eb89c78b4ded.png" alt="Макс" style={{ height: 22, width: 'auto', objectFit: 'contain' }} />
                Написать в Макс
              </button>
            </a>
            <a href={TELEGRAM} target="_blank" rel="noreferrer">
              <button style={{ background: '#229ED9', color: 'white', fontFamily: 'Oswald, sans-serif', fontWeight: 600, fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase', padding: '0.8rem 2rem', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Icon name="Send" size={18} /> Telegram
              </button>
            </a>
            <a href={PHONE}>
              <button style={{ background: 'transparent', color: 'hsl(0 0% 70%)', fontFamily: 'Oswald, sans-serif', fontWeight: 600, fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase', padding: '0.8rem 2rem', border: '1px solid hsl(0 0% 30%)', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Icon name="Phone" size={18} /> Позвонить
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ──────────────────────────────────────────── */}
      <footer style={{ background: 'hsl(0 0% 4%)', borderTop: '1px solid hsl(0 0% 13%)', padding: '2rem 0' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1.5rem', flexWrap: 'wrap', padding: '0 1.5rem' }}>
          <span style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 700, fontSize: '1.3rem', letterSpacing: '0.06em', color: 'hsl(0 0% 96%)' }}>
            АНТОН<span style={{ color: 'hsl(4 90% 52%)' }}>.</span>
          </span>
          <span style={{ fontSize: '0.75rem', letterSpacing: '0.1em', color: 'hsl(0 0% 40%)', textTransform: 'uppercase' }}>
            Ведущий мероприятий · Москва · {new Date().getFullYear()}
          </span>
          <div style={{ display: 'flex', gap: '1.25rem' }}>
            {[WHATSAPP, TELEGRAM, PHONE].map((href, i) => (
              <a key={i} href={href} target={i < 2 ? '_blank' : undefined} rel="noreferrer" style={{ color: 'hsl(0 0% 40%)', transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color='hsl(4 90% 52%)')}
                onMouseLeave={e => (e.currentTarget.style.color='hsl(0 0% 40%)')}>
                <Icon name={['MessageCircle','Send','Phone'][i]} size={20} />
              </a>
            ))}
          </div>
        </div>
      </footer>

      {/* ─── PHOTO LIGHTBOX ──────────────────────────────────── */}
      <Dialog open={openPhoto !== null} onOpenChange={o => !o && setOpenPhoto(null)}>
        <DialogContent style={{ background: 'hsl(0 0% 4%)', border: '1px solid hsl(0 0% 15%)', maxWidth: '90vw', padding: '0.5rem' }}>
          {openPhoto !== null && (
            <>
              <img src={PHOTOS[openPhoto].src} alt={PHOTOS[openPhoto].caption} style={{ width: '100%', maxHeight: '80vh', objectFit: 'contain' }} />
              <p style={{ textAlign: 'center', padding: '0.75rem', fontSize: '0.8rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'hsl(0 0% 50%)' }}>{PHOTOS[openPhoto].caption}</p>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* ─── REVIEW MODAL ────────────────────────────────────── */}
      <Dialog open={openReview !== null} onOpenChange={o => !o && setOpenReview(null)}>
        <DialogContent style={{ background: 'hsl(0 0% 97%)', border: '1px solid hsl(0 0% 80%)', maxWidth: 420 }}>
          {openReview !== null && (
            <div style={{ aspectRatio: '3/4', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
              <Icon name="MessageSquare" size={56} color="hsl(4 90% 52%)" />
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 700, fontSize: '1.2rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{reviews[openReview].type}</div>
                <div style={{ fontSize: '0.75rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'hsl(0 0% 50%)', marginTop: '0.25rem' }}>Скриншот из {reviews[openReview].src}</div>
              </div>
              <p style={{ fontSize: '0.85rem', color: 'hsl(0 0% 50%)', textAlign: 'center' }}>Здесь будет скриншот отзыва</p>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;