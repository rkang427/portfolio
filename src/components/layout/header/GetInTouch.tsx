'use client';
import ClearIcon from '@mui/icons-material/Clear';
import ContactForm from '@/components/layout/header/ContactForm';
import Image from 'next/image';
type GetInTouchProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function GetInTouch({ open, setOpen }: GetInTouchProps) {
  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="rounded-full px-2 md:py-3 hover:text-lime hover:border-lime transition delay-75 border
        hover:bg-pine text-white bg-darkGray font-semibold"
      >
        Get in Touch
      </button>

      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center">
          <div className="bg-white p-4 rounded shadow-lg max-w-md w-full">
            <div className="relative bg-white p-6 rounded-lg">
              <button
                onClick={() => setOpen(false)}
                className="absolute top-2 right-2 text-pine hover:text-lime"
              >
                <ClearIcon />
              </button>
              <h2 className="flex items-center justify-center text-pine text-xl font-bold mb-4 gap-5">
                Happy to connect!{' '}
                <Image
                  src="/hamster.gif"
                  alt="Loading"
                  width={40}
                  height={40}
                />
              </h2>
              <ContactForm />{' '}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
