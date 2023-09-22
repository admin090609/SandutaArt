import React from "react";
import Image from "next/image";

const Cart = () => {
  return;
  <>
    <div>
      <div>
        <div><h1>CARTUL MEU</h1></div>
        <div>
          <div>
            <div><Image src="" alt=""  width={100} height={100}/></div>
            <div>
              <h1>Denumirea la produs</h1>
              <p>$ 249.99</p>
              <select id="" name="">
                <option value="">1</option>
                <option value="">2</option>
                <option value="">3</option>
                <option value="">4</option>
                <option value="">5</option>
              </select>
            </div>
          </div>
          <div><Image src="" alt="" width={100} height={100}/></div>
        </div>
        <div>
          <p>SUB-TOTAL <span>$ 309,99</span></p>
        </div>
      </div>
      <div>
        <h1>TOTAL</h1>
        <hr />
        <p>Sub-total <span>$309,99</span></p>
        <button>COMANDĂ</button>
      </div>
    </div>
  </>;
};

export default Cart;
