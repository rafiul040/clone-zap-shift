import React, { useState } from "react";

const AskedQuestions = () => {
  const [open, setOpen] = useState(1);

  const toggle = (i) => {
    setOpen(open === i ? null : i);
  };

  return (
    <div className=" py-16 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0b3c3b]">
          Frequently Asked Question (FAQ)
        </h2>
        <p className="text-gray-600 mt-3">
          Enhance posture, mobility, and well-being effortlessly with Posture Pro.
          Achieve proper alignment, reduce pain, and strengthen your body with ease!
        </p>
      </div>

    
      <div className="max-w-3xl mx-auto mt-10 space-y-3">

    
        <div
          className={`border rounded-xl ${
            open === 1
              ? "bg-[#e1f3f3] border-[#68abb1] pb-4"
              : "bg-white border-gray-300"
          }`}
        >
          <button
            className="w-full text-left px-5 py-4 font-medium flex justify-between items-center"
            onClick={() => toggle(1)}
          >
            <span>How does this posture corrector work?</span>
            <span className="text-gray-500">{open === 1 ? "▲" : "▼"}</span>
          </button>

          {open === 1 && (
            <div className="px-5 text-gray-700">
              A posture corrector works by providing support and gentle alignment to
              your shoulders, back, and spine, encouraging you to maintain proper
              posture throughout the day.
            </div>
          )}
        </div>

    
        <div
          className={`border rounded-xl ${
            open === 2 ? "pb-4" : ""
          } bg-white border-gray-300`}
        >
          <button
            className="w-full text-left px-5 py-4 font-medium flex justify-between items-center"
            onClick={() => toggle(2)}
          >
            <span>Is it suitable for all ages and body types?</span>
            <span className="text-gray-500">{open === 2 ? "▲" : "▼"}</span>
          </button>

          {open === 2 && (
            <div className="px-5 text-gray-700 pb-4">
              Yes, it is designed to fit a wide range of ages and body types comfortably.
            </div>
          )}
        </div>

        
        <div
          className={`border rounded-xl ${
            open === 3 ? "pb-4" : ""
          } bg-white border-gray-300`}
        >
          <button
            className="w-full text-left px-5 py-4 font-medium flex justify-between items-center"
            onClick={() => toggle(3)}
          >
            <span>Does it really help with back pain and posture improvement?</span>
            <span className="text-gray-500">{open === 3 ? "▲" : "▼"}</span>
          </button>

          {open === 3 && (
            <div className="px-5 text-gray-700 pb-4">
              Consistent use helps improve posture and reduce back discomfort over time.
            </div>
          )}
        </div>


        <div
          className={`border rounded-xl ${
            open === 4 ? "pb-4" : ""
          } bg-white border-gray-300`}
        >
          <button
            className="w-full text-left px-5 py-4 font-medium flex justify-between items-center"
            onClick={() => toggle(4)}
          >
            <span>Does it have smart features like vibration alerts?</span>
            <span className="text-gray-500">{open === 4 ? "▲" : "▼"}</span>
          </button>

          {open === 4 && (
            <div className="px-5 text-gray-700 pb-4">
              Some models include vibration reminders to improve form.
            </div>
          )}
        </div>

        
        <div
          className={`border rounded-xl ${
            open === 5 ? "pb-4" : ""
          } bg-white border-gray-300`}
        >
          <button
            className="w-full text-left px-5 py-4 font-medium flex justify-between items-center"
            onClick={() => toggle(5)}
          >
            <span>How will I be notified when the product is back in stock?</span>
            <span className="text-gray-500">{open === 5 ? "▲" : "▼"}</span>
          </button>

          {open === 5 && (
            <div className="px-5 text-gray-700 pb-4">
              You’ll receive an email or SMS notification when it's available again.
            </div>
          )}
        </div>
      </div>

    
      <div className="text-center justify-center flex mt-10">
        <button className="bg-[#C4E86B] hover:brightness-110 px-8 py-3 rounded-full font-semibold text-gray-900 flex items-center gap-3 mx-auto">
          See More FAQ’s
          <span className="bg-[#0b3c3b] text-white rounded-full p-2">&#10148;</span>
        </button>
      </div>
    </div>
  );
};

export default AskedQuestions;
