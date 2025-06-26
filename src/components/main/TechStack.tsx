'use client';

export default function TechStack() {
  return (
    <>
      <div className=" ">
        <a
          href="/deepgleamreport.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className=" items-start w-full ">
            <div className="mx-4 font-semibold text-2xl text-right text-pine">
              Research &<span className="text-black"> Writing</span>
            </div>
            <p className="flex justify-between mx-4 text-pine font-semibold text-lg">
              <span className="text-left hover:text-lime ">
                DeepGleam Report
              </span>
              <span className="text-darkGray text-right">
                click to read more!
              </span>
            </p>{' '}
            <iframe
              src="/deepgleamreport.pdf"
              width="100%"
              height="50%"
              className="items-center"
            />
          </div>
        </a>
        <a href="/trireport.pdf" target="_blank" rel="noopener noreferrer">
          <div className=" items-start w-full h-full">
            <h1 className="mx-4 font-semibold align-top"> </h1>
            <p className="flex justify-between mx-4 text-pine font-semibold text-lg">
              <span className="text-left hover:text-lime ">TRI EPA Report</span>
            </p>
            <iframe
              src="/trireport.pdf"
              width="100%"
              height="50%"
              className="items-center"
            />
          </div>
        </a>
      </div>
    </>
  );
}
