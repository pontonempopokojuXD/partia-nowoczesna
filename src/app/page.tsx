import Image from "next/image";
import { AnimatedSection } from "@/components/animated-section";
import { MembershipForm } from "@/components/membership-form";

const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const basePath =
  process.env.GITHUB_ACTIONS === "true" && repoName ? `/${repoName}` : "";
const logoSrc = `${basePath}/logo-nowoczesna-final.png?v=3`;

const filaryProgramu = [
  {
    tytul: "Nowoczesna gospodarka",
    opis: "Niższe bariery dla przedsiębiorców, inwestycje w innowacje oraz stabilne i przewidywalne prawo dla firm i pracowników.",
  },
  {
    tytul: "Silne usługi publiczne",
    opis: "Lepsza edukacja, dostępna ochrona zdrowia i sprawne urzędy, które działają szybko i przewidywalnie.",
  },
  {
    tytul: "Państwo cyfrowe",
    opis: "Proste e-usługi, transparentne finanse publiczne i realna kontrola obywateli nad decyzjami.",
  },
];

const liczby = [
  { wartosc: "120+", etykieta: "lokalnych inicjatyw" },
  { wartosc: "16", etykieta: "województw aktywnie" },
  { wartosc: "42 000", etykieta: "osób w społeczności" },
  { wartosc: "24h", etykieta: "średni czas kontaktu" },
];

const aktualnosci = [
  {
    data: "27 lutego 2026",
    kategoria: "Komunikat",
    tytul: "Pakiet ustaw dla nowoczesnych miast",
    opis: "Przedstawiliśmy propozycje dotyczące transportu, zielonej energii i cyfryzacji usług miejskich.",
  },
  {
    data: "24 lutego 2026",
    kategoria: "Wydarzenie",
    tytul: "Otwarte spotkanie z mieszkańcami Gdańska",
    opis: "Rozmawialiśmy o kosztach życia, pracy i kierunkach rozwoju regionu pomorskiego.",
  },
  {
    data: "21 lutego 2026",
    kategoria: "Program",
    tytul: "Nowe priorytety dla edukacji",
    opis: "Prezentujemy konkretne działania dla nauczycieli, uczniów i rodziców na lata 2026-2030.",
  },
];

const wydarzenia = [
  {
    miasto: "Warszawa",
    termin: "12 marca 2026, 18:00",
    nazwa: "Debata: Polska gospodarka po 2030",
  },
  {
    miasto: "Kraków",
    termin: "16 marca 2026, 17:30",
    nazwa: "Spotkanie otwarte dla nowych członków",
  },
  {
    miasto: "Poznań",
    termin: "20 marca 2026, 18:30",
    nazwa: "Forum samorządowe Nowoczesnej",
  },
];

const planDzialan = [
  {
    etap: "I kwartał 2026",
    tytul: "Konsultacje regionalne",
    opis: "Seria otwartych spotkań z mieszkańcami oraz ekspertami we wszystkich województwach.",
  },
  {
    etap: "II kwartał 2026",
    tytul: "Pakiet ustaw modernizacyjnych",
    opis: "Przedstawienie gotowych rozwiązań dla edukacji, ochrony zdrowia i cyfryzacji administracji.",
  },
  {
    etap: "III kwartał 2026",
    tytul: "Program dla samorządów",
    opis: "Narzędzia finansowe i organizacyjne wspierające rozwój lokalnych społeczności.",
  },
];

const faq = [
  {
    pytanie: "Kto może dołączyć do Nowoczesnej?",
    odpowiedz:
      "Każda osoba pełnoletnia, która podziela nasze wartości i chce aktywnie działać na rzecz nowoczesnej Polski.",
  },
  {
    pytanie: "Ile czasu zajmuje proces członkostwa?",
    odpowiedz:
      "Po wysłaniu formularza kontaktujemy się zazwyczaj w ciągu 24 godzin i przedstawiamy kolejne kroki.",
  },
  {
    pytanie: "Czy mogę działać lokalnie, jeśli mam mało czasu?",
    odpowiedz:
      "Tak. Wspieramy zarówno działania regularne, jak i projektowe. Możesz angażować się zgodnie ze swoimi możliwościami.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,#dceeff_0%,#f7fbff_22%,#ffffff_65%)] text-foreground">
      <header className="sticky top-0 z-20 border-b border-border bg-white/85 backdrop-blur-md">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Image
            src={logoSrc}
            alt="Nowoczesna"
            width={278}
            height={64}
            className="h-auto w-[278px]"
            priority
          />
          <div className="hidden items-center gap-6 text-sm font-medium text-text-muted lg:flex">
            <a href="#program">Program</a>
            <a href="#aktualnosci">Aktualności</a>
            <a href="#wydarzenia">Wydarzenia</a>
            <a href="#o-nas">O nas</a>
            <a
              href="#dolacz"
              className="rounded-full bg-primary-600 px-5 py-2.5 text-white shadow-lg shadow-primary-600/30 transition hover:bg-primary-700"
            >
              Dołącz teraz
            </a>
          </div>
        </nav>
      </header>

      <main>
        <AnimatedSection className="relative overflow-hidden">
          <div className="absolute left-1/2 top-[-230px] h-[460px] w-[760px] -translate-x-1/2 rounded-full bg-primary-500/15 blur-3xl" />
          <div className="absolute -left-20 top-24 h-56 w-56 rounded-full bg-sky-accent/20 blur-3xl" />
          <div className="absolute -right-20 top-36 h-56 w-56 rounded-full bg-primary-400/20 blur-3xl" />
          <div className="mx-auto grid max-w-6xl gap-6 px-6 py-16 lg:grid-cols-[1.2fr_0.8fr]">
            <article className="fade-up rounded-3xl border border-primary-200/70 bg-white/90 p-8 shadow-xl shadow-primary-600/10 backdrop-blur-sm md:p-10">
              <p className="mb-4 inline-block rounded-full border border-primary-200 bg-primary-600/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary-700">
                Ruch obywatelski i odpowiedzialne państwo
              </p>
              <h1 className="text-4xl font-extrabold tracking-tight text-balance text-[#0B2F73] md:text-5xl">
                Dołącz do Nowoczesnej i twórz z nami lepszą przyszłość Polski.
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-text-muted">
                Łączymy profesjonalizm, odwagę i konkretne działania. Budujemy
                nowoczesne państwo: sprawne, transparentne i przyjazne dla
                obywateli.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#dolacz"
                  className="rounded-full bg-primary-600 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-primary-600/35 transition hover:bg-primary-700"
                >
                  Chcę dołączyć
                </a>
                <a
                  href="#program"
                  className="rounded-full border border-border bg-white px-7 py-3 text-sm font-semibold text-foreground transition hover:bg-surface"
                >
                  Poznaj nasz program
                </a>
              </div>
              <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {liczby.map((item) => (
                  <div
                    key={item.etykieta}
                    className="rounded-2xl border border-primary-100 bg-primary-50/60 p-4"
                  >
                    <p className="text-2xl font-bold text-primary-700">
                      {item.wartosc}
                    </p>
                    <p className="text-xs uppercase tracking-wide text-text-muted">
                      {item.etykieta}
                    </p>
                  </div>
                ))}
              </div>
            </article>

            <aside className="fade-up rounded-3xl bg-[linear-gradient(145deg,#0A3D91_0%,#0D57C6_55%,#2EA3F2_100%)] p-8 text-white shadow-xl shadow-primary-700/30 md:p-10">
              <p className="text-xs font-semibold uppercase tracking-wider text-white/80">
                Dlaczego warto?
              </p>
              <h2 className="mt-3 text-3xl font-bold leading-tight">
                Tu Twoje zaangażowanie ma realny wpływ.
              </h2>
              <ul className="mt-6 space-y-4 text-sm leading-relaxed text-white/95">
                <li>
                  - Otrzymujesz narzędzia i wsparcie do działania lokalnie.
                </li>
                <li>
                  - Współtworzysz program oparty na danych i rozmowie z ludźmi.
                </li>
                <li>
                  - Masz stały dostęp do wydarzeń, debat i zespołów eksperckich.
                </li>
              </ul>
              <a
                href="#dolacz"
                className="mt-8 inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary-700 transition hover:bg-slate-100"
              >
                Wypełnij formularz członkowski
              </a>
            </aside>
          </div>
        </AnimatedSection>

        <AnimatedSection id="program" className="py-16" delay={0.05}>
          <div className="mx-auto max-w-6xl px-6">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-primary-600">
                  Program
                </p>
                <h2 className="mt-2 text-3xl font-bold text-[#0B2F73]">
                  Priorytety Nowoczesnej na najbliższe lata
                </h2>
              </div>
              <a
                href="#aktualnosci"
                className="rounded-full border border-border px-5 py-2 text-sm font-semibold text-foreground transition hover:bg-surface"
              >
                Zobacz pełny program
              </a>
            </div>
            <div className="mt-7 grid gap-5 md:grid-cols-3">
              {filaryProgramu.map((filar) => (
                <article
                  key={filar.tytul}
                  className="fade-up rounded-2xl border border-border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                >
                  <h3 className="text-lg font-semibold text-[#0B2F73]">
                    {filar.tytul}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-text-muted">
                    {filar.opis}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection id="aktualnosci" className="bg-surface py-16" delay={0.08}>
          <div className="mx-auto max-w-6xl px-6">
            <p className="text-sm font-semibold uppercase tracking-wide text-primary-600">
              Tablica informacyjna
            </p>
            <h2 className="mt-2 text-3xl font-bold text-[#0B2F73]">
              Najnowsze komunikaty i działania
            </h2>
            <div className="mt-7 grid gap-5 md:grid-cols-3">
              {aktualnosci.map((news) => (
                <article
                  key={news.tytul}
                  className="fade-up rounded-2xl border border-border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                >
                  <p className="text-xs font-semibold uppercase tracking-wide text-primary-600">
                    {news.kategoria}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold text-[#0B2F73]">
                    {news.tytul}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-text-muted">
                    {news.opis}
                  </p>
                  <p className="mt-4 text-xs text-text-muted">{news.data}</p>
                </article>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection id="wydarzenia" className="py-16" delay={0.1}>
          <div className="mx-auto max-w-6xl px-6">
            <div className="rounded-3xl border border-primary-100 bg-[linear-gradient(165deg,#f7fbff_0%,#eff6ff_100%)] p-8 md:p-10">
              <p className="text-sm font-semibold uppercase tracking-wide text-primary-600">
                Wydarzenia
              </p>
              <h2 className="mt-2 text-3xl font-bold text-[#0B2F73]">
                Spotkajmy się w Twoim regionie
              </h2>
              <div className="mt-7 grid gap-4 md:grid-cols-3">
                {wydarzenia.map((event) => (
                  <article
                    key={event.nazwa}
                    className="fade-up rounded-2xl border border-primary-100 bg-white p-5"
                  >
                    <p className="text-xs font-semibold uppercase tracking-wide text-primary-600">
                      {event.miasto}
                    </p>
                    <h3 className="mt-2 text-base font-semibold text-[#0B2F73]">
                      {event.nazwa}
                    </h3>
                    <p className="mt-3 text-sm text-text-muted">{event.termin}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="py-16" delay={0.12}>
          <div className="mx-auto max-w-6xl px-6">
            <p className="text-sm font-semibold uppercase tracking-wide text-primary-600">
              Plan działań
            </p>
            <h2 className="mt-2 text-3xl font-bold text-[#0B2F73]">
              Jasna roadmapa na 2026 rok
            </h2>
            <div className="mt-8 space-y-4">
              {planDzialan.map((etap) => (
                <article
                  key={etap.tytul}
                  className="fade-up rounded-2xl border border-border bg-white p-6 shadow-sm"
                >
                  <p className="text-xs font-semibold uppercase tracking-wide text-primary-600">
                    {etap.etap}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold text-[#0B2F73]">
                    {etap.tytul}
                  </h3>
                  <p className="mt-2 text-sm text-text-muted">{etap.opis}</p>
                </article>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection id="o-nas" className="bg-surface py-16" delay={0.14}>
          <div className="mx-auto grid max-w-6xl gap-6 px-6 md:grid-cols-2">
            <article className="fade-up rounded-3xl border border-border bg-white p-8">
              <h2 className="text-2xl font-bold text-[#0B2F73]">
                Działamy blisko ludzi
              </h2>
              <p className="mt-4 leading-relaxed text-text-muted">
                W każdym regionie współpracujemy z mieszkańcami, samorządami i
                ekspertami. Słuchamy, konsultujemy i wdrażamy rozwiązania, które
                poprawiają codzienne życie.
              </p>
            </article>
            <article className="fade-up rounded-3xl border border-border bg-white p-8">
              <h2 className="text-2xl font-bold text-[#0B2F73]">
                Transparentność i odpowiedzialność
              </h2>
              <p className="mt-4 leading-relaxed text-text-muted">
                Publikujemy cele, raportujemy postępy i rozliczamy się z
                obietnic. Chcemy polityki opartej na faktach, a nie na hasłach.
              </p>
            </article>
          </div>
        </AnimatedSection>

        <AnimatedSection className="py-16" delay={0.16}>
          <div className="mx-auto max-w-6xl px-6">
            <p className="text-sm font-semibold uppercase tracking-wide text-primary-600">
              FAQ
            </p>
            <h2 className="mt-2 text-3xl font-bold text-[#0B2F73]">
              Najczęściej zadawane pytania
            </h2>
            <div className="mt-7 space-y-4">
              {faq.map((item) => (
                <details
                  key={item.pytanie}
                  className="fade-up rounded-2xl border border-border bg-white p-5 shadow-sm"
                >
                  <summary className="cursor-pointer text-base font-semibold text-[#0B2F73]">
                    {item.pytanie}
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-text-muted">
                    {item.odpowiedz}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection id="dolacz" className="py-16" delay={0.2}>
          <div className="mx-auto max-w-4xl rounded-3xl bg-[linear-gradient(145deg,#072A64_0%,#0A3D91_45%,#0D57C6_100%)] px-6 py-10 text-white shadow-xl shadow-primary-700/25 sm:px-10">
            <p className="text-sm font-semibold uppercase tracking-wide text-white/75">
              Formularz członkowski
            </p>
            <h2 className="mt-2 text-3xl font-bold">
              Dołącz do Nowoczesnej i buduj zmianę razem z nami.
            </h2>
            <p className="mt-3 max-w-2xl text-white/85">
              Wypełnij krótki formularz. Nasz zespół skontaktuje się z Tobą i
              przedstawi kolejne kroki oraz najbliższe działania w Twoim
              regionie.
            </p>
            <MembershipForm />
            <p className="mt-3 text-xs text-white/70">
              Klikając przycisk, wyrażasz zgodę na kontakt w sprawie członkostwa.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection className="bg-surface py-16" delay={0.22}>
          <div className="mx-auto max-w-6xl px-6">
            <p className="text-sm font-semibold uppercase tracking-wide text-primary-600">
              Jak dołączyć?
            </p>
            <h2 className="mt-2 text-3xl font-bold text-[#0B2F73]">
              Trzy proste kroki do działania z nami
            </h2>
            <div className="mt-7 grid gap-4 md:grid-cols-3">
              {[
                "Wypełnij formularz i zostaw dane kontaktowe.",
                "Porozmawiaj z koordynatorem z Twojego regionu.",
                "Dołącz do najbliższych działań lokalnych i zespołu tematycznego.",
              ].map((step, index) => (
                <article
                  key={step}
                  className="rounded-2xl border border-border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                >
                  <p className="text-xs font-semibold uppercase tracking-wide text-primary-600">
                    Krok {index + 1}
                  </p>
                  <p className="mt-3 text-sm text-text-muted">{step}</p>
                </article>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <section className="border-t border-border py-8">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 text-sm text-text-muted md:flex-row">
            <p>© 2026 Nowoczesna. Wszelkie prawa zastrzeżone.</p>
            <div className="flex gap-4">
              <a href="#">Polityka prywatności</a>
              <a href="#">Kontakt</a>
            </div>
          </div>
        </section>

        <a
          href="#dolacz"
          className="fixed bottom-4 left-1/2 z-30 w-[calc(100%-2rem)] -translate-x-1/2 rounded-full bg-primary-600 px-5 py-3 text-center text-sm font-semibold text-white shadow-xl shadow-primary-600/40 md:hidden"
        >
          Dołącz teraz
        </a>
      </main>
    </div>
  );
}
