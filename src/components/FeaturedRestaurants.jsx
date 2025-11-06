import { Star } from "lucide-react";

const restaurants = [
  {
    id: 1,
    name: "La Braceria del Borgo",
    city: "Roma",
    type: "Griglieria",
    image:
      "https://images.unsplash.com/photo-1553163147-622ab57be1c7?q=80&w=2069&auto=format&fit=crop",
    rating: 4.8,
  },
  {
    id: 2,
    name: "Milano Steakhouse",
    city: "Milano",
    type: "Steakhouse",
    image:
      "https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=2070&auto=format&fit=crop",
    rating: 4.7,
  },
  {
    id: 3,
    name: "Firenze Brace e Vino",
    city: "Firenze",
    type: "Braceria",
    image:
      "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?q=80&w=2069&auto=format&fit=crop",
    rating: 4.6,
  },
  {
    id: 4,
    name: "Verona Grill Club",
    city: "Verona",
    type: "Grill",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2069&auto=format&fit=crop",
    rating: 4.7,
  },
  {
    id: 5,
    name: "Torino Prime Cuts",
    city: "Torino",
    type: "Steakhouse",
    image:
      "https://images.unsplash.com/photo-1526318472351-c75fcf070305?q=80&w=2069&auto=format&fit=crop",
    rating: 4.5,
  },
  {
    id: 6,
    name: "Napoli Fuoco e Brace",
    city: "Napoli",
    type: "Braceria",
    image:
      "https://images.unsplash.com/photo-1526016144441-266f6b5c1ceb?q=80&w=2070&auto=format&fit=crop",
    rating: 4.8,
  },
];

function RestaurantCard({ r }) {
  return (
    <div className="group overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-black/5 transition hover:-translate-y-1 hover:shadow-xl">
      <div className="relative h-52 w-full overflow-hidden">
        <img
          src={r.image}
          alt={r.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-white/90 px-2 py-1 text-xs font-medium text-rose-900 shadow">
          <Star className="h-4 w-4 fill-rose-900 text-rose-900" />
          {r.rating}
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900">{r.name}</h3>
        <p className="mt-1 text-sm text-gray-600">
          {r.city} • {r.type}
        </p>
        <button className="mt-4 w-full rounded-xl bg-rose-900 px-4 py-2 text-sm font-semibold text-white hover:bg-rose-800">
          Scopri di più
        </button>
      </div>
    </div>
  );
}

export default function FeaturedRestaurants() {
  return (
    <section className="bg-stone-50 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl">
              Ristoranti in evidenza
            </h2>
            <p className="mt-2 text-gray-600">
              Selezionati per qualità della carne, ambiente e servizio.
            </p>
          </div>
          <a href="#" className="text-rose-900 hover:underline">
            Vedi tutti
          </a>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {restaurants.map((r) => (
            <RestaurantCard key={r.id} r={r} />
          ))}
        </div>
      </div>
    </section>
  );
}
