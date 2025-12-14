import { TextGenerateEffect } from "@/src/shared/components/ui/text-generate-effect";
import { RulerDimensionLine, Rocket, BedDouble  } from "lucide-react"

const words = `BETANCOURT STYLE.`

export default function Home() {
  return (
    <main className="w-full min-h-screen overflow-hidden">
      {/* BACKGROUND */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://i.redd.it/my-loft-apartment-v0-i7tso3im2zod1.jpg?width=4032&format=pjpg&auto=webp&s=06caf7919805ee96267b39ed5a1b6116f40a63ef')",
        }}
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/60" />

      {/* CONTENT GRID */}
      <div className="relative z-10 grid min-h-screen grid-rows-[1fr_auto] px-6 md:px-16">
        
        {/* TOP TEXT */}
        <div className="flex items-center justify-center text-white">
          <TextGenerateEffect words={words} />
        </div>


          <div className="flex justify-between w-full">
            <div className="pb-25">
              <div
                className="
                  flex flex-col
                  justify-between
                  max-w-sm
                  bg-white/45
                  backdrop-blur-[5px]
                  p-6

                "
              >
              
                <h2 className="text-2xl font-bold text-black leading-tight">
                  Servicio de Diseño y Arreglo <br /> Sala · Comedor · Cocina
                </h2>

                <p className="mt-1 text-sm text-neutral-700 leading-relaxed">
                  Transformamos tus espacios principales en ambientes funcionales, estéticos y personalizados.
                  Nuestro equipo de arquitectos y diseñadores crea soluciones a medida que optimizan el espacio, la iluminación y el estilo, adaptándose a tu presupuesto y necesidades reales.
                </p>

                {/* FEATURES */}
                <div className="mt-1 grid grid-cols-3 gap-1 text-center text-xs font-medium text-neutral-800">
                  <div className="flex flex-col items-center gap-1">
                    <RulerDimensionLine />
                    <span>DISEÑO PROFESIONAL</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <Rocket />
                    <span>OPTIMIZACIÓN DEL ESPACIO</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <BedDouble />
                    <span>ESTILO Y FUNCIONALIDAD</span>
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-4 flex items-center justify-between">
                  <button className="flex items-center gap-1 bg-black text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-neutral-900 transition">
                    COTIZAR PROYECTO
                    <span className="text-lg">→</span>
                  </button>

                  <div className="flex items-center gap-1 text-orange-400 text-sm">
                    ★★★★★
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-40 ">
              <div
                className="
                  flex flex-col
                  justify-between
                  max-w-sm
                  bg-white/45
                  backdrop-blur-[5px]
                  p-6
                  
                "
              >
              
          
                <p className="mt-1 text-sm text-neutral-700 leading-relaxed">
                  “Muy buena experiencia con esta empresa. Ofrecen productos de calidad, diseños atractivos y un servicio al cliente atento y profesional. Ideal para proyectos de construcción y remodelación.”
                </p>
          
                
          
                {/* CTA */}
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex text-sm gap-3">
                    <span>Tom Aspinall</span>
                    <span className="bg-black px-3 text-white">Verificado</span>
                  </div>
          
                  <div className="flex items-center gap-1 text-orange-400 text-sm">
                    ★★★★★
                  </div>
                </div>
              </div>
            </div>

          </div>

      </div>
    </main>
  );
}
