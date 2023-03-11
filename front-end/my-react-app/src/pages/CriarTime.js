import Menu from "../Components/Menu";
import { useState } from "react";

export default function CriarTime() {
  const [message, setMessage] = useState();
  const [time, setTime] = useState({ nome: '' });

  const handleChange = (e) => {
    setTime({
      nome: e.target.value,
    });
  };


  const clearMessage = () => {
    setMessage(false);
  }

  const url = "http://localhost:3002/times";
  const submit = async (e) => {
    e.preventDefault();

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(time),
    });
    const { message = '' } = await response.json()
    setMessage(message);
    if(response.status === 201) {
      setTime({nome:  ''});
    } 
  };
  return (
    <div>
      <div>
        <Menu />
      </div>
      <div className="flex flex-col bg-zinc-200 text-center p-10 mt-11 mr-auto ml-auto w-1/2">
        <h1 className="text-lg md:text-3xl md:p-5">Criar Time</h1>
        <form className="flex flex-col " onSubmit={submit}>
          <label className="md:text-lg px-2 py-1 text-left">
            Nome:
            <input
              className="rounded-sm block w-full h-7"
              type="text"
              name="nome"
              onChange={handleChange}
              value={time.nome}
              onFocus={clearMessage}
              required
            />
          </label>
          <input
            className="mx-2 mt-3 md:p-2 rounded-sm text-white bg-lime-800"
            type="submit"
            value="Criar"
          />
          <div className="p-2">
          {message ? message : null }
          </div>
        </form>
      </div>
    </div>
  );
}
