export default function Postres() {
  return (
    <div className="min-h-screen bg-[#fbf9f5] text-[#1b1c1a] font-sans selection:bg-[#ffdcc5] selection:text-[#663100]">
      <main className="pt-24 pb-24 px-6 sm:px-8 max-w-7xl mx-auto">
        {/* Hero Header Section */}
        <header className="mb-20 sm:mb-24 flex flex-col md:flex-row gap-8 sm:gap-12 items-end">
          <div className="flex-1">
            <span className="text-xs sm:text-sm uppercase tracking-[0.2em] font-bold text-[#6f4014] opacity-70 block mb-4">
               PASTELERIA FINA BRISELLI
            </span>
            <h1 className="text-5xl sm:text-6xl md:text-8xl font-black tracking-tighter text-[#1b1c1a] leading-[0.95] sm:leading-[0.9]">
              Elaborado con <span className="text-[#944a00] italic font-serif font-medium pr-2">Dulzura</span><br className="hidden sm:block" /> y Amor.
            </h1>
          </div>
          <div className="max-w-xs text-[#51443b] text-base sm:text-lg leading-relaxed mb-2 sm:mb-4 italic">
            Cada postre es una obra de arte. Creamos delicias que endulzan momentos especiales con ingredientes premium y recetas tradicionales perfeccionadas con el tiempo.
          </div>
        </header>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {/* Producto 1 */}
          <article className="group">
            <div className="relative mb-6 overflow-hidden rounded-2xl bg-[#f5f1eb] aspect-[4/3]">
              <span className="absolute top-4 right-4 bg-[#6f4014] text-white px-4 py-1.5 rounded-full text-xs font-bold tracking-wider z-10">
                POPULAR
              </span>
              <img 
                src="https://scontent-lim1-1.xx.fbcdn.net/v/t39.30808-6/649514282_1541653711294103_4120625557878409919_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=7b2446&_nc_ohc=_8jOzcR3vgIQ7kNvwHIVVAG&_nc_oc=AdrWo1xfl3Q5_JewGEuMbPTlHdaCjD_5l9G5DVBwQ4edURxCXz9CROrM82GK-gNq334&_nc_zt=23&_nc_ht=scontent-lim1-1.xx&_nc_gid=E4MCiHLmRAERrrxdhAldEA&_nc_ss=7b2a8&oh=00_Af09nRaFM49k2n-zjor0Rrn_Q5Rp4KX9zLgLsAF0IjoYJQ&oe=69F85025" 
                alt="Cheesecake de Frambuesa"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="flex items-start justify-between gap-4 mb-3">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1b1c1a] leading-tight">
                Cheesecake de Fresa
              </h2>
              <span className="text-3xl sm:text-4xl font-black text-[#6f4014] whitespace-nowrap">
                S/18.00
              </span>
            </div>
            <p className="text-[#51443b] text-base sm:text-lg leading-relaxed mb-6">
              Suave cheesecake con base de galleta, cubierto con fresas frescas, glaseado de fresa y un delicado toque de crema chantilly.
            </p>
            <div className="space-y-3 mb-6 pb-6 border-b border-[#e8e5e1]">
              <div>
                <span className="text-[0.65rem] font-bold tracking-widest text-[#6f4014] block mb-1">
                  INGREDIENTES
                </span>
                <span className="text-sm text-[#51443b]">
                  Queso crema, fresas frescas, galleta, mantequilla, azúcar, crema chantilly, glaseado de fresa.
                </span>
              </div>
              <div>
                <span className="text-[0.65rem] font-bold tracking-widest text-[#6f4014] block mb-1">
                  INFORMACIÓN
                </span>
                <span className="text-sm text-[#51443b]">
                  Textura cremosa, sabor fresco y equilibrado, ideal para los amantes de las frutas.
                </span>
              </div>
            </div>
            <button className="w-full sm:w-auto px-8 py-3.5 bg-[#6f4014] text-white rounded-full font-bold text-sm tracking-wider hover:bg-[#8b5a1a] transition-colors">
              AÑADIR AL CARRITO
            </button>
          </article>

          {/* Producto 2 */}
          <article className="group">
            <div className="relative mb-6 overflow-hidden rounded-2xl bg-[#f5f1eb] aspect-[4/3]">
              <img 
                src="https://scontent-lim1-1.xx.fbcdn.net/v/t39.30808-6/619120779_1502410635218411_5840259771253580548_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=7b2446&_nc_ohc=iCGWY-GxdTgQ7kNvwEPSvtX&_nc_oc=AdqamdPq6YbjhSQA2ac_UXVJznE5q8OM4oAPOJtvlbEzv70xumipEr00X-sgYnFQpIs&_nc_zt=23&_nc_ht=scontent-lim1-1.xx&_nc_gid=jVSyogjv1T5BklxJq-MIWw&_nc_ss=7b2a8&oh=00_Af2aCZS8CjGhsxNpcv_Umt7SAfjYhYT5qwEftIjjxwUPxA&oe=69F8401B" 
                alt="Rolls de Canela con Chips de Chocolate"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="flex items-start justify-between gap-4 mb-3">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1b1c1a] leading-tight">
                Rolls con Chips de Chocolate
              </h2>
              <span className="text-3xl sm:text-4xl font-black text-[#6f4014] whitespace-nowrap">
                S/12.50
              </span>
            </div>
            <p className="text-[#51443b] text-base sm:text-lg leading-relaxed mb-6">
              Rolls de canela cubiertos con glaseado y decorados con deliciosos chips de chocolate.
            </p>
            <div className="space-y-3 mb-6 pb-6 border-b border-[#e8e5e1]">
              <div>
                <span className="text-[0.65rem] font-bold tracking-widest text-[#6f4014] block mb-1">
                  INGREDIENTES
                </span>
                <span className="text-sm text-[#51443b]">
                  Harina, mantequilla, azúcar, canela, levadura, leche, huevos, glaseado de vainilla, chips de chocolate.
                </span>
              </div>
              <div>
                <span className="text-[0.65rem] font-bold tracking-widest text-[#6f4014] block mb-1">
                  INFORMACIÓN
                </span>
                <span className="text-sm text-[#51443b]">
                  Masa suave y aromática, con un equilibrio perfecto entre dulzura y sabor especiado.
                </span>
              </div>
            </div>
            <button className="w-full sm:w-auto px-8 py-3.5 bg-[#6f4014] text-white rounded-full font-bold text-sm tracking-wider hover:bg-[#8b5a1a] transition-colors">
              AÑADIR AL CARRITO
            </button>
          </article>

          {/* Producto 3 */}
          <article className="group">
            <div className="relative mb-6 overflow-hidden rounded-2xl bg-[#f5f1eb] aspect-[4/3]">
              <img 
                src="https://scontent-lim1-1.xx.fbcdn.net/v/t39.30808-6/619285440_1502410648551743_8807975528775788450_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=7b2446&_nc_ohc=BGjAkktAXvsQ7kNvwFCGWu9&_nc_oc=Ado7aSBBlRyaH22xdK-Nei5Ddlwh5RW_TmHoYYhGYRdENJuQPeuBonqddOaxTo2u8XE&_nc_zt=23&_nc_ht=scontent-lim1-1.xx&_nc_gid=k5NJJOhEvHmONODEZ2kMwA&_nc_ss=7b2a8&oh=00_Af1-FtLPcoHQuIYZPNAvRZ2UvfnuIRV_UT54ceqVuhg8RQ&oe=69F84A7C" 
                alt="Brownie con Helado"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="flex items-start justify-between gap-4 mb-3">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1b1c1a] leading-tight">
                Cañitas de Manjar
              </h2>
              <span className="text-3xl sm:text-4xl font-black text-[#6f4014] whitespace-nowrap">
                S/9.50
              </span>
            </div>
            <p className="text-[#51443b] text-base sm:text-lg leading-relaxed mb-6">
              Crujientes rollitos de hojaldre rellenos con abundante manjar blanco y espolvoreados con azúcar en polvo.
            </p>
            <div className="space-y-3 mb-6 pb-6 border-b border-[#e8e5e1]">
              <div>
                <span className="text-[0.65rem] font-bold tracking-widest text-[#6f4014] block mb-1">
                  INGREDIENTES
                </span>
                <span className="text-sm text-[#51443b]">
                  Harina, mantequilla, huevos, manjar blanco, azúcar en polvo.
                </span>
              </div>
              <div>
                <span className="text-[0.65rem] font-bold tracking-widest text-[#6f4014] block mb-1">
                  INFORMACIÓN
                </span>
                <span className="text-sm text-[#51443b]">
                  Exterior crocante, relleno cremoso y dulce, una clásica delicia tradicional.
                </span>
              </div>
            </div>
            <button className="w-full sm:w-auto px-8 py-3.5 bg-[#6f4014] text-white rounded-full font-bold text-sm tracking-wider hover:bg-[#8b5a1a] transition-colors">
              AÑADIR AL CARRITO
            </button>
          </article>

          {/* Producto 4 */}
          <article className="group">
            <div className="relative mb-6 overflow-hidden rounded-2xl bg-[#f5f1eb] aspect-[4/3]">
              <span className="absolute top-4 right-4 bg-[#6f4014] text-white px-4 py-1.5 rounded-full text-xs font-bold tracking-wider z-10">
                NUEVO
              </span>
              <img 
                src="https://scontent-lim1-1.xx.fbcdn.net/v/t39.30808-6/608849094_1484520380340770_5071488719152032345_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=7b2446&_nc_ohc=N2JFv69e8n4Q7kNvwH4T-yc&_nc_oc=Ado6Zfl5RVB49xB4KpPOtBNbqbENpA3NvRzvI7VGvO5v8bFQCCxMd4xYEj_OfjOnOH8&_nc_zt=23&_nc_ht=scontent-lim1-1.xx&_nc_gid=WB8EOZ4TbWS2Bw35HvsAPw&_nc_ss=7b2a8&oh=00_Af1tcx-GzeuRZqEMXf1XcoYL608S7DrGIQO9eunwBrBoYA&oe=69F84D1D" 
                alt="Tarta de Limón"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="flex items-start justify-between gap-4 mb-3">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1b1c1a] leading-tight">
                Galletas de Mantequilla con Guinda
              </h2>
              <span className="text-3xl sm:text-4xl font-black text-[#6f4014] whitespace-nowrap">
                S/11.00
              </span>
            </div>
            <p className="text-[#51443b] text-base sm:text-lg leading-relaxed mb-6">
              Delicadas galletas de mantequilla, suaves y aromáticas, decoradas con una dulce guinda en el centro.
            </p>
            <div className="space-y-3 mb-6 pb-6 border-b border-[#e8e5e1]">
              <div>
                <span className="text-[0.65rem] font-bold tracking-widest text-[#6f4014] block mb-1">
                  INGREDIENTES
                </span>
                <span className="text-sm text-[#51443b]">
                  Harina, mantequilla, azúcar, huevos, esencia de vainilla, guinda.
                </span>
              </div>
              <div>
                <span className="text-[0.65rem] font-bold tracking-widest text-[#6f4014] block mb-1">
                  INFORMACIÓN
                </span>
                <span className="text-sm text-[#51443b]">
                  Textura suave y ligeramente crujiente, con un sabor clásico y elegante.
                </span>
              </div>
            </div>
            <button className="w-full sm:w-auto px-8 py-3.5 bg-[#6f4014] text-white rounded-full font-bold text-sm tracking-wider hover:bg-[#8b5a1a] transition-colors">
              AÑADIR AL CARRITO 
            </button>
          </article>

          {/* Producto 5 */}
          <article className="group">
            <div className="relative mb-6 overflow-hidden rounded-2xl bg-[#f5f1eb] aspect-[4/3]">
              <img 
                src="https://scontent-lim1-1.xx.fbcdn.net/v/t39.30808-6/492756468_1254704973322313_5267312312456129657_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=7b2446&_nc_ohc=Pao4VrQOPCYQ7kNvwEqqGd3&_nc_oc=Adon_MobBW7RHiIKIwylmqWEf6FG-QcwvtW3ksIBxyEZQRC7RRDtaGTQPiCrjNOk8LE&_nc_zt=23&_nc_ht=scontent-lim1-1.xx&_nc_gid=IZ1lXnN4Fiv_GL7AseJ9Ww&_nc_ss=7b2a8&oh=00_Af0lqrosY1vJljMjofSevK7YOW8KQytWVLIJ5RWQoCMntw&oe=69F83DCC" 
                alt="Flan de Caramelo"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="flex items-start justify-between gap-4 mb-3">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1b1c1a] leading-tight">
                Vasos de postre surtidos
              </h2>
              <span className="text-3xl sm:text-4xl font-black text-[#6f4014] whitespace-nowrap">
                S/7.00
              </span>
            </div>
            <p className="text-[#51443b] text-base sm:text-lg leading-relaxed mb-6">
              Deliciosos postres en vaso con capas de crema, chocolate, gelatina y frutas, ideales para disfrutar en porciones individuales.
            </p>
            <div className="space-y-3 mb-6 pb-6 border-b border-[#e8e5e1]">
              <div>
                <span className="text-[0.65rem] font-bold tracking-widest text-[#6f4014] block mb-1">
                  INGREDIENTES
                </span>
                <span className="text-sm text-[#51443b]">
                  Crema pastelera, chocolate, gelatina, frutas (como fresa o cereza), bizcocho o galleta triturada, azúcar, crema chantilly.
                </span>
              </div>
              <div>
                <span className="text-[0.65rem] font-bold tracking-widest text-[#6f4014] block mb-1">
                  INFORMACIÓN
                </span>
                <span className="text-sm text-[#51443b]">
                  Variedad de sabores y texturas en un solo formato práctico. Perfectos para antojos rápidos o eventos.
                </span>
              </div>
            </div>
            <button className="w-full sm:w-auto px-8 py-3.5 bg-[#6f4014] text-white rounded-full font-bold text-sm tracking-wider hover:bg-[#8b5a1a] transition-colors">
              AÑADIR AL CARRITO 
            </button>
          </article>

          {/* Producto 6 */}
          <article className="group">
            <div className="relative mb-6 overflow-hidden rounded-2xl bg-[#f5f1eb] aspect-[4/3]">
              <span className="absolute top-4 right-4 bg-[#6f4014] text-white px-4 py-1.5 rounded-full text-xs font-bold tracking-wider z-10">
                POPULAR
              </span>
              <img 
                src="https://scontent-lim1-1.xx.fbcdn.net/v/t39.30808-6/662591386_1566583222134485_1736429201353428355_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=7b2446&_nc_ohc=UQMxw45VangQ7kNvwGRmVeO&_nc_oc=Adr8zb2QshUVlVszAc3zGJz7HCXp1KCdV_B9OMHFPaUKncWSh2CLt0aota0nSNywTco&_nc_zt=23&_nc_ht=scontent-lim1-1.xx&_nc_gid=XEV_es6up5Rs-dAgVD7ung&_nc_ss=7b2a8&oh=00_Af1u1jnffPi7syhti8zmfvns0gYEZGWgGvvh5oXLuDerDw&oe=69F834B0" 
                alt="Profiteroles"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="flex items-start justify-between gap-4 mb-3">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1b1c1a] leading-tight">
                Copas de crema y gelatina
              </h2>
              <span className="text-3xl sm:text-4xl font-black text-[#6f4014] whitespace-nowrap">
                S/13.00
              </span>
            </div>
            <p className="text-[#51443b] text-base sm:text-lg leading-relaxed mb-6">
              Suaves copas de crema combinadas con gelatina y decoradas con crema chantilly y cereza.
            </p>
            <div className="space-y-3 mb-6 pb-6 border-b border-[#e8e5e1]">
              <div>
                <span className="text-[0.65rem] font-bold tracking-widest text-[#6f4014] block mb-1">
                  INGREDIENTES
                </span>
                <span className="text-sm text-[#51443b]">
                  Crema pastelera, gelatina de sabores (como limón o piña), crema chantilly, cereza en almíbar, base de bizcocho o galleta.
                </span>
              </div>
              <div>
                <span className="text-[0.65rem] font-bold tracking-widest text-[#6f4014] block mb-1">
                  INFORMACIÓN
                </span>
                <span className="text-sm text-[#51443b]">
                  Postre ligero y refrescante, con presentación atractiva y sabor equilibrado.
                </span>
              </div>
            </div>
            <button className="w-full sm:w-auto px-8 py-3.5 bg-[#6f4014] text-white rounded-full font-bold text-sm tracking-wider hover:bg-[#8b5a1a] transition-colors">
              AÑADIR AL CARRITO
            </button>
          </article>
        </div>
      </main>
    </div>
  );
}