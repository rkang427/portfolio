'use client';
import Button from '@mui/material/Button';
import { Quicksand } from 'next/font/google';
//import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
const quicksand = Quicksand({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
});

//TODO: loading effect, aria-label, type check
export default function ContactForm() {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState('');
  const formClick = async (e: React.FormEvent) => {
    e.preventDefault();
    const newForm = new FormData(form.current!);
    interface apiInterface {
      name: FormDataEntryValue | null;
      email: FormDataEntryValue | null;
      message: FormDataEntryValue | null;
    }
    const api: apiInterface = {
      name: newForm.get('name'),
      email: newForm.get('email'),
      message: newForm.get('message'),
    };

    try {
      const stat = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(api),
      });
      if (stat.ok) {
        setStatus('Form sent!');
        form.current?.reset();
      } else {
        const errorData = await stat.json();
        setStatus('Failed to send form: ' + (errorData.error || '???'));
      }
    } catch (e) {
      setStatus('Error: ' + e);
    }
  };

  return (
    <>
      <form
        ref={form}
        onSubmit={formClick}
        className={`flex flex-col space-y-4 ${quicksand.className}`}
      >
        <input
          name="name"
          type="text"
          placeholder="name"
          className="w-full border-pine border-2 p-3 rounded placeholder-pine"
          required
        />
        <input
          name="email"
          type="email"
          placeholder="e-mail"
          className="w-full border-pine border-2 p-3 rounded placeholder-pine"
          required
        />
        <textarea
          name="message"
          placeholder="your message here..."
          className="w-full h-12 border-2 border-pine rounded p-3 text-left placeholder-pine"
          required
        />

        <Button
          type="submit"
          sx={{
            backgroundColor: '#6AB873',
            fontFamily: 'Quicksand',
            fontWeight: 'bold',
            '&:hover': { backgroundColor: '#FCFFB3', color: '#6AB873' },
            color: 'white',
          }}
        >
          submit
        </Button>
        {status && <p className="items-center">{status}</p>}
      </form>
    </>
  );
}
