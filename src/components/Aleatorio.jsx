import { useState, useEffect, useCallback } from "react";
import { TfiTwitterAlt, TfiTumblrAlt } from "react-icons/tfi";
import { BsWhatsapp, BsDash } from "react-icons/bs";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import { lista } from "./frases";
import "../index.css";
import { colorRGB } from "./color";

function Aleatorio() {
  const [obj, setObj] = useState(lista);
  const [number, setNumber] = useState(0);
  const size = Object.keys(obj).length;
  const [link, setLink] = useState("");
  const [frases, setFrases] = useState("");
  const [autor, setAutor] = useState("");
  const [color, setColor] = useState("");
  const style = { color: color };
  const styleico = { background: color };
  const [http, setHttp] = useState("http://");
  const num = useCallback(() => {
    setNumber(Math.floor(Math.random() * size));
  }, []);

  const cached = useCallback(() => {
    setFrases(obj[number].frase);
    setAutor(obj[number].autor);
    setColor(colorRGB());
  });

  useEffect(() => {
    if (number <= size) {
      num();
    }
    setLink("");
  }, []);

  useEffect(() => {
    cached();
    return () => setLink("");
  }, [number]);

  useEffect(() => {
    document.title = `Frase de ${autor}`;
    document.body.style.backgroundColor = color;
    setLink(`${encodeURIComponent(frases  + "    Autor: " + autor)}`);
  }, [frases, autor]);

  return (
    <div className="container">
      <div className="fraseAutor">
        <div className="parrafo" style={style}>
          <ImQuotesLeft className="ico" />
          {frases}
          <ImQuotesRight className="ico" />
        </div>

        <p className="autor" style={style}>
          <BsDash className="ico" style={style} />
          {autor}
        </p>
      </div>
      <div className="compartir">
        <a href={"https://twitter.com/compose/tweet?text=" + link}target="_blank">
          <TfiTwitterAlt style={style} className="ico" />
        </a>
        <a href={http + "api.whatsapp.com/send?text=" + link}target="_blank">
          <TfiTumblrAlt style={style} className="ico" />
        </a>
        <a href={http + "api.whatsapp.com/send?text=" + link}target="_blank">
          <BsWhatsapp style={style} className="ico" />
        </a>
      </div>
      <div className="boton">
        <button style={styleico} onClick={() => setNumber(num)}>
          Siguiente
        </button>
      </div>
    </div>
  );
}

export default Aleatorio;
