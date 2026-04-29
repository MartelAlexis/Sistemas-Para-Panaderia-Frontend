export default function Postres() {
  return (
    <div className="min-h-screen bg-[#fbf9f5] text-[#1b1c1a] font-sans selection:bg-[#ffdcc5] selection:text-[#663100]">
      <main className="pt-24 pb-24 px-6 sm:px-8 max-w-7xl mx-auto">
        {/* Hero Header Section */}
        <header className="mb-20 sm:mb-24 flex flex-col md:flex-row gap-8 sm:gap-12 items-end">
          <div className="flex-1">
            <span className="text-xs sm:text-sm uppercase tracking-[0.2em] font-bold text-[#6f4014] opacity-70 block mb-4">
              Dulce Tentación
            </span>
            <h1 className="text-5xl sm:text-6xl md:text-8xl font-black tracking-tighter text-[#1b1c1a] leading-[0.95] sm:leading-[0.9]">
              Elaborado con <span className="text-[#944a00] italic font-serif font-medium pr-2">Dulzura</span><br className="hidden sm:block" /> y Amor.
            </h1>
          </div>
          <div className="max-w-xs text-[#51443b] text-base sm:text-lg leading-relaxed mb-2 sm:mb-4 italic">
            Cada postre es una obra de arte. Creamos delicias que endulzan momentos especiales con ingredientes premium y recetas tradicionales perfeccionadas con el tiempo.
          </div>
        </header>

        {/* Category Filter Chips */}
        <div className="flex flex-nowrap sm:flex-wrap gap-3 sm:gap-4 mb-16 overflow-x-auto pb-4 scrollbar-hide">
          <button className="cursor-pointer whitespace-nowrap px-6 sm:px-8 py-3 bg-[#6f4014] text-white rounded-full font-bold text-xs sm:text-sm tracking-wider">
            Todo
          </button>
          <button className="cursor-pointer whitespace-nowrap px-6 sm:px-8 py-3 bg-[#f5f3ef] text-[#6f4014] rounded-full font-bold text-xs sm:text-sm tracking-wider">
            Pastelería
          </button>
          <button className="cursor-pointer whitespace-nowrap px-6 sm:px-8 py-3 bg-[#f5f3ef] text-[#6f4014] rounded-full font-bold text-xs sm:text-sm tracking-wider">
            Temporada
          </button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {/* Producto 1 */}
          <article className="group">
            <div className="relative mb-6 overflow-hidden rounded-2xl bg-[#f5f1eb] aspect-[4/3]">
              <span className="absolute top-4 right-4 bg-[#6f4014] text-white px-4 py-1.5 rounded-full text-xs font-bold tracking-wider z-10">
                POPULAR
              </span>
              <img 
                src="/images/postres/cheesecake.jpg" 
                alt="Cheesecake de Frambuesa"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="flex items-start justify-between gap-4 mb-3">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1b1c1a] leading-tight">
                Cheesecake de Frambuesa
              </h2>
              <span className="text-3xl sm:text-4xl font-black text-[#6f4014] whitespace-nowrap">
                $18.00
              </span>
            </div>
            <p className="text-[#51443b] text-base sm:text-lg leading-relaxed mb-6">
              Suave cheesecake con base de galleta y coulis de frambuesa fresca.
            </p>
            <div className="space-y-3 mb-6 pb-6 border-b border-[#e8e5e1]">
              <div>
                <span className="text-[0.65rem] font-bold tracking-widest text-[#6f4014] block mb-1">
                  INGREDIENTES
                </span>
                <span className="text-sm text-[#51443b]">
                  Queso crema, Frambuesas, Galleta
                </span>
              </div>
              <div>
                <span className="text-[0.65rem] font-bold tracking-widest text-[#6f4014] block mb-1">
                  INFORMACIÓN
                </span>
                <span className="text-sm text-[#51443b]">
                  Textura cremosa, Sabor equilibrado
                </span>
              </div>
            </div>
            <button className="w-full sm:w-auto px-8 py-3.5 bg-[#6f4014] text-white rounded-full font-bold text-sm tracking-wider hover:bg-[#8b5a1a] transition-colors">
              AÑADIR RÁPIDO
            </button>
          </article>

          {/* Producto 2 */}
          <article className="group">
            <div className="relative mb-6 overflow-hidden rounded-2xl bg-[#f5f1eb] aspect-[4/3]">
              <img 
                src="/images/postres/tiramisu.jpg" 
                alt="Tiramisú Clásico"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="flex items-start justify-between gap-4 mb-3">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1b1c1a] leading-tight">
                Tiramisú Clásico
              </h2>
              <span className="text-3xl sm:text-4xl font-black text-[#6f4014] whitespace-nowrap">
                $12.50
              </span>
            </div>
            <p className="text-[#51443b] text-base sm:text-lg leading-relaxed mb-6">
              El clásico italiano con capas de bizcocho, café y mascarpone.
            </p>
            <div className="space-y-3 mb-6 pb-6 border-b border-[#e8e5e1]">
              <div>
                <span className="text-[0.65rem] font-bold tracking-widest text-[#6f4014] block mb-1">
                  INGREDIENTES
                </span>
                <span className="text-sm text-[#51443b]">
                  Mascarpone, Café, Cacao
                </span>
              </div>
              <div>
                <span className="text-[0.65rem] font-bold tracking-widest text-[#6f4014] block mb-1">
                  INFORMACIÓN
                </span>
                <span className="text-sm text-[#51443b]">
                  Receta tradicional, Hecho al día
                </span>
              </div>
            </div>
            <button className="w-full sm:w-auto px-8 py-3.5 bg-[#6f4014] text-white rounded-full font-bold text-sm tracking-wider hover:bg-[#8b5a1a] transition-colors">
              AÑADIR RÁPIDO
            </button>
          </article>

          {/* Producto 3 */}
          <article className="group">
            <div className="relative mb-6 overflow-hidden rounded-2xl bg-[#f5f1eb] aspect-[4/3]">
              <img 
                src="/images/postres/brownie.jpg" 
                alt="Brownie con Helado"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="flex items-start justify-between gap-4 mb-3">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1b1c1a] leading-tight">
                Brownie con Helado
              </h2>
              <span className="text-3xl sm:text-4xl font-black text-[#6f4014] whitespace-nowrap">
                $9.50
              </span>
            </div>
            <p className="text-[#51443b] text-base sm:text-lg leading-relaxed mb-6">
              Brownie de chocolate intenso servido caliente con helado de vainilla.
            </p>
            <div className="space-y-3 mb-6 pb-6 border-b border-[#e8e5e1]">
              <div>
                <span className="text-[0.65rem] font-bold tracking-widest text-[#6f4014] block mb-1">
                  INGREDIENTES
                </span>
                <span className="text-sm text-[#51443b]">
                  Chocolate belga, Nueces, Vainilla
                </span>
              </div>
              <div>
                <span className="text-[0.65rem] font-bold tracking-widest text-[#6f4014] block mb-1">
                  INFORMACIÓN
                </span>
                <span className="text-sm text-[#51443b]">
                  Servido caliente, Con helado
                </span>
              </div>
            </div>
            <button className="w-full sm:w-auto px-8 py-3.5 bg-[#6f4014] text-white rounded-full font-bold text-sm tracking-wider hover:bg-[#8b5a1a] transition-colors">
              AÑADIR RÁPIDO
            </button>
          </article>

          {/* Producto 4 */}
          <article className="group">
            <div className="relative mb-6 overflow-hidden rounded-2xl bg-[#f5f1eb] aspect-[4/3]">
              <span className="absolute top-4 right-4 bg-[#6f4014] text-white px-4 py-1.5 rounded-full text-xs font-bold tracking-wider z-10">
                NUEVO
              </span>
              <img 
                src="/images/postres/tarta-limon.jpg" 
                alt="Tarta de Limón"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="flex items-start justify-between gap-4 mb-3">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1b1c1a] leading-tight">
                Tarta de Limón
              </h2>
              <span className="text-3xl sm:text-4xl font-black text-[#6f4014] whitespace-nowrap">
                $11.00
              </span>
            </div>
            <p className="text-[#51443b] text-base sm:text-lg leading-relaxed mb-6">
              Refrescante tarta con crema de limón y merengue italiano.
            </p>
            <div className="space-y-3 mb-6 pb-6 border-b border-[#e8e5e1]">
              <div>
                <span className="text-[0.65rem] font-bold tracking-widest text-[#6f4014] block mb-1">
                  INGREDIENTES
                </span>
                <span className="text-sm text-[#51443b]">
                  Limones frescos, Merengue, Masa quebrada
                </span>
              </div>
              <div>
                <span className="text-[0.65rem] font-bold tracking-widest text-[#6f4014] block mb-1">
                  INFORMACIÓN
                </span>
                <span className="text-sm text-[#51443b]">
                  Cítrico y ligero, Merengue torchado
                </span>
              </div>
            </div>
            <button className="w-full sm:w-auto px-8 py-3.5 bg-[#6f4014] text-white rounded-full font-bold text-sm tracking-wider hover:bg-[#8b5a1a] transition-colors">
              AÑADIR RÁPIDO
            </button>
          </article>

          {/* Producto 5 */}
          <article className="group">
            <div className="relative mb-6 overflow-hidden rounded-2xl bg-[#f5f1eb] aspect-[4/3]">
              <img 
                src="/images/postres/flan.jpg" 
                alt="Flan de Caramelo"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="flex items-start justify-between gap-4 mb-3">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1b1c1a] leading-tight">
                Flan de Caramelo
              </h2>
              <span className="text-3xl sm:text-4xl font-black text-[#6f4014] whitespace-nowrap">
                $7.00
              </span>
            </div>
            <p className="text-[#51443b] text-base sm:text-lg leading-relaxed mb-6">
              Tradicional flan casero con caramelo artesanal.
            </p>
            <div className="space-y-3 mb-6 pb-6 border-b border-[#e8e5e1]">
              <div>
                <span className="text-[0.65rem] font-bold tracking-widest text-[#6f4014] block mb-1">
                  INGREDIENTES
                </span>
                <span className="text-sm text-[#51443b]">
                  Leche fresca, Huevos, Azúcar caramelizada
                </span>
              </div>
              <div>
                <span className="text-[0.65rem] font-bold tracking-widest text-[#6f4014] block mb-1">
                  INFORMACIÓN
                </span>
                <span className="text-sm text-[#51443b]">
                  Receta de la abuela, Textura suave
                </span>
              </div>
            </div>
            <button className="w-full sm:w-auto px-8 py-3.5 bg-[#6f4014] text-white rounded-full font-bold text-sm tracking-wider hover:bg-[#8b5a1a] transition-colors">
              AÑADIR RÁPIDO
            </button>
          </article>

          {/* Producto 6 */}
          <article className="group">
            <div className="relative mb-6 overflow-hidden rounded-2xl bg-[#f5f1eb] aspect-[4/3]">
              <span className="absolute top-4 right-4 bg-[#6f4014] text-white px-4 py-1.5 rounded-full text-xs font-bold tracking-wider z-10">
                POPULAR
              </span>
              <img 
                src="/images/postres/profiteroles.jpg" 
                alt="Profiteroles"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="flex items-start justify-between gap-4 mb-3">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1b1c1a] leading-tight">
                Profiteroles
              </h2>
              <span className="text-3xl sm:text-4xl font-black text-[#6f4014] whitespace-nowrap">
                $13.00
              </span>
            </div>
            <p className="text-[#51443b] text-base sm:text-lg leading-relaxed mb-6">
              Bolitas de masa choux rellenas de crema pastelera y bañadas en chocolate.
            </p>
            <div className="space-y-3 mb-6 pb-6 border-b border-[#e8e5e1]">
              <div>
                <span className="text-[0.65rem] font-bold tracking-widest text-[#6f4014] block mb-1">
                  INGREDIENTES
                </span>
                <span className="text-sm text-[#51443b]">
                  Crema pastelera, Chocolate, Masa choux
                </span>
              </div>
              <div>
                <span className="text-[0.65rem] font-bold tracking-widest text-[#6f4014] block mb-1">
                  INFORMACIÓN
                </span>
                <span className="text-sm text-[#51443b]">
                  Crujientes por fuera, Relleno cremoso
                </span>
              </div>
            </div>
            <button className="w-full sm:w-auto px-8 py-3.5 bg-[#6f4014] text-white rounded-full font-bold text-sm tracking-wider hover:bg-[#8b5a1a] transition-colors">
              AÑADIR RÁPIDO
            </button>
          </article>
        </div>
      </main>
    </div>
  );
}