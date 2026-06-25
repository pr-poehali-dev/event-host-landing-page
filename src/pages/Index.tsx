import { useState } from 'react';
import Icon from '@/components/ui/icon';
import {
  Dialog,
  DialogContent,
} from '@/components/ui/dialog';

const HERO      = 'https://cdn.poehali.dev/projects/0dd0b1db-f65f-489b-8e58-06dfc0c8d999/bucket/aa7da986-8d6d-41f2-a23c-75370debd1a8.png';
const HERO_CUT  = 'https://cdn.poehali.dev/projects/0dd0b1db-f65f-489b-8e58-06dfc0c8d999/bucket/5e7bb7bc-10f6-40c6-904a-3a8bad399d6c.png';
const ABOUT_IMG = 'https://cdn.poehali.dev/projects/0dd0b1db-f65f-489b-8e58-06dfc0c8d999/bucket/219325d4-fec0-48ed-8e57-c649f8929396.jpg';

const PHOTOS = [
  { src: 'https://cdn.poehali.dev/projects/0dd0b1db-f65f-489b-8e58-06dfc0c8d999/bucket/03a6cf58-895a-4288-b61d-3b80722a6504.jpg', caption: 'Открытие ресторана' },
  { src: 'https://cdn.poehali.dev/projects/0dd0b1db-f65f-489b-8e58-06dfc0c8d999/bucket/d60c1279-8815-4dc5-b5ba-8058e41a214f.jpg', caption: 'Корпоратив' },
  { src: 'https://cdn.poehali.dev/projects/0dd0b1db-f65f-489b-8e58-06dfc0c8d999/bucket/5e2b6738-6f04-47b0-975f-c14595ca525e.jpg', caption: 'Свадьба' },
  { src: 'https://cdn.poehali.dev/projects/0dd0b1db-f65f-489b-8e58-06dfc0c8d999/bucket/2d530a69-7796-49c3-be91-6cdce8cdf250.jpg', caption: 'Свадьба' },
  { src: 'https://cdn.poehali.dev/projects/0dd0b1db-f65f-489b-8e58-06dfc0c8d999/bucket/aa7da986-8d6d-41f2-a23c-75370debd1a8.png', caption: 'Антон в кадре' },
];

const WHATSAPP = 'https://wa.me/79990000000';
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
  { q: 'Работаете ли с DJ?', a: 'Я сам ведущий + DJ. Звук, свет и музыка под ваш вечер — в одних руках, без рассинхрона.' },
  { q: 'Можно ли караоке?', a: 'Да, добавляется по согласованию.' },
  { q: 'Ведёте ли корпоративы?', a: 'Конечно. Работаю и с весёлой компанией друзей, и с корпоративной аудиторией.' },
  { q: 'Можно ли созвониться?', a: 'Да, перед бронью созваниваемся на 5–10 минут.' },
  { q: 'Как забронировать дату?', a: 'Напишите дату и формат в WhatsApp или Telegram — быстро отвечу.' },
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

  const prevPhoto = () => setPhotoSlide(p => (p - 1 + PHOTOS.length) % PHOTOS.length);
  const nextPhoto = () => setPhotoSlide(p => (p + 1) % PHOTOS.length);

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
            <button className="btn-red">Написать</button>
          </a>
        </div>
      </header>

      {/* ─── HERO (01) ───────────────────────────────────────── */}
      <section id="top" style={{ paddingTop: 56, minHeight: '100vh', background: '#ffffff', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>

        {/* Верхняя строка: лейбл + номер */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '2rem 1.5rem 0', maxWidth: 1280, margin: '0 auto', width: '100%', position: 'relative', zIndex: 3 }}>
          <span className="label-sm" style={{ color: 'hsl(0 0% 45%)' }}>Ведущий мероприятий</span>
          <span className="sec-num">(01)</span>
        </div>

        {/* Основной контент */}
        <div style={{ flex: 1, position: 'relative', maxWidth: 1280, margin: '0 auto', width: '100%', padding: '0 1.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', paddingBottom: '3rem' }}>

          {/* Огромный фоновый текст */}
          <div className="animate-fade-up" style={{ position: 'relative', zIndex: 1 }}>
            <span style={{ fontFamily: 'Golos Text, sans-serif', fontSize: 'clamp(0.75rem, 1.8vw, 0.95rem)', letterSpacing: '0.28em', textTransform: 'uppercase', color: 'hsl(0 0% 50%)' }}>— Антон</span>
            <div style={{
              fontFamily: 'Oswald, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(5.5rem, 23vw, 19rem)',
              lineHeight: 0.82,
              letterSpacing: '-0.02em',
              textTransform: 'uppercase',
              color: 'hsl(0 0% 6%)',
              userSelect: 'none',
              marginTop: '0.25rem',
            }}>
              КТО<br /><span style={{ color: 'hsl(4 90% 52%)' }}>Я?</span>
            </div>
          </div>

          {/* Силуэт — абсолютно поверх текста, выровнен по правому краю/центру */}
          <div style={{
            position: 'absolute',
            bottom: 0,
            right: '5%',
            height: '90%',
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
                objectPosition: 'bottom',
                filter: 'drop-shadow(-4px 0 20px rgba(0,0,0,0.08))',
              }}
            />
          </div>

          {/* Нижняя строка: описание + кнопки */}
          <div style={{ marginTop: '2.5rem', display: 'flex', flexWrap: 'wrap', gap: '2rem', alignItems: 'flex-end', justifyContent: 'space-between', position: 'relative', zIndex: 3 }} className="animate-fade-up">
            <div style={{ maxWidth: 360 }}>
              <p style={{ fontSize: '0.95rem', lineHeight: 1.65, color: 'hsl(0 0% 28%)' }}>
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
                <span key={t} style={{ fontFamily: 'Golos Text, sans-serif', fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', padding: '0.25rem 0.8rem', border: '1px solid hsl(0 0% 72%)', color: 'hsl(0 0% 35%)' }}>{t}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Декоративная линия внизу */}
        <div style={{ height: 1, background: 'hsl(0 0% 80%)', position: 'relative', zIndex: 3 }} />

        <style>{`
          @media (max-width: 640px) {
            .hero-silhouette {
              right: -5% !important;
              height: 55% !important;
              opacity: 0.18 !important;
            }
          }
          @media (min-width: 641px) and (max-width: 1024px) {
            .hero-silhouette {
              height: 70% !important;
              right: 2% !important;
              opacity: 0.6 !important;
            }
          }
        `}</style>
      </section>

      {/* ─── DIVIDER ─────────────────────────────────────────── */}
      <div className="divider-light" />

      {/* ─── ABOUT / КРАТКО (02) ─────────────────────────────── */}
      <section id="about" style={{ background: 'hsl(0 0% 6%)', color: 'hsl(0 0% 96%)', padding: '6rem 0', position: 'relative', overflow: 'hidden' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '1rem', marginBottom: '3rem' }}>
            <div>
              <span className="label-sm" style={{ color: 'hsl(0 0% 50%)', display: 'block', marginBottom: '0.4rem' }}>Я постараюсь</span>
              <div className="display-xl" style={{ color: 'hsl(0 0% 96%)' }}>КРАТКО</div>
            </div>
            <a href={WHATSAPP} target="_blank" rel="noreferrer">
              <button className="btn-red">Узнать свободна ли дата</button>
            </a>
          </div>

          {/* Карточки — на десктопе ряд, на мобиле слайдер */}
          <div style={{ overflowX: 'auto', paddingBottom: '1rem', scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            className="about-slider">
            <div style={{ display: 'flex', gap: '1px', width: 'max-content' }}>
              {[
                {
                  img: PHOTOS[0].src,
                  tag: '8 ЛЕТ ОПЫТА',
                  title: 'В МЕРОПРИЯТИЯХ',
                  text: 'Свадьбы, корпоративы, юбилеи — без пошлости и конкурсов из 90-х',
                  accent: true,
                },
                {
                  img: ABOUT_IMG,
                  tag: '3 ГОДА STAND UP',
                  title: 'НА СЦЕНЕ',
                  text: 'Живой юмор и импровизация — это не про анекдоты, это про ощущение в зале',
                  accent: false,
                },
                {
                  img: PHOTOS[2].src,
                  tag: 'ЛИГА ДЕБАТОВ',
                  title: 'ПОЛУФИНАЛИСТ',
                  text: 'Чёткая, живая речь — держит зал и делает вечер цельным',
                  accent: true,
                },
                {
                  img: PHOTOS[1].src,
                  tag: 'МТС · РЖД · МЕГАФОН',
                  title: 'КРУПНЫЕ КЛИЕНТЫ',
                  text: 'Меня выбирают снова — потому что не подвожу и делаю дело',
                  accent: false,
                },

              ].map((c, i) => (
                <div key={i} style={{
                  width: 280,
                  flexShrink: 0,
                  background: 'hsl(0 0% 10%)',
                  display: 'flex',
                  flexDirection: 'column',
                  overflow: 'hidden',
                }}>
                  {/* Фото формат телефона */}
                  <div style={{ position: 'relative', aspectRatio: '9/13', overflow: 'hidden', flexShrink: 0 }}>
                    <img src={c.img} alt={c.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }}
                      onMouseEnter={e => (e.currentTarget.style.transform='scale(1.04)')}
                      onMouseLeave={e => (e.currentTarget.style.transform='scale(1)')}
                    />
                    {/* Красная полоска сверху */}
                    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 4, background: c.accent ? 'hsl(4 90% 52%)' : 'hsl(0 0% 30%)' }} />
                    {/* Тег */}
                    <div style={{ position: 'absolute', top: '1rem', left: '1rem', background: c.accent ? 'hsl(4 90% 52%)' : 'hsl(0 0% 6%)', padding: '0.2rem 0.7rem' }}>
                      <span style={{ fontFamily: 'Golos Text, sans-serif', fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'white' }}>{c.tag}</span>
                    </div>
                  </div>
                  {/* Текст под фото */}
                  <div style={{ padding: '1.25rem 1.25rem 1.5rem', flex: 1 }}>
                    <h3 style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 700, fontSize: '1.15rem', textTransform: 'uppercase', letterSpacing: '0.04em', color: 'hsl(0 0% 96%)', marginBottom: '0.5rem' }}>{c.title}</h3>
                    <p style={{ fontSize: '0.8rem', lineHeight: 1.6, color: 'hsl(0 0% 50%)' }}>{c.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <style>{`.about-slider::-webkit-scrollbar { display: none; }`}</style>

          {/* Индикатор скролла на мобиле */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '1.5rem' }} className="lg:hidden">
            <Icon name="MoveRight" size={16} color="hsl(4 90% 52%)" />
            <span style={{ fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'hsl(0 0% 40%)' }}>Листайте вправо</span>
          </div>
        </div>
        <div className="sec-num" style={{ position: 'absolute', top: '3rem', right: '2rem', color: 'hsl(0 0% 40%)' }}>(02)</div>
      </section>

      {/* ─── EVENTS (03) ─────────────────────────────────────── */}
      <section id="events" style={{ background: '#ffffff', padding: '6rem 0', position: 'relative' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 1.5rem' }}>
          <span className="label-sm" style={{ color: 'hsl(0 0% 45%)', display: 'block', marginBottom: '0.5rem' }}>Это ещё что?</span>
          <div className="display-xl" style={{ marginBottom: '3rem' }}>
            МЕРОПРИЯТИЯ
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1px', background: 'hsl(0 0% 75%)' }} className="grid grid-cols-2 lg:grid-cols-4">
            {[
              { num: '01', title: 'Свадьбы', text: 'Тёплая атмосфера, аккуратный юмор, без неловкости' },
              { num: '02', title: 'Корпоративы', text: 'Чувствую границы юмора, держу динамику весь вечер' },
              { num: '03', title: 'Юбилеи и\nдни рождения', text: 'Уважение ко всем возрастам, искренние поздравления' },
              { num: '04', title: 'Камерные\nвечера', text: 'Уютный формат живого общения для близкого круга' },
            ].map(e => (
              <div key={e.num} style={{ background: '#ffffff', padding: '2rem 1.5rem', transition: 'background 0.2s' }}
                onMouseEnter={el => (el.currentTarget.style.background='hsl(4 90% 52%)')}
                onMouseLeave={el => (el.currentTarget.style.background='#ffffff')}
              >
                <span style={{ fontFamily: 'Oswald, sans-serif', fontSize: '3rem', fontWeight: 700, color: 'hsl(0 0% 85%)', lineHeight: 1, display: 'block', marginBottom: '1rem' }}>{e.num}</span>
                <h3 style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 700, fontSize: '1.4rem', textTransform: 'uppercase', marginBottom: '0.75rem', whiteSpace: 'pre-line' }}>{e.title}</h3>
                <p style={{ fontSize: '0.85rem', lineHeight: 1.6, color: 'hsl(0 0% 35%)' }}>{e.text}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="sec-num" style={{ position: 'absolute', top: '3rem', right: '2rem' }}>(03)</div>
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

      {/* ─── ПОЧЕМУ Я (04) ───────────────────────────────────── */}
      <section id="why" style={{ background: '#ffffff', padding: '6rem 0', position: 'relative' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 1.5rem' }}>
          <span className="label-sm" style={{ color: 'hsl(0 0% 45%)', display: 'block', marginBottom: '0.5rem' }}>Да сколько можно</span>
          <div className="display-xl" style={{ marginBottom: '3.5rem' }}>
            ПОЧЕМУ<br /><span style={{ color: 'hsl(4 90% 52%)' }}>ВЫБИРАЮТ</span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1px', background: 'hsl(0 0% 75%)' }} className="grid grid-cols-1 lg:grid-cols-2">
            {[
              {
                n: '01',
                tag: '3 ГОДА В STAND UP',
                title: 'Живой юмор\nи импровизация',
                text: 'Три года выступаю в Stand Up. Хорошее чувство юмора — не просто слова: ваше событие пройдёт весело, естественно и без натяжки.',
                dark: false,
                img: PHOTOS[0].src,
              },
              {
                n: '02',
                tag: 'МТС · РЖД · МЕГАФОН',
                title: 'Крупные\nкомпании',
                text: 'Вёл корпоративы для федеральных брендов. Меня выбирают снова — потому что я хорошо делаю своё дело и не подвожу.',
                dark: true,
                img: PHOTOS[1].src,
              },
              {
                n: '03',
                tag: 'ЛИГА ДЕБАТОВ',
                title: 'Речь как\nинструмент',
                text: 'Полуфиналист Всероссийской лиги дебатов. Качественная, чёткая, живая речь — это то, что держит зал и делает вечер цельным.',
                dark: true,
                img: ABOUT_IMG,
              },
              {
                n: '04',
                tag: 'ГОРЮ ДЕЛОМ',
                title: 'Каждое событие\nвсерьёз',
                text: 'Я люблю своё дело по-настоящему. Не отрабатываю смену — стараюсь сделать для вас лучшее мероприятие.',
                dark: false,
                img: PHOTOS[3].src,
              },
            ].map(w => (
              <div key={w.n} style={{
                background: w.dark ? 'hsl(0 0% 6%)' : '#ffffff',
                color: w.dark ? 'hsl(0 0% 96%)' : 'hsl(0 0% 6%)',
                padding: '2.5rem',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
              }}>
                {/* Верх: номер + тег */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <span className="label-sm" style={{ color: 'hsl(4 90% 52%)' }}>{w.tag}</span>
                  <span style={{ fontFamily: 'Oswald, sans-serif', fontSize: '3rem', fontWeight: 700, lineHeight: 1, color: w.dark ? 'hsl(0 0% 20%)' : 'hsl(0 0% 88%)' }}>{w.n}</span>
                </div>
                {/* Фото + текст горизонтально */}
                <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                  {/* Маленькое фото */}
                  <div style={{ flexShrink: 0, width: 100, height: 130, overflow: 'hidden' }}>
                    <img src={w.img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: w.dark ? 'grayscale(30%)' : 'grayscale(10%)' }} />
                  </div>
                  {/* Текст */}
                  <div>
                    <h3 style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 700, fontSize: '1.75rem', textTransform: 'uppercase', lineHeight: 0.95, marginBottom: '0.9rem', whiteSpace: 'pre-line' }}>{w.title}</h3>
                    <p style={{ fontSize: '0.85rem', lineHeight: 1.7, color: w.dark ? 'hsl(0 0% 60%)' : 'hsl(0 0% 38%)' }}>{w.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="sec-num" style={{ position: 'absolute', top: '3rem', right: '2rem' }}>(04)</div>
      </section>

      {/* ─── PHOTO (05) ──────────────────────────────────────── */}
      <section id="photo" style={{ background: 'hsl(0 0% 6%)', padding: '6rem 0', position: 'relative' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '1rem', marginBottom: '3rem' }}>
            <div>
              <span className="label-sm" style={{ color: 'hsl(0 0% 40%)', display: 'block', marginBottom: '0.4rem' }}>Живые кадры</span>
              <div className="display-xl" style={{ color: 'hsl(0 0% 96%)' }}>ФОТО</div>
            </div>
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <button onClick={prevPhoto} style={{ width: 44, height: 44, border: '1px solid hsl(0 0% 30%)', background: 'transparent', color: 'white', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.background='hsl(4 90% 52%)')}
                onMouseLeave={e => (e.currentTarget.style.background='transparent')}>
                <Icon name="ChevronLeft" size={20} />
              </button>
              <button onClick={nextPhoto} style={{ width: 44, height: 44, border: '1px solid hsl(0 0% 30%)', background: 'transparent', color: 'white', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.background='hsl(4 90% 52%)')}
                onMouseLeave={e => (e.currentTarget.style.background='transparent')}>
                <Icon name="ChevronRight" size={20} />
              </button>
            </div>
          </div>

          {/* Главное фото */}
          <div style={{ position: 'relative', cursor: 'pointer' }} onClick={() => setOpenPhoto(photoSlide)}>
            <div style={{ position: 'relative', aspectRatio: '16/7', overflow: 'hidden' }}>
              {PHOTOS.map((p, i) => (
                <div key={i} style={{ position: 'absolute', inset: 0, opacity: i === photoSlide ? 1 : 0, transition: 'opacity 0.5s' }}>
                  <img src={p.src} alt={p.caption} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, hsl(0 0% 0% / 0.6) 0%, transparent 50%)' }} />
                  <div style={{ position: 'absolute', bottom: '1.5rem', left: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <span style={{ background: 'hsl(4 90% 52%)', padding: '0.25rem 0.75rem', fontFamily: 'Oswald, sans-serif', fontSize: '0.8rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'white' }}>{p.caption}</span>
                    <span style={{ color: 'hsl(0 0% 60%)', fontSize: '0.75rem' }}>{i + 1} / {PHOTOS.length}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Миниатюры */}
          <div style={{ display: 'flex', gap: 4, marginTop: 4 }}>
            {PHOTOS.map((p, i) => (
              <button key={i} onClick={() => setPhotoSlide(i)} style={{ flex: 1, aspectRatio: '16/9', overflow: 'hidden', border: i === photoSlide ? '2px solid hsl(4 90% 52%)' : '2px solid transparent', opacity: i === photoSlide ? 1 : 0.4, transition: 'all 0.2s', cursor: 'pointer' }}>
                <img src={p.src} alt={p.caption} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </button>
            ))}
          </div>
        </div>
        <div className="sec-num" style={{ position: 'absolute', top: '3rem', right: '2rem', color: 'hsl(0 0% 40%)' }}>(05)</div>
      </section>

      {/* ─── REVIEWS (06) ────────────────────────────────────── */}
      <section id="reviews" style={{ background: '#ffffff', padding: '6rem 0', position: 'relative' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '1rem', marginBottom: '3rem' }}>
            <div>
              <span className="label-sm" style={{ color: 'hsl(0 0% 45%)', display: 'block', marginBottom: '0.4rem' }}>Обещаю, это последний слайд по выёбонам</span>
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

      {/* ─── STEPS (07) ──────────────────────────────────────── */}
      <section style={{ background: 'hsl(0 0% 6%)', color: 'hsl(0 0% 96%)', padding: '6rem 0', position: 'relative' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 1.5rem' }}>
          <span className="label-sm" style={{ color: 'hsl(0 0% 40%)', display: 'block', marginBottom: '0.4rem' }}>Всё просто</span>
          <div className="display-xl" style={{ color: 'hsl(0 0% 96%)', marginBottom: '3.5rem' }}>КАК МЫ<br /><span style={{ color: 'hsl(4 90% 52%)' }}>РАБОТАЕМ</span></div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', background: 'hsl(0 0% 15%)' }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {steps.map(s => (
              <div key={s.n} style={{ background: 'hsl(0 0% 6%)', padding: '2.5rem 2rem', borderBottom: '1px solid hsl(0 0% 14%)' }}>
                <div style={{ fontFamily: 'Oswald, sans-serif', fontSize: '4rem', fontWeight: 700, color: 'hsl(4 90% 52%)', lineHeight: 1, marginBottom: '1rem' }}>{s.n}</div>
                <h3 style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 700, fontSize: '1.3rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.6rem', color: 'hsl(0 0% 96%)' }}>{s.t}</h3>
                <p style={{ fontSize: '0.85rem', color: 'hsl(0 0% 50%)', lineHeight: 1.6 }}>{s.d}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="sec-num" style={{ position: 'absolute', top: '3rem', right: '2rem', color: 'hsl(0 0% 35%)' }}>(07)</div>
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
              <button style={{ background: '#25D366', color: 'white', fontFamily: 'Oswald, sans-serif', fontWeight: 600, fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase', padding: '0.8rem 2rem', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Icon name="MessageCircle" size={18} /> WhatsApp
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