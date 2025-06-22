'use client';

export default function TechStack() {
  return (
    <>
      <a href="/deepgleamreport.pdf" target="_blank" rel="noopener noreferrer">
        <div className=" items-start w-full h-full">
          <div className="mx-4 font-semibold text-2xl text-right text-pine">
            Research &<span className="text-black"> Writing</span>
          </div>
          <h1 className="mx-4 text-right text-pine ">click to read more!</h1>
          <iframe
            src="/deepgleamreport.pdf"
            width="100%"
            height="100%"
            className="items-center"
          />
        </div>
      </a>
      <a href="/trireport.pdf" target="_blank" rel="noopener noreferrer">
        <div className=" items-start w-full h-full">
          <h1 className="mx-4 mb-2 font-semibold align-top"> </h1>
          <iframe
            src="/trireport.pdf"
            width="100%"
            height="100%"
            className="items-center"
          />
        </div>
      </a>
    </>
  );
}
