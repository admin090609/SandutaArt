import React from "react";
import Link from "next/link";
import Image from "next/image";

const marketing = () => {
  return (
    <>
      <h1 className="text-center font-bold text-3xl mt-10 mb-10">
        MATERIALE MARKETING
      </h1>
      <div className="flex justify-center max-w-[960px] mx-auto flex-wrap mb-10">
        <div className="product-card">
          <Link href="/marketing">
            <Image
              src="/images/carti_de_vizita.jpg"
              alt=""
              width={100}
              height={100}
              layout="responsive"
              className="rounded-sm"
            />
            <p>Pixuri Eco</p>
          </Link>
        </div>
        <div className="product-card">
          <Link href="/textile">
            <Image
              src="/images/tiparituri.jpg"
              alt=""
              width={100}
              height={100}
              layout="responsive"
              className="rounded-sm"
            />
            <p>Pixuri Metelice</p>
          </Link>
        </div>
        <div className="product-card">
          <Link href="/standuri">
            <Image
              src="/images/brosuri_carti_cataloage.jpg"
              alt=""
              width={100}
              height={100}
              layout="responsive"
              className="rounded-sm"
            />
            <p>Pixuri din plastic </p>
          </Link>
        </div>
        <div className="product-card">
          <Link href="/printuri">
            <Image
              src="/images/carnete.jpg"
              alt=""
              width={100} // Aici setați dimensiunea dorită pentru "Printuri Mari"
              height={100} // Aici setați dimensiunea dorită pentru "Printuri Mari"
              layout="responsive"
              className="rounded-sm"
            />
            <p>Sticle și Butelii</p>
          </Link>
        </div>
        <div className="product-card">
          <Link href="/publicitara">
            <Image
              src="/images/photo_printing.jpg"
              alt=""
              width={100}
              height={100}
              layout="responsive"
              className="rounded-sm"
            />
            <p>Termosuri și Căni termice</p>
          </Link>
        </div>
        <div className="product-card">
          <Link href="/servicii">
            <Image
              src="/images/etichete_autocolante.jpg"
              alt=""
              width={100}
              height={100}
              layout="responsive"
              className="rounded-sm"
            />
            <p>Căni cu logo</p>
          </Link>
        </div>
        <div className="product-card">
          <Link href="/servicii">
            <Image
              src="/images/stikere_pvc.jpg"
              alt=""
              width={100}
              height={100}
              layout="responsive"
              className="rounded-sm"
            />
            <p>USB Flash Drive</p>
          </Link>
        </div>
        <div className="product-card">
          <Link href="/servicii">
            <Image
              src="/images/shopping_bags.jpg"
              alt=""
              width={100}
              height={100}
              layout="responsive"
              className="rounded-sm"
            />
            <p>Brelocuri</p>
          </Link>
        </div>
        <div className="product-card">
          <Link href="/servicii">
            <Image
              src="/images/pos_materiale.jpg"
              alt=""
              width={100}
              height={100}
              layout="responsive"
              className="rounded-sm"
            />
            <p>Accesorii pentru oficiu</p>
          </Link>
        </div>
        <div className="product-card">
          <Link href="/servicii">
            <Image
              src="/images/design_grafic.jpg"
              alt=""
              width={100}
              height={100}
              layout="responsive"
              className="rounded-sm"
            />
            <p>Lanyarduri personalizate</p>
          </Link>
        </div>
        <div className="product-card">
          <Link href="/servicii">
            <Image
              src="/images/design_grafic.jpg"
              alt=""
              width={100}
              height={100}
              layout="responsive"
              className="rounded-sm"
            />
            <p>Ecusoane și accesorii</p>
          </Link>
        </div>
        <div className="product-card">
          <Link href="/servicii">
            <Image
              src="/images/design_grafic.jpg"
              alt=""
              width={100}
              height={100}
              layout="responsive"
              className="rounded-sm"
            />
            <p>Agende 2024</p>
          </Link>
        </div>
        <div className="product-card">
          <Link href="/servicii">
            <Image
              src="/images/design_grafic.jpg"
              alt=""
              width={100}
              height={100}
              layout="responsive"
              className="rounded-sm"
            />
            <p>Personalizare agende</p>
          </Link>
        </div>
        <div className="product-card">
          <Link href="/servicii">
            <Image
              src="/images/design_grafic.jpg"
              alt=""
              width={100}
              height={100}
              layout="responsive"
              className="rounded-sm"
            />
            <p>Genții și călătorii</p>
          </Link>
        </div>
        <div className="product-card">
          <Link href="/servicii">
            <Image
              src="/images/design_grafic.jpg"
              alt=""
              width={100}
              height={100}
              layout="responsive"
              className="rounded-sm"
            />
            <p>Umbrele</p>
          </Link>
        </div>
        <div className="product-card">
          <Link href="/servicii">
            <Image
              src="/images/design_grafic.jpg"
              alt=""
              width={100}
              height={100}
              layout="responsive"
              className="rounded-sm"
            />
            <p>Stegulețe și fanioane</p>
          </Link>
        </div>
        <div className="product-card">
          <Link href="/servicii">
            <Image
              src="/images/design_grafic.jpg"
              alt=""
              width={100}
              height={100}
              layout="responsive"
              className="rounded-sm"
            />
            <p>Suvenire și cadouri corparative</p>
          </Link>
        </div>
      </div>

      <hr className=" max-w-[84%] sm:max-w-[60%] mb-10 border-2 rounded-xl items-center justify-center m-auto  border-[#B1B1B1]" />
      <style jsx>{`
        .flex {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
        }

        .product-card {
          text-align: center;
          margin: 10px;
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

export default marketing;
