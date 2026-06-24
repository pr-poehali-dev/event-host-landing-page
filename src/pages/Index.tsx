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

const HERO = 'https://cdn.poehali.dev/projects/0dd0b1db-f65f-489b-8e58-06dfc0c8d999/files/2770f396-ab30-4a72-b0b1-603f3903e2a4.jpg';
const HALL = 'https://cdn.poehali.dev/projects/0dd0b1db-f65f-489b-8e58-06dfc0c8d999/files/bf0d70cb-5df4-4930-92d5-e1c21042d795.jpg';

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
  { icon: 'PartyPopper', title: 'Юбилеи', text: 'Уважение к гостям всех возрастов и искренние поздравления.' },
  { icon: 'Wine', title: 'Камерные вечера', text: 'Уютный формат живого общения для близкого круга.' },
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

const Index = () => {
  const [openReview, setOpenReview] = useState<number | null>(null);

  const CTAButtons = ({ className = '' }: { className?: string }) => (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      <a href={WHATSAPP} target="_blank" rel="noreferrer">
        <Button className="gold-gradient text-primary-foreground font-semibold hover-scale h-12 px-6">
          <Icon name="MessageCircle" size={18} className="mr-2" />
          Узнать свободна ли дата
        </Button>
      </a>
      <a href="#checklist">
        <Button variant="outline" className="border-gold/40 text-foreground hover:bg-gold/10 h-12 px-6">
          <Icon name="FileText" size={18} className="mr-2" />
          Получить чек-лист
        </Button>
      </a>
    </div>
  );

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* HEADER */}
      <header className="fixed top-0 inset-x-0 z-50 glass">
        <div className="container flex items-center justify-between h-16 px-4">
          <a href="#top" className="font-display text-2xl tracking-wide">
            АНТОН<span className="text-gold">.</span>
          </a>
          <nav className="hidden lg:flex items-center gap-7 text-sm text-muted-foreground">
            <a href="#about" className="hover:text-gold transition">О ведущем</a>
            <a href="#events" className="hover:text-gold transition">Мероприятия</a>
            <a href="#video" className="hover:text-gold transition">Видео</a>
            <a href="#reviews" className="hover:text-gold transition">Отзывы</a>
            <a href="#faq" className="hover:text-gold transition">FAQ</a>
          </nav>
          <a href={WHATSAPP} target="_blank" rel="noreferrer">
            <Button className="gold-gradient text-primary-foreground font-semibold h-10">Написать</Button>
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative pt-28 pb-16 grain">
        <div
          className="absolute inset-0 -z-10 bg-cover bg-center opacity-25"
          style={{ backgroundImage: `url(${HALL})` }}
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/60 via-background/85 to-background" />
        <div className="container px-4 grid lg:grid-cols-2 gap-10 items-center">
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-gold mb-5">
              <span className="h-px w-8 bg-gold" /> Стиль. Юмор. Атмосфера.
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05] uppercase">
              Ведущий на свадьбу <span className="text-gradient-gold">с диджеем</span> — без кринжа и конкурсов из 90-х
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl">
              Современное ведение, живой юмор, импровизация и атмосфера, за которую не будет стыдно на следующий день.
            </p>
            <CTAButtons className="mt-8" />
            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm">
              <span className="flex items-center gap-2"><Icon name="Disc3" size={16} className="text-gold" /> Ведущий + DJ</span>
              <span className="flex items-center gap-2"><Icon name="ShieldCheck" size={16} className="text-gold" /> Без пошлости</span>
              <span className="flex items-center gap-2"><Icon name="Award" size={16} className="text-gold" /> 8 лет опыта</span>
            </div>
          </div>
          <div className="relative animate-fade-in">
            <div className="absolute -inset-4 gold-gradient opacity-20 blur-3xl rounded-full" />
            <img
              src={HERO}
              alt="Антон — ведущий мероприятий"
              className="relative rounded-2xl border border-gold/20 glow-gold w-full object-cover aspect-[4/5] animate-float"
            />
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20 border-t border-border">
        <div className="container px-4 grid lg:grid-cols-2 gap-12 items-center">
          <img src={HERO} alt="Антон" className="rounded-2xl border border-border w-full object-cover aspect-square hover-scale" />
          <div>
            <h2 className="font-display text-3xl sm:text-4xl uppercase">
              Антон — ведущий, <span className="text-gradient-gold">с которым спокойно</span>
            </h2>
            <p className="mt-5 text-muted-foreground text-lg">
              Я Stand Up комик и ведущий мероприятий. Веду свадьбы, корпоративы, юбилеи и камерные вечера без пошлости,
              старых конкурсов и неловких моментов. Мой стиль — живое общение, аккуратный юмор, импровизация и комфортная
              атмосфера для всех гостей.
            </p>
            <div className="mt-7 grid sm:grid-cols-2 gap-3">
              {['8 лет опыта', 'Ведущий + DJ', 'Stand Up', 'Импровизация', 'Без кринжа', 'Программа под гостей'].map((t) => (
                <div key={t} className="flex items-center gap-2 glass rounded-lg px-4 py-3">
                  <Icon name="Check" size={16} className="text-gold shrink-0" /> {t}
                </div>
              ))}
            </div>
            <a href={WHATSAPP} target="_blank" rel="noreferrer">
              <Button className="mt-7 gold-gradient text-primary-foreground font-semibold h-12 px-7 hover-scale">
                Написать Антону
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* NO 90s */}
      <section className="py-20 bg-card/40 border-y border-border grain">
        <div className="container px-4 max-w-4xl text-center">
          <Icon name="Ban" size={40} className="text-burgundy mx-auto mb-5" />
          <h2 className="font-display text-3xl sm:text-4xl uppercase">
            Без «лопни шарик», «передай карандаш» <span className="text-burgundy">и танцев с тазиком</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Я не работаю в формате старой тамады. На моих мероприятиях нет пошлости, давления на гостей и конкурсов,
            после которых хочется уехать. Вместо этого — нормальный юмор, общение с залом, современные интерактивы
            и программа под конкретную компанию.
          </p>
        </div>
      </section>

      {/* VIDEO */}
      <section id="video" className="py-20">
        <div className="container px-4">
          <h2 className="font-display text-3xl sm:text-4xl uppercase text-center">
            Посмотрите, <span className="text-gradient-gold">как я веду мероприятия</span>
          </h2>
          <p className="text-center text-muted-foreground mt-3">YouTube · VK Video · Rutube · mp4 — всё адаптировано под телефон</p>
          <div className="mt-10 grid lg:grid-cols-3 gap-5">
            {videos.map((v, i) => (
              <div key={i} className={`group relative rounded-xl overflow-hidden border border-border ${v.main ? 'lg:col-span-3' : ''}`}>
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
            ))}
          </div>
        </div>
      </section>

      {/* INCLUDED */}
      <section className="py-20 bg-card/40 border-y border-border">
        <div className="container px-4">
          <h2 className="font-display text-3xl sm:text-4xl uppercase text-center mb-10">Что входит</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {included.map((c) => (
              <div key={c.title} className="glass rounded-xl p-6 hover-scale">
                <div className="h-12 w-12 rounded-lg gold-gradient flex items-center justify-center mb-4">
                  <Icon name={c.icon} size={22} className="text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl uppercase">{c.title}</h3>
                <p className="text-muted-foreground mt-2 text-sm">{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EVENTS */}
      <section id="events" className="py-20">
        <div className="container px-4">
          <h2 className="font-display text-3xl sm:text-4xl uppercase text-center mb-10">Для каких мероприятий</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {events.map((e) => (
              <div key={e.title} className="rounded-xl border border-border p-6 hover:border-gold/40 transition hover-scale">
                <Icon name={e.icon} size={28} className="text-gold mb-4" />
                <h3 className="font-display text-2xl uppercase">{e.title}</h3>
                <p className="text-muted-foreground mt-2 text-sm">{e.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLIENTS / TRUST */}
      <section className="py-20 bg-card/40 border-y border-border grain">
        <div className="container px-4 text-center">
          <div className="font-display text-6xl sm:text-7xl text-gradient-gold">8 лет</div>
          <h2 className="font-display text-2xl sm:text-3xl uppercase mt-2">веду мероприятия</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-5">
            Умею работать и с весёлой компанией друзей, и с корпоративной аудиторией, где важно чувствовать границы юмора.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {clients.map((c) => (
              <span key={c} className="glass rounded-full px-6 py-3 font-display text-lg uppercase tracking-wide">{c}</span>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CALM */}
      <section className="py-20">
        <div className="container px-4">
          <h2 className="font-display text-3xl sm:text-4xl uppercase text-center mb-10">Почему со мной спокойно</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {calm.map((t) => (
              <div key={t} className="flex items-start gap-3 glass rounded-lg p-5">
                <Icon name="CheckCircle2" size={20} className="text-gold shrink-0 mt-0.5" />
                <span>{t}</span>
              </div>
            ))}
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
            {steps.map((s) => (
              <div key={s.n} className="relative rounded-xl border border-border p-6 hover:border-gold/40 transition">
                <span className="font-display text-5xl text-gold/25 absolute top-4 right-5">{s.n}</span>
                <h3 className="font-display text-xl uppercase mt-6">{s.t}</h3>
                <p className="text-muted-foreground mt-2 text-sm">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CHECKLIST */}
      <section id="checklist" className="py-20 bg-card/40 border-y border-border grain">
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
          <form
            className="glass rounded-2xl p-6 space-y-4"
            onSubmit={(e) => e.preventDefault()}
          >
            <Input placeholder="Ваше имя" className="bg-background/60 h-12 border-border" />
            <Input placeholder="Телефон" className="bg-background/60 h-12 border-border" />
            <Input placeholder="Мессенджер (WhatsApp / Telegram)" className="bg-background/60 h-12 border-border" />
            <Input type="date" className="bg-background/60 h-12 border-border" />
            <Button type="submit" className="w-full gold-gradient text-primary-foreground font-semibold h-12 hover-scale">
              Получить чек-лист
            </Button>
          </form>
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
      <section className="relative py-24 grain">
        <div className="absolute inset-0 -z-10 bg-cover bg-center opacity-20" style={{ backgroundImage: `url(${HALL})` }} />
        <div className="absolute inset-0 -z-10 bg-background/80" />
        <div className="container px-4 text-center">
          <h2 className="font-display text-3xl sm:text-5xl uppercase max-w-3xl mx-auto">
            Хотите праздник <span className="text-gradient-gold">без кринжа</span> и неловких конкурсов?
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href={WHATSAPP} target="_blank" rel="noreferrer">
              <Button className="bg-[#25D366] text-white font-semibold h-12 px-6 hover-scale">
                <Icon name="MessageCircle" size={18} className="mr-2" /> WhatsApp
              </Button>
            </a>
            <a href={TELEGRAM} target="_blank" rel="noreferrer">
              <Button className="bg-[#229ED9] text-white font-semibold h-12 px-6 hover-scale">
                <Icon name="Send" size={18} className="mr-2" /> Telegram
              </Button>
            </a>
            <a href={PHONE}>
              <Button variant="outline" className="border-gold/40 hover:bg-gold/10 h-12 px-6">
                <Icon name="Phone" size={18} className="mr-2" /> Позвонить
              </Button>
            </a>
            <a href="#checklist">
              <Button className="gold-gradient text-primary-foreground font-semibold h-12 px-6 hover-scale">
                <Icon name="FileText" size={18} className="mr-2" /> Чек-лист
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border py-10">
        <div className="container px-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <span className="font-display text-xl text-foreground">АНТОН<span className="text-gold">.</span></span>
          <span>Ведущий мероприятий · Москва · {new Date().getFullYear()}</span>
          <div className="flex gap-4">
            <a href={WHATSAPP} target="_blank" rel="noreferrer" className="hover:text-gold"><Icon name="MessageCircle" size={20} /></a>
            <a href={TELEGRAM} target="_blank" rel="noreferrer" className="hover:text-gold"><Icon name="Send" size={20} /></a>
            <a href={PHONE} className="hover:text-gold"><Icon name="Phone" size={20} /></a>
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
    </div>
  );
};

export default Index;
