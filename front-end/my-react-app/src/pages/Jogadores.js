import Menu from "../Components/Menu";
import { useState, useEffect } from "react";
import PlayerEditRow from "../Components/PlayerEditRow";

export default function Jogadores() {
  const coluna = ["Nome", "Idade", "Time", ""];
  const [jogadores, setJogadores] = useState();
  const [edit, setEdit] = useState();
  const url = "http://localhost:3002/jogadores/";

  useEffect(() => {
    fetch("http://localhost:3002/jogadores")
      .then((response) => response.json())
      .then((data) => {
        setJogadores(data);
      });
  }, []);

  const deletePlayer = async (id) => {
    await fetch(url + id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const updatedPlayers = jogadores.filter((jogador) => jogador.id !== id)
    setJogadores(updatedPlayers);
  };

  const updatePlayer = (jogador) => {
    setEdit(jogador)
  }

  const closeEdit = (time) => {
    setEdit(false);
  };

  return (
    <div>
      <div>
        <Menu />
      </div>
      <div className="flex justify-center rounded-sm bg-zinc-200 text-center mt-4 md:mr-auto md:ml-auto md:w-1/2">
        {jogadores ? (
          <table className="w-full">
            <thead>
              <tr className="bg-lime-800 text-white h-14">
                {coluna.map((item) => (
                  <th className="md:p-3">{item}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {jogadores.length ? jogadores.map(({ id, nome = "", idade = "", time = "" }) => (
                <tr className="h-14 even:bg-zinc-400" key={id}>
                  <td className="md:p-3">{nome}</td>
                  <td className="md:p-3">{idade}</td>
                  <td className="md:p-3">{time}</td>
                  <td className="md:p-3">
                    <button
                      className="hover:text-lime-800 mr-3"
                      onClick={() => updatePlayer({ id, nome, idade, time })}
                    >
                      Editar
                    </button>
                    <button
                      className="hover:text-red-700"
                      onClick={() => deletePlayer(id)}
                    >
                      Excluir
                    </button>
                  </td>
                </tr>
              )) :
              <tr>
                <td colSpan={3}>Nenhum Jogador resgistrado</td>
              </tr>
              }
            </tbody>
          </table>
        ) : null}
      </div>
      {edit && (
        <div className="flex justify-center items-center fixed top-0 left-0 right-0 h-full w-full m-auto bg-black bg-opacity-30">
          <div className="bg-zinc-200 p-6">
          <button
            className="ml-64 cursor-pointer"
            onClick={() => closeEdit()}
          >
            FECHAR X
          </button>
          <PlayerEditRow jogador={edit} />
          </div>
        </div>
      )}
    </div>
  );
}
