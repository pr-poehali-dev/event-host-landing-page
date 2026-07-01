import { useState } from 'react';
import Icon from '@/components/ui/icon';
import {
  Dialog,
  DialogContent,
} from '@/components/ui/dialog';

const HERO      = 'https://cdn.poehali.dev/projects/0dd0b1db-f65f-489b-8e58-06dfc0c8d999/bucket/aa7da986-8d6d-41f2-a23c-75370debd1a8.png';
const HERO_CUT  = 'https://cdn.poehali.dev/projects/0dd0b1db-f65f-489b-8e58-06dfc0c8d999/bucket/8a934081-5b0f-4131-9075-e42a293c9115.jpg';
const HERO_BG   = '#ffffff';
const ABOUT_IMG = 'https://cdn.poehali.dev/projects/0dd0b1db-f65f-489b-8e58-06dfc0c8d999/bucket/219325d4-fec0-48ed-8e57-c649f8929396.jpg';

const PHOTOS = [
  { src: 'https://cdn.poehali.dev/projects/0dd0b1db-f65f-489b-8e58-06dfc0c8d999/bucket/d60c1279-8815-4dc5-b5ba-8058e41a214f.jpg', caption: 'Корпоратив' },
  { src: 'https://cdn.poehali.dev/projects/0dd0b1db-f65f-489b-8e58-06dfc0c8d999/bucket/5e2b6738-6f04-47b0-975f-c14595ca525e.jpg', caption: 'Свадьба' },
  { src: 'https://cdn.poehali.dev/projects/0dd0b1db-f65f-489b-8e58-06dfc0c8d999/bucket/2d530a69-7796-49c3-be91-6cdce8cdf250.jpg', caption: 'Свадьба' },
  { src: 'https://cdn.poehali.dev/projects/0dd0b1db-f65f-489b-8e58-06dfc0c8d999/bucket/aa7da986-8d6d-41f2-a23c-75370debd1a8.png', caption: 'Антон в кадре' },
];

const WHATSAPP = 'https://wa.me/79161234567?text=Привет%2C+Макс!';
const TELEGRAM = 'https://t.me/anton';
const PHONE    = 'tel:+79990000000';

const reviews = [
  { name: 'Анастасия К.', type: 'Свадьба', date: '10.09.2025', img: 'https://cdn.poehali.dev/projects/0dd0b1db-f65f-489b-8e58-06dfc0c8d999/bucket/700b12a3-93d9-431a-9496-0304cf2bf804.JPG' },
  { name: 'Алёна Камаргина', type: 'Свадьба', date: '22.07.2024', img: 'https://cdn.poehali.dev/projects/0dd0b1db-f65f-489b-8e58-06dfc0c8d999/bucket/1094d50a-14be-4e55-9987-6859b272fa03.JPG' },
  { name: 'Людмила Трафимова', type: 'Свадьба', date: '19.09.2023', img: 'https://cdn.poehali.dev/projects/0dd0b1db-f65f-489b-8e58-06dfc0c8d999/bucket/97eadf42-a558-4fb6-a58e-101fff08dcad.JPG' },
  { name: 'Марина Б.', type: 'День рождения', date: '23.05.2026', img: 'https://cdn.poehali.dev/projects/0dd0b1db-f65f-489b-8e58-06dfc0c8d999/bucket/b443ff23-350a-467d-b242-0155fc31311c.JPG' },
  { name: 'Жэмбэ М.', type: 'Свадьба', date: '07.06.2026', img: 'https://cdn.poehali.dev/projects/0dd0b1db-f65f-489b-8e58-06dfc0c8d999/bucket/b9c1f0aa-3f34-428d-8804-43eaf9f58f17.JPG' },
];

const faq = [
  { q: 'Можно ли без пошлых конкурсов?', a: 'Да, это мой принцип. Никаких «лопни шарик» и танцев с тазиком — только нормальный юмор и современные интерактивы.' },
  { q: 'Работаете ли с DJ?', a: 'Да, я работаю с диджеем и у нас есть профессиональное оборудование — звук, свет и экран под любой формат.' },
  { q: 'Можно ли караоке?', a: 'Да, добавляется по согласованию.' },
  { q: 'Можно ли созвониться?', a: 'Да, конечно — можем созвониться, так будет даже проще. Обсудим детали и я отвечу на все вопросы.' },
  { q: 'Как забронировать дату?', a: 'Давайте обсудим ваше мероприятие — я сориентирую по дальнейшим шагам. Предоплата всего 10%.' },
];

const steps = [
  { n: '01', t: 'Заявка и уточнение деталей', d: 'Пишете — обсуждаем дату, формат и пожелания' },
  { n: '02', t: 'Бронирование даты', d: 'Фиксируем ваш день. Предоплата всего 10%' },
  { n: '03', t: 'Подготовка и сценарий', d: 'Создаю программу под вашу компанию и мероприятие' },
  { n: '04', t: 'Мероприятие', d: 'Я веду — вы отдыхаете и наслаждаетесь' },
];

const MARQUEE_CLIENTS = ['Мегафон', 'МТС Банк', 'Росгосстрах', 'РЖД', 'Додо Пицца', 'Сбер', 'Яндекс', 'Лукойл'];

const DotsGrid = () => (
  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(8, 10px)', gap: '8px' }}>
    {Array.from({ length: 48 }).map((_, i) => (
      <span key={i} style={{ width: 10, height: 10, borderRadius: '50%', background: 'hsl(4 90% 52%)', display: 'block' }} />
    ))}
  </div>
);

type Review = { name: string; type: string; date: string; img: string };

const ReviewSlider = ({ reviews, slide, onPrev, onNext, onSelect, onOpen }: {
  reviews: Review[];
  slide: number;
  onPrev: () => void;
  onNext: () => void;
  onSelect: (i: number) => void;
  onOpen: (i: number) => void;
}) => {


  return (
    <div>
      {/* Мобиль: полноэкранный слайдер как у фото */}
      <div className="md:hidden" style={{ position: 'relative', width: '100%', overflow: 'hidden', height: '75vw', background: '#f5f5f5' }}>
        {reviews.map((r, i) => (
          <div key={i} style={{ position: 'absolute', inset: 0, opacity: i === slide ? 1 : 0, transition: 'opacity 0.4s ease' }}>
            <img src={r.img} alt={r.name} style={{ width: '100%', height: 'auto', display: 'block', objectPosition: 'top' }} />
          </div>
        ))}
        <button onClick={onPrev} style={{ position: 'absolute', left: '0.75rem', top: '50%', transform: 'translateY(-50%)', width: 44, height: 44, background: 'rgba(0,0,0,0.35)', border: '1px solid rgba(255,255,255,0.2)', color: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2 }}>
          <Icon name="ChevronLeft" size={22} />
        </button>
        <button onClick={onNext} style={{ position: 'absolute', right: '0.75rem', top: '50%', transform: 'translateY(-50%)', width: 44, height: 44, background: 'rgba(0,0,0,0.35)', border: '1px solid rgba(255,255,255,0.2)', color: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2 }}>
          <Icon name="ChevronRight" size={22} />
        </button>
        <div style={{ position: 'absolute', bottom: '0.75rem', right: '0.75rem', background: 'rgba(0,0,0,0.45)', padding: '0.2rem 0.6rem', zIndex: 2 }}>
          <span style={{ fontSize: '0.75rem', color: '#fff', letterSpacing: '0.1em' }}>{slide + 1} / {reviews.length}</span>
        </div>
      </div>

      {/* Десктоп: как было — с отступами по бокам */}
      <div className="hidden md:flex" style={{ alignItems: 'center', gap: '1rem', background: 'hsl(0 0% 97%)', padding: '3rem 0', position: 'relative' }}>
        <button onClick={onPrev} style={{ flexShrink: 0, width: 44, height: 44, background: 'hsl(0 0% 93%)', border: 'none', color: 'hsl(0 0% 20%)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Icon name="ChevronLeft" size={22} />
        </button>
        <div style={{ flex: 1, overflow: 'hidden' }}>
          <div style={{ display: 'flex', transition: 'transform 0.4s ease', transform: `translateX(-${slide * 100}%)` }}>
            {reviews.map((r, i) => (
              <div key={i} style={{ minWidth: '100%', display: 'flex', justifyContent: 'center' }}>
                <img src={r.img} alt={r.name} onClick={() => onOpen(i)} style={{ maxWidth: 780, width: '100%', maxHeight: '68vh', objectFit: 'contain', objectPosition: 'top', display: 'block', boxShadow: '0 4px 24px rgba(0,0,0,0.10)', cursor: 'zoom-in' }} />
              </div>
            ))}
          </div>
        </div>
        <button onClick={onNext} style={{ flexShrink: 0, width: 44, height: 44, background: 'hsl(0 0% 93%)', border: 'none', color: 'hsl(0 0% 20%)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Icon name="ChevronRight" size={22} />
        </button>
      </div>

      {/* Точки (только десктоп) */}
      <div className="hidden md:flex" style={{ alignItems: 'center', gap: '0.5rem', marginTop: '1.25rem' }}>
        {reviews.map((_, i) => (
          <button key={i} onClick={() => onSelect(i)} style={{ width: i === slide ? 28 : 8, height: 8, background: i === slide ? 'hsl(4 90% 52%)' : 'hsl(0 0% 80%)', border: 'none', cursor: 'pointer', transition: 'all 0.3s', padding: 0 }} />
        ))}
        <span style={{ marginLeft: '0.5rem', fontSize: '0.75rem', color: 'hsl(0 0% 55%)' }}>{slide + 1} / {reviews.length}</span>
      </div>
    </div>
  );
};

const Index = () => {
  const [openPhoto, setOpenPhoto]   = useState<number | null>(null);
  const [openReview, setOpenReview] = useState<number | null>(null);
  const [photoSlide, setPhotoSlide] = useState(0);
  const [reviewSlide, setReviewSlide] = useState(0);
  const [faqOpen, setFaqOpen]       = useState<number | null>(null);
  const [stepSlide, setStepSlide]   = useState(0);
  const [form, setForm] = useState({ name: '', date: '', phone: '', message: '' });
  const [formSent, setFormSent] = useState(false);

  const prevPhoto = () => setPhotoSlide(p => (p - 1 + PHOTOS.length) % PHOTOS.length);
  const nextPhoto = () => setPhotoSlide(p => (p + 1) % PHOTOS.length);

  const prevReview = () => setReviewSlide(p => (p - 1 + reviews.length) % reviews.length);
  const nextReview = () => setReviewSlide(p => (p + 1) % reviews.length);



  const handlePhone = (v: string) => {
    const digits = v.replace(/\D/g, '').slice(0, 10);
    let out = '';
    if (digits.length > 0) out += digits.slice(0, 3);
    if (digits.length > 3) out += '-' + digits.slice(3, 6);
    if (digits.length > 6) out += '-' + digits.slice(6, 8);
    if (digits.length > 8) out += '-' + digits.slice(8, 10);
    setForm(f => ({ ...f, phone: out }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.phone.replace(/\D/g, '').length < 10) return;
    setFormSent(true);
  };



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
            <button className="btn-red">Написать Антону</button>
          </a>
        </div>
      </header>

      {/* ─── HERO (01) ───────────────────────────────────────── */}
      <section id="top" style={{ paddingTop: 56, background: HERO_BG, position: 'relative' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 1.5rem' }}>

          {/* Десктоп: две колонки | Мобиль: стопка */}
          <div className="hero-grid">

            {/* ЛЕВАЯ / ВЕРХНЯЯ — текст */}
            <div className="hero-text-col">
              <span style={{ fontFamily: 'Golos Text, sans-serif', fontSize: '0.7rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'hsl(0 0% 45%)' }}>— Ведущий мероприятий · Антон</span>

              <h1 style={{
                fontFamily: 'Oswald, sans-serif',
                fontWeight: 700,
                fontSize: 'clamp(2.6rem, 6vw, 5rem)',
                lineHeight: 1.05,
                textTransform: 'uppercase',
                color: 'hsl(0 0% 8%)',
                marginTop: '1rem',
                marginBottom: 0,
              }}>
                Весёлый ведущий<br />
                <span style={{ color: 'hsl(4 90% 52%)' }}>без кринжа</span><br />
                на ваше мероприятие
              </h1>

              <div style={{ width: '4rem', height: 3, background: 'hsl(4 90% 52%)', margin: '1.5rem 0' }} />

              <p style={{ fontSize: '1rem', lineHeight: 1.7, color: 'hsl(0 0% 32%)', maxWidth: 420 }}>
                Свадьбы, корпоративы, юбилеи — провожу так, что гости вспоминают
                ещё долго. 8 лет опыта, 3 года Stand Up, полуфиналист лиги дебатов.
              </p>

              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginTop: '1.75rem' }}>
                <a href="#cta">
                  <button className="btn-red">Узнать свободна ли дата</button>
                </a>
                <a href="#about">
                  <button className="btn-outline-dark">Обо мне</button>
                </a>
              </div>

              <div style={{ display: 'flex', gap: '1.5rem', marginTop: '2rem', flexWrap: 'wrap' }}>
                {[
                  { icon: 'MapPin', label: 'Москва и выезд' },
                  { icon: 'Users', label: 'Любой масштаб' },
                  { icon: 'Mic', label: 'Stand Up комик' },
                ].map(b => (
                  <div key={b.icon} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <Icon name={b.icon} fallback="Circle" size={14} color="hsl(4 90% 52%)" />
                    <span style={{ fontSize: '0.8rem', color: 'hsl(0 0% 40%)', letterSpacing: '0.04em' }}>{b.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* ПРАВАЯ / НИЖНЯЯ — фото */}
            <div className="hero-photo-col">
              <img
                src={HERO_CUT}
                alt="Антон — ведущий мероприятий"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center', display: 'block' }}
              />
            </div>

          </div>
        </div>

        <div style={{ height: 1, background: 'hsl(0 0% 78%)' }} />

        <style>{`
          .hero-grid {
            display: grid;
            grid-template-columns: 2fr 3fr;
            gap: 2.5rem;
            align-items: stretch;
            padding: 3rem 0 0;
          }
          .hero-text-col {
            padding-bottom: 3rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
          }
          .hero-photo-col {
            height: 680px;
            overflow: hidden;
            border-radius: 2px;
          }
          @media (max-width: 768px) {
            .hero-grid {
              grid-template-columns: 1fr;
              gap: 2rem;
              padding: 2rem 0 0;
            }
            .hero-text-col {
              padding-bottom: 0;
            }
            .hero-photo-col {
              height: 85vw;
              min-height: 300px;
              max-height: 520px;
              margin: 0 -1.5rem;
              border-radius: 0;
            }
          }
        `}</style>
      </section>

      {/* ─── DIVIDER ─────────────────────────────────────────── */}
      <div className="divider-light" />

      {/* ─── ABOUT / КРАТКО (02) ─────────────────────────────── */}
      <section id="about" style={{ background: '#0d1117', color: 'hsl(0 0% 96%)', padding: '5rem 0 0', position: 'relative', overflow: 'hidden' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 1.5rem' }}>

          {/* Тег + заголовок по центру */}
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span style={{ fontFamily: 'Golos Text, sans-serif', fontSize: '0.65rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'hsl(0 0% 45%)' }}>Я постараюсь кратко</span>
            <div style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 700, fontSize: 'clamp(2rem, 5vw, 3.2rem)', textTransform: 'uppercase', lineHeight: 1.05, marginTop: '0.75rem', color: '#fff' }}>
              Почему выбирают меня
            </div>
          </div>

          {/* Карточки — 2 в ряд на мобиле, 4 на десктопе */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1px', background: 'hsl(0 0% 14%)' }} className="about-cards">
            {[
              { num: '8', unit: 'лет', label: 'Веду мероприятия', sub: 'Опытный специалист, готовый ко всему, кроме доллара по 100 рублей' },
              { num: '3', unit: 'года', label: 'Выступал в Stand Up', sub: 'Вам будет весело — живой юмор и импровизация в каждом моменте' },
              { num: '🏆', unit: '', label: 'Полуфиналист Всероссийской лиги дебатов', sub: 'Говорю красиво и без слов-паразитов — речь держит зал' },
              { num: '♥', unit: '', label: 'Люблю своё дело', sub: 'Не отрабатываю смену — каждое мероприятие делаю всерьёз' },
            ].map((c, i) => (
              <div key={i} style={{ background: 'hsl(0 0% 8%)', padding: '2rem 1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem', position: 'relative' }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.3rem' }}>
                  <span style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 700, fontSize: '2.8rem', lineHeight: 1, color: 'hsl(4 90% 52%)' }}>{c.num}</span>
                  {c.unit && <span style={{ fontFamily: 'Oswald, sans-serif', fontSize: '1rem', color: 'hsl(0 0% 45%)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{c.unit}</span>}
                </div>
                <div style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 600, fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.04em', color: '#fff' }}>{c.label}</div>
                <p style={{ fontSize: '0.8rem', lineHeight: 1.6, color: 'hsl(0 0% 50%)', margin: 0 }}>{c.sub}</p>
                <div style={{ position: 'absolute', bottom: 0, left: 0, width: '2.5rem', height: 2, background: 'hsl(4 90% 52%)' }} />
              </div>
            ))}
          </div>

          {/* Кнопка по центру */}
          <div style={{ textAlign: 'center', padding: '2.5rem 0' }}>
            <a href="#cta">
              <button className="btn-red">Узнать свободна ли дата →</button>
            </a>
          </div>
        </div>



        <style>{`
          @media (max-width: 640px) {
            .about-cards { grid-template-columns: repeat(2, 1fr) !important; }
          }
        `}</style>

        <div className="sec-num" style={{ position: 'absolute', top: '3rem', right: '2rem', color: 'hsl(0 0% 30%)' }}>(02)</div>
      </section>

      {/* ─── CLIENTS MARQUEE ─────────────────────────────────── */}
      <div style={{ background: '#ffffff', padding: '0', borderTop: '1px solid hsl(0 0% 85%)', borderBottom: '1px solid hsl(0 0% 85%)' }}>
        {/* Плашка-заголовок */}
        <div style={{ padding: '1.25rem 1.5rem', borderBottom: '1px solid hsl(0 0% 88%)', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <Icon name="Briefcase" size={16} color="hsl(4 90% 52%)" />
          <span style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'hsl(0 0% 20%)' }}>Компании, с которыми я работал</span>
        </div>
        <div style={{ padding: '1.75rem 0' }}>
          <div className="marquee-wrap">
            <div className="marquee-track">
              {[...MARQUEE_CLIENTS, ...MARQUEE_CLIENTS].map((name, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '2.5rem', paddingRight: '2.5rem' }}>
                  <span style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 700, fontSize: '1.5rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'hsl(0 0% 15%)', whiteSpace: 'nowrap' }}>{name}</span>
                  <span style={{ color: 'hsl(4 90% 52%)', fontSize: '0.8rem' }}>●</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ─── PHOTO (04) ──────────────────────────────────────── */}
      <section id="photo" style={{ background: '#000', position: 'relative' }}>
        <div style={{ padding: '3rem 1.5rem 1.5rem', maxWidth: 1280, margin: '0 auto' }}>
          <div className="display-xl" style={{ color: '#ffffff' }}>ФОТО</div>
        </div>
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
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '3rem' }}>
            <div className="display-xl">ОТЗЫВЫ</div>
            <a href={WHATSAPP} target="_blank" rel="noreferrer">
              <button className="btn-red">Узнать свободна ли дата</button>
            </a>
          </div>

          {/* Слайдер — единый для всех экранов */}
          <ReviewSlider
            reviews={reviews}
            slide={reviewSlide}
            onPrev={prevReview}
            onNext={nextReview}
            onSelect={setReviewSlide}
            onOpen={setOpenReview}
          />
        </div>
        <div className="sec-num" style={{ position: 'absolute', top: '3rem', right: '2rem' }}>(06)</div>
      </section>

      {/* ─── STEPS (05) ──────────────────────────────────────── */}
      <section style={{ background: 'hsl(0 0% 6%)', color: 'hsl(0 0% 96%)', padding: '4rem 0', position: 'relative', overflow: 'hidden' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ marginBottom: '2.5rem' }}>
            <span className="label-sm" style={{ color: 'hsl(0 0% 40%)', display: 'block', marginBottom: '0.4rem' }}>Всё просто</span>
            <div className="display-xl" style={{ color: 'hsl(0 0% 96%)' }}>КАК МЫ<br /><span style={{ color: 'hsl(4 90% 52%)' }}>РАБОТАЕМ</span></div>
          </div>

          {/* Сетка 2×2 — и на мобиле, и на десктопе */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1px', background: 'hsl(0 0% 15%)' }}>
            {steps.map(s => (
              <div key={s.n} style={{ background: 'hsl(0 0% 6%)', padding: 'clamp(1rem, 4vw, 2.5rem) clamp(0.75rem, 3vw, 2rem)' }}>
                <div style={{ fontFamily: 'Oswald, sans-serif', fontSize: 'clamp(2rem, 8vw, 4rem)', fontWeight: 700, color: 'hsl(4 90% 52%)', lineHeight: 1, marginBottom: '0.6rem' }}>{s.n}</div>
                <h3 style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 700, fontSize: 'clamp(0.8rem, 3vw, 1.3rem)', textTransform: 'uppercase', letterSpacing: '0.03em', marginBottom: '0.4rem', color: 'hsl(0 0% 96%)', lineHeight: 1.2 }}>{s.t}</h3>
                <p style={{ fontSize: 'clamp(0.7rem, 2.5vw, 0.85rem)', color: 'hsl(0 0% 50%)', lineHeight: 1.5 }}>{s.d}</p>
              </div>
            ))}
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

      {/* ─── ЗАЯВКА ──────────────────────────────────────────── */}
      <section id="request" style={{ background: 'hsl(0 0% 6%)', color: 'hsl(0 0% 96%)', padding: '6rem 0', position: 'relative' }}>
        <div style={{ maxWidth: 720, margin: '0 auto', padding: '0 1.5rem' }}>
          <span className="label-sm" style={{ color: 'hsl(0 0% 40%)', display: 'block', marginBottom: '0.4rem' }}>Бронирование</span>
          <div className="display-xl" style={{ color: 'hsl(0 0% 96%)', marginBottom: '0.5rem' }}>ОСТАВИТЬ<br /><span style={{ color: 'hsl(4 90% 52%)' }}>ЗАЯВКУ</span></div>
          <p style={{ fontSize: '0.9rem', color: 'hsl(0 0% 50%)', marginBottom: '3rem', lineHeight: 1.7 }}>Заполните форму — отвечу в течение часа. Обязателен только номер телефона.</p>

          {formSent ? (
            <div style={{ textAlign: 'center', padding: '4rem 2rem', border: '1px solid hsl(0 0% 18%)', background: 'hsl(0 0% 8%)' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>✓</div>
              <div style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 700, fontSize: '1.5rem', textTransform: 'uppercase', marginBottom: '0.75rem', color: 'hsl(4 90% 52%)' }}>Заявка отправлена!</div>
              <p style={{ color: 'hsl(0 0% 55%)', fontSize: '0.9rem' }}>Скоро свяжусь с вами</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {/* Имя */}
              <div>
                <label style={{ display: 'block', fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'hsl(0 0% 45%)', marginBottom: '0.4rem' }}>Ваше имя</label>
                <input
                  type="text"
                  placeholder="Александра"
                  value={form.name}
                  onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                  style={{ width: '100%', background: 'hsl(0 0% 10%)', border: '1px solid hsl(0 0% 20%)', color: 'hsl(0 0% 90%)', padding: '0.85rem 1rem', fontSize: '0.95rem', outline: 'none', fontFamily: 'Golos Text, sans-serif', boxSizing: 'border-box' }}
                />
              </div>
              {/* Дата */}
              <div>
                <label style={{ display: 'block', fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'hsl(0 0% 45%)', marginBottom: '0.4rem' }}>Дата мероприятия</label>
                <input
                  type="date"
                  value={form.date}
                  onChange={e => setForm(f => ({ ...f, date: e.target.value }))}
                  style={{ width: '100%', background: 'hsl(0 0% 10%)', border: '1px solid hsl(0 0% 20%)', color: 'hsl(0 0% 90%)', padding: '0.85rem 1rem', fontSize: '0.95rem', outline: 'none', fontFamily: 'Golos Text, sans-serif', colorScheme: 'dark', boxSizing: 'border-box' }}
                />
              </div>
              {/* Телефон */}
              <div>
                <label style={{ display: 'block', fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'hsl(0 0% 45%)', marginBottom: '0.4rem' }}>
                  Номер телефона <span style={{ color: 'hsl(4 90% 52%)' }}>*</span>
                </label>
                <div style={{ display: 'flex', alignItems: 'stretch' }}>
                  <span style={{ background: 'hsl(0 0% 14%)', border: '1px solid hsl(0 0% 20%)', borderRight: 'none', padding: '0.85rem 1rem', color: 'hsl(0 0% 60%)', fontSize: '0.95rem', fontFamily: 'Golos Text, sans-serif', whiteSpace: 'nowrap', display: 'flex', alignItems: 'center' }}>+7</span>
                  <input
                    type="tel"
                    placeholder="931-231-33-21"
                    value={form.phone}
                    onChange={e => handlePhone(e.target.value)}
                    required
                    style={{ flex: 1, background: 'hsl(0 0% 10%)', border: '1px solid hsl(0 0% 20%)', color: 'hsl(0 0% 90%)', padding: '0.85rem 1rem', fontSize: '0.95rem', outline: 'none', fontFamily: 'Golos Text, sans-serif', boxSizing: 'border-box' }}
                  />
                </div>
                <p style={{ fontSize: '0.7rem', color: 'hsl(0 0% 40%)', marginTop: '0.3rem' }}>Формат: +7-931-231-33-21</p>
              </div>
              {/* Вопрос */}
              <div>
                <label style={{ display: 'block', fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'hsl(0 0% 45%)', marginBottom: '0.4rem' }}>Расскажите о мероприятии</label>
                <textarea
                  placeholder="Тип события, количество гостей, пожелания..."
                  value={form.message}
                  onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                  rows={4}
                  style={{ width: '100%', background: 'hsl(0 0% 10%)', border: '1px solid hsl(0 0% 20%)', color: 'hsl(0 0% 90%)', padding: '0.85rem 1rem', fontSize: '0.95rem', outline: 'none', fontFamily: 'Golos Text, sans-serif', resize: 'vertical', boxSizing: 'border-box' }}
                />
              </div>
              <button type="submit" className="btn-red" style={{ alignSelf: 'flex-start', marginTop: '0.5rem' }}>
                Отправить заявку →
              </button>
            </form>
          )}
        </div>
      </section>

      {/* ─── FINAL CTA ───────────────────────────────────────── */}
      <section id="cta" style={{ background: 'hsl(0 0% 6%)', padding: '8rem 0', position: 'relative', overflow: 'hidden' }}>
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
                Написать Антону
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
        <DialogContent style={{ background: 'hsl(0 0% 10%)', border: 'none', maxWidth: '96vw', width: 760, padding: '1rem', position: 'relative' }}>
          {openReview !== null && (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
              <img src={reviews[openReview].img} alt={reviews[openReview].name} style={{ width: '100%', maxHeight: '78vh', objectFit: 'contain', display: 'block' }} />
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1.5rem' }}>
                <button onClick={() => setOpenReview(i => i !== null ? (i - 1 + reviews.length) % reviews.length : null)} style={{ width: 48, height: 48, background: 'rgba(255,255,255,0.14)', border: 'none', color: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Icon name="ChevronLeft" size={24} />
                </button>
                <span style={{ color: 'hsl(0 0% 60%)', fontSize: '0.85rem', minWidth: 48, textAlign: 'center' }}>{openReview + 1} / {reviews.length}</span>
                <button onClick={() => setOpenReview(i => i !== null ? (i + 1) % reviews.length : null)} style={{ width: 48, height: 48, background: 'rgba(255,255,255,0.14)', border: 'none', color: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Icon name="ChevronRight" size={24} />
                </button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;