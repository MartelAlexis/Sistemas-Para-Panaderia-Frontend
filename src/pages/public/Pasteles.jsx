export default function Pasteles() {
    return (
        <div className="min-h-screen bg-[#fbf9f5] text-[#1b1c1a] font-sans selection:bg-[#ffdcc5] selection:text-[#663100]">
        <main className="pt-24 pb-24 px-6 sm:px-8 max-w-7xl mx-auto">
            {/* Hero Header Section */}
            <header className="mb-20 sm:mb-24 flex flex-col md:flex-row gap-8 sm:gap-12 items-end">
            <div className="flex-1">
                <span className="text-xs sm:text-sm uppercase tracking-[0.2em] font-bold text-[#6f4014] opacity-70 block mb-4">
                La Colección de Masa y Fuego
                </span>
                <h1 className="text-5xl sm:text-6xl md:text-8xl font-black tracking-tighter text-[#1b1c1a] leading-[0.95] sm:leading-[0.9]">
                Elaborado con <span className="text-[#944a00] italic font-serif font-medium pr-2">Paciencia</span><br className="hidden sm:block" /> y Fuego.
                </h1>
            </div>
            <div className="max-w-xs text-[#51443b] text-base sm:text-lg leading-relaxed mb-2 sm:mb-4 italic">
                Nuestro horneado diario es un tributo a las artes antiguas. Sin atajos, sin aditivos artificiales: solo harina, agua, sal y la danza lenta de la levadura salvaje.
            </div>
            </header>

            {/* Category Filter Chips */}
            <div className="flex flex-nowrap sm:flex-wrap gap-3 sm:gap-4 mb-16 overflow-x-auto pb-4 scrollbar-hide">
            <button className="cursor-pointer whitespace-nowrap px-6 sm:px-8 py-3 bg-[#6f4014] text-white rounded-full font-bold text-xs sm:text-sm uppercase tracking-widest transition-all duration-300 hover:bg-[#5a3310] hover:shadow-[0_8px_24px_rgba(111,64,20,0.2)] active:scale-95">
                Todo
            </button>
            <button className="cursor-pointer whitespace-nowrap px-6 sm:px-8 py-3 bg-[#f5f3ef] text-[#6f4014] rounded-full font-bold text-xs sm:text-sm uppercase tracking-widest transition-all duration-300 hover:bg-[#eae8e4] active:scale-95">
                Panes
            </button>
            <button className="cursor-pointer whitespace-nowrap px-6 sm:px-8 py-3 bg-[#f5f3ef] text-[#6f4014] rounded-full font-bold text-xs sm:text-sm uppercase tracking-widest transition-all duration-300 hover:bg-[#eae8e4] active:scale-95">
                Pastelería
            </button>
            <button className="cursor-pointer whitespace-nowrap px-6 sm:px-8 py-3 bg-[#f5f3ef] text-[#6f4014] rounded-full font-bold text-xs sm:text-sm uppercase tracking-widest transition-all duration-300 hover:bg-[#eae8e4] active:scale-95">
                Temporada
            </button>
            </div>

            {/* Catalog Bento Grid */}
            <section className="grid grid-cols-1 sm:grid-cols-12 gap-6 sm:gap-8 items-start">
            
            {/* Featured Product: Sourdough (Large Vertical) */}
            <div className="sm:col-span-12 md:col-span-5 group cursor-pointer">
                <div className="bg-[#f5f3ef] overflow-hidden rounded-2xl transition-all duration-500 ease-out hover:-translate-y-1.5 hover:shadow-[0_12px_32px_rgba(27,28,26,0.08)] flex flex-col h-full">
                <div className="aspect-4/5verflow-hidden relative">
                    <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500 z-10" />
                    <img 
                    alt="Masa Madre Rústica Tradicional" 
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" 
                    src="https://images.unsplash.com/photo-1585478259715-876acc5be8eb?auto=format&fit=crop&q=80&w=1200" 
                    />
                </div>
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between bg-[#f5f3ef] z-20 relative">
                    <div>
                    <div className="flex justify-between items-start mb-4 gap-4">
                        <div>
                        <span className="px-3 py-1.5 bg-[#ffdcbd] text-[#623f18] rounded-full text-[10px] font-black uppercase tracking-[0.15em] mb-3 inline-block">
                            Más Vendido
                        </span>
                        <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#6f4014] leading-tight">
                            Masa Madre Rústica Tradicional
                        </h3>
                        </div>
                        <span className="text-xl sm:text-2xl font-bold text-[#944a00] shrink-0 mt-1">
                        $12.00
                        </span>
                    </div>
                    <p className="text-[#51443b] text-base mb-8 leading-relaxed">
                        Nuestra hogaza insignia de fermentación de 48 horas. Una corteza profunda y caramelizada da paso a una miga húmeda y abierta con una compleja acidez láctica.
                    </p>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-xs font-bold uppercase tracking-tight text-[#847469] pt-6 border-t border-[#d6c3b6]/30">
                    <div>
                        <span className="block opacity-60 mb-1.5 text-[10px] tracking-wider">Notas de Cata</span>
                        <span className="text-[#1b1c1a] normal-case tracking-normal font-medium text-sm">Nuez tostada, miel silvestre</span>
                    </div>
                    <div>
                        <span className="block opacity-60 mb-1.5 text-[10px] tracking-wider">Ingredientes</span>
                        <span className="text-[#1b1c1a] normal-case tracking-normal font-medium text-sm">Centeno Orgánico, Sal</span>
                    </div>
                    </div>
                </div>
                </div>
            </div>

            {/* Right Column Grid */}
            <div className="sm:col-span-12 md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                
                {/* Product: Baguettes */}
                <div className="bg-[#f5f3ef] rounded-2xl overflow-hidden group cursor-pointer transition-all duration-500 ease-out hover:-translate-y-1.5 hover:shadow-[0_12px_32px_rgba(27,28,26,0.08)] flex flex-col">
                <div className="aspect-square overflow-hidden relative">
                    <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500 z-10" />
                    <img 
                    alt="Baguette Parisina" 
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" 
                    src="https://images.unsplash.com/photo-1596231940984-7a1eb1d3680e?auto=format&fit=crop&q=80&w=800" 
                    />
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between bg-[#f5f3ef] z-20 relative">
                    <div>
                    <div className="flex justify-between items-baseline mb-2 gap-4">
                        <h4 className="text-xl font-bold text-[#6f4014] leading-tight">Tradición Parisina</h4>
                        <span className="text-lg font-bold text-[#944a00] shrink-0">$5.50</span>
                    </div>
                    <p className="text-[13px] text-[#51443b] mb-6 leading-relaxed italic">
                        Ingredientes: Harina Francesa T65, Sal Marina Gris, Agua de Manantial.
                    </p>
                    </div>
                    <button className="cursor-pointer w-full py-3 bg-white text-[#6f4014] text-xs font-black uppercase tracking-[0.15em] shadow-[0_8px_24px_rgba(27,28,26,0.06)] rounded-xl transition-all duration-300 hover:bg-[#6f4014] hover:text-white active:scale-[0.98]">
                    Añadir Rápido
                    </button>
                </div>
                </div>

                {/* Product: Croissants */}
                <div className="bg-[#f5f3ef] rounded-2xl overflow-hidden group cursor-pointer transition-all duration-500 ease-out hover:-translate-y-1.5 hover:shadow-[0_12px_32px_rgba(27,28,26,0.08)] flex flex-col">
                <div className="aspect-square overflow-hidden relative">
                    <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500 z-10" />
                    <img 
                    alt="Croissant de Miel" 
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" 
                    src="https://images.unsplash.com/photo-1623334044303-241021148842?auto=format&fit=crop&q=80&w=800" 
                    />
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between bg-[#f5f3ef] z-20 relative">
                    <div>
                    <div className="flex justify-between items-baseline mb-2 gap-4">
                        <h4 className="text-xl font-bold text-[#6f4014] leading-tight">Croissant de Miel</h4>
                        <span className="text-lg font-bold text-[#944a00] shrink-0">$4.75</span>
                    </div>
                    <p className="text-[13px] text-[#51443b] mb-6 leading-relaxed italic">
                        81 capas de mantequilla de pastoreo, fermentado en frío por tres días.
                    </p>
                    </div>
                    <button className="cursor-pointer w-full py-3 bg-white text-[#6f4014] text-xs font-black uppercase tracking-[0.15em] shadow-[0_8px_24px_rgba(27,28,26,0.06)] rounded-xl transition-all duration-300 hover:bg-[#6f4014] hover:text-white active:scale-[0.98]">
                    Añadir Rápido
                    </button>
                </div>
                </div>

                {/* Product: Rye Bread (Wide) */}
                <div className="sm:col-span-2 bg-[#f5f3ef] rounded-2xl overflow-hidden flex flex-col md:flex-row group cursor-pointer transition-all duration-500 ease-out hover:-translate-y-1.5 hover:shadow-[0_12px_32px_rgba(27,28,26,0.08)]">
                <div className="md:w-1/2 aspect-video md:aspect-auto overflow-hidden relative">
                    <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500 z-10" />
                    <img 
                    alt="Centeno Oscuro Pumpernickel" 
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" 
                    src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=1000" 
                    />
                </div>
                <div className="md:w-1/2 p-6 sm:p-8 flex flex-col justify-center bg-[#f5f3ef] z-20 relative">
                    <span className="px-3 py-1.5 bg-[#ffdcc5] text-[#713700] rounded-full text-[10px] font-black uppercase tracking-[0.15em] mb-4 self-start">
                    Nuevo
                    </span>
                    <h4 className="text-2xl font-bold text-[#6f4014] mb-3 leading-tight">
                    Pumpernickel de Medianoche
                    </h4>
                    <p className="text-[#51443b] text-sm sm:text-base mb-8 leading-relaxed">
                    Un clásico del norte. Centeno denso y aromático mezclado con melaza oscura y semillas de alcaravea trituradas.
                    </p>
                    <div className="flex justify-between items-center mt-auto">
                    <span className="text-2xl font-bold text-[#944a00]">$14.00</span>
                    <button className="cursor-pointer px-6 py-3 bg-[#6f4014] text-white rounded-xl text-sm font-bold transition-all duration-300 hover:bg-[#5a3310] hover:shadow-lg active:scale-95">
                        Ver Opciones
                    </button>
                    </div>
                </div>
                </div>

            </div>

            {/* ADDED 4 NEW CARDS ROW */}
            <div className="sm:col-span-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mt-2">
                
                {/* New Product 1: Focaccia */}
                <div className="bg-[#f5f3ef] rounded-2xl overflow-hidden group cursor-pointer transition-all duration-500 ease-out hover:-translate-y-1.5 hover:shadow-[0_12px_32px_rgba(27,28,26,0.08)] flex flex-col">
                <div className="aspect-4/3 overflow-hidden relative">
                    <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500 z-10" />
                    <img 
                    alt="Focaccia al Romero" 
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" 
                    src="https://images.unsplash.com/photo-1599723223126-259e5e78ec6a?auto=format&fit=crop&q=80&w=800" 
                    />
                </div>
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between bg-[#f5f3ef] z-20 relative">
                    <div>
                    <div className="flex justify-between items-baseline mb-2 gap-2">
                        <h4 className="text-lg font-bold text-[#6f4014] leading-tight">Focaccia al Romero</h4>
                        <span className="text-base font-bold text-[#944a00] shrink-0">$6.50</span>
                    </div>
                    <p className="text-[13px] text-[#51443b] mb-5 leading-relaxed italic">
                        Aceite de oliva extra virgen, sal marina en escamas y romero fresco.
                    </p>
                    </div>
                    <button className="cursor-pointer w-full py-2.5 bg-white text-[#6f4014] text-[11px] font-black uppercase tracking-[0.15em] shadow-[0_8px_24px_rgba(27,28,26,0.06)] rounded-xl transition-all duration-300 hover:bg-[#6f4014] hover:text-white active:scale-[0.98]">
                    Añadir
                    </button>
                </div>
                </div>

                {/* New Product 2: Pan de Nueces */}
                <div className="bg-[#f5f3ef] rounded-2xl overflow-hidden group cursor-pointer transition-all duration-500 ease-out hover:-translate-y-1.5 hover:shadow-[0_12px_32px_rgba(27,28,26,0.08)] flex flex-col">
                <div className="aspect-4/3 overflow-hidden relative">
                    <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500 z-10" />
                    <img 
                    alt="Hogaza de Nueces y Pasas" 
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" 
                    src="https://images.unsplash.com/photo-1620980922896-e62b08a9462e?auto=format&fit=crop&q=80&w=800" 
                    />
                </div>
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between bg-[#f5f3ef] z-20 relative">
                    <div>
                    <div className="flex justify-between items-baseline mb-2 gap-2">
                        <h4 className="text-lg font-bold text-[#6f4014] leading-tight">Pan de Nueces</h4>
                        <span className="text-base font-bold text-[#944a00] shrink-0">$8.00</span>
                    </div>
                    <p className="text-[13px] text-[#51443b] mb-5 leading-relaxed italic">
                        Masa madre rústica con nueces tostadas y un toque de miel.
                    </p>
                    </div>
                    <button className="cursor-pointer w-full py-2.5 bg-white text-[#6f4014] text-[11px] font-black uppercase tracking-[0.15em] shadow-[0_8px_24px_rgba(27,28,26,0.06)] rounded-xl transition-all duration-300 hover:bg-[#6f4014] hover:text-white active:scale-[0.98]">
                    Añadir
                    </button>
                </div>
                </div>

                {/* New Product 3: Brioche */}
                <div className="bg-[#f5f3ef] rounded-2xl overflow-hidden group cursor-pointer transition-all duration-500 ease-out hover:-translate-y-1.5 hover:shadow-[0_12px_32px_rgba(27,28,26,0.08)] flex flex-col">
                <div className="aspect-4/3 overflow-hidden relative">
                    <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500 z-10" />
                    <img 
                    alt="Trenza de Brioche" 
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" 
                    src="https://images.unsplash.com/photo-1626201389454-e0c90c7416bd?auto=format&fit=crop&q=80&w=800" 
                    />
                </div>
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between bg-[#f5f3ef] z-20 relative">
                    <div>
                    <div className="flex justify-between items-baseline mb-2 gap-2">
                        <h4 className="text-lg font-bold text-[#6f4014] leading-tight">Trenza de Brioche</h4>
                        <span className="text-base font-bold text-[#944a00] shrink-0">$7.50</span>
                    </div>
                    <p className="text-[13px] text-[#51443b] mb-5 leading-relaxed italic">
                        Esponjoso y mantecoso, enriquecido con huevos orgánicos y vainilla real.
                    </p>
                    </div>
                    <button className="cursor-pointer w-full py-2.5 bg-white text-[#6f4014] text-[11px] font-black uppercase tracking-[0.15em] shadow-[0_8px_24px_rgba(27,28,26,0.06)] rounded-xl transition-all duration-300 hover:bg-[#6f4014] hover:text-white active:scale-[0.98]">
                    Añadir
                    </button>
                </div>
                </div>

                {/* New Product 4: Cinnamon Roll */}
                <div className="bg-[#f5f3ef] rounded-2xl overflow-hidden group cursor-pointer transition-all duration-500 ease-out hover:-translate-y-1.5 hover:shadow-[0_12px_32px_rgba(27,28,26,0.08)] flex flex-col">
                <div className="aspect-4/3 overflow-hidden relative">
                    <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500 z-10" />
                    <img 
                    alt="Rollo de Canela Artesanal" 
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" 
                    src="https://images.unsplash.com/photo-1509365465985-25d11c17e812?auto=format&fit=crop&q=80&w=800" 
                    />
                </div>
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between bg-[#f5f3ef] z-20 relative">
                    <div>
                    <div className="flex justify-between items-baseline mb-2 gap-2">
                        <h4 className="text-lg font-bold text-[#6f4014] leading-tight">Rollo de Canela</h4>
                        <span className="text-base font-bold text-[#944a00] shrink-0">$4.50</span>
                    </div>
                    <p className="text-[13px] text-[#51443b] mb-5 leading-relaxed italic">
                        Canela de Ceilán envuelta en masa suave con glaseado de queso crema.
                    </p>
                    </div>
                    <button className="cursor-pointer w-full py-2.5 bg-white text-[#6f4014] text-[11px] font-black uppercase tracking-[0.15em] shadow-[0_8px_24px_rgba(27,28,26,0.06)] rounded-xl transition-all duration-300 hover:bg-[#6f4014] hover:text-white active:scale-[0.98]">
                    Añadir
                    </button>
                </div>
                </div>

            </div>

            </section>

            {/* Seasonal Highlight Section */}
            <section className="mt-24 sm:mt-32 p-8 sm:p-12 md:p-16 bg-[#835b31] rounded-3xl flex flex-col md:flex-row gap-12 sm:gap-16 items-center text-[#ffdab8] relative overflow-hidden group">
            {/* Subtle background decoration */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,var(--tw-gradient-stops))] from-white via-transparent to-transparent pointer-events-none" />
            
            <div className="flex-1 order-2 md:order-1 z-10">
                <h2 className="text-4xl sm:text-5xl font-black mb-6 leading-[1.1] tracking-tight">
                Hogaza de Otoño <br className="hidden sm:block"/> Luna de Cosecha
                </h2>
                <p className="text-base sm:text-lg mb-10 opacity-90 max-w-md leading-relaxed font-medium">
                Nuestra edición limitada de temporada con semillas de calabaza tostadas, arándanos secos y un toque de humo de leña de arce. Disponible solo hasta la primera helada.
                </p>
                <div className="flex flex-wrap items-center gap-6">
                <span className="text-3xl sm:text-4xl font-light tracking-tight">$16.00</span>
                <svg 
                    className="w-8 h-8 opacity-70 group-hover:translate-x-2 transition-transform duration-300" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor" 
                    strokeWidth={1.5}
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
                <button className="cursor-pointer px-8 py-3.5 bg-white text-[#6f4014] rounded-xl font-black uppercase tracking-[0.15em] text-xs sm:text-sm shadow-[0_8px_24px_rgba(27,28,26,0.15)] transition-all duration-300 hover:scale-105 hover:shadow-[0_12px_32px_rgba(27,28,26,0.2)] active:scale-95">
                    Reservar Ahora
                </button>
                </div>
            </div>
            
            <div className="flex-1 order-1 md:order-2 w-full z-10">
                <div className="rounded-2xl overflow-hidden shadow-[0_16px_48px_rgba(27,28,26,0.2)] rotate-2 transition-transform duration-700 ease-out group-hover:rotate-0 group-hover:scale-[1.02]">
                <img 
                    alt="Pan Artesanal de Cosecha" 
                    className="w-full aspect-4/3 object-cover" 
                    src="https://images.unsplash.com/photo-1605691036380-0a020822a969?auto=format&fit=crop&q=80&w=1000" 
                />
                </div>
            </div>
            </section>

        </main>
        </div>
    );
}