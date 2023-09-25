import React, { useState } from "react";
import Image from "next/image";

const Faq = () => {
  const [faqItems, setFaqItems] = useState([
    {
      question: "Cum as putea plati?",
      answer: "Puteți plăti cu cardul de credit sau cu PayPal.",
      isOpen: false,
    },
    {
      question: "Cum merge livrarea?",
      answer: "Livrarea se face în termen de 2-3 zile lucrătoare.",
      isOpen: false,
    },
    {
      question: "Cum as putea plati?",
      answer: "Puteți plăti cu cardul de credit sau cu PayPal.",
      isOpen: false,
    },
    {
      question: "Cum as putea plati?",
      answer: "Puteți plăti cu cardul de credit sau cu PayPal.",
      isOpen: false,
    },
    // Adăugați mai multe întrebări și răspunsuri aici
  ]);

  const toggleFaqItem = (index: number) => {
    const updatedFaqItems = [...faqItems];
    updatedFaqItems[index].isOpen = !updatedFaqItems[index].isOpen;
    setFaqItems(updatedFaqItems);
  };

  return (
    <>
      <div className="max-w-screen-xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-semibold text-center mb-6">
          Întrebări Frecvente
        </h1>
        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div className="bg-gray-100 p-4 rounded-md" key={index}>
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleFaqItem(index)}
              >
                <p className="text-lg font-semibold">{item.question}</p>
                <Image
                  src={`/images/${item.isOpen ? "minus" : "plus"}.png`}
                  alt=""
                  width={25}
                  height={25}
                />
              </div>
              {item.isOpen && (
                <div className="mt-2 text-gray-700">{item.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
      <hr className="max-w-[84%] sm:max-w-[60%] mt-10 mb-10 border-2 rounded-xl items-center justify-center m-auto  border-[#B1B1B1]" />
    </>
  );
};

export default Faq;
