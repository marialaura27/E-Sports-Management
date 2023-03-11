import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <div className="flex bg-zinc-300">
      <nav>
        <ul className="flex flex-row">
          <li className="hover:bg-lime-800 hover:text-slate-50">
            <Link to="/">
              <div className="p-5">Home</div>
            </Link>
          </li>
          <li className="p-5 group/item relative cursor-pointer hover:bg-lime-800 hover:text-slate-50">
            Times
            <ul className="hidden group-hover/item:block absolute mt-7 top-9 left-0 w-48 bg-zinc-300">
              <li className="hover:bg-lime-800 text-black hover:text-slate-50">
                <Link to="times">
                  <div className="p-4 ">Lista de times</div>
                </Link>
              </li>
              <li className="hover:bg-lime-800 text-black hover:text-slate-50">
                <Link to="criar-time">
                <div className="p-4 ">Criar time</div>
                </Link>
              </li>
            </ul>
          </li>
          <li className="p-5 group/item relative cursor-pointer hover:bg-lime-800 hover:text-slate-50">
            Jogadores
            <ul className="hidden group-hover/item:block absolute mt-7 top-9 left-0 w-48 bg-zinc-300">
              <li className="hover:bg-lime-800 text-black hover:text-slate-50">
                <Link to="jogadores">
                <div className="p-4 ">Lista de jogadores</div>
                </Link>
              </li>
              <li className="hover:bg-lime-800 text-black hover:text-slate-50">
                <Link to="criar-jogador">
                <div className="p-4">Criar Jogador</div>
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
}
