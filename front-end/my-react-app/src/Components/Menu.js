import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <div className="flex bg-zinc-300">
      <nav>
        <ul className="flex flex-row">
          <li className="p-5 hover:bg-lime-800 hover:text-slate-50">
            <Link to="/">
            Home
            </Link>
            </li>
          <li className="p-5 group/item relative cursor-pointer hover:bg-lime-800 hover:text-slate-50">
            Jogadores
            <ul className="hidden group-hover/item:block absolute mt-7 top-9 left-0 w-48 bg-zinc-300">
              <li className="p-4 hover:bg-lime-800 text-black hover:text-slate-50">
                <Link to={"jogadores"}>Lista de jogadores</Link>
              </li>
              <li className="p-4 hover:bg-lime-800 text-black hover:text-slate-50">
                <Link to={"criar-jogador"}>Criar jogador</Link>
              </li>
            </ul>
          </li>
          <li className="p-5 group/item relative cursor-pointer hover:bg-lime-800 hover:text-slate-50">
            Times
            <ul className="hidden group-hover/item:block absolute mt-7 top-9 left-0 w-48 bg-zinc-300">
              <li className="p-4 hover:bg-lime-800 text-black hover:text-slate-50">
                <Link to="times">Lista de times</Link>
              </li>
              <li className="p-4 hover:bg-lime-800 text-black hover:text-slate-50">
                <Link to="criar-time">Criar time</Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
}
