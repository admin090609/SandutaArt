import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const Cart = () => {
  return (
    <>
      <div className="flex justify-between items-start max-w-[900px] m-auto">
        <div className="w-full pr-5">
          <div className="shadow-md mb-4 border border-[#f0f0f0]">
            <h1 className="p-3 font-bold text-2xl text-black">CARTUL MEU</h1>
          </div>
          <div className="flex shadow-md mb-2 border border-[#f0f0f0] ">
            <div>
              <Image
                src="/images/agenda1.jpg"
                alt=""
                width={100}
                height={100}
              />
            </div>
            <div className="ml-3">
              <h1 className="text-[#6F6F6F]">Denumirea la produs</h1>
              <p className="font-bold text-2xl text-black">$ 249.99</p>
              <select id="" name="">
                <option value="">1</option>
                <option value="">2</option>
                <option value="">3</option>
                <option value="">4</option>
                <option value="">5</option>
              </select>
            </div>
            <div>
              <FontAwesomeIcon
                icon={faTrash}
                size="2xs"
                style={{ color: "#000000" }}
              />
            </div>
          </div>
          <div className="shadow-md border mt-4 border-[#f0f0f0] p-2 text-right">
            <p className="text-[#6F6F6F]">
              SUB-TOTAL{" "}
              <span className="font-bold text-2xl text-black ml-2">
                $ 309,99
              </span>
            </p>
          </div>
        </div>
        <div className="shadow-md p-10 border border-[#f0f0f0]">
          <h1>TOTAL</h1>
          <hr />
          <p>
            Sub-total <span>$309,99</span>
          </p>
          <button>COMANDĂ</button>
        </div>
      </div>
    </>
  );
};

export default Cart;
