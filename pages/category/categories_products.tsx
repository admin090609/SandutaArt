import React from 'react'
import Image from "next/image";
import Link from "next/link";

const printuri = () => {
  return (
    <>
      <h1 className="text-center font-bold text-3xl mt-10 mb-10">
        PRINTURI MARI
      </h1>
      <div className="flex justify-center max-w-[960px] mx-auto flex-wrap mb-10">
        <div className="product-card">
          <Link href="/marketing">
            <Image
              src="/images/autocolante.jpg"
              alt=""
              width={100}
              height={100}
              layout="responsive"
              className="rounded-sm"
            />
            <p>Autocolante</p>
          </Link>
        </div>
        <div className="product-card">
          <Link href="/textile">
            <Image
              src="/images/banner.jpg"
              alt=""
              width={100}
              height={100}
              layout="responsive"
              className="rounded-sm"
            />
            <p>Bannere</p>
          </Link>
        </div>
        <div className="product-card">
          <Link href="/standuri">
            <Image
              src="/images/tablouri.jpg"
              alt=""
              width={100}
              height={100}
              layout="responsive"
              className="rounded-sm"
            />
            <p>Tablouri Canvas și Multicanvas</p>
          </Link>
        </div>
        <div className="product-card">
          <Link href="/printuri">
            <Image
              src="/images/placute.jpg"
              alt=""
              width={100} // Aici setați dimensiunea dorită pentru "Printuri Mari"
              height={100} // Aici setați dimensiunea dorită pentru "Printuri Mari"
              layout="responsive"
              className="rounded-sm"
            />
            <p>Plăcuțe personalizate</p>
          </Link>
        </div>
        <div className="product-card">
          <Link href="/publicitara">
            <Image
              src="/images/pl_oficiu.jpg"
              alt=""
              width={100}
              height={100}
              layout="responsive"
              className="rounded-sm"
            />
            <p>Plăcuțe oficiu</p>
          </Link>
        </div>
        <div className="product-card">
          <Link href="/servicii">
            <Image
              src="/images/pl_firma.jpg"
              alt=""
              width={100}
              height={100}
              layout="responsive"
              className="rounded-sm"
            />
            <p>Plăcuțe firmă</p>
          </Link>
        </div>
        <div className="product-card">
          <Link href="/servicii">
            <Image
              src="/images/panou_info.jpg"
              alt=""
              width={100}
              height={100}
              layout="responsive"
              className="rounded-sm"
            />
            <p>Panouri Informaționale</p>
          </Link>
        </div>
        <div className="product-card">
          <Link href="/servicii">
            <Image
              src="/images/rame.jpg"
              alt=""
              width={100}
              height={100}
              layout="responsive"
              className="rounded-sm"
            />
            <p>Rame-click</p>
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

export default printuri