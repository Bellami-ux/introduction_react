import textetection from "./components/TextSection";
import { menuListes } from './data/data';

function App() {
  return (
    <>
      <ul className="text-red-950 text-5xl text-center flex gap-6 p-5">
        {menuListes.map((menuListe, index) => (
          <li key={index}>
            <a href={menuListe.link}>{menuListe.title}</a>
          </li>
        ))}
      </ul>

      <textesection />
    </>
  );
}

export default App;
