import Image from "next/image";
import { Arrow, Chat, Clock, Pin, Quote, Shield, Star, WhatsApp } from "@/components/icons";
import { CountUp } from "@/components/CountUp";
import { Parallax } from "@/components/Parallax";
import { AVALIACOES, COMO_CHEGAR, ENDERECO, HORARIOS, INSTAGRAM, MAPA_EMBED, OFERTAS, WHATSAPP } from "@/lib/loja";

const ext = { target: "_blank", rel: "noopener noreferrer" } as const;
const wrap = "mx-auto w-full max-w-[1216px] px-4 sm:px-6";

function Marca({ small = false }: { small?: boolean }) {
  return (
    <a href="#inicio" className="flex items-center gap-3" aria-label="Portanova Cell, início">
      <Image src="/img/logo-portanova.png" alt="" width={48} height={48} className={small ? "size-10" : "size-11 sm:size-12"} priority />
      <span className="leading-none">
        <span className="block text-[15px] font-extrabold tracking-tight sm:text-[17px]">
          PORTANOVA <span className="text-volt">CELL</span>
        </span>
        <span className="mt-1.5 hidden text-[9px] font-semibold tracking-[0.12em] text-mute uppercase sm:block">Celulares · Acessórios · Assistência</span>
      </span>
    </a>
  );
}

function Header() {
  const links = [
    ["Início", "#inicio"],
    ["Celulares", "#ofertas"],
    ["Assistência", "#assistencia"],
    ["Acessórios", "#acessorios"],
    ["Avaliações", "#avaliacoes"],
  ];
  return (
    <header className="sticky top-0 z-40 border-b border-white/[0.07] bg-ink/80 backdrop-blur-xl">
      <div className={`${wrap} flex h-[76px] items-center justify-between gap-6`}>
        <Marca />
        <nav aria-label="Seções" className="hidden items-center gap-8 lg:flex">
          {links.map(([label, href]) => (
            <a key={href} href={href} className="text-[13px] font-medium text-mute transition-colors hover:text-white">
              {label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <a href={WHATSAPP} {...ext} aria-label="WhatsApp" className="hidden text-soft transition-colors hover:text-volt sm:block">
            <Chat />
          </a>
          <a href={WHATSAPP} {...ext} className="btn-volt !px-4 !py-3 whitespace-nowrap sm:!px-5">
            <span className="hidden sm:inline">Garantir</span>
            <span className="font-display text-[17px] leading-none font-extrabold tracking-wide">10% OFF</span>
            <Arrow />
          </a>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden">
      {/* Luz amarela atrás dos aparelhos, como na foto. */}
      <div aria-hidden className="animate-glow pointer-events-none absolute top-[8%] right-[-10%] size-[720px] rounded-full bg-[radial-gradient(circle,oklch(96.7%_0.185_109/0.16),transparent_62%)]" />
      <div className={`${wrap} relative grid items-center gap-6 pt-10 pb-8 lg:grid-cols-[0.95fr_1.2fr] lg:gap-4 lg:pt-6`}>
        <div className="relative z-10">
          <p className="animate-rise flex items-center gap-2.5 text-[11px] font-bold tracking-[0.08em] uppercase">
            <span className="relative flex size-1.5">
              <span className="absolute inset-0 animate-ping rounded-full bg-volt" />
              <span className="size-1.5 rounded-full bg-volt" />
            </span>
            A Black Friday chegou à Portanova Cell
          </p>
          <h1 className="font-display mt-6 text-[clamp(5rem,13vw,8.75rem)] leading-[0.82] font-black tracking-[-0.01em] uppercase">
            <span className="block overflow-hidden pb-[0.04em]">
              <span className="animate-line" style={{ animationDelay: "0.1s" }}>Black</span>
            </span>
            <span className="block overflow-hidden pb-[0.04em]">
              <span className="animate-line text-volt" style={{ animationDelay: "0.22s" }}>Friday</span>
            </span>
          </h1>
          <div className="animate-rise" style={{ animationDelay: "0.45s" }}>
            <p className="mt-8 max-w-[25rem] text-[17px] leading-relaxed font-semibold">
              Assistência especializada para seu celular. E o seu próximo aparelho também está aqui.
            </p>
            <p className="mt-4 max-w-[25rem] text-[15px] leading-relaxed text-mute">
              Aproveite <strong className="font-extrabold text-volt">10%</strong> de desconto em ofertas selecionadas de celulares e acessórios.
            </p>
          </div>
          <div className="animate-rise" style={{ animationDelay: "0.6s" }}>
            <a href={WHATSAPP} {...ext} className="btn-volt shine mt-9 w-full shadow-[0_0_40px_-8px_var(--color-volt)] sm:w-auto">
              Quero meus <span className="font-display text-[19px] leading-none font-extrabold">10%</span> de desconto
              <Arrow />
            </a>
            <p className="mt-4 flex items-center gap-2 text-[12px] text-mute">
              <Chat className="size-3.5" /> Atendimento direto pelo WhatsApp.
            </p>
          </div>
        </div>
        <Parallax className="animate-photo relative -mx-4 sm:mx-0">
          {/* Segue o mouse de leve e flutua; o 10% OFF acende na tela do aparelho da frente. */}
          <div className="transition-transform duration-500 ease-out [transform:translate3d(calc(var(--mx,0)*-14px),calc(var(--my,0)*-10px),0)]">
            <div className="animate-float @container relative aspect-[1.08/1] [mask-image:linear-gradient(90deg,transparent,#000_14%),linear-gradient(0deg,transparent,#000_10%)] [mask-composite:intersect]">
              <Image
                src="/img/portanova-hero.webp"
                alt="Dois celulares pretos sobre uma pedra, um deles com 10% OFF na tela"
                fill
                priority
                sizes="(min-width: 1024px) 680px, 100vw"
                className="object-cover object-right"
              />
              <p
                aria-hidden
                className="animate-neon font-display absolute top-[39%] left-[66%] origin-center rotate-[12deg] skew-y-[4deg] text-center leading-[0.85] font-black text-volt uppercase [text-shadow:0_0_18px_oklch(96.7%_0.185_109/0.7),0_0_44px_oklch(96.7%_0.185_109/0.35)]"
              >
                <span className="block text-[3.1cqw] tracking-[0.04em]">Selecionados</span>
                <span className="block text-[11cqw]">10%</span>
                <span className="block text-[7.5cqw]">OFF</span>
              </p>
            </div>
          </div>
        </Parallax>
      </div>
    </section>
  );
}

function Selos() {
  const box = "flex items-center gap-5 rounded-2xl border border-volt/45 bg-ink-2/70 px-6 py-5 transition-colors hover:border-volt";
  return (
    <section className={`${wrap} stagger grid gap-3 md:grid-cols-[1.1fr_1fr_1fr]`}>
      <div className={`${box} reveal`}>
        <p className="font-display flex items-baseline gap-1 text-volt [text-shadow:0_0_24px_oklch(96.7%_0.185_109/0.45)]">
          <span className="text-[52px] leading-none font-black"><CountUp to={10} />%</span>
          <span className="text-[22px] font-extrabold">OFF</span>
        </p>
        <div>
          <p className="text-[12px] font-bold tracking-[0.06em] uppercase">Black Friday</p>
          <p className="mt-1 text-[13px] text-mute">Ofertas selecionadas por tempo limitado.</p>
        </div>
      </div>
      <div className={`${box} reveal`}>
        <span className="grid size-11 shrink-0 place-items-center rounded-full border border-white/12 text-volt"><Chat /></span>
        <div>
          <p className="text-[12px] font-bold tracking-[0.06em] uppercase">Atendimento direto</p>
          <p className="mt-1 text-[13px] text-mute">Converse com nossa equipe e consulte os modelos disponíveis.</p>
        </div>
      </div>
      <div className={`${box} reveal`}>
        <span className="grid size-11 shrink-0 place-items-center rounded-full border border-white/12 text-volt"><Shield /></span>
        <div>
          <p className="text-[12px] font-bold tracking-[0.06em] uppercase">Compra com confiança</p>
          <p className="mt-1 text-[13px] text-mute">Atendimento personalizado para encontrar a melhor opção.</p>
        </div>
      </div>
    </section>
  );
}

function Faixa() {
  const itens = ["Black Friday", "10% OFF em ofertas selecionadas", "iPhones e Androids", "Assistência técnica", "Acessórios", "Atendimento pelo WhatsApp"];
  const linha = (
    <>
      {itens.map((t) => (
        <span key={t} className="flex items-center gap-6">
          {t}
          <span aria-hidden className="text-[0.7em]">✦</span>
        </span>
      ))}
    </>
  );
  return (
    <div aria-hidden className="relative my-14 h-[120px] overflow-hidden sm:my-16 sm:h-[140px]">
      {/* Duas fitas cruzadas, uma amarela e uma preta, correndo em sentidos opostos. */}
      <div className="absolute top-1/2 left-[-5%] w-[110%] -translate-y-1/2 rotate-[2.2deg] border-y border-white/10 bg-ink-3 py-3">
        <div className="font-display animate-marquee-back flex w-max gap-6 text-[22px] font-extrabold tracking-wide text-white/50 uppercase">
          {linha}
          {linha}
        </div>
      </div>
      <div className="absolute top-1/2 left-[-5%] w-[110%] -translate-y-1/2 -rotate-[2.2deg] bg-volt py-3 shadow-[0_10px_40px_-10px_oklch(96.7%_0.185_109/0.5)]">
        <div className="font-display animate-marquee flex w-max gap-6 text-[22px] font-extrabold tracking-wide text-ink uppercase [animation-duration:40s]">
          {linha}
          {linha}
        </div>
      </div>
    </div>
  );
}

function Cartao({ id, titulo, texto, img, alt, className = "" }: { id?: string; titulo: string; texto: string; img: string; alt: string; className?: string }) {
  return (
    <a id={id} href={WHATSAPP} {...ext} className={`group reveal relative isolate flex min-h-[200px] flex-col justify-between overflow-hidden rounded-2xl border border-white/[0.08] bg-ink-2 p-6 ${className}`}>
      <Image src={img} alt={alt} fill sizes="(min-width: 1024px) 560px, 100vw" className="-z-20 object-cover object-right transition-transform duration-700 group-hover:scale-[1.04]" />
      <div aria-hidden className="absolute inset-0 -z-10 bg-[linear-gradient(100deg,var(--color-ink-2)_18%,oklch(12.5%_0_0/0.75)_42%,transparent_72%)]" />
      <div className="max-w-[15rem]">
        <h3 className="text-[19px] font-extrabold tracking-tight">{titulo}</h3>
        <p className="mt-2 text-[13px] leading-relaxed text-soft">{texto}</p>
      </div>
      <span className="mt-6 grid size-10 place-items-center rounded-full border border-white/25 transition-colors group-hover:border-volt group-hover:bg-volt group-hover:text-ink">
        <Arrow />
      </span>
    </a>
  );
}

function Especialidade() {
  return (
    <section className={`${wrap} grid gap-4 lg:grid-cols-2`}>
      <div id="assistencia" className="reveal relative isolate flex flex-col overflow-hidden rounded-2xl bg-ink-2 lg:min-h-[400px] lg:flex-row">
        <div className="relative aspect-[16/10] lg:absolute lg:inset-y-0 lg:right-0 lg:aspect-auto lg:w-[64%]">
          <Image src="/img/portanova-assistencia.webp" alt="Celular aberto na bancada de assistência técnica" fill sizes="(min-width: 1024px) 380px, 100vw" className="object-cover" />
        </div>
        <div className="panel-reveal relative bg-volt px-7 py-8 text-ink lg:w-[62%] lg:[clip-path:polygon(0_0,100%_0,72%_100%,0_100%)] lg:py-9 lg:pr-24">
          <p className="text-[11px] font-extrabold tracking-[0.1em] uppercase">Nossa especialidade</p>
          <h2 className="font-display mt-4 text-[clamp(3rem,6vw,3.6rem)] leading-[0.88] font-black uppercase">
            Seu cell
            <br />
            novo
            <br />
            de novo.
          </h2>
          <p className="mt-6 max-w-[13rem] text-[13.5px] leading-relaxed font-medium">
            Assistência técnica de celular. Tela, bateria ou outros problemas? Deu problema? A gente resolve.
          </p>
          <a href={WHATSAPP} {...ext} className="mt-7 inline-flex items-center gap-2.5 rounded-full bg-ink px-5 py-3.5 text-[12px] font-extrabold tracking-[0.02em] text-white uppercase transition-transform hover:-translate-y-px [&:hover_.arrow]:translate-x-0.5 [&:hover_.arrow]:-translate-y-0.5">
            Solicitar orçamento <Arrow />
          </a>
        </div>
      </div>
      <div className="stagger grid gap-4 sm:grid-cols-2">
        <Cartao
          titulo="iPhones e Androids"
          texto="Seu próximo celular está aqui. Consulte os modelos disponíveis e as ofertas da Black Friday."
          img="/img/portanova-samsung.webp"
          alt="Celular preto sobre pedra"
          className="sm:col-span-2"
        />
        <Cartao id="acessorios" titulo="Acessórios" texto="Os detalhes fazem a diferença." img="/img/portanova-fones.webp" alt="Fones de ouvido pretos e dourados" />
        <Cartao titulo="Capinhas e proteção" texto="Seu celular, do seu jeito." img="/img/portanova-capinhas.webp" alt="Capinha transparente e carregador" />
      </div>
    </section>
  );
}

function Cabos() {
  return (
    <section className={`${wrap} mt-10`}>
      <div className="reveal flex flex-col gap-5 border-y border-white/[0.08] py-5 sm:flex-row sm:items-center">
        <Image src="/img/portanova-cabos.webp" alt="Cabo USB-C branco enrolado" width={240} height={176} className="h-[88px] w-[120px] rounded-xl object-cover" />
        <div className="flex-1">
          <p className="eyebrow !text-[10px]">Conexão para o dia a dia</p>
          <h3 className="mt-1.5 text-[18px] font-semibold">Cabos para o seu celular</h3>
          <p className="mt-1 text-[12.5px] text-mute">Consulte as opções compatíveis com seu aparelho.</p>
        </div>
        <a href={WHATSAPP} {...ext} className="btn-volt self-start sm:self-auto">
          Ver cabos <Arrow />
        </a>
      </div>
    </section>
  );
}

function Ofertas() {
  return (
    <section id="ofertas" className={`${wrap} pt-24`}>
      <div className="reveal flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <p className="eyebrow">Ofertas especiais</p>
          <h2 className="mt-4 max-w-[27rem] text-[clamp(2rem,4vw,2.5rem)] leading-[1.08] font-extrabold tracking-tight">A oportunidade de economizar chegou.</h2>
          <p className="mt-4 text-[14px] text-mute">
            Na Black Friday da Portanova Cell, você aproveita <strong className="font-extrabold text-volt">10%</strong> de desconto em ofertas selecionadas.
          </p>
        </div>
        <a href={WHATSAPP} {...ext} className="group flex items-center gap-2 text-[13px] font-semibold text-volt hover:text-white [&:hover_.arrow]:translate-x-0.5 [&:hover_.arrow]:-translate-y-0.5">
          Consultar todas as ofertas <Arrow />
        </a>
      </div>
      <div className="stagger mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
        {OFERTAS.map((o) => (
          <article key={o.titulo} className="group reveal flex flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-ink-2 transition-colors hover:border-volt/50">
            <div className="relative aspect-square overflow-hidden">
              <Image src={o.img} alt={o.titulo} fill sizes="(min-width: 1024px) 300px, 50vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.05]" />
              <span className="font-display absolute top-2.5 left-2.5 rounded-full bg-volt px-2.5 py-1 text-[14px] sm:top-3 sm:left-3 sm:px-3 sm:text-[16px] leading-none font-extrabold text-ink">10% OFF</span>
            </div>
            <div className="flex flex-1 flex-col p-3.5 sm:p-5">
              <h3 className="text-[14px] font-extrabold sm:text-[16px]">{o.titulo}</h3>
              <p className="mt-1.5 mb-4 text-[12px] leading-snug text-mute sm:mb-5 sm:text-[13px]">{o.texto}</p>
              <a href={WHATSAPP} {...ext} className="btn-volt mt-auto w-full !gap-1.5 !px-3 !py-3 !text-[10.5px] sm:!text-[11px]">
                Consultar <span className="hidden sm:inline">oferta</span> <Arrow />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Avaliacoes() {
  const fila = [...AVALIACOES, ...AVALIACOES];
  return (
    <section id="avaliacoes" className="pt-28">
      <div className={`${wrap} reveal flex flex-col justify-between gap-6 md:flex-row md:items-end`}>
        <div>
          <p className="eyebrow">Quem compra, recomenda</p>
          <h2 className="mt-4 max-w-[34rem] text-[clamp(2rem,4vw,2.5rem)] leading-[1.08] font-extrabold tracking-tight">A melhor propaganda vem de quem já é nosso cliente.</h2>
          <p className="mt-4 text-[14px] text-mute">As experiências de quem escolheu a Portanova Cell.</p>
        </div>
        <a href={WHATSAPP} {...ext} className="btn-volt self-start md:self-auto">
          Falar com a equipe <Arrow />
        </a>
      </div>
      <div className="mt-10 overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_6%,#000_94%,transparent)]">
        <ul className="animate-marquee flex w-max gap-4 px-2">
          {fila.map((a, i) => (
            <li key={i} aria-hidden={i >= AVALIACOES.length} className="flex w-[300px] shrink-0 flex-col rounded-2xl border border-white/[0.08] bg-ink-2 p-6 transition-[border-color,transform] duration-300 hover:-translate-y-1 hover:border-volt/50 sm:w-[380px]">
              <div className="flex items-center justify-between">
                <Quote className="size-7 text-volt" />
                <span className="flex gap-0.5 text-volt">
                  {[0, 1, 2, 3, 4].map((s) => <Star key={s} />)}
                </span>
              </div>
              <blockquote className="mt-5 flex-1 text-[14.5px] leading-relaxed">“{a.texto}”</blockquote>
              <p className="mt-6 text-[14px] font-semibold">{a.nome}</p>
              <p className="mt-1 text-[11px] text-mute">Avaliação do Google</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Loja() {
  return (
    <section className={`${wrap} pt-28`}>
      <div className="grid items-stretch gap-10 border-t border-white/[0.08] pt-16 lg:grid-cols-2">
        <div className="reveal">
          <p className="eyebrow">Venha nos conhecer</p>
          <h2 className="mt-4 text-[clamp(2rem,4vw,2.5rem)] leading-[1.08] font-extrabold tracking-tight">Estamos pertinho de você!</h2>
          <p className="mt-4 max-w-[26rem] text-[14px] leading-relaxed text-mute">
            Prefere conhecer nossa loja pessoalmente? Venha visitar a Portanova Cell. Nossa equipe está pronta para te atender.
          </p>
          <ul className="mt-8 space-y-6 text-[14px]">
            <li className="flex gap-3.5">
              <Pin className="mt-0.5 size-5 shrink-0 text-volt" />
              <span>{ENDERECO}</span>
            </li>
            <li className="flex gap-3.5">
              <Clock className="mt-0.5 size-5 shrink-0 text-volt" />
              <dl className="grid grid-cols-[auto_auto] gap-x-4 gap-y-1">
                {HORARIOS.map((h) => (
                  <div key={h.dia} className="contents">
                    <dt className="text-mute">{h.dia}</dt>
                    <dd className={h.hora === "Fechado" ? "text-mute" : "font-semibold"}>{h.hora}</dd>
                  </div>
                ))}
              </dl>
            </li>
          </ul>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href={COMO_CHEGAR} {...ext} className="btn-volt">
              Como chegar <Arrow />
            </a>
            <a href={WHATSAPP} {...ext} className="btn-volt !bg-transparent !text-white ring-1 ring-white/25 hover:!bg-white hover:!text-ink">
              Falar no WhatsApp <Arrow />
            </a>
          </div>
        </div>
        <div className="reveal min-h-[340px] overflow-hidden rounded-2xl border border-volt/45">
          <iframe
            title="Mapa da Portanova Cell"
            src={MAPA_EMBED}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-full min-h-[340px] w-full"
          />
        </div>
      </div>
    </section>
  );
}

function Final() {
  return (
    <section className="relative mt-28 overflow-hidden border-t border-white/[0.08]">
      <div aria-hidden className="pointer-events-none absolute bottom-[-60%] left-1/2 size-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,oklch(96.7%_0.185_109/0.12),transparent_60%)]" />
      <div className={`${wrap} reveal relative py-24 text-center`}>
        <p className="eyebrow">Seu novo celular começa com uma conversa</p>
        <h2 className="font-display mt-6 text-[clamp(2.6rem,6.4vw,4.6rem)] leading-[0.95] font-extrabold uppercase">
          O celular que você procura.
          <span className="block text-volt">O atendimento que você merece.</span>
        </h2>
        <p className="mx-auto mt-6 max-w-[26rem] text-[14px] leading-relaxed text-mute">
          Aproveite as condições especiais da Black Friday e descubra o que a Portanova Cell preparou para você.
        </p>
        <a href={WHATSAPP} {...ext} className="btn-volt shine mt-9 shadow-[0_0_40px_-8px_var(--color-volt)]">
          Falar com um especialista <Arrow />
        </a>
      </div>
    </section>
  );
}

function Rodape() {
  return (
    <footer className={`${wrap} pb-24 sm:pb-10`}>
      <div className="flex flex-col justify-between gap-8 border-t border-white/[0.08] pt-10 sm:flex-row sm:items-center">
        <div>
          <Marca small />
          <p className="mt-3 text-[12px] text-mute">Celulares, acessórios e assistência técnica.</p>
        </div>
        <nav aria-label="Contato" className="flex gap-7 text-[13px] text-mute">
          <a href={WHATSAPP} {...ext} className="hover:text-volt">WhatsApp ↗</a>
          <a href={INSTAGRAM} {...ext} className="hover:text-volt">Instagram ↗</a>
          <a href={COMO_CHEGAR} {...ext} className="hover:text-volt">Localização ↗</a>
        </nav>
      </div>
      <div className="mt-10 flex flex-col justify-between gap-2 border-t border-white/[0.08] pt-6 text-[11px] text-mute sm:flex-row">
        <p>
          © 2026{" "}
          <a href="https://www.zhello.com.br" {...ext} className="font-bold text-volt hover:text-white">
            Zhello
          </a>
          . Todos os direitos reservados.
        </p>
        <p>PORTANOVA CELL · Black Friday</p>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Selos />
        <Faixa />
        <Especialidade />
        <Cabos />
        <Ofertas />
        <Avaliacoes />
        <Loja />
        <Final />
      </main>
      <Rodape />
      <a
        href={WHATSAPP}
        {...ext}
        aria-label="Falar no WhatsApp"
        className="fixed right-4 bottom-4 z-50 grid size-14 place-items-center rounded-full bg-volt text-ink shadow-[0_8px_30px_-6px_oklch(96.7%_0.185_109/0.6)] transition-transform hover:scale-105"
      >
        <WhatsApp />
      </a>
    </>
  );
}
