const posts = [
  {
    title: "Le 5 migliori bracerie di Milano nel 2025",
    excerpt:
      "Una selezione imperdibile di locali dove la carne è protagonista assoluta.",
    image:
      "https://images.unsplash.com/photo-1526318472351-c75fcf070305?q=80&w=2069&auto=format&fit=crop",
  },
  {
    title: "Come scegliere la carne perfetta per la griglia",
    excerpt:
      "Tagli, frollatura e cotture: guida pratica per risultati da maestro.",
    image:
      "https://images.unsplash.com/photo-1526016144441-266f6b5c1ceb?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "I ristoranti più romantici per una cena di carne",
    excerpt:
      "Atmosfere soffuse, calici di rosso e piatti memorabili.",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2069&auto=format&fit=crop",
  },
];

export default function Blog() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl">Consigli e articoli</h2>
            <p className="mt-2 text-stone-600">Il nostro magazine gastronomico.</p>
          </div>
          <a href="#" className="text-rose-900 hover:underline">
            Vedi tutti
          </a>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <article
              key={p.title}
              className="overflow-hidden rounded-2xl border border-stone-200 bg-stone-50 shadow-sm"
            >
              <div className="h-48 w-full overflow-hidden">
                <img src={p.image} alt="" className="h-full w-full object-cover" />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-stone-900">{p.title}</h3>
                <p className="mt-2 text-sm text-stone-600">{p.excerpt}</p>
                <button className="mt-4 rounded-xl bg-rose-900 px-4 py-2 text-sm font-semibold text-white hover:bg-rose-800">
                  Leggi l'articolo
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
