import Menu from "../Components/Menu";
import { useState, useEffect } from "react";
import TeamEditRow from "../Components/TeamEditRow";

export default function Times() {
  const coluna = ["Nome", "jogadores", ""];
  const [jogadores, setJogadores] = useState();
  const [edit, setEdit] = useState();
  const [times, setTimes] = useState();
  const url = "http://localhost:3002/times/";

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setTimes(data);
      });
    fetch("http://localhost:3002/jogadores")
      .then((response) => response.json())
      .then((data) => {
        setJogadores(data);
      });
  }, []);

  const deleteTeam = async (id, nome) => {
    const teamPlayers = jogadores.filter((jogador) => jogador.time === nome);
    if (teamPlayers.length > 0) {
      return window.alert(
        "ERRO: Não é possível excluir times que possuem jogadores!"
      );
    }
    await fetch(url + id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const updatedTeams = times.filter((team) => team.id !== id);
    setTimes(updatedTeams);
  };

  const updateTeam = (time) => {
    setEdit(time);
  };

  const closeEdit = (time) => {
    setEdit(false);
  };

  return (
    <div>
      <div>
        <Menu />
      </div>
      <div className="flex justify-center rounded-sm bg-zinc-200 text-center mt-4 md:mr-auto md:ml-auto md:w-1/2">
        {times ? (
          <table className="w-full">
            <thead>
              <tr className="bg-lime-800 text-white h-14">
                {coluna.map((item) => (
                  <th key={item} className="p-2">
                    {item}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {times.length ? (
                times.map(({ id, nome = "" }) => (
                  <tr key={id} className="my-2 even:bg-zinc-400">
                    <td className="px-3 py-2">{nome}</td>
                    <td className="max-w-[150px] break-words">
                      {jogadores
                        ?.filter((jogador) => jogador.time === nome)
                        .map((jogador) => jogador.nome)
                        .join(", ")}
                    </td>
                    <td className="p-2">
                      <button
                        className="hover:text-lime-800 mr-3"
                        onClick={() => updateTeam({ id, nome })}
                      >
                        Editar
                      </button>
                      <button
                        className="hover:text-red-700"
                        onClick={() => deleteTeam(id, nome)}
                      >
                        Excluir
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td className="p-2" colSpan={2}>
                    Nenhum time resgistrado
                  </td>
                </tr>
              )}
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
          <TeamEditRow time={edit} />
          </div>
        </div>
      )}
    </div>
  );
}
