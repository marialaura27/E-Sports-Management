import { useState } from "react";

export default function EditRow(data) {
  const [time, setTime] = useState({ nome: data.time.nome });
  const url = "http://localhost:3002/times/";

  const handleChange = (e) => {
    setTime({
      nome: e.target.value,
    });
  };

  const update = async () => {
    await fetch(url + data.time.id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(time),
    });
  };


  return (
    <div >
      <form className="flex flex-col justify-center">
        <div>
          <label className="md:text-lg text-left">
            Nome:
            <input
              className="rounded-sm block mt-1 p-1 h-8 w-full"
              type="text"
              name="nome"
              onChange={handleChange}
              value={time.nome}
            />
          </label>
        </div>
        <button
          className="rounded-sm text-white bg-lime-800 py-1.5"
          onClick={() => update()}
        >
          Salvar
        </button>
      </form>
    </div>
  );
}
