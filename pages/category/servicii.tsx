import React from 'react'
import Image from "next/image";
import Link from "next/link";

const servicii = () => {
  return (
    <>
    <h1 className="text-center font-bold text-3xl mt-10 mb-10">
      SERVICII
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
          <p>Transfer termic cu folie flex</p>
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
          <p>Transfer termic pe chipiuri</p>
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
          <p>Transfer termic pe umbrele</p>
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
          <p>Sublimare pe textil</p>
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
          <p>Transfer termic pe landyarduri</p>
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
          <p>Sublimare pe landyarduri</p>
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
          <p>Tipar UV pe suvenire</p>
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
          <p>Laminare plic</p>
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
          <p>Laminare în rolă</p>
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
          <p>Scanner A4/A3</p>
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
  )
}

export default servicii