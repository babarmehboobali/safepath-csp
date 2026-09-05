import { useEffect, useState } from "react";
import { readMediaQuality, writeMediaQuality, type MediaQuality } from "@/lib/safepath/media-pref";

export function Clip({
  src,
  poster,
  title = "Clip",
}: {
  src?: string;
  poster: string;
  title?: string;
}) {
  const [quality, setQuality] = useState<MediaQuality>("tap");
  const [play, setPlay] = useState(false);

  useEffect(() => {
    const apply = () => {
      const q = readMediaQuality();
      setQuality(q);
      setPlay(q === "full");
    };
    apply();
    window.addEventListener("safepath-media", apply);
    return () => window.removeEventListener("safepath-media", apply);
  }, [src]);

  const showVideo = Boolean(src) && quality !== "poster" && play;

  return (
    <div className="sp-clip">
      {showVideo ? (
        <video className="sp-clip-el" autoPlay muted loop playsInline preload="metadata" poster={poster} src={src} />
      ) : (
        <img src={poster} alt="" className="sp-clip-el" />
      )}
      {src && quality !== "poster" && !play ? (
        <button type="button" className="sp-clip-play" onClick={() => setPlay(true)}>
          Play {title}
        </button>
      ) : null}
    </div>
  );
}

export function MediaQualityPicker() {
  const [quality, setQuality] = useState<MediaQuality>("tap");
  useEffect(() => {
    setQuality(readMediaQuality());
    const apply = () => setQuality(readMediaQuality());
    window.addEventListener("safepath-media", apply);
    return () => window.removeEventListener("safepath-media", apply);
  }, []);
  return (
    <label className="flex items-center gap-2 text-xs text-fg-muted">
      Video
      <select
        className="sp-field max-w-[9.5rem] py-1 text-xs"
        value={quality}
        onChange={(e) => {
          const next = e.target.value as MediaQuality;
          setQuality(next);
          writeMediaQuality(next);
        }}
      >
        <option value="poster">Still only</option>
        <option value="tap">Tap to play</option>
        <option value="full">Auto play</option>
      </select>
    </label>
  );
}
