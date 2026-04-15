import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";
import JoinModal from "@/components/JoinModal";

const SEND_LEAD_URL = "https://functions.poehali.dev/952e4ca7-63bf-48e0-9b43-e1d229a9d47f";

const REF_LINK = "https://svoy.alfabank.ru/ref/1247778";
const VK_LINK = "https://vk.ru/tanya_ruz";
const TG_LINK = "https://t.me/+79874160002";
const PHONE = "8 (987) 416-00-02";
const WA_LINK = "https://wa.me/79874160002";

const BENEFITS = [
  {
    icon: "GraduationCap",
    title: "Без вложений и опыта",
    desc: "Бесплатное онлайн-обучение для всех. Финансовое образование — не обязательно.",
  },
  {
    icon: "Clock",
    title: "Гибкий график",
    desc: "Работайте из дома, совмещайте с основной работой или учёбой в любое удобное время.",
  },
  {
    icon: "TrendingUp",
    title: "Дополнительный доход",
    desc: "Бонусы за рекомендации продуктов и привлечение партнёров. Чем активнее — тем выше доход.",
  },
  {
    icon: "Heart",
    title: "Помощь людям",
    desc: "Станьте «своим человеком» в финансах для друзей и знакомых. Учите, консультируйте, помогайте.",
  },
  {
    icon: "MapPin",
    title: "Социальная значимость",
    desc: "Особенно актуально для небольших городов, где нет офисов банка. Вы — мост к современным услугам.",
  },
  {
    icon: "Users",
    title: "Своя команда",
    desc: "Стройте команду единомышленников и получайте доход от её развития вместе с Альфа-Банком.",
  },
];

const STEPS = [
  {
    num: "1",
    title: "Регистрация",
    desc: "Нажмите кнопку ниже и зарегистрируйтесь по моей ссылке — это бесплатно и займёт 5 минут.",
    action: true,
  },
  {
    num: "2",
    title: "Обучение",
    desc: "Пройдите бесплатное онлайн-обучение. Всё понятно даже без опыта в финансах.",
    action: false,
  },
  {
    num: "3",
    title: "Первые клиенты",
    desc: "Консультируйте знакомых, рекомендуйте продукты Альфа-Банка и получайте бонусы.",
    action: false,
  },
  {
    num: "4",
    title: "Доход и рост",
    desc: "Развивайте команду, зарабатывайте больше и помогайте людям разобраться в финансах.",
    action: false,
  },
];

const LeadForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch(SEND_LEAD_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone }),
      });
      if (res.ok) {
        setStatus("success");
        setName("");
        setPhone("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="lead-form" className="py-20 bg-[#ef3124]">
      <div className="max-w-xl mx-auto px-6 text-center">
        <div className="inline-block text-white/70 text-xs font-medium uppercase tracking-widest mb-4 pb-1 border-b border-white/30">
          Хочешь узнать больше?
        </div>
        <h2 className="font-cormorant text-4xl md:text-5xl font-bold text-white mb-4">
          Оставь заявку — я свяжусь с тобой
        </h2>
        <p className="text-white/80 mb-10">
          Расскажу всё подробно, отвечу на вопросы и пришлю презентацию. Без обязательств.
        </p>
        {status === "success" ? (
          <div className="bg-white rounded-2xl px-8 py-10">
            <div className="text-4xl mb-4">🎉</div>
            <div className="font-cormorant text-2xl font-bold text-[#1a1a1a] mb-2">Заявка принята!</div>
            <div className="text-[#1a1a1a]/60">Татьяна свяжется с тобой в ближайшее время.</div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl px-8 py-8 text-left space-y-4">
            <div>
              <label className="block text-xs font-medium text-[#1a1a1a]/50 uppercase tracking-widest mb-2">Твоё имя</label>
              <input
                type="text"
                required
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="Например, Марина"
                className="w-full border border-[#1a1a1a]/10 rounded-xl px-4 py-3 text-[#1a1a1a] placeholder:text-[#1a1a1a]/30 focus:outline-none focus:border-[#ef3124] transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-[#1a1a1a]/50 uppercase tracking-widest mb-2">Телефон</label>
              <input
                type="tel"
                required
                value={phone}
                onChange={e => setPhone(e.target.value)}
                placeholder="+7 (___) ___-__-__"
                className="w-full border border-[#1a1a1a]/10 rounded-xl px-4 py-3 text-[#1a1a1a] placeholder:text-[#1a1a1a]/30 focus:outline-none focus:border-[#ef3124] transition-colors"
              />
            </div>
            {status === "error" && (
              <div className="text-red-500 text-sm">Что-то пошло не так. Попробуй ещё раз.</div>
            )}
            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full bg-[#ef3124] text-white font-semibold py-4 rounded-xl hover:bg-[#d42a1e] transition-colors disabled:opacity-60"
            >
              {status === "loading" ? "Отправляем..." : "Отправить заявку"}
            </button>
            <p className="text-[#1a1a1a]/40 text-xs text-center">Нажимая кнопку, ты соглашаешься на обратный звонок</p>
          </form>
        )}
      </div>
    </section>
  );
};

const Index = () => {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(false);
  const [joinModal, setJoinModal] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    setTimeout(() => setVisible(true), 100);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
    <div className="min-h-screen bg-[#faf8f5] font-ibm text-[#1a1a1a] overflow-x-hidden">

      {/* NAV */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-white/90 backdrop-blur-lg shadow-sm" : ""}`}>
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#ef3124] flex items-center justify-center">
              <span className="text-white font-cormorant font-bold text-sm">А</span>
            </div>
            <span className="font-cormorant font-bold text-lg text-[#1a1a1a] tracking-wide">Татьяна Рузанова</span>
          </div>
          <div className="hidden md:flex items-center gap-3">
            <a href={TG_LINK} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-[#229ED9]/10 hover:bg-[#229ED9]/20 flex items-center justify-center transition-colors">
              <Icon name="Send" size={16} className="text-[#229ED9]" />
            </a>
            <a href={VK_LINK} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-[#0077FF]/10 hover:bg-[#0077FF]/20 flex items-center justify-center transition-colors">
              <Icon name="Users" size={16} className="text-[#0077FF]" />
            </a>
            <button
              onClick={() => setJoinModal(true)}
              className="flex items-center gap-2 bg-[#ef3124] hover:bg-[#cc2a1e] text-white text-sm font-medium px-5 py-2 rounded-full transition-all duration-200 hover:scale-105"
            >
              Вступить в команду
              <Icon name="ArrowRight" size={14} />
            </button>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-[#faf8f5]">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#ef3124]/5 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] rounded-full bg-amber-200/30 blur-3xl pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-6 pt-24 pb-16 w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* TEXT */}
            <div>
              <div
                className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                style={{ transitionDelay: "0.1s" }}
              >
                <div className="inline-flex items-center gap-2 bg-[#ef3124]/10 text-[#ef3124] text-xs font-medium px-4 py-1.5 rounded-full mb-8 tracking-wide uppercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ef3124] animate-pulse" />
                  Партнёрская программа Альфа-Банка
                </div>
              </div>

              <div
                className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                style={{ transitionDelay: "0.25s" }}
              >
                <h1 className="font-cormorant text-5xl md:text-7xl font-bold leading-[1.05] mb-4 tracking-tight">
                  Привет,<br />
                  я <span className="text-[#ef3124]">Татьяна</span>
                </h1>
              </div>

              <div
                className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                style={{ transitionDelay: "0.4s" }}
              >
                <p className="text-[#1a1a1a]/60 text-lg md:text-xl mb-3 leading-relaxed font-light">
                  Ваш гид к финансовой уверенности.
                </p>
                <p className="text-[#1a1a1a]/70 text-base md:text-lg mb-10 leading-relaxed max-w-xl">
                  Помогаю людям разобраться в финансах и приглашаю в команду{" "}
                  <strong className="font-semibold text-[#1a1a1a]">«Свой в Альфе»</strong> —
                  партнёрскую программу, где можно помогать другим и зарабатывать на рекомендациях.
                </p>
              </div>

              <div
                className={`flex flex-col sm:flex-row gap-4 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                style={{ transitionDelay: "0.55s" }}
              >
                <button
                  onClick={() => setJoinModal(true)}
                  className="inline-flex items-center justify-center gap-2 bg-[#ef3124] hover:bg-[#cc2a1e] text-white font-semibold text-base px-8 py-4 rounded-2xl transition-all duration-200 hover:scale-105 hover:shadow-[0_8px_30px_rgba(239,49,36,0.35)]"
                >
                  Вступить в мою команду
                  <Icon name="ArrowRight" size={18} />
                </button>
                <button
                  onClick={() => scrollTo("#about")}
                  className="inline-flex items-center justify-center gap-2 bg-white border border-black/10 hover:border-black/20 text-[#1a1a1a] font-medium text-base px-8 py-4 rounded-2xl transition-all duration-200 hover:shadow-md"
                >
                  Узнать подробнее
                </button>
              </div>
            </div>

            {/* PHOTO */}
            <div
              className={`flex justify-center md:justify-end transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              style={{ transitionDelay: "0.3s" }}
            >
              <div className="relative">
                <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-[#ef3124]/10 to-amber-200/30 blur-xl" />
                <img
                  src="https://cdn.poehali.dev/projects/55d14b67-1c06-42c5-a8ed-9cfc421b0283/bucket/e8931099-4b4e-49e0-b378-49fa85896f4c.jpg"
                  alt="Татьяна Рузанова"
                  className="relative rounded-3xl object-cover object-top w-[340px] md:w-[420px] h-[480px] md:h-[580px] shadow-2xl"
                />
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-sm rounded-2xl px-5 py-3 shadow-lg flex items-center gap-3 whitespace-nowrap">
                  <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-sm font-medium text-[#1a1a1a]">Открыта для новых партнёров</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#faf8f5] to-transparent" />
      </section>

      {/* О ПРОГРАММЕ */}
      <section id="about" className="py-20 bg-[#faf8f5]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block text-[#ef3124] text-xs font-medium uppercase tracking-widest mb-5 pb-1 border-b border-[#ef3124]/30">
                О программе
              </div>
              <h2 className="font-cormorant text-4xl md:text-5xl font-bold leading-tight mb-6">
                «Свой в Альфе» —<br />
                <span className="text-[#ef3124]">больше чем заработок</span>
              </h2>
              <p className="text-[#1a1a1a]/60 leading-relaxed mb-5">
                Уникальная партнёрская программа Альфа-Банка, где каждый может стать экспертом по личным финансам.
                Рекомендуйте продукты банка друзьям и знакомым, помогайте им, стройте свою команду —
                и получайте за это реальный доход.
              </p>
              <p className="text-[#1a1a1a]/60 leading-relaxed">
                Проект объединяет людей, которые хотят помогать другим разбираться в финансах.
                Особенно он актуален для жителей небольших городов, где нет офисов банка.{" "}
                <strong className="text-[#1a1a1a] font-medium">Вы — мост между людьми и современными финансовыми услугами.</strong>
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: "Banknote", label: "Бесплатный вход", sub: "Без вложений" },
                { icon: "BookOpen", label: "Онлайн-обучение", sub: "С нуля" },
                { icon: "Globe", label: "Любой регион", sub: "Вся Россия" },
                { icon: "Star", label: "Альфа-Банк", sub: "Надёжный партнёр" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-6 border border-black/5 hover:border-[#ef3124]/20 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#ef3124]/10 flex items-center justify-center mb-4 group-hover:bg-[#ef3124]/15 transition-colors">
                    <Icon name={item.icon} fallback="Star" size={20} className="text-[#ef3124]" />
                  </div>
                  <div className="font-semibold text-sm text-[#1a1a1a] mb-0.5">{item.label}</div>
                  <div className="text-[#1a1a1a]/40 text-xs">{item.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ПРЕИМУЩЕСТВА */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="inline-block text-[#ef3124] text-xs font-medium uppercase tracking-widest mb-4 pb-1 border-b border-[#ef3124]/30">
              Почему выбирают
            </div>
            <h2 className="font-cormorant text-4xl md:text-5xl font-bold">
              Шесть причин быть{" "}
              <span className="text-[#ef3124]">«Своим в Альфе»</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {BENEFITS.map((b, i) => (
              <div
                key={i}
                className="group bg-[#faf8f5] rounded-2xl p-7 border border-black/5 hover:border-[#ef3124]/20 hover:bg-white hover:shadow-lg transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-2xl bg-[#ef3124]/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <Icon name={b.icon} fallback="Star" size={22} className="text-[#ef3124]" />
                </div>
                <h3 className="font-semibold text-base mb-2 text-[#1a1a1a]">{b.title}</h3>
                <p className="text-[#1a1a1a]/55 text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* КАК СТАТЬ УЧАСТНИКОМ */}
      <section id="steps" className="py-20 bg-[#1a1a1a] text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="inline-block text-[#ef3124] text-xs font-medium uppercase tracking-widest mb-4 pb-1 border-b border-[#ef3124]/40">
              Как начать
            </div>
            <h2 className="font-cormorant text-4xl md:text-5xl font-bold">
              4 шага до первого дохода
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-14">
            {STEPS.map((s, i) => (
              <div key={i} className="relative">
                {i < STEPS.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-white/10 to-transparent z-0" />
                )}
                <div className="relative z-10">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5 font-cormorant text-2xl font-bold ${s.action ? "bg-[#ef3124] text-white shadow-[0_0_30px_rgba(239,49,36,0.4)]" : "bg-white/10 text-white"}`}>
                    {s.num}
                  </div>
                  <h3 className="font-semibold text-base text-center mb-2">{s.title}</h3>
                  <p className="text-white/50 text-sm text-center leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <div className="inline-block bg-white/5 border border-white/10 rounded-3xl px-10 py-8 max-w-lg mx-auto">
              <div className="w-14 h-14 rounded-full bg-[#ef3124] flex items-center justify-center mx-auto mb-5">
                <Icon name="UserPlus" size={22} className="text-white" />
              </div>
              <p className="text-white/60 text-sm mb-5 leading-relaxed">
                Зарегистрируйтесь по моей ссылке — и я лично помогу вам сделать первые шаги в программе «Свой в Альфе»
              </p>
              <button
                onClick={() => setJoinModal(true)}
                className="inline-flex items-center gap-2 bg-[#ef3124] hover:bg-[#cc2a1e] text-white font-semibold text-base px-8 py-4 rounded-xl transition-all duration-200 hover:scale-105 hover:shadow-[0_8px_30px_rgba(239,49,36,0.4)]"
              >
                Зарегистрироваться по моей ссылке
                <Icon name="ExternalLink" size={16} />
              </button>
              <p className="text-white/25 text-xs mt-4">
                Бесплатно · Без обязательств · Поддержка куратора
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ОТЗЫВЫ ПАРТНЁРОВ */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="inline-block text-[#ef3124] text-xs font-medium uppercase tracking-widest mb-4 pb-1 border-b border-[#ef3124]/30">
              Истории успеха
            </div>
            <h2 className="font-cormorant text-4xl md:text-5xl font-bold text-[#1a1a1a]">
              Реальные результаты <span className="text-[#ef3124]">наших партнёров</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Четверикова Наталья",
                city: "г. Пермь",
                role: "Собственник ЗООбизнеса, мама двух подростков",
                level: "Агент А2",
                income: "8 874 ₽",
                period: "за февраль",
                bonus: "5 000 ₽ бонус за 1 шаг",
                image: "https://cdn.poehali.dev/projects/55d14b67-1c06-42c5-a8ed-9cfc421b0283/bucket/aa956558-cfba-4c35-8e6d-563e4ed7705d.jpg",
              },
              {
                name: "Синиченкова Дарья",
                city: "г. Санкт-Петербург",
                role: "Мамочка в декрете, первый месяц работы",
                level: "Агент А1",
                income: "5 400 ₽",
                period: "за февраль",
                bonus: "5 000 ₽ бонус за 1 шаг",
                image: "https://cdn.poehali.dev/projects/55d14b67-1c06-42c5-a8ed-9cfc421b0283/bucket/6e3bb559-41dc-40c6-a555-ebc4bde62bc7.jpg",
              },
              {
                name: "Керженцева Анна",
                city: "г. Пермь",
                role: "Организатор бьюти конференций, бьюти мастер",
                level: "Агент А1",
                income: "3 400 ₽",
                period: "за февраль",
                bonus: "5 000 ₽ бонус за 1 шаг",
                image: "https://cdn.poehali.dev/projects/55d14b67-1c06-42c5-a8ed-9cfc421b0283/bucket/883c5599-609e-4db2-bc62-16981852c5b3.jpg",
              },
            ].map((person, i) => (
              <div key={i} className="bg-[#faf8f5] rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="font-cormorant text-xl font-bold">{person.name}</div>
                    <div className="text-white/80 text-sm">{person.city}</div>
                  </div>
                  <div className="absolute top-4 right-4 bg-[#ef3124] text-white text-xs font-bold px-3 py-1 rounded-full">
                    {person.level}
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-[#1a1a1a]/60 text-sm mb-4">{person.role}</p>
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <div className="text-[#1a1a1a]/50 text-xs">{person.period}</div>
                      <div className="font-cormorant text-2xl font-bold text-[#1a1a1a]">{person.income}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-[#1a1a1a]/50 text-xs">бонус</div>
                      <div className="font-bold text-[#ef3124] text-sm">{person.bonus}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ — ВОЗРАЖЕНИЯ */}
      <section className="py-20 bg-[#faf8f5]">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="inline-block text-[#ef3124] text-xs font-medium uppercase tracking-widest mb-4 pb-1 border-b border-[#ef3124]/30">
              Честные ответы
            </div>
            <h2 className="font-cormorant text-4xl md:text-5xl font-bold text-[#1a1a1a]">
              Сомневаешься? <span className="text-[#ef3124]">Понимаю</span>
            </h2>
          </div>
          <div className="space-y-4">
            {[
              {
                q: "Это пирамида!",
                a: "Пирамида — это когда нужно вложить деньги. Здесь я не вложила ни копейки. С первого же месяца люди зарабатывают, ничем не рискуя. Плюс это не контора «рога и копыта» — это банк. В банках всегда было престижно работать, просто сейчас они вышли на новый уровень сотрудничества с людьми.",
              },
              {
                q: "Я в это не верю",
                a: "Я тебя понимаю — сама в начале отнеслась настороженно. Но не стала отрицать, а пошла и проверила. Доход официальный, можно совмещать с любой работой, вложений нет. Для меня даже 10 000 ₽ — это не ерунда, тем более не разово, а каждый месяц. Люди радуются детским пособиям, а тут зачем от такого отказываться?",
              },
              {
                q: "У меня уже есть работа",
                a: "Отлично — это и не работа в привычном смысле. Никаких планов, обязательств, графика. Работаешь когда хочешь, сколько хочешь — всё заработанное твоё. Многие совмещают с основной занятостью. Давай пришлю презентацию — там подробно объясняют, как банк пришёл к такой форме сотрудничества. Никто не уговаривает, просто интересно и познавательно.",
              },
            ].map((item, i) => (
              <details key={i} className="group bg-white rounded-2xl shadow-sm overflow-hidden">
                <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none">
                  <span className="font-cormorant text-xl font-bold text-[#1a1a1a] group-open:text-[#ef3124] transition-colors">
                    {item.q}
                  </span>
                  <span className="w-7 h-7 rounded-full bg-[#ef3124]/10 text-[#ef3124] flex items-center justify-center flex-shrink-0 text-lg font-bold group-open:bg-[#ef3124] group-open:text-white transition-all">
                    +
                  </span>
                </summary>
                <div className="px-6 pb-6 text-[#1a1a1a]/70 leading-relaxed">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ФОРМА ЗАЯВКИ */}
      <LeadForm />

      {/* ЛИЧНОЕ ОБРАЩЕНИЕ */}
      <section className="py-20 bg-[#faf8f5]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="w-16 h-16 rounded-full bg-[#ef3124] flex items-center justify-center mx-auto mb-6 text-white font-cormorant text-2xl font-bold shadow-[0_8px_30px_rgba(239,49,36,0.25)]">
            Т
          </div>
          <blockquote className="font-cormorant text-2xl md:text-3xl font-medium leading-relaxed text-[#1a1a1a] mb-8 max-w-3xl mx-auto">
            «Свой в Альфе» — это не просто заработок. Это возможность менять отношение людей к финансам
            и делать их жизнь лучше. Присоединяйтесь — я буду рядом на каждом шаге.
          </blockquote>
          <div className="text-[#1a1a1a]/50 text-sm font-medium">
            — Татьяна Рузанова,{" "}
            <span className="text-[#ef3124]">партнёр программы «Свой в Альфе»</span>
          </div>
        </div>
      </section>

      {/* КОНТАКТЫ */}
      <section id="contacts" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-block text-[#ef3124] text-xs font-medium uppercase tracking-widest mb-4 pb-1 border-b border-[#ef3124]/30">
            Связаться со мной
          </div>
          <h2 className="font-cormorant text-4xl md:text-5xl font-bold mb-4">
            Есть вопросы? <span className="text-[#ef3124]">Напишите мне</span>
          </h2>
          <p className="text-[#1a1a1a]/55 mb-10 text-base max-w-md mx-auto leading-relaxed">
            Расскажу подробнее о программе, отвечу на любые вопросы и помогу сделать первый шаг
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 flex-wrap">
            <a
              href={TG_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-[#229ED9] hover:bg-[#1a87bb] text-white font-semibold px-7 py-4 rounded-2xl transition-all duration-200 hover:scale-105 hover:shadow-[0_8px_24px_rgba(34,158,217,0.35)] w-full sm:w-auto justify-center"
            >
              <Icon name="Send" size={20} />
              Написать в Telegram
            </a>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-[#25D366] hover:bg-[#1db954] text-white font-semibold px-7 py-4 rounded-2xl transition-all duration-200 hover:scale-105 hover:shadow-[0_8px_24px_rgba(37,211,102,0.35)] w-full sm:w-auto justify-center"
            >
              <Icon name="MessageCircle" size={20} />
              WhatsApp
            </a>
            <a
              href={VK_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-[#0077FF] hover:bg-[#005ecc] text-white font-semibold px-7 py-4 rounded-2xl transition-all duration-200 hover:scale-105 hover:shadow-[0_8px_24px_rgba(0,119,255,0.35)] w-full sm:w-auto justify-center"
            >
              <Icon name="Users" size={20} />
              ВКонтакте
            </a>
            <a
              href={`tel:+7${PHONE.replace(/\D/g, "").slice(1)}`}
              className="flex items-center gap-3 bg-[#faf8f5] hover:bg-gray-100 border border-black/10 text-[#1a1a1a] font-semibold px-7 py-4 rounded-2xl transition-all duration-200 hover:scale-105 w-full sm:w-auto justify-center"
            >
              <Icon name="Phone" size={20} className="text-[#ef3124]" />
              {PHONE}
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-black/8 py-8 bg-white">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-full bg-[#ef3124] flex items-center justify-center">
              <span className="text-white font-cormorant font-bold text-xs">А</span>
            </div>
            <span className="font-cormorant font-bold text-base">Татьяна Рузанова · Свой в Альфе</span>
          </div>
          <div className="flex items-center gap-3">
            <a href={TG_LINK} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-[#229ED9]/10 hover:bg-[#229ED9] hover:text-white flex items-center justify-center transition-all text-[#229ED9]">
              <Icon name="Send" size={16} />
            </a>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-[#25D366]/10 hover:bg-[#25D366] hover:text-white flex items-center justify-center transition-all text-[#25D366]">
              <Icon name="MessageCircle" size={16} />
            </a>
            <a href={VK_LINK} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-[#0077FF]/10 hover:bg-[#0077FF] hover:text-white flex items-center justify-center transition-all text-[#0077FF]">
              <Icon name="Users" size={16} />
            </a>
            <a href={`tel:+79874160002`} className="w-9 h-9 rounded-full bg-[#ef3124]/10 hover:bg-[#ef3124] hover:text-white flex items-center justify-center transition-all text-[#ef3124]">
              <Icon name="Phone" size={16} />
            </a>
          </div>
          <p className="text-[#1a1a1a]/30 text-xs">
            © 2024 · Партнёрская программа Альфа-Банка
          </p>
        </div>
      </footer>
    </div>

    <JoinModal
      open={joinModal}
      onClose={() => setJoinModal(false)}
      refLink={REF_LINK}
      tgLink={TG_LINK}
      vkLink={VK_LINK}
      phone={PHONE}
    />
    </>
  );
};

export default Index;