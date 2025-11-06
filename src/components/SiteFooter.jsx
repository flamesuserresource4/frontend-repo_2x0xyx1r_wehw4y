export default function SiteFooter() {
  return (
    <footer className="bg-black py-12 text-stone-200">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          <div>
            <h3 className="font-serif text-xl text-white">Dove Mangiare</h3>
            <p className="mt-2 text-sm text-stone-400">
              Il portale italiano dei migliori ristoranti di carne.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-white">Città</h4>
            <ul className="mt-2 space-y-2 text-sm text-stone-400">
              <li><a href="#" className="hover:text-white">Roma</a></li>
              <li><a href="#" className="hover:text-white">Milano</a></li>
              <li><a href="#" className="hover:text-white">Firenze</a></li>
              <li><a href="#" className="hover:text-white">Verona</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white">Info</h4>
            <ul className="mt-2 space-y-2 text-sm text-stone-400">
              <li><a href="#" className="hover:text-white">Contatti</a></li>
              <li><a href="#" className="hover:text-white">Privacy</a></li>
              <li>
                <a
                  href="#"
                  className="inline-block rounded-lg bg-rose-700 px-3 py-2 text-white hover:bg-rose-600"
                >
                  Sei un ristoratore? Entra nel network
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-white/10 pt-6 text-xs text-stone-500">
          © {new Date().getFullYear()} Dove Mangiare. Tutti i diritti riservati.
        </div>
      </div>
    </footer>
  );
}
