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
          <Link href="/">
            <Image
              src="/images/logo_alb.jpg"
              alt="Logo"
              width="120"
              height="120"
              className="hidden lg:block"
            />
          </Link>

          <Link
            href="https://www.google.com/maps/place/Sanduta+Art/@46.946888,28.7743665,15z/data=!4m6!3m5!1s0x40c97f77a5797f33:0x44dde14e3f8587d2!8m2!3d46.946888!4d28.7743665!16s%2Fg%2F11n7k4g97z?hl=en&entry=ttu"
            className="flex items-center ml-0 lg:ml-[20px]"
          >
            <Image
              src="/images/location.png"
              alt="Location"
              width="150"
              height="0"
              className="w-[35px] h-[35px] ml-3 lg:ml-0"
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
            className="flex items-center ml-2 lg:ml-[44px] justify-center"
          >
            <Image
              src="/images/phone.png"
              alt="Phone"
              width="40"
              height="0"
              className="w-[35px] lg:w-[27px] lg:h-[27px] h-[35px] mr-4 lg:mr-0"
            />
            <p className="font-semibold text-black text-[24px] hidden lg:block">
              069 111 401
            </p>
          </Link>
        </div>
        <Link href="/">
          <Image
            src="/images/logo_alb.jpg"
            alt="Logo"
            width="120"
            height="120"
            className="lg:hidden block"
          />
        </Link>

        <div className="flex items-center">
          <div className="hidden lg:block">
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
          <Link href="/cart">
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
              <div className="block">
                <Image
                  src="/images/search.png"
                  width="25"
                  height="0"
                  className="w-[25px] h-[25px] relative sm:absolute mt-1 sm:mt-3.5 ml-0 lg:ml-4"
                  alt="Search"
                />
                <input
                  type="text"
                  placeholder="Caută..."
                  className="search_bar bg-[#f3f3f3] rounded-[3px] border border-solid border-[#dadada] hidden sm:block sm:w-[175px] lg:w-[250px] h-[50px]"
                />
              </div>
              <div className="relative transition-all duration-300 ease-in-out">
                <Link className="font-bold text-xl mt-4" href="/produse">
                  Produse
                </Link>
              </div>
              <Link className="font-bold text-xl mt-4" href="/marketing">
                Materiale Marketing
              </Link>
              <Link className="font-bold text-xl mt-4" href="/textile">
                Textile
              </Link>
              <Link className="font-bold text-xl mt-4" href="/standuri">
                Standuri Expozitionale
              </Link>
              <Link className="font-bold text-xl mt-4" href="/printuri">
                Printuri Mari
              </Link>
              <Link className="font-bold text-xl mt-4" href="/servicii">
                Servicii
              </Link>
              <Link className="font-bold text-xl mt-4" href="/contacte">
                Contacte
              </Link>
              <Link className="font-bold text-xl mt-4" href="/faq">
                FAQ
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden lg:flex justify-center items-center p-6 text-center leading-5">
        <div className="dropdown">
          <Link className="dropbtn font-semibold font-xl mr-8" href="/produse">
            Produse
          </Link>
          <div className="dropdown-content items-start">
            <Link href="" className="flex items-center">
              Cărți de vizită{" "}
              <Image
                src="/images/nav_arrow.png"
                alt="Arrow"
                width="20"
                height="20"
                className="w-[7.5%] h-auto absolute right-2"
              />
            </Link>
            <div className="carti-de-vizita items-start">
              <Link href="" className="flex items-center">
                <Image
                  src="/images/business-cards.png"
                  alt="Carte de vizită"
                  width="40"
                  height="0"
                  className="w-[10%] mr-2"
                />
                Cărți de Vizită standard
              </Link>
              <Link href="" className="flex items-center">
                <Image
                  src="/images/business-cards.png"
                  alt="Carte de vizită"
                  width="40"
                  height="0"
                  className="w-[10%] mr-2"
                />
                Cărți de Vizită pe carton special
              </Link>
              <Link href="" className="flex items-center">
                <Image
                  src="/images/business-cards.png"
                  alt="Carte de vizită"
                  width="40"
                  height="0"
                  className="w-[10%] mr-2"
                />
                Cărți de Vizită imprimate UV
              </Link>
              <Link href="" className="flex items-center">
                <Image
                  src="/images/business-cards.png"
                  alt="Carte de vizită"
                  width="40"
                  height="0"
                  className="w-[10%] mr-2"
                />
                Cărți de Vizită pe hârtie din kraft
              </Link>
              <Link href="" className="flex items-center">
                <Image
                  src="/images/business-cards.png"
                  alt="Carte de vizită"
                  width="40"
                  height="0"
                  className="w-[10%] mr-2"
                />
                Cărți de Vizită din plastic
              </Link>
              <Link href="" className="flex items-center">
                <Image
                  src="/images/business-cards.png"
                  alt="Carte de vizită"
                  width="40"
                  height="0"
                  className="w-[10%] mr-2"
                />
                Cărți de Vizită econom
              </Link>
              <Link href="" className="flex items-center">
                <Image
                  src="/images/stand.png"
                  alt="Carte de vizită"
                  width="40"
                  height="0"
                  className="w-[10%] mr-2"
                />
                Suport Cărți de Vizită
              </Link>
              <Link href="" className="flex items-center">
                <Image
                  src="/images/stand.png"
                  alt="Carte de vizită"
                  width="40"
                  height="0"
                  className="w-[10%] mr-2"
                />
                Suport Cărți de Vizită cu Magnet
              </Link>
            </div>
            <Link href="" className="flex items-center">
              Tipărituri{" "}
              <Image
                src="/images/nav_arrow.png"
                alt="Arrow"
                width="20"
                height="20"
                className="w-[7.5%] h-auto absolute right-2"
              />
            </Link>
            <div className="tiparituri items-start">
              <Link href="" className="flex items-center">
                <Image
                  src="/images/flyer.png"
                  alt="Flyere"
                  width="40"
                  height="0"
                  className="w-[10%] mr-2"
                />
                Flyere
              </Link>
              <Link href="" className="flex items-center">
                <Image
                  src="/images/stand.png"
                  alt="Carte de vizită"
                  width="40"
                  height="0"
                  className="w-[10%] mr-2"
                />
                Postere
              </Link>
              <Link href="" className="flex items-center">
                <Image
                  src="/images/brochure.png"
                  alt="Pliante și Booklete"
                  width="40"
                  height="0"
                  className="w-[10%] mr-2"
                />
                Pliante și Booklete
              </Link>
              <Link href="" className="flex items-center">
                <Image
                  src="/images/stand.png"
                  alt="Carte de vizită"
                  width="40"
                  height="0"
                  className="w-[10%] mr-2"
                />
                Mape de prezentare
              </Link>
              <Link href="" className="flex items-center">
                <Image
                  src="/images/stand.png"
                  alt="Carte de vizită"
                  width="40"
                  height="0"
                  className="w-[10%] mr-2"
                />
                Foi cu antet
              </Link>
              <Link href="" className="flex items-center">
                <Image
                  src="/images/stand.png"
                  alt="Carte de vizită"
                  width="40"
                  height="0"
                  className="w-[10%] mr-2"
                />
                Diplome și certificate
              </Link>
              <Link href="" className="flex items-center">
                <Image
                  src="/images/stand.png"
                  alt="Carte de vizită"
                  width="40"
                  height="0"
                  className="w-[10%] mr-2"
                />
                Invitații și felicitări
              </Link>
              <Link href="" className="flex items-center">
                <Image
                  src="/images/stand.png"
                  alt="Carte de vizită"
                  width="40"
                  height="0"
                  className="w-[10%] mr-2"
                />
                Plicuri personalizate
              </Link>
              <Link href="" className="flex items-center">
                <Image
                  src="/images/stand.png"
                  alt="Carte de vizită"
                  width="40"
                  height="0"
                  className="w-[10%] mr-2"
                />
                Bilete
              </Link>
              <Link href="" className="flex items-center">
                <Image
                  src="/images/stand.png"
                  alt="Carte de vizită"
                  width="40"
                  height="0"
                  className="w-[10%] mr-2"
                />
                Semne de carte
              </Link>
              <Link href="" className="flex items-center">
                <Image
                  src="/images/stand.png"
                  alt="Carte de vizită"
                  width="40"
                  height="0"
                  className="w-[10%] mr-2"
                />
                Meniuri
              </Link>
              <Link href="" className="flex items-center">
                <Image
                  src="/images/stand.png"
                  alt="Carte de vizită"
                  width="40"
                  height="0"
                  className="w-[10%] mr-2"
                />
                Calendare trimestriale
              </Link>
              <Link href="" className="flex items-center">
                <Image
                  src="/images/stand.png"
                  alt="Carte de vizită"
                  width="40"
                  height="0"
                  className="w-[10%] mr-2"
                />
                Calendate de perete
              </Link>
              <Link href="" className="flex items-center">
                <Image
                  src="/images/stand.png"
                  alt="Carte de vizită"
                  width="40"
                  height="0"
                  className="w-[10%] mr-2"
                />
                Calendare de birou
              </Link>
              <Link href="" className="flex items-center">
                <Image
                  src="/images/stand.png"
                  alt="Carte de vizită"
                  width="40"
                  height="0"
                  className="w-[10%] mr-2"
                />
                Calendare de buzunar
              </Link>
            </div>
            <Link href="" className="flex items-center">
              Broșuri, Cărți, Cataloage{" "}
              <Image
                src="/images/nav_arrow.png"
                alt="Arrow"
                width="20"
                height="20"
                className="w-[7.5%] h-auto absolute right-2"
              />
            </Link>
            <div className="brosuri-carti-cataloage items-start">
              <Link href="" className="flex items-center">
                <Image
                  src="/images/stand.png"
                  alt="Carte de vizită"
                  width="40"
                  height="0"
                  className="w-[10%] mr-2"
                />
                Broșuri prinse cu capse
              </Link>
              <Link href="" className="flex items-center">
                <Image
                  src="/images/stand.png"
                  alt="Carte de vizită"
                  width="40"
                  height="0"
                  className="w-[10%] mr-2"
                />
                Broșuri prinse cu spira metalică
              </Link>
              <Link href="" className="flex items-center">
                <Image
                  src="/images/stand.png"
                  alt="Carte de vizită"
                  width="40"
                  height="0"
                  className="w-[10%] mr-2"
                />
                Cărți cu copertă moale
              </Link>
              <Link href="" className="flex items-center">
                <Image
                  src="/images/stand.png"
                  alt="Carte de vizită"
                  width="40"
                  height="0"
                  className="w-[10%] mr-2"
                />
                Cărți cu copertă tare
              </Link>
              <Link href="" className="flex items-center">
                <Image
                  src="/images/stand.png"
                  alt="Carte de vizită"
                  width="40"
                  height="0"
                  className="w-[10%] mr-2"
                />
                Eurocopertare
              </Link>
            </div>
            <Link href="" className="flex items-center">
              Carnete{" "}
              <Image
                src="/images/nav_arrow.png"
                alt="Arrow"
                width="20"
                height="20"
                className="w-[7.5%] h-auto absolute right-2"
              />
            </Link>
            <div className="carnete items-start">
              <Link href="" className="flex items-center">
                <Image
                  src="/images/stand.png"
                  alt="Carte de vizită"
                  width="40"
                  height="0"
                  className="w-[10%] mr-2"
                />
                Carnete simple prinse cu spiră
              </Link>
              <Link href="" className="flex items-center">
                <Image
                  src="/images/stand.png"
                  alt="Carte de vizită"
                  width="40"
                  height="0"
                  className="w-[10%] mr-2"
                />
                Carnete cu interior color prinse cu spiră
              </Link>
              <Link href="" className="flex items-center">
                <Image
                  src="/images/stand.png"
                  alt="Carte de vizită"
                  width="40"
                  height="0"
                  className="w-[10%] mr-2"
                />
                Carnete simple prinse cu clei
              </Link>
              <Link href="" className="flex items-center">
                <Image
                  src="/images/stand.png"
                  alt="Carte de vizită"
                  width="40"
                  height="0"
                  className="w-[10%] mr-2"
                />
                Carnete cu interior color prinse cu clei
              </Link>
              <Link href="" className="flex items-center">
                <Image
                  src="/images/stand.png"
                  alt="Carte de vizită"
                  width="40"
                  height="0"
                  className="w-[10%] mr-2"
                />
                Carnete cu copertă tare prinse cu spiră
              </Link>
            </div>
            <Link href="" className="flex items-center">
              Etichete și Autocolante{" "}
              <Image
                src="/images/nav_arrow.png"
                alt="Arrow"
                width="20"
                height="20"
                className="w-[7.5%] h-auto absolute right-2"
              />
            </Link>
            <div className="etichete-autocolante items-start">
              <Link href="" className="flex items-center">
                <Image
                  src="/images/stand.png"
                  alt="Carte de vizită"
                  width="40"
                  height="0"
                  className="w-[10%] mr-2"
                />
                Stickere rotunde
              </Link>
              <Link href="" className="flex items-center">
                <Image
                  src="/images/stand.png"
                  alt="Carte de vizită"
                  width="40"
                  height="0"
                  className="w-[10%] mr-2"
                />
                Stickere pătrate
              </Link>
              <Link href="" className="flex items-center">
                <Image
                  src="/images/stand.png"
                  alt="Carte de vizită"
                  width="40"
                  height="0"
                  className="w-[10%] mr-2"
                />
                Stickere dreptunghiulare
              </Link>
              <Link href="" className="flex items-center">
                <Image
                  src="/images/stand.png"
                  alt="Carte de vizită"
                  width="40"
                  height="0"
                  className="w-[10%] mr-2"
                />
                Stickere A-size
              </Link>
              <Link href="" className="flex items-center">
                <Image
                  src="/images/stand.png"
                  alt="Carte de vizită"
                  width="40"
                  height="0"
                  className="w-[10%] mr-2"
                />
                Etichete din carton standard
              </Link>
              <Link href="" className="flex items-center">
                <Image
                  src="/images/stand.png"
                  alt="Carte de vizită"
                  width="40"
                  height="0"
                  className="w-[10%] mr-2"
                />
                Etichete din carton pliate
              </Link>
              <Link href="" className="flex items-center">
                <Image
                  src="/images/stand.png"
                  alt="Carte de vizită"
                  width="40"
                  height="0"
                  className="w-[10%] mr-2"
                />
                Etichete din carton special
              </Link>
              <Link href="" className="flex items-center">
                <Image
                  src="/images/stand.png"
                  alt="Carte de vizită"
                  width="40"
                  height="0"
                  className="w-[10%] mr-2"
                />
                Etichete din carton stantate
              </Link>
            </div>
            <Link href="" className="flex items-center">
              Stickere PVC{" "}
              <Image
                src="/images/nav_arrow.png"
                alt="Arrow"
                width="20"
                height="20"
                className="w-[7.5%] h-auto absolute right-2"
              />
            </Link>
            <div className="stickere items-start">
              <Link href="" className="flex items-center">
                <Image
                  src="/images/stand.png"
                  alt="Carte de vizită"
                  width="40"
                  height="0"
                  className="w-[10%] mr-2"
                />
                Stickere PVC tăiate complet
              </Link>
              <Link href="" className="flex items-center">
                <Image
                  src="/images/stand.png"
                  alt="Carte de vizită"
                  width="40"
                  height="0"
                  className="w-[10%] mr-2"
                />
                Stickere PVC decupate pe contur
              </Link>
            </div>
            <Link href="" className="flex items-center">
              Foto Printing{" "}
              <Image
                src="/images/nav_arrow.png"
                alt="Arrow"
                width="20"
                height="20"
                className="w-[7.5%] h-auto absolute right-2"
              />
            </Link>
            <div className="foto-printing items-start">
              <Link href="" className="flex items-center">
                <Image
                  src="/images/stand.png"
                  alt="Carte de vizită"
                  width="40"
                  height="0"
                  className="w-[10%] mr-2"
                />
                Magneți cu foto
              </Link>
              <Link href="" className="flex items-center">
                <Image
                  src="/images/stand.png"
                  alt="Carte de vizită"
                  width="40"
                  height="0"
                  className="w-[10%] mr-2"
                />
                Magneți corporativi cu logo
              </Link>
              <Link href="" className="flex items-center">
                <Image
                  src="/images/stand.png"
                  alt="Carte de vizită"
                  width="40"
                  height="0"
                  className="w-[10%] mr-2"
                />
                Foto pe puzzle
              </Link>
              <Link href="" className="flex items-center">
                <Image
                  src="/images/stand.png"
                  alt="Carte de vizită"
                  width="40"
                  height="0"
                  className="w-[10%] mr-2"
                />
                Mouse-Pad Personalizat
              </Link>
              <Link href="" className="flex items-center">
                <Image
                  src="/images/stand.png"
                  alt="Carte de vizită"
                  width="40"
                  height="0"
                  className="w-[10%] mr-2"
                />
                Perna cu foto
              </Link>
              <Link href="" className="flex items-center">
                <Image
                  src="/images/stand.png"
                  alt="Carte de vizită"
                  width="40"
                  height="0"
                  className="w-[10%] mr-2"
                />
                Cană alba, 300ml
              </Link>
              <Link href="" className="flex items-center">
                <Image
                  src="/images/stand.png"
                  alt="Carte de vizită"
                  width="40"
                  height="0"
                  className="w-[10%] mr-2"
                />
                Cană pentru cafea
              </Link>
              <Link href="" className="flex items-center">
                <Image
                  src="/images/stand.png"
                  alt="Carte de vizită"
                  width="40"
                  height="0"
                  className="w-[10%] mr-2"
                />
                Cană cu interior color
              </Link>
              <Link href="" className="flex items-center">
                <Image
                  src="/images/stand.png"
                  alt="Carte de vizită"
                  width="40"
                  height="0"
                  className="w-[10%] mr-2"
                />
                Cană cu margine și toarta colore
              </Link>
              <Link href="" className="flex items-center">
                <Image
                  src="/images/stand.png"
                  alt="Carte de vizită"
                  width="40"
                  height="0"
                  className="w-[10%] mr-2"
                />
                Cană cu interior și toarta colore
              </Link>
              <Link href="" className="flex items-center">
                <Image
                  src="/images/stand.png"
                  alt="Carte de vizită"
                  width="40"
                  height="0"
                  className="w-[10%] mr-2"
                />
                Cană chameleon
              </Link>
            </div>
            <Link href="" className="flex items-center">
              Shopping Bags{" "}
              <Image
                src="/images/nav_arrow.png"
                alt="Arrow"
                width="20"
                height="20"
                className="w-[7.5%] h-auto absolute right-2"
              />
            </Link>
            <div className="shopping-bags items-start">
              <Link href="" className="flex items-center">
                <Image
                  src="/images/stand.png"
                  alt="Carte de vizită"
                  width="40"
                  height="0"
                  className="w-[10%] mr-2"
                />
                Pungi din Kraft
              </Link>
              <Link href="" className="flex items-center">
                <Image
                  src="/images/stand.png"
                  alt="Carte de vizită"
                  width="40"
                  height="0"
                  className="w-[10%] mr-2"
                />
                Pungi cu șireturi standard
              </Link>
              <Link href="" className="flex items-center">
                <Image
                  src="/images/stand.png"
                  alt="Carte de vizită"
                  width="40"
                  height="0"
                  className="w-[10%] mr-2"
                />
                Torbe-Eco
              </Link>
            </div>
            <Link href="" className="flex items-center">
              POS-materiale
              <Image
                src="/images/nav_arrow.png"
                alt="Arrow"
                width="20"
                height="20"
                className="w-[7.5%] h-auto absolute right-2"
              />
            </Link>
            <div className="pos-materiale items-start">
              <Link href="" className="flex items-center">
                <Image
                  src="/images/stand.png"
                  alt="Carte de vizită"
                  width="40"
                  height="0"
                  className="w-[10%] mr-2"
                />
                Suporturi din plexiglas
              </Link>
              <Link href="" className="flex items-center">
                <Image
                  src="/images/stand.png"
                  alt="Carte de vizită"
                  width="40"
                  height="0"
                  className="w-[10%] mr-2"
                />
                Suporturi pliante și flyere
              </Link>
              <Link href="" className="flex items-center">
                <Image
                  src="/images/stand.png"
                  alt="Carte de vizită"
                  width="40"
                  height="0"
                  className="w-[10%] mr-2"
                />
                Suporturi din lemn
              </Link>
              <Link href="" className="flex items-center">
                <Image
                  src="/images/stand.png"
                  alt="Carte de vizită"
                  width="40"
                  height="0"
                  className="w-[10%] mr-2"
                />
                Suport Pahare
              </Link>
              <Link href="" className="flex items-center">
                <Image
                  src="/images/stand.png"
                  alt="Carte de vizită"
                  width="40"
                  height="0"
                  className="w-[10%] mr-2"
                />
                Wobblere
              </Link>
              <Link href="" className="flex items-center">
                <Image
                  src="/images/stand.png"
                  alt="Carte de vizită"
                  width="40"
                  height="0"
                  className="w-[10%] mr-2"
                />
                Table-Tent
              </Link>
            </div>
            <Link href="" className="flex items-center">
              Design Grafic
              <Image
                src="/images/nav_arrow.png"
                alt="Arrow"
                width="20"
                height="20"
                className="w-[7.5%] h-auto absolute right-2"
              />
            </Link>
            <div className="design-grafic items-start">
              <Link href="" className="flex items-center">
                <Image
                  src="/images/stand.png"
                  alt="Carte de vizită"
                  width="40"
                  height="0"
                  className="w-[10%] mr-2"
                />
                Design tipărituri
              </Link>
              <Link href="" className="flex items-center">
                <Image
                  src="/images/stand.png"
                  alt="Carte de vizită"
                  width="40"
                  height="0"
                  className="w-[10%] mr-2"
                />
                Design Materiale Marketing
              </Link>
              <Link href="" className="flex items-center">
                <Image
                  src="/images/stand.png"
                  alt="Carte de vizită"
                  width="40"
                  height="0"
                  className="w-[10%] mr-2"
                />
                Design POS-Materiale
              </Link>
            </div>
          </div>
        </div>
        <div className="dropdown">
          <Link
            className="dropbtn font-semibold font-xl mr-8"
            href="/marketing"
          >
            Materiale Marketing
          </Link>
          <div className="dropdown-content items-start">
            <Link href="">Pixuri Eco</Link>
            <Link href="">Pixuri Metalice</Link>
            <Link href="">Pixuri din plastic</Link>
            <Link href="">Sticle și Butelii</Link>
            <Link href="">Termosuri și Căni termice</Link>
            <Link href="">Căni cu logo</Link>
            <Link href="">USB Flash Drive</Link>
            <Link href="">Brelocuri</Link>
            <Link href="">Accesorii pentru oficiu</Link>
            <Link href="">Lanyarduri personalizate</Link>
            <Link href="">Ecusoane și accesorii</Link>
            <Link href="">Agende 2024</Link>
            <Link href="">Personalizare agende</Link>
            <Link href="">Genți și călătorii</Link>
            <Link href="">Umbrele</Link>
            <Link href="">Stegulețe și fanioane</Link>
            <Link href="">Suvenire și cadouri corporative</Link>
          </div>
        </div>
        <div className="dropdown">
          <Link className="dropbtn font-semibold font-xl mr-8" href="/textile">
            Textile
          </Link>
          <div className="dropdown-content items-start">
            {" "}
            <Link href="">Tricouri simple</Link>
            <Link href="">Tricouri Polo</Link>
            <Link href="">Hanorace</Link>
            <Link href="">Chipiuri</Link>
            <Link href="">Torbe Eco</Link>
          </div>
        </div>
        <div className="dropdown">
          <Link className="dropbtn font-semibold font-xl mr-8" href="/standuri">
            Standuri Expozitionale
          </Link>
          <div className="dropdown-content items-start">
            <Link href="">Roll-Up Banner Standard</Link>
            <Link href="">Roll-Up Banner Premium</Link>
            <Link href="">Roll-Up Banner cu 2 fețe</Link>
            <Link href="">Totem textil</Link>
            <Link href="">X-Banner Econom</Link>
            <Link href="">X-Banner Premium</Link>
            <Link href="">People stopper (A-Stand)</Link>
            <Link href="">People stopper Double Frame</Link>
          </div>
        </div>
        <div className="dropdown">
          <Link className="dropbtn font-semibold font-xl mr-8" href="/printuri">
            Printuri Mari
          </Link>
          <div className="dropdown-content items-start">
            <Link href="">Autocolante</Link>
            <Link href="">Bannere</Link>
            <Link href="">Tablouri Canvas și Multicanvas</Link>
            <Link href="">Plăcuțe personalizate</Link>
            <Link href="">Plăcuțe oficiu</Link>
            <Link href="">Plăcuțe firmă</Link>
            <Link href="">Panouri Informaționale</Link>
            <Link href="">Rame-click</Link>
          </div>
        </div>
        <div className="dropdown">
          <Link className="dropbtn font-semibold font-xl mr-8" href="/servicii">
            Servicii
          </Link>
          <div className="dropdown-content items-start">
            <Link href="">Transfer termic cu folie flex</Link>
            <Link href="">Transfer termic pe chipiuri</Link>
            <Link href="">Transfer termic pe umbrele</Link>
            <Link href="">Sublimare pe textil</Link>
            <Link href="">Transfer termic pe landyarduri</Link>
            <Link href="">Sublimare pe landyarduri</Link>
            <Link href="">Tipar UV pe suvenire</Link>
            <Link href="">Laminare plic</Link>
            <Link href="">Laminare în rolă</Link>
            <Link href="">Scanner A4/A3</Link>
          </div>
        </div>
        <Link className="font-semibold font-xl mr-8" href="/contacte">
          Contacte
        </Link>
        <Link className="font-semibold font-xl" href="/faq">
          FAQ
        </Link>
      </div>
      <hr className="hidden lg:block lg:max-w-[60%] mt-4 border-2 rounded-xl items-center justify-center m-auto mb-20 border-[#B1B1B1]" />
    </>
  );
}
