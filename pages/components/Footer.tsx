import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className="flex justify-evenly items-start p-7">
        <div className="text-center">
          <Link href="/">
            <Image
              src="/images/logo_alb.jpg"
              alt="Logo"
              width="150"
              height="150"
              className="hidden lg:block mx-auto"
            />
          </Link>
          <div>
            <div className="flex justify-center space-x-1">
              <Link href="https://www.instagram.com/sandutaart/">
                <Image
                  src="/images/instagram.png"
                  alt=""
                  width={30}
                  height={30}
                />
              </Link>
              <Link href="https://www.facebook.com/sanduta.art/">
                <Image
                  src="/images/facebook.png"
                  alt=""
                  width={30}
                  height={30}
                />
              </Link>
            </div>
            <div className="flex justify-center space-x-1 mt-2">
              <Link href="https://msng.link/o?37369111401=vi">
                <Image src="/images/viber.png" alt="" width={30} height={30} />
              </Link>
              <Link href="https://msng.link/o?37369111401=wa">
                <Image
                  src="/images/whatsapp.png"
                  alt=""
                  width={30}
                  height={30}
                />
              </Link>
              <Link href="https://msng.link/o?37369111401=tg">
                <Image
                  src="/images/telegram.png"
                  alt=""
                  width={30}
                  height={30}
                />
              </Link>
            </div>
          </div>
        </div>

        <div>
          <h1 className="text-xl font-bold text-start mb-3">Contacte</h1>
          <Link
            href="tel:+37369111401"
            className="flex items-center justify-start mb-2"
          >
            <Image
              src="/images/phone.png"
              alt="Phone"
              width="40"
              height="0"
              className="w-[25px] lg:w-[17px] lg:h-[17px] h-[25px] mr-2"
            />
            <p className="font-semibold">069 111 401</p>
          </Link>
          <div className="flex items-center justify-start mb-2">
            <Image
              src="/images/gmail.png"
              alt=""
              width={40}
              height={0}
              className="w-[25px] lg:w-[17px] lg:h-[17px] h-[25px] mr-2"
            />
            <p className="font-semibold">sanduta.art@gmail.com</p>
          </div>
          <Link
            href="https://www.google.com/maps/place/Sanduta+Art/@46.946888,28.7743665,15z/data=!4m6!3m5!1s0x40c97f77a5797f33:0x44dde14e3f8587d2!8m2!3d46.946888!4d28.7743665!16s%2Fg%2F11n7k4g97z?hl=en&entry=ttu"
            className="flex items-center justify-start"
          >
            <Image
              src="/images/location.png"
              alt="Location"
              width="40"
              height="0"
              className="w-[25px] lg:w-[17px] lg:h-[17px] h-[25px] mr-2"
            />
            <div>
              <p className="font-semibold text-sm">
                Ialoveni <br />
                Alexandru cel Bun 78/1
              </p>
            </div>
          </Link>
        </div>
        <div className="flex flex-col">
          <h1 className="text-xl font-bold text-start mb-3">Pagini</h1>
          <Link
            className="text-left font-medium text-[16px] mb-1"
            href="/produse"
          >
            Produse
          </Link>
          <Link
            className="text-left font-medium text-[16px] mb-1"
            href="/marketing"
          >
            Materiale Marketing
          </Link>
          <Link
            className="text-left font-medium text-[16px] mb-1"
            href="/textile"
          >
            Textile
          </Link>
          <Link
            className="text-left font-medium text-[16px] mb-1"
            href="/standuri"
          >
            Standuri Expozitionale
          </Link>
          <Link
            className="text-left font-medium text-[16px] mb-1"
            href="/printuri"
          >
            Printuri Mari
          </Link>
          <Link
            className="text-left font-medium text-[16px] mb-1"
            href="/servicii"
          >
            Servicii
          </Link>
          <Link
            className="text-left font-medium text-[16px] mb-1"
            href="/contacte"
          >
            Contacte
          </Link>
          <Link className="text-left font-medium text-[16px] mb-1" href="/faq">
            FAQ
          </Link>
        </div>
        <div className="flex flex-col">
          <h1 className="text-xl font-bold text-start mb-3">Categorii</h1>
          <Link className="text-left font-medium text-[16px] mb-1" href="/">
            Cărți de vizită
          </Link>
          <Link className="text-left font-medium text-[16px] mb-1" href="/">
            Tipărituri
          </Link>
          <Link className="text-left font-medium text-[16px] mb-1" href="/">
            Broșuri, cărți, cataloage
          </Link>
          <Link className="text-left font-medium text-[16px] mb-1" href="/">
            Carnete
          </Link>
          <Link className="text-left font-medium text-[16px] mb-1" href="/">
            Etichete și autocolante
          </Link>
          <Link className="text-left font-medium text-[16px] mb-1" href="/">
            Stichere PVC
          </Link>
          <Link className="text-left font-medium text-[16px] mb-1" href="/">
            Foto Printing
          </Link>
          <Link className="text-left font-medium text-[16px] mb-1" href="/">
            Shopping Bags
          </Link>
          <Link className="text-left font-medium text-[16px] mb-1" href="/">
            POS-materiale
          </Link>
          <Link className="text-left font-medium text-[16px] mb-1" href="/">
            Design Grafic
          </Link>
        </div>
      </div>
    </>
  );
};

export default Footer;
