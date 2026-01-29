

const HeroSection = () => {
    return (
        <>
               <div className="bg-[url('./Baobab.jpg')] h-screen w-full items-center justify-center rounded-b-lg gr ">
           <header className="p-4 flex justify-between items-center  text-white">
             <div className="bg-yellow-300 p-2 rounded ">
               <img
                 src="./public/images/Fichier-2.png"
                 alt="erreur"
                 className="w-30 "
               />
             </div>

             <span className="text-3xl mx-2 cursor-pointer md:hidden block">
               <button className="menu-outline cursor-pointer" onClick={() => {}}>☰</button>
             </span>
           

             <ul className="md:flex items-center gap-4 hidden  mr-8">
               {/* {menu.map((menuItem, index) => (<li key={index}><a href={menuItem.link} className="text-white hover:text-yellow-300">{menuItem.title}</a></li>))} */}
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
           </div>
        </>
    //     <div>
    //         <section>
    //     <div className="bg-[url('./Baobab.jpg')] h-screen w-full items-center justify-center rounded-b-lg gr ">
    //       <header className="p-4 flex justify-between items-center  text-white">
    //         <div className="bg-yellow-300 p-2 rounded ">
    //           <img
    //             src="./public/images/Fichier-2.png"
    //             alt="erreur"
    //             className="w-30 "
    //           />
    //         </div>

    //         <span className="text-3xl mx-2 cursor-pointer md:hidden block">
    //           <button className="menu-outline cursor-pointer" onClick={() => {}}>☰</button>
    //         </span>
           

    //         <ul className="md:flex items-center gap-4 hidden  mr-8">
    //           {menu.map((menuItem, index) => (<li key={index}><a href={menuItem.link} className="text-white hover:text-yellow-300">{menuItem.title}</a></li>))}
    //           {/* <li>
    //             <a href="#" className="text-white hover:text-yellow-300">
    //               Maison
    //             </a>
    //           </li>
    //           <li>
    //             <a href="#" className="text-white hover:text-yellow-300">
    //               About
    //             </a>
    //           </li>
    //           <li>
    //             <a href="#" className="text-white hover:text-yellow-300">
    //               Services
    //             </a>
    //           </li>
    //           <li>
    //             <a href="#" className="text-white hover:text-yellow-300">
    //               Contact
    //             </a>
    //           </li> */}
    //         </ul>

    //         {/* <!-- Section 1 --> */}
    //       </header>

    //       <div className="max-w-6xl mx-auto p-4 flex md:flex-row items-center justify-center gap-8 w-full text-center">
    //         <main className="justify-center md:justify-center flex flex-col items-center ">
    //           <h1 className="text-6xl font-bold text-center  text-white mb-6">
    //             nous aimons tous
    //           </h1>
    //           <h1 className="text-9xl font-bold text-center text-white mb-8">
    //             nature
    //           </h1>
    //           <p className="text-lg text-white mb-6 text-center justify-center items-center">
    //             Plongez votre regard au cœur de la nature, et vous
    //             <br />
    //             comprendrez tout mieux.
    //           </p>
    //           <div className="text-center justify-center items-center ">
    //             <button className="bg-yellow-400 text-white px-4 py-2 rounded hover:bg-yellow-600 transition text-center justify-center items-center">
    //               commencer
    //             </button>
    //           </div>
    //         </main>
    //       </div>
    //     </div>
    //   </section>
    //   <section className="justify-center items-center ">
    //     <div>
    //       <h1 className=" text-5xl text-center mt-15">Nos services</h1>
    //       <div
    //         className="bg-yellow-300 w-36 h-1 bg-center mt-5 mb-20 items-center justify-center mx-auto
    // "
    //       ></div>
    //     </div>

    //     <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-20">
    //       <div className=" h-auto w-87.5 mb-4  hover:shadow-lg transition">
    //         <div className=" h-auto w-auto">
    //           <img
    //             src="/public/service-1.jpg"
    //             alt="service-1.jpg"
    //             className="w-full h-full object-contain"
    //           />
    //         </div>
    //         <h3 className="m-4 text-gray-500 text-xl">
    //           Conception de sites web
    //         </h3>
    //         <p className="m-4 text-gray-500  leading-7 ">
    //           Mettez l'accent sur la manière dont vous pouvez aider et apporter
    //           des avantages à votre utilisateur. Utilisez un langage simple pour
    //           éviter toute confusion.
    //         </p>
    //       </div>

    //       <div className=" h-auto w-87.5 mb-4  hover:shadow-lg transition">
    //         <div className=" h-auto w-auto">
    //           <img
    //             src="/public/service-2.jpg"
    //             alt="service-2.jpg"
    //             className="w-full h-full object-contain"
    //           />
    //         </div>
    //         <h3 className="m-4 text-gray-500 text-xl">Conception graphique</h3>
    //         <p className="m-4 text-gray-500  leading-7 ">
    //           Mettez l'accent sur la manière dont vous pouvez aider et apporter
    //           des avantages à votre utilisateur. Utilisez un langage simple pour
    //           éviter toute confusion.
    //         </p>
    //       </div>

    //       <div className=" h-auto w-87.5 mb-4  hover:shadow-lg transition">
    //         <div className=" h-auto w-auto">
    //           <img
    //             src="/public/service-3.jpg"
    //             alt="service-3.jpg"
    //             className="w-full h-full object-contain"
    //           />
    //         </div>
    //         <h3 className="m-4 text-gray-500 text-xl">Création de contenu</h3>
    //         <p className="m-4 text-gray-500  leading-7 ">
    //           Mettez l'accent sur la manière dont vous pouvez aider et apporter
    //           des avantages à votre utilisateur. Utilisez un langage simple pour
    //           éviter toute confusion.
    //         </p>
    //       </div>
    //     </div>
    //   </section>
    //     </div>
    );
};

export default HeroSection;