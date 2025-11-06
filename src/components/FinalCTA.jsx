export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-stone-900 py-20">
      <img
        src="https://images.unsplash.com/photo-1603048297172-c92544798d5a?q=80&w=2070&auto=format&fit=crop"
        alt="Tagliere con carne e vino rosso"
        className="absolute inset-0 h-full w-full object-cover opacity-20"
      />
      <div className="relative mx-auto max-w-4xl px-6 text-center text-stone-100">
        <h2 className="font-serif text-3xl md:text-4xl">
          Scopri la tua prossima esperienza
        </h2>
        <p className="mt-3 text-stone-300">
          Ristoranti veri, selezionati da chi ama la carne quanto te. Ogni tavolo
          ha una storia. Scopri la tua.
        </p>
        <div className="mt-8">
          <button className="rounded-xl bg-rose-700 px-6 py-3 text-white shadow-lg hover:bg-rose-600">
            Trova ora un ristorante vicino a te
          </button>
        </div>
      </div>
    </section>
  );
}
