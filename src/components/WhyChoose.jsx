import { ShieldCheck, Images, RefreshCcw } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Selezione accurata",
    desc: "Ogni ristorante è verificato dal team Dove Mangiare.",
  },
  {
    icon: Images,
    title: "Foto e recensioni reali",
    desc: "Mostriamo solo esperienze autentiche.",
  },
  {
    icon: RefreshCcw,
    title: "Aggiornato ogni settimana",
    desc: "Nuovi locali e offerte ogni mese.",
  },
];

export default function WhyChoose() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="font-serif text-3xl md:text-4xl">
          Solo ristoranti selezionati, nessun compromesso sulla qualità.
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-2xl border border-stone-200 bg-stone-50 p-6 shadow-sm"
            >
              <f.icon className="h-10 w-10 text-rose-900" />
              <h3 className="mt-4 text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-stone-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
