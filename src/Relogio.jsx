import { useState, useEffect } from "react";

const Relogio = () => {
  const [timezone, setTimezone] = useState("America/Sao_Paulo");
  const [hora, setHora] = useState(
    new Intl.DateTimeFormat("pt-BR", {
      timeZone: timezone,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    }).format(new Date())
  );

  const timezones = [
    { label: "Brasília (UTC-3)", value: "America/Sao_Paulo" },
    { label: "Nova York (UTC-5)", value: "America/New_York" },
    { label: "Londres (UTC+0)", value: "Europe/London" },
    { label: "Tóquio (UTC+9)", value: "Asia/Tokyo" },
  ];

  useEffect(() => {
    const intervalo = setInterval(() => {
      setHora(
        new Intl.DateTimeFormat("pt-BR", {
          timeZone: timezone,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        }).format(new Date())
      );
    }, 1000);

    return () => clearInterval(intervalo);
  }, [timezone]);

  return (
    <>
      <h2>Relógio</h2>
      <select
        value={timezone}
        onChange={(e) => setTimezone(e.target.value)}
        className="timezone-select"
      >
        {timezones.map((tz) => (
          <option key={tz.value} value={tz.value}>
            {tz.label}
          </option>
        ))}
      </select>
      <p className="relogio-hora">
        🕒 Hora atual em {timezone.split("/")[1].replace("_", " ")}: {hora}
      </p>
    </>
  );
};

export default Relogio;