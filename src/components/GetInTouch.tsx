'use client';
// import ContactForm from "@/components/ContactForm";
type GetInTouchProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function GetInTouch({ open, setOpen }: GetInTouchProps) {
  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="rounded-full px-2 md:py-3 hover:text-black hover:border-pine transition delay-75 border hover:bg-pine text-white bg-darkGray font-semibold"
      >
        Get in Touch
      </button>

      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center">
          <div className="bg-white p-6 rounded shadow-lg max-w-md w-full">
            <h2 className="text-darkGray text-xl font-bold mb-4">
              Happy to connect!
            </h2>
            {/*<ContactForm />*/}
            <button
              onClick={() => setOpen(false)}
              className="mt-4 px-4 py-2 bg-lightGray text-darkGray rounded"
            >
              Exit
            </button>
          </div>
        </div>
      )}
    </>
  );
}
