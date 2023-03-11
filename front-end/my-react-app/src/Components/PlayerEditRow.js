import { useState, useEffect } from "react";


export default function PlayerEditRow(data) {
  const [jogador, setJogador] = useState({ nome: data.jogador.nome, idade: data.jogador.idade});
  const [times, setTimes] = useState();
  const url = "http://localhost:3002/jogadores/";
  useEffect(() => {
    fetch("http://localhost:3002/times")
      .then((response) => response.json())
      .then((data) => {
        setTimes(data);
      });
  }, []);

  const handleChange = (e) => {
    const fieldName = e.target.name;

    setJogador({
      ...jogador,
      [fieldName]: e.target.value,
    });
  };

  const update = async () => {
      await fetch(url + data.jogador.id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(jogador),
    });
  }
  return(
    <div>
      <form className="flex flex-col">
      <label className="md:text-lg text-left">
            Nome:
            <input
              className="rounded-sm block mt-1 p-1 h-8 w-full"
              type="text"
              name="nome"
              onChange={handleChange}
              value={jogador.nome}
            />
          </label>
          <label className="md:text-lg text-left">
            idade:
            <input
              className="rounded-sm block mt-1 p-1 h-8 w-full"
              type="text"
              name="idade"
              onChange={handleChange}
              value={jogador.idade}
            />
          </label>
          <label className="md:text-lg text-left">
            Time:
            <select
              className="rounded-sm block mt-1 p-1 h-8 w-full"
              name="time_id"
              onChange={handleChange}
              value={jogador.time}
              required
            >
              <option value="" selected disabled hidden>Escolha aqui</option>
              {times ?
              times.map(time => (
                <option value={time.id}>{time.nome}</option>
              ))
              : null}
            </select>
          </label>
          <button
          className="rounded-sm text-white bg-lime-800 py-1.5 mt-2"
          onClick={() => update()}>
            Salvar
          </button>
      </form>
    </div>
  );
}