import { bella } from "../data/data";
export default function TexteSection() {
  return (
    <div className="text-center ">
        <h2>Manderine vous accompagne</h2>
        <p>
          Manderine est une agence de marketing digital dédiée à aider les
          entreprises à atteindre leurs objectifs en ligne. Nous offrons une
          gamme complète de services pour booster votre présence en ligne.</p>
        <div className="flex flex-col md:flex-row justify-center items-center  my-10">

          {bella.map((item, index) => (
            <div
              key={index}
              className={`flex items-center justify-center flex-col border-amber-800 ${item.color} p-4`}
            >
              <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
              <h4>vos objectifs publicitaires</h4>
              <div className="bg-white size-8"></div>
            </div>
          ))}

        </div>
    </div>

  );
}