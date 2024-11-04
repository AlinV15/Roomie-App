'use client';
import Image from "next/image";
import Header from "./components/header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div >
      <Header/>
      <section className="flex flex-col items-center justify-center h-screen bg-blue-600 text-white text-center p-8">
            <h1 className="text-5xl font-bold mb-4">Roomie Finder</h1>
            <h2 className="text-3xl mb-4">Descoperă colegul perfect</h2>
            <p className="mb-8">Cămine, apartamente, colegi doar cu un click</p>
            <form className="w-full max-w-md flex bg-white p-2 rounded-full">
            <input 
                    type="text" 
                    placeholder="Cauta..." 
                    className="flex-grow p-2 ms-2  rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 text-black"
                    />
                    
                <button 
                    type="submit" 
                    className="p-2 bg-blue-800 text-white rounded-full hover:bg-blue-700 transition duration-300 ml-2 flex items-center justify-center"
                >
                    <FontAwesomeIcon icon={faSearch} />
                </button>
            </form>
        </section>
        <section className="p-8">
            <h1 className="text-4xl font-bold mb-6 text-center">Despre Noi</h1>
            <p className="text-center mb-8">
            La Roomie Finder, ne dorim să facem mai ușoară găsirea unui coleg de cameră sau a unui spațiu de locuit ideal. Fie că ești student sau tânăr profesionist, aplicația noastră îți oferă o platformă sigură și simplă pentru a descoperi colegi de locuit și opțiuni de închiriere pe termen lung sau scurt.
            </p>
            <div className="flex flex-col items-center">
                <h3 className="text-2xl font-semibold relative mb-4 text-center">
                Găsește-ți colegul ideal și creează  amintiri frumoase!
                    <img src="/Evidence.svg" alt="subliniere" className="justify-self-center m-3" />
                </h3>
                <div className="flex space-x-4 w-full max-w-5xl">
                    <div className="flex-1">
                        <h4 className="text-xl font-semibold">Misiunea noastră</h4>
                        <p>
                        Să construim o comunitate sigură și accesibilă, care ajută oamenii să-și găsească locul potrivit și să trăiască armonios împreună. Prin Roomie Finder, ne dorim să facilităm conexiunile între cei care caută un spațiu de locuit și cei care au o cameră disponibilă, oferind o experiență simplificată, eficientă și sigură.
                        </p>
                        <div className="bg-[#3E399F] w-[500px] my-3 h-1 rounded-full justify-self-end"/>
                    </div>
                        
                    <div className=" image-border">
                      <img src="/team.png" alt="Despre noi" className="image-pentagon w-1/3 h-auto rounded-lg rotate-[30deg]" />
                    </div>
                </div>

                <div className="flex space-x-4 w-full max-w-5xl">

                    <div className=" image-border">
                      <img src="/team.png" alt="Despre noi" className="image-pentagon w-1/3 h-auto rounded-lg rotate-[30deg]" />
                    </div>
                    <div className="flex-1">
                        <h4 className="text-xl font-semibold">Misiunea noastră</h4>
                        <p>
                        Să construim o comunitate sigură și accesibilă, care ajută oamenii să-și găsească locul potrivit și să trăiască armonios împreună. Prin Roomie Finder, ne dorim să facilităm conexiunile între cei care caută un spațiu de locuit și cei care au o cameră disponibilă, oferind o experiență simplificată, eficientă și sigură.
                        </p>
                        <div className="bg-[#3E399F] w-[500px] my-3 h-1 rounded-full"/>
                    </div>
                </div>
              </div>
          
          <div className="flex flex-col items-center">
            <div className="flex flex-col items-center mt-8">
                <h3 className="text-2xl font-semibold relative mb-4">
                Descoperă avantajele noastre!
                <img src="/Evidence.svg" alt="subliniere"  className="justify-self-center m-3" />
                </h3>
                <div className="flex justify-between ">
                   
                    <div className="flex-1 mr-2">
                        <img src="/offer.png" alt="Valoare 1" className="w-full h-auto rounded-lg border-2 border-gray-400" />
                        <h4 className="text-xl font-semibold">Comunitate activă și prietenoasă</h4>
                        <p>Comunitate activă și prietenoasăRoomie Finder este o comunitate care îți oferă suport și conectivitate. Aici poți întâlni oameni noi și prietenoși, care îți împărtășesc valorile.</p>
                    </div>

                    <div className="flex-1 ml-2">
                        <img src="/offer.png" alt="Valoare 2" className="w-full h-auto rounded-lg border-2 border-gray-400"  />
                        <h4 className="text-xl font-semibold">Interfață simplă și intuitivă</h4>
                        <p>Platforma noastră este ușor de folosit, chiar și pentru cei mai puțin experimentați, oferindu-ți acces rapid la toate opțiunile disponibile , poți filtra și selecta colegii de cameră în funcție de preferințe și stil de viață, pentru a găsi persoane cu care te vei înțelege excelent.</p>
                    </div>

                </div>
            </div>
          </div>

        </section>

        <section className="p-8">
            <h2 className="text-3xl font-bold mb-4 text-center">Secțiuni importante</h2>
            <img src="/Sub.svg" alt="subliniere" className="mb-7 text-center justify-self-center" />
            <p className="text-center mb-4">
            Găsește colegul de cameră perfect sau spațiul ideal, rapid și ușor! Roomie Finder te ajută să descoperi partenerii de locuit potriviți, indiferent dacă cauți o cameră într-un cămin studențesc sau un apartament de împărțit.Știm că împărțirea unei locuințe poate fi o provocare, dar și o oportunitate extraordinară de a întâlni oameni noi și de a construi prietenii durabile.
   
Navighează rapid către secțiunile noastre populare și începe-ți căutarea
            </p>
            <h5 className="text-lg font-semibold text-center mb-4">        Navighează rapid către secțiunile noastre populare și începe-ți căutarea</h5>
            
            {/* Grid cu două coloane */}
            <div className="grid grid-cols-2 gap-4">
                {/* Coloană pentru imagine */}
                <div className="flex justify-center items-center">
                    <img src="/camin.png" alt="Imagine Landscape" className="w-full h-auto object-cover" />
                </div>

                {/* Coloană pentru lista de div-uri */}
                <div className="flex flex-col justify-between">
                    <div className="flex flex-col gap-4">
                        {/* Item 1 */}
                        <div className="flex items-center space-x-4">
                            <img src="/sfat1.png" alt="Icon 1" className="w-16 h-16 object-cover" />
                            <div>
                                <Link href={""}><h3 className="text-lg font-semibold">GĂSEȘTE COLEGI DE CAMERĂ</h3></Link>
                                <p>Ești în căutarea unui coleg? Creează un profil și găsește persoana potrivită pentru tine</p>
                            </div>
                        </div>
                        {/* Item 2 */}
                        <div className="flex items-center space-x-4">
                            <img src="/sfat1.png" alt="Icon 2" className="w-16 h-16 object-cover" />
                            <div>
                                <Link href={""}><h3 className="text-lg font-semibold">SFATURI UTILE</h3></Link>
                                <p>Ghiduri pentru a te acomoda mai repede</p>
                            </div>
                        </div>
                        {/* Item 3 */}
                        <div className="flex items-center space-x-4">
                            <img src="/sfat1.png" alt="Icon 3" className="w-16 h-16 object-cover" />
                            <div>
                                <Link href={""}><h3 className="text-lg font-semibold">CAUTĂ ZONE CU APARTAMENTE</h3></Link>
                                <p>Explorează anunțuri </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Rând cu un titlu și un paragraf */}
            <div className="mt-8 text-start">
                <Link href={""}><h3 className="text-2xl font-semibold">               Cămine disponibile</h3></Link>
                <p>Găsiți spațiul de închiriere ideal care să corespundă nevoilor și bugetului dumneavoastră.</p>
            </div>
        </section>
        <Footer/>
    </div>
  );
}
