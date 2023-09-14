import Image from "next/image";
import Link from "next/link";

export default function Nav() {
  return (
    <>
      <div className="flex justify-center mt-6">
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
          <Link href="tel:+37360688733" className="flex items-center ml-[20px]">
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
        </div>
      </div>
    </>
  );
}
