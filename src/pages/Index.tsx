import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";

const REF_LINK = "https://svoy.alfabank.ru/ref/1247778";

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

const Index = () => {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(false);

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
          <button
            onClick={() => scrollTo("#steps")}
            className="hidden md:flex items-center gap-2 bg-[#ef3124] hover:bg-[#cc2a1e] text-white text-sm font-medium px-5 py-2 rounded-full transition-all duration-200 hover:scale-105"
          >
            Вступить в команду
            <Icon name="ArrowRight" size={14} />
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(https://cdn.poehali.dev/projects/55d14b67-1c06-42c5-a8ed-9cfc421b0283/files/67fc9cca-fff0-450e-9203-5448d6b79515.jpg)` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#faf8f5] via-[#faf8f5]/95 to-[#faf8f5]/30" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#ef3124]/5 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] rounded-full bg-amber-200/30 blur-3xl pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-6 pt-20 pb-16">
          <div className="max-w-2xl">
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
              <a
                href={REF_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#ef3124] hover:bg-[#cc2a1e] text-white font-semibold text-base px-8 py-4 rounded-2xl transition-all duration-200 hover:scale-105 hover:shadow-[0_8px_30px_rgba(239,49,36,0.35)]"
              >
                Вступить в мою команду
                <Icon name="ArrowRight" size={18} />
              </a>
              <button
                onClick={() => scrollTo("#about")}
                className="inline-flex items-center justify-center gap-2 bg-white border border-black/10 hover:border-black/20 text-[#1a1a1a] font-medium text-base px-8 py-4 rounded-2xl transition-all duration-200 hover:shadow-md"
              >
                Узнать подробнее
              </button>
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
              <a
                href={REF_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#ef3124] hover:bg-[#cc2a1e] text-white font-semibold text-base px-8 py-4 rounded-xl transition-all duration-200 hover:scale-105 hover:shadow-[0_8px_30px_rgba(239,49,36,0.4)]"
              >
                Зарегистрироваться по моей ссылке
                <Icon name="ExternalLink" size={16} />
              </a>
              <p className="text-white/25 text-xs mt-4">
                Бесплатно · Без обязательств · Поддержка куратора
              </p>
            </div>
          </div>
        </div>
      </section>

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

      {/* FOOTER */}
      <footer className="border-t border-black/8 py-8 bg-white">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-full bg-[#ef3124] flex items-center justify-center">
              <span className="text-white font-cormorant font-bold text-xs">А</span>
            </div>
            <span className="font-cormorant font-bold text-base">Татьяна Рузанова · Свой в Альфе</span>
          </div>
          <a
            href={REF_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[#ef3124] hover:text-[#cc2a1e] text-sm font-medium transition-colors"
          >
            Вступить в команду
            <Icon name="ArrowRight" size={14} />
          </a>
          <p className="text-[#1a1a1a]/30 text-xs">
            © 2024 · Партнёрская программа Альфа-Банка
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;