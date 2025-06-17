export default function Intro() {
  return (
    <>
        <div className="md:space-x-4 ">
      <h1 className="text-6xl font-extrabold text-darkGray py-4">Hey There!</h1>
      <h2 className="text-4xl font-semibold text-darkGray py-4">
        My name is Rhee, a Data Analyst, passionate about Data Science and
        Software Engineering. When I’m not diving into data, you’ll find me {' '}
          <a href="https://github.com/rkang427"
             target="_blank"
             rel="noopener noreferrer"
             className="text-pine hover:text-lime underline">
              side
              questing through code
          </a>. I’d love to share what I learn along the way!
      </h2>
        </div>
        <div className="hidden md:block border-t border-gray-300 w-full h-0.5 " />

    </>
  );
}
