import React from "react";

function WashingGuidelines() {
  return (
    <main className="min-h-screen">
      <div className="flex items-center justify-center flex-col">
        <h1 className='text-center font-semibold text-lg  lg:text-3xl px-10 text-[#2f7eff]  lg:px-15 pt-5  lg:pt-10'>Washing Guidelines</h1> 
        <p className="font-Inter p-5 w-132 text-justify">
          <li>Do not wash in a washing machine.</li>
          <br />
          <li>Do not iron the shirt, shorts, or any other apparel.</li>
          <br />
          <li>Avoid squeezing the clothes while washing.</li>
          <br />
          <li>Do not use a brush on stickers.</li>
          <br />
          <li>Always dry inside out.</li>
          <br />
          <li>Hand wash only using cold water and mild detergent.</li>
          <br />
          <li>Do not bleach or use harsh chemicals.</li>
          <br />
          <li>Hang dry in a shaded area, avoid direct sunlight.</li>
          <br />
          <li>Do not tumble dry.</li>
          <br />
          <li>Do not soak for extended periods.</li>
          <br />
        </p>
      </div>
    </main>
  );
}

export default WashingGuidelines;
