import Image from "next/image";
import Link from "next/link";

export default function Nav() {
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
            className="flex items-center ml-[20px]"
          >
            <Image
              src="/images/location.png"
              alt="Location"
              width="35"
              height="0"
              className="w-[35px] h-[35px]"
            />
            <div>
              <p className="font-semibold text-black text-[18px] leading-5">
                Ialoveni
              </p>
              <p className="font-semibold text-black text-[16px] leading-5">
                Alexandru cel Bun 78/1
              </p>
            </div>
          </Link>
          <Link
            href="tel:+37369111401"
            className="flex items-center ml-[44px] justify-center"
          >
            <Image
              src="/images/phone.png"
              alt="Phone"
              width="27"
              height="0"
              className="w-[27px] h-[27px]"
            />
            <p className="font-semibold text-black text-[24px]">069 111 401</p>
          </Link>
        </div>
        <div className="flex items-center">
          <div>
            <Image
              src="/images/search.png"
              width="25"
              height="0"
              className="w-[25px] h-[25px] absolute mt-3.5 ml-4"
              alt="Search"
            />
            <input
              type="text"
              placeholder="Caută..."
              className="search_bar bg-[#f3f3f3] rounded-[3px] border border-solid border-[#dadada] w-[250px] h-[50px]"
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
        </div>
      </div>
    </>
  );
}
