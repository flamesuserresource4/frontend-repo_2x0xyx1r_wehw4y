import { Search } from "lucide-react";

const bgImage =
  "https://images.unsplash.com/photo-1604908812581-1e43049d8c17?q=80&w=1974&auto=format&fit=crop";

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center">
      <img
        src={bgImage}
        alt="Bistecca alla griglia"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 text-white">
        <div className="max-w-3xl">
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl leading-tight">
            Dove mangiare la carne migliore della tua città.
          </h1>
          <p className="mt-4 text-lg md:text-xl text-white/90">
            Scopri ristoranti selezionati per qualità, ambiente e passione. Solo
            esperienze vere per chi ama la carne.
          </p>

          <div className="mt-8 grid gap-3 sm:flex sm:items-center">
            <div className="flex-1">
              <label htmlFor="search" className="sr-only">
                Cerca un ristorante vicino a te
              </label>
              <div className="flex items-center rounded-xl bg-white/95 p-2 shadow-xl ring-1 ring-white/20 backdrop-blur">
                <Search className="mx-2 h-5 w-5 text-rose-900" />
                <input
                  id="search"
                  type="text"
                  placeholder="Cerca un ristorante vicino a te"
                  className="w-full rounded-md bg-transparent px-2 py-2 text-gray-900 placeholder-gray-500 focus:outline-none"
                />
                <select className="rounded-md bg-rose-900 px-3 py-2 text-sm font-medium text-white hover:bg-rose-800">
                  <option>Ovunque</option>
                  <option>Roma</option>
                  <option>Milano</option>
                  <option>Firenze</option>
                  <option>Verona</option>
                </select>
              </div>
            </div>
            <button className="rounded-xl bg-rose-900 px-5 py-3 text-sm font-semibold text-white shadow-lg hover:bg-rose-800">
              Cerca un ristorante
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
