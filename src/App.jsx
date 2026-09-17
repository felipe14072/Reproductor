import { useRef, useState } from "react";

function App() {
  const audioRef = useRef(null);

  const [reproduciendo, setReproduciendo] = useState(false);
  const [progreso, setProgreso] = useState(0);

  const reproducirPausar = () => {
    if (reproduciendo) {
      audioRef.current.pause();
      setReproduciendo(false);
    } else {
      audioRef.current.play();
      setReproduciendo(true);
    }
  };

  const actualizarProgreso = () => {
    const audio = audioRef.current;

    if (audio.duration) {
      const porcentaje =
        (audio.currentTime / audio.duration) * 100;

      setProgreso(porcentaje);
    }
  };

  return (
    <main className="reproductor">

      <section className="portada">
        <img
          src={`${import.meta.env.BASE_URL}imgen.jpeg`}
          alt="Portada de la canción"
        />
      </section>

      <section className="informacion">
        <h1>DANIEEELAAAA</h1>
        <p>Tee quieeroooooo</p>
      </section>

      <section className="progreso">
        <div
          className="barra"
          style={{ width: `${progreso}%` }}
        >
          <div className="indicador"></div>
        </div>
      </section>

      <section className="controles">

        <button className="boton-control">
          ⏮
        </button>

        <button
          className="boton-play"
          onClick={reproducirPausar}
        >
          {reproduciendo ? "❚❚" : "▶"}
        </button>

        <button className="boton-control">
          ⏭
        </button>

      </section>

      <audio
        ref={audioRef}
        src={`${import.meta.env.BASE_URL}cancion.mp3`}
        onTimeUpdate={actualizarProgreso}
      />

    </main>
  );
}

export default App;