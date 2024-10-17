import React from 'react';
import ButtonHeader from './ButtonHeader';

export default function Header() {
  return (
    <header
      className="max-w-screen h-[100vh] bg-cover bg-center contrast-125 shadow-2xl brightness-90"
      style={{ backgroundImage: "url('/aston.jpeg')" }}
    >
      <div className="h-full w-full flex items-center justify-center flex-col p-5 text-center">
        <h1 className=" font-semibold text-[3rem] text-slate-50 shadow-2xl leading-relaxed antialiased sm:text-[5rem]">
          Rent Your Car <span className="text-blue-500">Now</span>
        </h1>
        <ButtonHeader />
      </div>
    </header>
  );
}
