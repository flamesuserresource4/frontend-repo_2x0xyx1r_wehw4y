const cities = [
  "Roma",
  "Milano",
  "Firenze",
  "Verona",
  "Torino",
  "Napoli",
  "Bologna",
  "Bari",
];

export default function Cities() {
  return (
    <section className="bg-stone-50 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-8">
          <h2 className="font-serif text-3xl md:text-4xl">Esperienze per città</h2>
          <p className="mt-2 text-stone-600">
            Scopri i migliori ristoranti di carne vicino a te.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
          {cities.map((city) => (
            <a
              key={city}
              href="#"
              className="group rounded-xl border border-stone-200 bg-white px-4 py-6 text-center text-sm font-medium text-stone-800 shadow-sm transition hover:-translate-y-0.5 hover:border-rose-200 hover:bg-rose-50"
            >
              <span className="block font-semibold">Dove mangiare a {city}</span>
              <span className="mt-1 block text-xs text-stone-500 group-hover:text-rose-900">
                Scopri i migliori nella tua città
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
