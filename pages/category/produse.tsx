import React from "react";
import Link from "next/link";
import Image from "next/image";

const produse = () => {
  return (
    <>
      <h1 className="text-center font-bold text-3xl mt-10 sm:mt-10">PRODUSE</h1>
      <div className="flex justify-center max-w-[960px] mx-auto flex-wrap mb-20">
        <div className="product-card">
          <Link href="/marketing">
            <Image
              src="/images/marketing.png"
              alt=""
              width={100}
              height={100}
              layout="responsive"
              className="rounded-sm"
            />
            <p>Cărți de vizită</p>
          </Link>
        </div>
        <div className="product-card">
          <Link href="/textile">
            <Image
              src="/images/textile.png"
              alt=""
              width={100}
              height={100}
              layout="responsive"
              className="rounded-sm"
            />
            <p>Tipărituri</p>
          </Link>
        </div>
        <div className="product-card">
          <Link href="/standuri">
            <Image
              src="/images/standuri.png"
              alt=""
              width={100}
              height={100}
              layout="responsive"
              className="rounded-sm"
            />
            <p>Brușuri, cărți, cataloage</p>
          </Link>
        </div>
        <div className="product-card">
          <Link href="/printuri">
            <Image
              src="/images/printuri.png"
              alt=""
              width={100} // Aici setați dimensiunea dorită pentru "Printuri Mari"
              height={100} // Aici setați dimensiunea dorită pentru "Printuri Mari"
              layout="responsive"
              className="rounded-sm"
            />
            <p>Carnete</p>
          </Link>
        </div>
        <div className="product-card">
          <Link href="/publicitara">
            <Image
              src="/images/publicitate.png"
              alt=""
              width={100}
              height={100}
              layout="responsive"
              className="rounded-sm"
            />
            <p>Foto printing</p>
          </Link>
        </div>
        <div className="product-card">
          <Link href="/servicii">
            <Image
              src="/images/servicii.png"
              alt=""
              width={100}
              height={100}
              layout="responsive"
              className="rounded-sm"
            />
            <p>Etichete și autocolante</p>
          </Link>
        </div>
        <div className="product-card">
          <Link href="/servicii">
            <Image
              src="/images/servicii.png"
              alt=""
              width={100}
              height={100}
              layout="responsive"
              className="rounded-sm"
            />
            <p>Stikere PVC</p>
          </Link>
        </div>
        <div className="product-card">
          <Link href="/servicii">
            <Image
              src="/images/servicii.png"
              alt=""
              width={100}
              height={100}
              layout="responsive"
              className="rounded-sm"
            />
            <p>Shopping Bags</p>
          </Link>
        </div>
        <div className="product-card">
          <Link href="/servicii">
            <Image
              src="/images/servicii.png"
              alt=""
              width={100}
              height={100}
              layout="responsive"
              className="rounded-sm"
            />
            <p>POS-materiale</p>
          </Link>
        </div>
        <div className="product-card">
          <Link href="/servicii">
            <Image
              src="/images/servicii.png"
              alt=""
              width={100}
              height={100}
              layout="responsive"
              className="rounded-sm"
            />
            <p>Design Grafic</p>
          </Link>
        </div>
      </div>

      <hr className="hidden lg:block lg:max-w-[60%] mt-0 mb-20 border-2 rounded-xl items-center justify-center m-auto border-[#B1B1B1]" />
      <style jsx>{`
        .flex {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
        }

        .product-card {
          text-align: center;
          margin: 20px;
          margin-top: 40px;
          width: calc(50% - 40px); /* Two columns on mobile */
          height: 200px; /* Aici setați dimensiunea dorită pentru toate imaginile */
          transition: filter 0.3s; /* Adăugăm o tranziție pentru efect de hover */
        }

        .product-card p {
          margin-top: 10px;
          text-align: start;
          font-weight: 600;
        }

        .product-card:hover {
          filter: contrast(
            80%
          ); /* Ajustați valoarea pentru a face imaginea mai luminoasă sau mai întunecată */
        }

        @media (min-width: 768px) {
          .product-card {
            width: 200px; /* Revert to three columns on larger screens */
          }
        }
      `}</style>
    </>
  );
};

export default produse;
