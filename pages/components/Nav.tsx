import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Nav() {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <>
      <div className="flex justify-center mt-6 justify-between items-center max-w-[1240px] m-auto">
        <div className="flex justify-center items-center">
          <Image
            src="/images/logo_alb.jpg"
            alt="Logo"
            width="120"
            height="120"
          />
          <Link
            href="https://www.google.com/maps/place/Sanduta+Art/@46.946888,28.7743665,15z/data=!4m6!3m5!1s0x40c97f77a5797f33:0x44dde14e3f8587d2!8m2!3d46.946888!4d28.7743665!16s%2Fg%2F11n7k4g97z?hl=en&entry=ttu"
            className="flex items-center ml-0 lg:ml-[20px]"
          >
            <Image
              src="/images/location.png"
              alt="Location"
              width="35"
              height="0"
              className="w-[35px] h-[35px]"
            />
            <div>
              <p className="font-semibold text-black text-[18px] leading-5 hidden lg:block">
                Ialoveni
              </p>
              <p className="font-semibold text-black text-[16px] leading-5 hidden lg:block">
                Alexandru cel Bun 78/1
              </p>
            </div>
          </Link>
          <Link
            href="tel:+37369111401"
            className="flex items-center ml-4 lg:ml-[44px] justify-center"
          >
            <Image
              src="/images/phone.png"
              alt="Phone"
              width="27"
              height="0"
              className="w-[27px] h-[27px]"
            />
            <p className="font-semibold text-black text-[24px] hidden lg:block">
              069 111 401
            </p>
          </Link>
        </div>
        <div className="flex items-center">
          <div>
            <Image
              src="/images/search.png"
              width="25"
              height="0"
              className="w-[25px] h-[25px] relative sm:absolute mt-1 sm:mt-3.5 ml-4"
              alt="Search"
            />
            <input
              type="text"
              placeholder="Caută..."
              className="search_bar bg-[#f3f3f3] rounded-[3px] border border-solid border-[#dadada] hidden sm:block sm:w-[175px] lg:w-[250px] h-[50px]"
            />
          </div>
          <Link href="/cart.tsx">
            <Image
              src="/images/cart.png"
              alt="Cart"
              width="35"
              height="0"
              className="w-[35px] h-[35px] ml-4 mr-4"
            />
          </Link>
          <div className="flex items-center lg:hidden">
            <input
              id="checkbox"
              type="checkbox"
              className="hidden"
              checked={nav}
              onChange={handleNav}
            />
            <label
              className={`toggle ${nav ? "active" : ""}`}
              htmlFor="checkbox"
            >
              <div id="bar1" className="bars"></div>
              <div id="bar2" className="bars"></div>
              <div id="bar3" className="bars"></div>
            </label>
            <div className={`mobile-menu ${nav ? "active" : ""}`}>
              <details>
                <summary>
                  <Link className="font-bold text-xl mt-8" href="/">
                    Produse
                  </Link>
                </summary>
                <p>Carti</p>
                <p>Tiparituri</p>
              </details>
              <Link
                className="font-bold text-xl mt-8"
                href="/materiale_marketing"
              >
                Materiale Marketing
              </Link>
              <Link className="font-bold text-xl mt-8" href="/textile">
                Textile
              </Link>
              <Link className="font-bold text-xl mt-8" href="/standuri">
                Standuri Expozitionale
              </Link>
              <Link className="font-bold text-xl mt-8" href="/printuri_mari">
                Printuri Mari
              </Link>
              <Link
                className="font-bold text-xl mt-8"
                href="/productie_publicitara"
              >
                Producție Publicitară
              </Link>
              <Link className="font-bold text-xl mt-8" href="/servicii">
                Servicii
              </Link>
              <Link className="font-bold text-xl mt-8" href="/contacte">
                Contacte
              </Link>
              <Link className="font-bold text-xl mt-8" href="/faq">
                FAQ
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden lg:flex justify-center items-center p-6 text-center leading-5">
        <Link className="font-semibold font-xl mr-8" href="/">
          Produse
        </Link>
        <Link
          className="font-semibold font-xl mr-8"
          href="/materiale_marketing"
        >
          Materiale Marketing
        </Link>
        <Link className="font-semibold font-xl mr-8" href="/textile">
          Textile
        </Link>
        <Link className="font-semibold font-xl mr-8" href="/standuri">
          Standuri Expozitionale
        </Link>
        <Link className="font-semibold font-xl mr-8" href="/printuri_mari">
          Printuri Mari
        </Link>
        <Link
          className="font-semibold font-xl mr-8"
          href="/productie_publicitara"
        >
          Producție Publicitară
        </Link>
        <Link className="font-semibold font-xl mr-8" href="/servicii">
          Servicii
        </Link>
        <Link className="font-semibold font-xl mr-8" href="/contacte">
          Contacte
        </Link>
        <Link className="font-semibold font-xl" href="/faq">
          FAQ
        </Link>
      </div>
      <hr className="hidden lg:block lg:max-w-[80%] mt-4 border-2 rounded-xl items-center justify-center m-auto" />
    </>
  );
}
