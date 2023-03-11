import Menu from "../Components/Menu";
import { useState, useEffect } from "react";

export default function CriarJogador() {
  const [times, setTimes] = useState();
  const [message, setMessage] = useState();
  const [jogador, setJogador] = useState({
    nome: "",
    idade: "",
    time_id: "",
  });

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

  const url = "http://localhost:3002/jogadores";
  const submit = async (e) => {
    e.preventDefault();

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(jogador),
    });
    const { message = "" } = await response.json();
    setMessage(message);
    setJogador({
      nome: "",
      idade: "",
      time_id: "",
    });
  };

  const clearMessage = () => {
    setMessage(false);
  }

  return (
    <div>
      <div>
        <Menu />
      </div>
      <div className="flex flex-col rounded-sm bg-zinc-200 text-center p-10 mt-11 mr-auto ml-auto w-1/2">
        <h1 className="text-lg md:text-3xl p-1 md:p-5">Criar Jogador</h1>
        <form className="flex flex-col" onSubmit={submit}>
          <label className="md:text-lg px-2 py-1 text-left">
            Nome:
            <input
              className="rounded-sm block w-full h-7"
              type="text"
              name="nome"
              onChange={handleChange}
              onFocus={clearMessage}
              value={jogador.nome}
              required
            />
          </label>
          <label className="md:text-lg px-2 py-1 text-left">
            Idade:
            <input
              className="md:rounded-sm block w-full h-7"
              type="number"
              min="6"
              max="99"
              name="idade"
              onChange={handleChange}
              value={jogador.idade}
              required
            />
          </label>
          <label className="md:text-lg px-2 py-1 text-left">
            Time:
            <select
              className="rounded-sm block w-full h-7"
              name="time_id"
              onChange={handleChange}
              value={jogador.time_id}
              required
            >
              <option value="" selected disabled hidden>
                Escolha aqui
              </option>
              {times
                ? times.map((time) => (
                    <option value={time.id}>{time.nome}</option>
                  ))
                : null}
            </select>
          </label>
          <input
            className="mx-2 mt-3 p-1 md:p-2 rounded-sm text-white bg-lime-800"
            type="submit"
            value="Criar"
          />
          <div className="p-2">{message ? message : null}</div>
        </form>
      </div>
    </div>
  );
}
