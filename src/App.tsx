function App() {
  return (
    <body>
      {/* <h1 className="text-3xl font-bold underline">
    Hello world!
  </h1> */}

      <section>
        <div className="bg-[url('./Baobab.jpg')] h-screen w-full items-center justify-center rounded-b-lg ">
          <header className="p-4 flex justify-between items-center  text-white">
            <div className="bg-yellow-300 p-2 rounded ">
              <img
                src="./public/Fichier-2.png"
                alt="erreur"
                className="w-30 "
              />
            </div>

            <span className="text-3xl mx-2 cursor-pointer md:hidden block">
              <button className="menu-outline cursor-pointer" onClick={() => {}}>☰</button>
            </span>
           

            <ul className="md:flex items-center gap-4 hidden  mr-8">
              <li>
                <a href="#" className="text-white hover:text-yellow-300">
                  Maison
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-yellow-300">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-yellow-300">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-yellow-300">
                  Contact
                </a>
              </li>
            </ul>

            {/* <!-- Section 1 --> */}
          </header>

          <div className="max-w-6xl mx-auto p-4 flex md:flex-row items-center justify-center gap-8 w-full text-center">
            <main className="justify-center md:justify-center flex flex-col items-center ">
              <h1 className="text-6xl font-bold text-center  text-white mb-6">
                nous aimons tous
              </h1>
              <h1 className="text-9xl font-bold text-center text-white mb-8">
                nature
              </h1>
              <p className="text-lg text-white mb-6 text-center justify-center items-center">
                Plongez votre regard au cœur de la nature, et vous
                <br />
                comprendrez tout mieux.
              </p>
              <div className="text-center justify-center items-center ">
                <button className="bg-yellow-400 text-white px-4 py-2 rounded hover:bg-yellow-600 transition text-center justify-center items-center">
                  commencer
                </button>
              </div>
            </main>
          </div>
        </div>
      </section>
      <section className="justify-center items-center ">
        <div>
          <h1 className=" text-5xl text-center mt-15">Nos services</h1>
          <div
            className="bg-yellow-300 w-36 h-1 bg-center mt-5 mb-20 items-center justify-center mx-auto
    "
          ></div>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-20">
          <div className=" h-auto w-87.5 mb-4  hover:shadow-lg transition">
            <div className=" h-auto w-auto">
              <img
                src="/public/service-1.jpg"
                alt="service-1.jpg"
                className="w-full h-full object-contain"
              />
            </div>
            <h3 className="m-4 text-gray-500 text-xl">
              Conception de sites web
            </h3>
            <p className="m-4 text-gray-500  leading-7 ">
              Mettez l'accent sur la manière dont vous pouvez aider et apporter
              des avantages à votre utilisateur. Utilisez un langage simple pour
              éviter toute confusion.
            </p>
          </div>

          <div className=" h-auto w-87.5 mb-4  hover:shadow-lg transition">
            <div className=" h-auto w-auto">
              <img
                src="/public/service-2.jpg"
                alt="service-2.jpg"
                className="w-full h-full object-contain"
              />
            </div>
            <h3 className="m-4 text-gray-500 text-xl">Conception graphique</h3>
            <p className="m-4 text-gray-500  leading-7 ">
              Mettez l'accent sur la manière dont vous pouvez aider et apporter
              des avantages à votre utilisateur. Utilisez un langage simple pour
              éviter toute confusion.
            </p>
          </div>

          <div className=" h-auto w-87.5 mb-4  hover:shadow-lg transition">
            <div className=" h-auto w-auto">
              <img
                src="/public/service-3.jpg"
                alt="service-3.jpg"
                className="w-full h-full object-contain"
              />
            </div>
            <h3 className="m-4 text-gray-500 text-xl">Création de contenu</h3>
            <p className="m-4 text-gray-500  leading-7 ">
              Mettez l'accent sur la manière dont vous pouvez aider et apporter
              des avantages à votre utilisateur. Utilisez un langage simple pour
              éviter toute confusion.
            </p>
          </div>
        </div>
      </section>

      <section className="className">
        <div className="bg-gray-200 h-120 w-full justify-center items-center flex flex-col ">
          <p className="text-3xl items-center justify-center text-center mx-40 flex">
            À « Originale et dotée d'une compréhension innée <br></br> des
            besoins de ses clients, l'équipe de Love Nature <br /> est toujours
            un plaisir à côtoyer. »
          </p>
          <img
            src="avatar_on_home.png"
            alt="avatar_on_home.png"
            className="mt-8 w-18"
          />
          <h3 className="text-xl mt-2 text-gray-500"> Jane Miller</h3>
        </div>
      </section>
      <section className=" flex flex-col md:flex-row justify-center items-center  gap-30 ml-10 mr-4 ">
        <div className="flex flex-col w-1/2  mx-auto mt-20 mb-20 ml-20">
          <h5 className="text-sm text-gray-400 mb-10">À PROPOS DE NOUS</h5>
          <h2 className="text-3xl  text-gray-600 mb-4">
            Dites aux visiteurs de votre site web qui vous êtes et pourquoi ils
            devraient choisir votre entreprise.
          </h2>
          <p className="text-gray-600 mb-10">
            Car lorsqu'un visiteur arrive sur votre site web, vous lui êtes
            inconnu. Il doit apprendre à vous connaître pour avoir envie de lire
            vos articles de blog, de s'abonner à votre newsletter ou d'acheter
            vos produits.
          </p>
          <div>
            <button className="border border-yellow-400 text-yellow-400 px-6 py-3 rounded cursor-pointer hover:bg-yellow-400 hover:text-white transition">
              En savoir plus
            </button>
          </div>
        </div>
        <div className="w-1/2 mt-20 mb-20 justify-center items-center ml-20">
          <img
            src="leaf.jpg"
            alt="about_us_image.jpg"
            className=" h-auto w-100"
          />
        </div>
      </section>
      <div className="bg-[url('./Baobab.jpg')] h-120 w-full items-center justify-center  ">
        <div className="max-w-6xl mx-auto p-4 flex md:flex-row items-center justify-center gap-8 w-full text-center">
          <main className="justify-center md:justify-center flex flex-col items-center ">
            <h1 className="text-6xl  text-center justify-center items-center text-white mt-20">
              DES QUESTIONS ?
            </h1>

            <p className="text-lg text-white mb-6 text-center justify-center items-center mt-10 flex">
              Que vous soyez curieux de connaître les fonctionnalités,
              <br /> de bénéficier d'un essai gratuit ou même d'obtenir des{' '}
              <br />
              informations pour la presse, nous sommes là pour
              <br /> répondre à toutes vos questions.
            </p>
            <div className="text-center justify-center items-center flex ">
              <button className="bg-yellow-400 text-white px-4 py-2 rounded hover:bg-yellow-600 transition text-center justify-center items-center mt-10">
                Parlons-en maintenant
              </button>
            </div>
          </main>
        </div>
      </div>
      <header className="p-8 flex justify-between items-center  text-gray-600 ">
        <ul className="md:flex items-center gap-4 hidden  mr-8">
          <li>
            <a href="#" className="text-gray-600 hover:text-yellow-300">
              Maison
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-600 hover:text-yellow-300">
              About
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-600 hover:text-yellow-300">
              Services
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-yellow-300">
              Contact
            </a>
          </li>
        </ul>

<span className="text-3xl mx-2 cursor-pointer md:hidden block">
          <button className="menu-outline" onClick={() => {}}>☰</button>
        </span>
        <div className="bg-yellow-300 p-2 rounded justify-between ">
          <img src="./public/Fichier-2.png" alt="erreur" className="w-30 " />
        </div>

        
        <p className="ml-8 justify-between">Aimer la nature par Tyler Moore</p>

        {/* <!-- Section 1 --> */}
      </header>
    </body>
  );
}

export default App;
