import React from "react";
import Link from "next/link";
import Image from "next/image";

const contacte = () => {
  return (
    <>
      <h1 className="text-center font-bold text-3xl">Date de Contact</h1>
      <div className="mt-20 flex justify-around ">
        <div>
          <h1 className="text-center text-xl font-semibold mb-7">ADRESA</h1>
          <Link
            href="https://www.google.com/maps/place/Sanduta+Art/@46.946888,28.7743665,15z/data=!4m6!3m5!1s0x40c97f77a5797f33:0x44dde14e3f8587d2!8m2!3d46.946888!4d28.7743665!16s%2Fg%2F11n7k4g97z?hl=en&entry=ttu"
            className="flex items-center justify-center sm:justify-start"
          >
            <Image
              src="/images/location.png"
              alt="Location"
              width="40"
              height="0"
              className="w-[25px] lg:w-[17px] lg:h-[17px] h-[25px] mr-2"
            />
            <p className="font-semibold hover:underline">
              Ialoveni, Alexandru cel Bun 78/1
            </p>
          </Link>
        </div>
        <div className="text-center">
          <h1 className="text-xl font-semibold mb-7">PROGRAM DE LUCRU</h1>
          <p className="text-base mb-4">Luni - Vineri</p>
          <p className="text-xl mb-4">09:30 - 18:00</p>
          <p className="text-base mb-4">Sâmbătă - Duminică</p>
          <p className="text-xl ">ZI DE ODIHNĂ</p>
        </div>

        <div>
          <h1 className="text-xl font-semibold mb-7">TELEFON ȘI E-MAIL</h1>
          <Link
            href="tel:+37369111401"
            className="flex items-center justify-center sm:justify-start mb-2"
          >
            <Image
              src="/images/phone.png"
              alt="Phone"
              width="40"
              height="0"
              className="w-[25px] lg:w-[17px] lg:h-[17px] h-[25px] mr-2"
            />
            <p className="font-semibold hover:underline">069 111 401</p>
          </Link>
          <Link
            href=""
            className="flex items-center justify-center sm:justify-start mb-2"
          >
            <Image
              src="/images/gmail.png"
              alt=""
              width={40}
              height={0}
              className="w-[25px] lg:w-[17px] lg:h-[17px] h-[25px] mr-2"
            />
            <p className="font-semibold hover:underline">
              sanduta.art@gmail.com
            </p>
          </Link>
        </div>
      </div>

      <h1 className="text-3xl font-bold mt-20 text-center">
        Recuperare comandă de la biroul Sănduța Art
      </h1>
      <div className="mt-10 px-10 text-center ">
        <p className="mb-2">
          Poți veni personal să ridici comanda tipărită din sediul nostru
          Sănduța Art de luni până vineri, în următoarele intervale de timp:
        </p>
        <ul className="mb-2">
          <li>
            -În ziua în care comanda este finalizată, te așteptăm între orele
            16:00 și 18:00.
          </li>
          <li>
            -În celelalte zile lucrătoare, suntem disponibili pentru tine între
            orele 10:00 și 18:00.
          </li>
        </ul>
        <p className="mb-2">
          Echipa noastră efectuează verificări amănunțite înainte de predarea
          comenzii. Produsele pot fi păstrate în depozitul nostru pentru o
          perioadă maximă de 7 zile calendaristice.
        </p>
        <p>
          Dacă nu ai primit încă marfa sau ai întrebări, te rugăm să contactezi
          departamentul nostru de asistență tehnică la numărul de telefon
          <span className="font-semibold"> 069 111 401</span> sau prin e-mail la
          adresa:
          <span className="font-semibold"> sanduta.art@gmail.com.</span>
        </p>
      </div>

      <h1 className="text-3xl font-bold mt-20 text-center mb-5">
        Locația Noastră
      </h1>
      <div className="flex justify-center text-center   ">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10895.013112678302!2d28.7743665!3d46.946888!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c97f77a5797f33%3A0x44dde14e3f8587d2!2sSanduta%20Art!5e0!3m2!1sen!2s!4v1695217420351!5m2!1sen!2s"
          width="1000"
          height="450"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <hr className="max-w-[84%] sm:max-w-[60%] mt-10 mb-10 border-2 rounded-xl items-center justify-center m-auto  border-[#B1B1B1]" />
    </>
  );
};

export default contacte;
