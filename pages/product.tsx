import React from "react";
import Image from "next/image";

const product = () => {
  return (
    <>
      <h1 className="text-center font-bold text-5xl mb-10">
        Paper ball pen POLI
      </h1>
      <div className="flex mx-20 justify-center">
        <div className="">
          <Image
            src="/images/agenda2.png"
            alt=""
            width={600}
            height={100}
            className="border-2 border-black rounded-lg mb-5"
          />
          <Image
            src="/images/agenda2.png"
            alt=""
            width={600}
            height={100}
            className="border-2 border-black rounded-lg"
          />
        </div>
        <div>
          <Image src="/images/agenda2.png" alt="" width={2000} height={100} />
        </div>
        <div>
          <div>
            <h1 className="text-3xl font-semibold mb-4">
              {" "}
              <span className="mr-2 rounded-[50%] bg-black px-3 text-white">
                1
              </span>
              Alege modelul de pix
            </h1>
            <p className=" mb-10">
              Pentru a afla costul, alegeți opțiunile care vă interesează.
              Costul preliminar este calculat în baza tirajului, termenului de
              producere și a modelului de pix.
            </p>
            <div>
              <h1 className="text-md mb-4">CULOARE</h1>
              <button className="border-2 mr-2 border-blue-500 rounded-lg">
                <Image
                  src="/images/agenda2.png"
                  alt=""
                  width={100}
                  height={100}
                />
              </button>
              <button className="border-2 rounded-lg mb-20">
                <Image
                  src="/images/agenda2.png"
                  alt=""
                  width={100}
                  height={100}
                />
              </button>
            </div>
          </div>
          <div>
            <h1 className="text-3xl font-semibold mb-4">
              {" "}
              <span className="mr-2 rounded-[50%] bg-black px-3 text-white">
                2
              </span>
              Alegeți cantitatea și termenul de producere
            </h1>
            <p className="text- mb-10">
              În tabel veți găsi prețuri în funcție de urgența executării
              comenzii. Este indicată data de producere, aceasta nu include
              livrarea. Timpul de livrare depinde de serviciul selectat
              ulterior. Vom fi bucuroși să livrăm comanda dvs. oriunde în țară!
            </p>
            <h1 className="mb-1">Tiraj</h1>
            <input
              type="text"
              name="name"
              id="name"
              className="mb-3 border-2"
            />
            <div>
              <button className="mr-4 rounded-[50%] bg-black px-2 text-white">
                -
              </button>
              <button className="rounded-[50%] bg-black px-2 text-white">
                +
              </button>
            </div>
          </div>
          <div className="flex justify-around items-center mt-10 mb-2 bg-blue-200 rounded-lg">
            <div>
              <h1 className="text-2xl font-semibold pt-2 px-3">Rezultat</h1>
              <p className="text-4xl font-bold p-3">2100.00 Lei</p>
            </div>
            <div>
              <h1 className="text-xl font-semibold">Produsul:</h1>
              <p>Paper ball pen POLI 100 buc.</p>
            </div>
          </div>
          <div className="flex justify-center mb-20 bg-blue-300 py-2 rounded-lg">
            <button className="">Adauga in cos</button>
          </div>
        </div>
      </div>
      <hr className="max-w-[84%] sm:max-w-[60%] mb-10 border-2 rounded-xl items-center justify-center m-auto  border-[#B1B1B1]" />
    </>
  );
};

export default product;
