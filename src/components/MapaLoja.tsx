"use client";

import "maplibre-gl/dist/maplibre-gl.css";
import { useEffect, useRef, useState } from "react";
import type { Map as MapLibreMap } from "maplibre-gl";
import { LOJA_COORD } from "@/lib/loja";

/** Base escura da OpenFreeMap (grátis, sem chave), repintada com as cores da loja. */
const ESTILO = "https://tiles.openfreemap.org/styles/dark";
const VOLT = "#f6f05a";

const PINTURA: [string, string, unknown][] = [
  ["background", "background-color", "#0b0b0b"],
  ["water", "fill-color", "#0f2233"],
  ["waterway", "line-color", "#13293c"],
  ["landuse_park", "fill-color", "#17220f"],
  ["landcover_wood", "fill-color", "#17220f"],
  ["landuse_residential", "fill-color", "#121212"],
  ["building", "fill-color", "#171717"],
  ["building", "fill-outline-color", "#232323"],
  ["highway_path", "line-color", "#262626"],
  ["highway_minor", "line-color", "#262626"],
  ["highway_major_casing", "line-color", "rgba(246,240,90,0.18)"],
  ["highway_major_inner", "line-color", "#3a3818"],
  ["highway_major_subtle", "line-color", "#3a3818"],
  ["highway_motorway_casing", "line-color", "rgba(246,240,90,0.35)"],
  ["highway_motorway_inner", "line-color", "#6d6a22"],
  ["highway_motorway_subtle", "line-color", "#6d6a22"],
  ["railway", "line-color", "#2c2c2c"],
  ["highway_name_other", "text-color", "#8a8a8a"],
  ["highway_name_motorway", "text-color", "#c9c46a"],
];

export function MapaLoja({ rotaHref }: { rotaHref: string }) {
  const box = useRef<HTMLDivElement>(null);
  const mapRef = useRef<MapLibreMap | null>(null);
  const [pronto, setPronto] = useState(false);

  useEffect(() => {
    const el = box.current;
    if (!el) return;
    let cancelado = false;
    // Só baixa a biblioteca e os mapas quando o bloco chega perto da tela.
    const io: IntersectionObserver = new IntersectionObserver(
      async ([entry]) => {
        if (!entry?.isIntersecting) return;
        io.disconnect();
        const maplibregl = (await import("maplibre-gl")).default;
        if (cancelado) return;
        const toque = window.matchMedia("(pointer: coarse)").matches;
        const map = new maplibregl.Map({
          container: el,
          style: ESTILO,
          center: LOJA_COORD,
          zoom: 12.5,
          scrollZoom: false,
          dragRotate: false,
          pitchWithRotate: false,
          dragPan: !toque,
          attributionControl: { compact: true },
        });
        mapRef.current = map;
        map.touchZoomRotate.disableRotation();
        map.addControl(new maplibregl.NavigationControl({ showCompass: false }), "top-right");

        map.on("style.load", () => {
          for (const [layer, prop, value] of PINTURA) {
            try {
              map.setPaintProperty(layer, prop, value);
            } catch {
              /* camada que não existe nesse estilo */
            }
          }
          for (const l of map.getStyle().layers) {
            if (l.type !== "symbol" || l.id.startsWith("highway_name")) continue;
            try {
              map.setPaintProperty(l.id, "text-color", "#9b9b9b");
              map.setPaintProperty(l.id, "text-halo-color", "#0b0b0b");
            } catch {
              /* camada sem texto */
            }
          }
        });

        const pino = document.createElement("div");
        pino.className = "pino";
        pino.innerHTML = `<span class="pino__onda"></span><span class="pino__onda pino__onda--2"></span><span class="pino__cabeca"><img src="/img/logo-portanova.png" alt="" /></span><span class="pino__ponta"></span>`;
        new maplibregl.Marker({ element: pino, anchor: "bottom" }).setLngLat(LOJA_COORD).addTo(map);

        map.once("load", () => {
          setPronto(true);
          // Chega na loja voando, com um pouco de inclinação.
          map.flyTo({ center: LOJA_COORD, zoom: 16.2, pitch: 40, bearing: -12, duration: 3200, essential: true });
        });
      },
      { rootMargin: "200px" },
    );
    io.observe(el);

    return () => {
      cancelado = true;
      io.disconnect();
      mapRef.current?.remove();
      mapRef.current = null;
    };
  }, []);

  return (
    <div className="relative h-[400px] overflow-hidden rounded-2xl border border-volt/45 bg-ink-2 lg:h-[460px]">
      {/* A MapLibre põe position: relative no container, então ele ocupa a altura toda por h-full. */}
      <div ref={box} className="h-full w-full" aria-label="Mapa com a localização da Portanova Cell" role="img" />
      {/* Enquanto carrega, um brilho correndo no lugar do mapa. */}
      <div
        aria-hidden
        className={`pointer-events-none absolute inset-0 bg-[linear-gradient(110deg,transparent_30%,rgba(255,255,255,0.04)_50%,transparent_70%)] bg-[length:200%_100%] transition-opacity duration-700 ${pronto ? "opacity-0" : "animate-[shimmer_1.6s_linear_infinite]"}`}
      />
      <div className={`absolute top-3 left-3 max-w-[calc(100%-5rem)] rounded-xl border border-white/10 bg-ink/85 p-4 backdrop-blur-md transition-all duration-700 sm:top-4 sm:left-4 ${pronto ? "translate-y-0 opacity-100" : "-translate-y-3 opacity-0"}`}>
        <p className="text-[14px] font-extrabold">
          PORTANOVA <span className="text-volt">CELL</span>
        </p>
        <p className="mt-1 text-[12px] text-mute">Av. Brasília, 6759 · Sala 2 · Novo Mundo</p>
        <a
          href={rotaHref}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-flex items-center gap-1.5 text-[12px] font-bold text-volt hover:text-white"
        >
          Traçar rota até a loja ↗
        </a>
      </div>
      <style>{`.pino{position:relative;width:56px;height:70px;display:flex;flex-direction:column;align-items:center;cursor:default}
.pino__cabeca{position:relative;z-index:2;display:grid;place-items:center;width:52px;height:52px;border-radius:999px;background:${VOLT};box-shadow:0 0 0 4px rgba(11,11,11,.9),0 0 34px rgba(246,240,90,.55)}
.pino__cabeca img{width:40px;height:40px;border-radius:999px}
.pino__ponta{width:0;height:0;margin-top:-4px;border-left:9px solid transparent;border-right:9px solid transparent;border-top:16px solid ${VOLT};z-index:1}
.pino__onda{position:absolute;left:50%;bottom:-8px;width:20px;height:8px;margin-left:-10px;border-radius:50%;border:2px solid ${VOLT};animation:pino-onda 2.4s ease-out infinite;opacity:0}
.pino__onda--2{animation-delay:1.2s}
@keyframes pino-onda{0%{transform:scale(1);opacity:.9}100%{transform:scale(6);opacity:0}}
.maplibregl-ctrl-group{border-radius:12px!important;overflow:hidden;background:#0b0b0b!important;box-shadow:none!important;border:1px solid rgba(255,255,255,.12)}
.maplibregl-ctrl-group button{width:38px!important;height:38px!important;background:#0b0b0b!important}
.maplibregl-ctrl-group button+button{border-top:1px solid rgba(255,255,255,.12)!important}
.maplibregl-ctrl-group button:hover{background:#1a1a1a!important}
.maplibregl-ctrl-group .maplibregl-ctrl-icon{filter:invert(1)}
.maplibregl-ctrl-attrib{font-size:10px;background:rgba(11,11,11,.7)!important;color:#888}
.maplibregl-ctrl-attrib a{color:#aaa!important}
.maplibregl-ctrl-attrib-button{filter:invert(1)}`}</style>
    </div>
  );
}
