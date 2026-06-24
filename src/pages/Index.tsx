import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

const HERO = 'https://cdn.poehali.dev/projects/0dd0b1db-f65f-489b-8e58-06dfc0c8d999/bucket/aa7da986-8d6d-41f2-a23c-75370debd1a8.png';
const ABOUT_IMG = 'https://cdn.poehali.dev/projects/0dd0b1db-f65f-489b-8e58-06dfc0c8d999/bucket/219325d4-fec0-48ed-8e57-c649f8929396.jpg';
const HALL = 'https://cdn.poehali.dev/projects/0dd0b1db-f65f-489b-8e58-06dfc0c8d999/bucket/d60c1279-8815-4dc5-b5ba-8058e41a214f.jpg';

const PHOTOS = [
  { src: 'https://cdn.poehali.dev/projects/0dd0b1db-f65f-489b-8e58-06dfc0c8d999/bucket/03a6cf58-895a-4288-b61d-3b80722a6504.jpg', caption: 'Открытие ресторана — взрыв эмоций' },
  { src: 'https://cdn.poehali.dev/projects/0dd0b1db-f65f-489b-8e58-06dfc0c8d999/bucket/d60c1279-8815-4dc5-b5ba-8058e41a214f.jpg', caption: 'Корпоратив — живой интерактив' },
  { src: 'https://cdn.poehali.dev/projects/0dd0b1db-f65f-489b-8e58-06dfc0c8d999/bucket/5e2b6738-6f04-47b0-975f-c14595ca525e.jpg', caption: 'Свадьба — с молодожёнами' },
  { src: 'https://cdn.poehali.dev/projects/0dd0b1db-f65f-489b-8e58-06dfc0c8d999/bucket/2d530a69-7796-49c3-be91-6cdce8cdf250.jpg', caption: 'Свадьба — танцпол зажигает' },
  { src: 'https://cdn.poehali.dev/projects/0dd0b1db-f65f-489b-8e58-06dfc0c8d999/bucket/aa7da986-8d6d-41f2-a23c-75370debd1a8.png', caption: 'Антон в кадре' },
];

const CLIENT_LOGOS = [
  { name: 'МегаФон', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/MegaFon_logo_%282022%29.svg/320px-MegaFon_logo_%282022%29.svg.png' },
  { name: 'МТС Банк', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/MTS_bank_logo_%282018%29.svg/320px-MTS_bank_logo_%282018%29.svg.png' },
  { name: 'Росгосстрах', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Rosgosstrakh.svg/320px-Rosgosstrakh.svg.png' },
  { name: 'РЖД', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Russian_Railways-Logo.svg/320px-Russian_Railways-Logo.svg.png' },
  { name: 'Додо Пицца', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Dodo_Pizza_logo.svg/320px-Dodo_Pizza_logo.svg.png' },
];

const WHATSAPP = 'https://wa.me/79990000000';
const TELEGRAM = 'https://t.me/anton';
const PHONE = 'tel:+79990000000';

const included = [
  { icon: 'Disc3', title: 'Ведущий + DJ', text: 'Полный музыкальный и ведущий комплект' },
  { icon: 'Speaker', title: 'Оборудование', text: 'Звук, свет, микрофоны под ваш зал' },
  { icon: 'ClipboardList', title: 'Подготовка программы', text: 'Сценарий под конкретную компанию' },
  { icon: 'Sparkles', title: 'Современные интерактивы', text: 'Без давления на гостей' },
  { icon: 'Music', title: 'Караоке-блок', text: 'По согласованию с вами' },
  { icon: 'Gift', title: 'Нейроролик в подарок', text: 'При брони в течение 36 часов' },
];

const events = [
  { icon: 'Heart', title: 'Свадьбы', text: 'Тёплая атмосфера, аккуратный юмор и трепетные моменты без неловкости.' },
  { icon: 'Briefcase', title: 'Корпоративы', text: 'Чувствую границы юмора корпоративной аудитории и держу динамику.' },
  { icon: 'PartyPopper', title: 'Юбилеи и дни рождения', text: 'Уважение к гостям всех возрастов и искренние поздравления.' },
  { icon: 'Wine', title: 'Камерные вечера', text: 'Уютный формат живого общения для близкого круга.' },
];

const whyMe = [
  {
    icon: 'Mic2',
    tag: '3 года в Stand Up',
    title: 'Живой юмор и импровизация',
    text: 'Три года выступаю в Stand Up. Хорошее чувство юмора — не просто слова: ваше событие пройдёт весело, естественно и без натяжки.',
    accent: 'gold',
  },
  {
    icon: 'Building2',
    tag: 'МТС · РЖД · Мегафон',
    title: 'Выбирают крупные компании',
    text: 'Вёл корпоративы для федеральных брендов. Меня выбирают снова — потому что я хорошо делаю своё дело и не подвожу.',
    accent: 'purple',
  },
  {
    icon: 'Trophy',
    tag: 'Лига дебатов',
    title: 'Речь как инструмент',
    text: 'Полуфиналист Всероссийской лиги дебатов. Качественная, чёткая, живая речь — это то, что держит зал и делает вечер цельным.',
    accent: 'burg',
  },
  {
    icon: 'Flame',
    tag: 'Горю делом',
    title: 'Каждое событие — всерьёз',
    text: 'Я люблю своё дело по-настоящему. Не отрабатываю смену — стараюсь сделать для вас лучшее мероприятие, на которое было бы не стыдно позвать друзей.',
    accent: 'gold',
  },
];

const clients = ['Мегафон', 'МТС Банк', 'Росгосстрах', 'РЖД', 'Додо'];

const steps = [
  { n: '01', t: 'Заявка', d: 'Пишете дату и формат' },
  { n: '02', t: 'Уточнение деталей', d: 'Обсуждаем формат и гостей' },
  { n: '03', t: 'Созвон 5–10 минут', d: 'Знакомимся, отвечаю на вопросы' },
  { n: '04', t: 'Бронь даты', d: 'Фиксируем ваш день' },
  { n: '05', t: 'Подготовка программы', d: 'Сценарий под вашу компанию' },
  { n: '06', t: 'Проведение праздника', d: 'Весело, современно, без стыда' },
];

const calm = [
  'Заранее готовлюсь к каждому событию',
  'Помогаю с таймингом вечера',
  'Не заставляю гостей делать странные вещи',
  'Умею импровизировать в любой ситуации',
  'Чувствую границы юмора',
  'Держу динамику весь вечер',
  'Работаю с DJ и техникой',
];

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
  { q: 'Можно ли караоке?', a: 'Да, караоке-блок добавляется по согласованию с вами.' },
  { q: 'Ведёте ли корпоративы?', a: 'Конечно. Работаю и с весёлой компанией друзей, и с корпоративной аудиторией, где важны границы юмора.' },
  { q: 'Можно ли созвониться?', a: 'Да, перед бронью созваниваемся на 5–10 минут, чтобы вы спокойно всё уточнили.' },
  { q: 'Как забронировать дату?', a: 'Напишите дату и формат в WhatsApp или Telegram — быстро отвечу, свободен ли день.' },
];

const videos = [
  { title: 'Свадьба — главное видео', main: true },
  { title: 'Корпоратив МТС Банк' },
  { title: 'Юбилей 50 лет' },
  { title: 'Камерный вечер' },
];

const iconGradients = [
  'linear-gradient(135deg, hsl(43 74% 62%), hsl(38 65% 45%))',
  'linear-gradient(135deg, hsl(270 50% 55%), hsl(270 40% 40%))',
  'linear-gradient(135deg, hsl(340 55% 45%), hsl(340 45% 32%))',
  'linear-gradient(135deg, hsl(43 74% 62%), hsl(38 65% 45%))',
  'linear-gradient(135deg, hsl(270 50% 55%), hsl(270 40% 40%))',
  'linear-gradient(135deg, hsl(340 55% 45%), hsl(340 45% 32%))',
];

const chipColors = [
  'border border-gold/30 bg-gold/10 text-gold',
  'border border-gold/30 bg-gold/10 text-gold',
  'border border-accent/30 bg-accent/10 text-purple',
  'border border-accent/30 bg-accent/10 text-purple',
  'border border-burgundy/30 bg-burgundy/10 text-burgundy',
  'border border-burgundy/30 bg-burgundy/10 text-burgundy',
];

const Index = () => {
  const [openReview, setOpenReview] = useState<number | null>(null);
  const [openPhoto, setOpenPhoto] = useState<number | null>(null);
  const [photoSlide, setPhotoSlide] = useState(0);
  const [logoSlide, setLogoSlide] = useState(0);

  const prevPhoto = () => setPhotoSlide((p) => (p - 1 + PHOTOS.length) % PHOTOS.length);
  const nextPhoto = () => setPhotoSlide((p) => (p + 1) % PHOTOS.length);
  const prevLogo = () => setLogoSlide((p) => (p - 1 + CLIENT_LOGOS.length) % CLIENT_LOGOS.length);
  const nextLogo = () => setLogoSlide((p) => (p + 1) % CLIENT_LOGOS.length);

  const CTAButtons = ({ className = '' }: { className?: string }) => (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      <a href={WHATSAPP} target="_blank" rel="noreferrer">
        <Button className="gold-gradient text-white font-semibold hover-scale h-12 px-7 shadow-md">
          <Icon name="MessageCircle" size={18} className="mr-2" />
          Узнать свободна ли дата
        </Button>
      </a>
      <a href="#checklist">
        <Button variant="outline" className="border-rose/30 text-foreground hover:bg-rose/5 h-12 px-7 bg-white/60">
          <Icon name="FileText" size={18} className="mr-2" />
          Получить чек-лист
        </Button>
      </a>
    </div>
  );

  const marqueeItems = ['Мегафон', 'МТС Банк', 'Росгосстрах', 'РЖД', 'Додо Пицца', 'Сбер', 'Лукойл', 'Яндекс'];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

      {/* HEADER */}
      <header className="fixed top-0 inset-x-0 z-50 bg-background/80 backdrop-blur-md border-b border-rose/10">
        <div className="container flex items-center justify-between h-16 px-4">
          <a href="#top" className="font-display text-2xl tracking-wide flex items-center gap-1 text-foreground">
            АНТОН<span className="text-rose animate-pulse">.</span>
          </a>
          <nav className="hidden lg:flex items-center gap-7 text-sm text-muted-foreground">
            {['#about|О ведущем','#events|Мероприятия','#photo|Фото','#video|Видео','#reviews|Отзывы','#faq|FAQ'].map(s => {
              const [href, label] = s.split('|');
              return <a key={href} href={href} className="hover:text-rose transition-colors">{label}</a>;
            })}
          </nav>
          <a href={WHATSAPP} target="_blank" rel="noreferrer">
            <Button className="gold-gradient text-white font-semibold h-10 px-5 shadow-sm">Написать</Button>
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative overflow-hidden" style={{ background: 'linear-gradient(135deg, hsl(340 40% 94%) 0%, hsl(340 30% 97%) 50%, hsl(330 35% 95%) 100%)', minHeight: '100vh' }}>
        {/* Декоративные круги */}
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, hsl(340 60% 85% / 0.4) 0%, transparent 70%)' }} />
        <div className="absolute bottom-10 left-1/3 w-96 h-96 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, hsl(350 50% 90% / 0.35) 0%, transparent 70%)' }} />

        <div className="container px-4 grid lg:grid-cols-2 gap-0 items-end min-h-screen pt-24 pb-0">
          {/* Левый блок — текст */}
          <div className="animate-fade-up pb-16 lg:pb-24 z-10">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] mb-6" style={{ color: 'hsl(340 50% 50%)' }}>
              Ведущий мероприятий
            </div>
            <h1 className="font-display leading-[0.95] uppercase" style={{ fontSize: 'clamp(3rem, 7vw, 5.5rem)', color: 'hsl(330 20% 12%)' }}>
              Ведущий
              <br />
              <span style={{ background: 'linear-gradient(135deg, hsl(340 65% 38%), hsl(350 55% 52%))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Антон</span>
            </h1>
            <p className="mt-6 text-base leading-relaxed max-w-sm" style={{ color: 'hsl(330 12% 38%)' }}>
              Свадьбы, корпоративы, юбилеи — без пошлости и неловких конкурсов из 90-х. Живое общение, юмор и атмосфера.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <span className="pill-gold">8 лет опыта</span>
              <span className="pill-purple">Ведущий + DJ</span>
              <span className="pill-burg">Stand Up</span>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={WHATSAPP} target="_blank" rel="noreferrer">
                <Button className="gold-gradient text-white font-semibold hover-scale h-12 px-7 shadow-lg">
                  <Icon name="MessageCircle" size={18} className="mr-2" />
                  Связаться со мной
                </Button>
              </a>
              <a href="#about">
                <Button variant="outline" className="h-12 px-7 bg-white/70 border-rose/20 hover:bg-white" style={{ color: 'hsl(330 15% 20%)' }}>
                  Обо мне
                </Button>
              </a>
            </div>
          </div>

          {/* Правый блок — фото интегрировано */}
          <div className="animate-fade-in relative flex items-end justify-center lg:justify-end">
            <img
              src={HERO}
              alt="Антон — ведущий мероприятий"
              className="relative z-10 max-h-[85vh] w-auto object-contain object-bottom"
              style={{ filter: 'drop-shadow(-8px 0 32px hsl(340 60% 42% / 0.15))' }}
            />
            {/* Плавающая карточка-бейдж */}
            <div className="absolute bottom-24 left-0 glass rounded-2xl px-5 py-4 shadow-lg z-20 hidden lg:block">
              <div className="text-xs uppercase tracking-widest mb-1" style={{ color: 'hsl(340 50% 50%)' }}>Стиль. Юмор.</div>
              <div className="font-display text-xl uppercase" style={{ color: 'hsl(330 20% 15%)' }}>Атмосфера</div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section-alt py-20">
        <div className="container px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src={ABOUT_IMG}
              alt="Антон за работой"
              className="rounded-2xl w-full object-cover max-h-[480px]"
            />
          </div>
          <div className="relative pl-6 lg:pl-10">
            <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-gold/60 via-gold/20 to-transparent" />
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-gold mb-4">
              <span className="h-px w-8 bg-gold" /> О ведущем
            </div>
            <h2 className="font-display text-3xl sm:text-4xl uppercase">
              Антон — ведущий нового <span className="text-gradient-gold">поколения</span>
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              8 лет провожу мероприятия в Москве и по всей России. Работал на свадьбах, корпоративах,
              юбилеях и камерных вечерах. Умею работать с любой аудиторией — от близких друзей до
              корпоративных клиентов федерального уровня.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Не работаю в формате старой тамады: никаких
              старых конкурсов и неловких моментов. Мой стиль — живое общение, аккуратный юмор, импровизация и комфортная
              атмосфера для всех гостей.
            </p>
            <div className="mt-7 grid sm:grid-cols-2 gap-3">
              {['8 лет опыта', 'Ведущий + DJ', 'Stand Up', 'Импровизация', 'Без кринжа', 'Программа под гостей'].map((t, i) => (
                <div key={t} className={`flex items-center gap-2 rounded-lg px-4 py-3 text-sm font-medium ${chipColors[i]}`}>
                  <Icon name="Check" size={15} className="shrink-0" /> {t}
                </div>
              ))}
            </div>
            <a href={WHATSAPP} target="_blank" rel="noreferrer">
              <Button className="mt-7 gold-gradient text-white font-semibold h-12 px-7 hover-scale shadow-md">
                Написать Антону
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* NO 90s */}
      <section className="py-20 border-y border-rose/10 section-alt">
        <div className="container px-4 max-w-4xl text-center">
          <div className="text-5xl mb-5 select-none opacity-60">🚫</div>
          <h2 className="font-display text-3xl sm:text-4xl uppercase" style={{ color: 'hsl(330 20% 15%)' }}>
            Без «лопни шарик», «передай карандаш» <span className="text-gradient-gold">и танцев с тазиком</span>
          </h2>
          <p className="mt-6 text-base leading-relaxed" style={{ color: 'hsl(330 10% 42%)' }}>
            Я не работаю в формате старой тамады. На моих мероприятиях нет пошлости, давления на гостей и конкурсов,
            после которых хочется уехать. Вместо этого — нормальный юмор, общение с залом, современные интерактивы
            и программа под конкретную компанию.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {['Лопни шарик', 'Передай карандаш', 'Танец с тазиком'].map(t => (
              <span key={t} className="text-sm line-through px-4 py-2 rounded-full bg-white/60 border border-rose/15" style={{ color: 'hsl(330 10% 55%)' }}>{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* PHOTO GALLERY SLIDER */}
      <section id="photo" className="py-20">
        <div className="container px-4">
          <h2 className="font-display text-3xl sm:text-4xl uppercase text-center">
            Живые <span className="text-gradient-gold">кадры с мероприятий</span>
          </h2>
          <p className="text-center text-muted-foreground mt-3">Эмоции гостей, драйв и атмосфера — без постановки</p>
          <div className="mt-10 relative">
            <div
              className="relative rounded-2xl overflow-hidden border border-border cursor-pointer"
              style={{ aspectRatio: '16/9' }}
              onClick={() => setOpenPhoto(photoSlide)}
            >
              {PHOTOS.map((p, i) => (
                <div
                  key={i}
                  className="absolute inset-0 transition-opacity duration-500"
                  style={{ opacity: i === photoSlide ? 1 : 0, pointerEvents: i === photoSlide ? 'auto' : 'none' }}
                >
                  <img src={p.src} alt={p.caption} className="h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                  <div className="absolute bottom-5 left-6 right-16">
                    <span className="font-display text-lg uppercase text-white drop-shadow">{p.caption}</span>
                  </div>
                  <div className="absolute top-4 right-4 h-9 w-9 rounded-full glass flex items-center justify-center">
                    <Icon name="Expand" size={16} className="text-gold" />
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={prevPhoto}
              className="absolute left-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full glass flex items-center justify-center hover:border-gold/50 border border-transparent transition z-10"
            >
              <Icon name="ChevronLeft" size={20} />
            </button>
            <button
              onClick={nextPhoto}
              className="absolute right-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full glass flex items-center justify-center hover:border-gold/50 border border-transparent transition z-10"
            >
              <Icon name="ChevronRight" size={20} />
            </button>

            <div className="mt-4 flex gap-3 justify-center">
              {PHOTOS.map((p, i) => (
                <button
                  key={i}
                  onClick={() => setPhotoSlide(i)}
                  className={`rounded-lg overflow-hidden flex-shrink-0 transition-all duration-300 ${i === photoSlide ? 'border-2 border-gold opacity-100' : 'border-2 border-transparent opacity-50 hover:opacity-80'}`}
                  style={{ width: 72, height: 48 }}
                >
                  <img src={p.src} alt={p.caption} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* VIDEO */}
      <section id="video" className="section-alt py-20">
        <div className="container px-4">
          <h2 className="font-display text-3xl sm:text-4xl uppercase text-center">
            Посмотрите, <span className="text-gradient-gold">как я веду мероприятия</span>
          </h2>
          <p className="text-center text-muted-foreground mt-3">YouTube · VK Video · Rutube · mp4 — всё адаптировано под телефон</p>
          <div className="mt-10 grid lg:grid-cols-3 gap-5">
            {videos.map((v, i) => {
              const accentBorders = ['border-gold/30', 'border-accent/30', 'border-burgundy/30'];
              const border = v.main ? 'border-gold/30' : accentBorders[(i - 1) % 3];
              return (
                <div key={i} className={`group relative rounded-xl overflow-hidden border ${border} ${v.main ? 'lg:col-span-3 glow-purple' : ''}`}>
                  <div
                    className={`bg-cover bg-center ${v.main ? 'aspect-video lg:aspect-[21/9]' : 'aspect-video'}`}
                    style={{ backgroundImage: `url(${HALL})` }}
                  >
                    <div className="absolute inset-0 bg-background/55 group-hover:bg-background/40 transition flex items-center justify-center">
                      <div className="h-16 w-16 rounded-full gold-gradient flex items-center justify-center hover-scale">
                        <Icon name="Play" size={28} className="text-primary-foreground ml-1" />
                      </div>
                    </div>
                    <span className="absolute bottom-3 left-4 text-sm font-medium glass px-3 py-1 rounded-full">{v.title}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* EVENTS */}
      <section id="events" className="py-16">
        <div className="container px-4">
          <h2 className="font-display text-3xl sm:text-4xl uppercase text-center mb-8">Для каких мероприятий</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: 'Heart', color: 'text-burgundy', border: 'hover:border-burgundy/40', ...events[0] },
              { icon: 'Briefcase', color: 'text-gold', border: 'hover:border-gold/40', ...events[1] },
              { icon: 'PartyPopper', color: 'text-purple', border: 'hover:border-accent/40', ...events[2] },
              { icon: 'Wine', color: 'text-gold', border: 'hover:border-gold/40', ...events[3] },
            ].map((e, i) => (
              <div key={i} className={`relative rounded-xl border border-border p-5 transition card-hover ${e.border}`}>
                <Icon name={e.icon} size={24} className={`${e.color} mb-3`} />
                <h3 className="font-display text-lg uppercase leading-tight">{e.title}</h3>
                <p className="text-muted-foreground mt-2 text-xs leading-relaxed">{e.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLIENTS / TRUST */}
      <section className="py-20 section-alt border-y border-border grain">
        <div className="container px-4 text-center">
          <div className="font-display text-6xl sm:text-7xl text-gradient-gold">8 лет</div>
          <h2 className="font-display text-2xl sm:text-3xl uppercase mt-2">веду мероприятия</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-5">
            Умею работать и с весёлой компанией друзей, и с корпоративной аудиторией, где важно чувствовать границы юмора.
          </p>

          <div className="mt-10 marquee-wrap">
            <div className="marquee-track">
              {[...marqueeItems, ...marqueeItems].map((name, i) => (
                <div key={i} className="glass rounded-xl px-6 py-4 font-display text-xl uppercase tracking-widest whitespace-nowrap flex items-center gap-3">
                  <span className="text-gold text-sm">●</span>
                  {name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHY ME */}
      <section className="py-20" style={{ background: 'linear-gradient(160deg, hsl(240 8% 8%) 0%, hsl(270 18% 10%) 50%, hsl(240 8% 8%) 100%)' }}>
        <div className="container px-4">
          <h2 className="font-display text-3xl sm:text-4xl uppercase text-center mb-2">Почему выбирают <span className="text-gradient-gold">меня</span></h2>
          <p className="text-center text-muted-foreground mb-12">Не просто слова — конкретные факты</p>
          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {whyMe.map((w, i) => {
              const tagClass = w.accent === 'gold' ? 'pill-gold' : w.accent === 'purple' ? 'pill-purple' : 'pill-burg';
              const iconColor = w.accent === 'gold' ? 'text-gold' : w.accent === 'purple' ? 'text-purple' : 'text-burgundy';
              const glowClass = w.accent === 'gold' ? 'glow-gold' : w.accent === 'purple' ? 'glow-purple' : 'glow-burg';
              return (
                <div key={i} className={`border-shine glass rounded-2xl p-7 card-hover flex gap-5`}>
                  <div className={`shrink-0 h-12 w-12 rounded-xl flex items-center justify-center ${w.accent === 'gold' ? 'gold-gradient' : w.accent === 'purple' ? '' : ''}`}
                    style={w.accent === 'purple' ? { background: 'linear-gradient(135deg, hsl(270 50% 55%), hsl(270 40% 38%))' } : w.accent === 'burg' ? { background: 'linear-gradient(135deg, hsl(340 55% 45%), hsl(340 45% 30%))' } : undefined}>
                    <Icon name={w.icon} size={22} className="text-white" />
                  </div>
                  <div>
                    <span className={`${tagClass} inline-block mb-3`}>{w.tag}</span>
                    <h3 className="font-display text-xl uppercase mb-2">{w.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{w.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="py-20 bg-card/40 border-y border-border">
        <div className="container px-4">
          <h2 className="font-display text-3xl sm:text-4xl uppercase text-center">Отзывы</h2>
          <p className="text-center text-muted-foreground mt-3">Скриншоты из WhatsApp, Telegram и Авито</p>
          <div className="mt-10 grid grid-cols-2 lg:grid-cols-3 gap-4">
            {reviews.map((r, i) => (
              <button
                key={i}
                onClick={() => setOpenReview(i)}
                className="group text-left rounded-xl border border-border overflow-hidden hover:border-gold/40 transition hover-scale"
              >
                <div className="aspect-[3/4] bg-gradient-to-br from-muted to-card flex flex-col items-center justify-center p-6">
                  <Icon name="MessageSquare" size={40} className="text-gold/60 mb-3" />
                  <span className="text-xs text-muted-foreground">Скриншот отзыва</span>
                </div>
                <div className="flex items-center justify-between px-4 py-3 text-sm">
                  <span className="text-gold">{r.type}</span>
                  <span className="text-muted-foreground">{r.src}</span>
                </div>
              </button>
            ))}
          </div>

          <div className="mt-12 text-center glass rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="font-display text-2xl uppercase">Хотите так же спокойно и весело провести праздник?</h3>
            <a href={WHATSAPP} target="_blank" rel="noreferrer" className="inline-block mt-5">
              <Button className="gold-gradient text-primary-foreground font-semibold h-12 px-7 hover-scale">
                Узнать свободна ли дата
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* STEPS */}
      <section className="py-20">
        <div className="container px-4">
          <h2 className="font-display text-3xl sm:text-4xl uppercase text-center mb-10">Как проходит подготовка</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {steps.map((s, i) => (
              <div key={s.n} className="relative rounded-xl border border-border p-6 hover:border-gold/40 transition">
                <span className="font-display text-5xl text-gradient-gold absolute top-4 right-5">{s.n}</span>
                {i < steps.length - 1 && (
                  <span className="hidden lg:block absolute top-8 left-full w-full h-px border-t border-dashed border-gold/20 z-10 pointer-events-none" style={{ width: 'calc(100% - 1.5rem)', left: 'calc(100% - 0.25rem)' }} />
                )}
                <h3 className="font-display text-xl uppercase mt-6">{s.t}</h3>
                <p className="text-muted-foreground mt-2 text-sm">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CHECKLIST */}
      <section
        id="checklist"
        className="py-20 border-y border-border grain"
        style={{ background: 'linear-gradient(135deg, hsl(240 8% 8%) 0%, hsl(270 20% 10%) 100%)' }}
      >
        <div className="container px-4 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 text-gold text-sm uppercase tracking-widest mb-4">
              <Icon name="Gift" size={18} /> Подарок за заявку
            </div>
            <h2 className="font-display text-3xl sm:text-4xl uppercase">
              Получите чек-лист <span className="text-gradient-gold">«10 ошибок, которые могут испортить мероприятие»</span>
            </h2>
            <p className="text-muted-foreground mt-5">
              Оставьте контакты — пришлю чек-лист и подскажу, свободна ли ваша дата.
            </p>
          </div>
          <div className="border-shine rounded-2xl p-1">
            <form
              className="bg-card rounded-xl p-6 space-y-4"
              onSubmit={(e) => e.preventDefault()}
            >
              <Input placeholder="Ваше имя" className="bg-background h-12 border-gold/20 focus:border-gold/60" />
              <Input placeholder="Телефон" className="bg-background h-12 border-gold/20 focus:border-gold/60" />
              <Input placeholder="Мессенджер (WhatsApp / Telegram)" className="bg-background h-12 border-gold/20 focus:border-gold/60" />
              <Input type="date" className="bg-background h-12 border-gold/20 focus:border-gold/60" />
              <Button type="submit" className="w-full gold-gradient text-primary-foreground font-semibold h-12 hover-scale">
                Получить чек-лист
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* PRICE */}
      <section className="py-20">
        <div className="container px-4 max-w-3xl text-center">
          <h2 className="font-display text-3xl sm:text-4xl uppercase">
            Стоимость зависит от даты, формата <span className="text-gradient-gold">и комплекта</span>
          </h2>
          <p className="text-muted-foreground mt-5 text-lg">
            Напишите дату и формат — я быстро отвечу, свободен ли день, сориентирую по цене и предложу варианты.
          </p>
          <a href={WHATSAPP} target="_blank" rel="noreferrer" className="inline-block mt-7">
            <Button className="gold-gradient text-primary-foreground font-semibold h-12 px-8 hover-scale">
              <Icon name="MessageCircle" size={18} className="mr-2" /> Узнать цену
            </Button>
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 bg-card/40 border-y border-border">
        <div className="container px-4 max-w-3xl">
          <h2 className="font-display text-3xl sm:text-4xl uppercase text-center mb-10">Частые вопросы</h2>
          <Accordion type="single" collapsible className="space-y-3">
            {faq.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="glass rounded-xl border-none px-5">
                <AccordionTrigger className="text-left font-display text-lg uppercase hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative py-24 overflow-hidden" style={{ background: 'linear-gradient(135deg, hsl(340 45% 92%) 0%, hsl(340 35% 96%) 50%, hsl(330 40% 93%) 100%)' }}>
        <div className="absolute top-0 left-1/4 w-72 h-72 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, hsl(340 60% 80% / 0.35) 0%, transparent 70%)' }} />
        <div className="absolute bottom-0 right-1/4 w-56 h-56 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, hsl(350 50% 85% / 0.3) 0%, transparent 70%)' }} />
        <div className="container px-4 text-center relative z-10">
          <h2 className="font-display text-3xl sm:text-5xl uppercase max-w-3xl mx-auto" style={{ color: 'hsl(330 20% 14%)' }}>
            Хотите праздник <span className="text-gradient-gold">без кринжа</span> и неловких конкурсов?
          </h2>
          <p className="mt-4 text-base" style={{ color: 'hsl(330 10% 45%)' }}>Напишите — отвечу быстро, расскажу о свободных датах и цене</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href={WHATSAPP} target="_blank" rel="noreferrer">
              <Button className="bg-[#25D366] text-white font-semibold h-12 px-6 hover-scale shadow-sm">
                <Icon name="MessageCircle" size={18} className="mr-2" /> WhatsApp
              </Button>
            </a>
            <a href={TELEGRAM} target="_blank" rel="noreferrer">
              <Button className="bg-[#229ED9] text-white font-semibold h-12 px-6 hover-scale shadow-sm">
                <Icon name="Send" size={18} className="mr-2" /> Telegram
              </Button>
            </a>
            <a href={PHONE}>
              <Button variant="outline" className="border-rose/25 bg-white/70 hover:bg-white h-12 px-6 hover-scale" style={{ color: 'hsl(330 15% 20%)' }}>
                <Icon name="Phone" size={18} className="mr-2" /> Позвонить
              </Button>
            </a>
            <a href="#checklist">
              <Button className="gold-gradient text-white font-semibold h-12 px-6 hover-scale shadow-sm">
                <Icon name="FileText" size={18} className="mr-2" /> Чек-лист
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 border-t border-rose/10 bg-background">
        <div className="container px-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm" style={{ color: 'hsl(330 10% 50%)' }}>
          <span className="font-display text-xl" style={{ color: 'hsl(330 20% 20%)' }}>АНТОН<span className="text-gradient-gold">.</span></span>
          <span>Ведущий мероприятий · Москва · {new Date().getFullYear()}</span>
          <div className="flex gap-4">
            <a href={WHATSAPP} target="_blank" rel="noreferrer" className="hover:text-rose transition-colors"><Icon name="MessageCircle" size={20} /></a>
            <a href={TELEGRAM} target="_blank" rel="noreferrer" className="hover:text-rose transition-colors"><Icon name="Send" size={20} /></a>
            <a href={PHONE} className="hover:text-rose transition-colors"><Icon name="Phone" size={20} /></a>
          </div>
        </div>
      </footer>

      {/* REVIEW MODAL */}
      <Dialog open={openReview !== null} onOpenChange={(o) => !o && setOpenReview(null)}>
        <DialogContent className="bg-card border-border max-w-md">
          <DialogHeader>
            <DialogTitle className="font-display uppercase">
              {openReview !== null && `Отзыв · ${reviews[openReview].type} · ${reviews[openReview].src}`}
            </DialogTitle>
          </DialogHeader>
          <div className="aspect-[3/4] bg-gradient-to-br from-muted to-card rounded-lg flex flex-col items-center justify-center">
            <Icon name="MessageSquare" size={56} className="text-gold/60 mb-3" />
            <span className="text-sm text-muted-foreground">Здесь будет скриншот отзыва</span>
          </div>
        </DialogContent>
      </Dialog>

      {/* PHOTO LIGHTBOX */}
      <Dialog open={openPhoto !== null} onOpenChange={(o) => !o && setOpenPhoto(null)}>
        <DialogContent className="bg-card border-border max-w-3xl p-2">
          {openPhoto !== null && (
            <>
              <img src={PHOTOS[openPhoto].src} alt={PHOTOS[openPhoto].caption} className="w-full rounded-lg object-contain max-h-[80vh]" />
              <p className="text-center text-sm text-muted-foreground py-2">{PHOTOS[openPhoto].caption}</p>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;