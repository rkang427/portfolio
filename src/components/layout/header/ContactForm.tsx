'use client';
import Button from '@mui/material/Button';
export default function ContactForm() {
  return (
    <>
      <div className="flex gap-6">
        <p>Reachable Email: </p>
        <input
          type="text"
          placeholder="chubbyhamster@gmail.com"
          className="w-100% border-medGray border-2 rounded"
        />
      </div>
      <Button className="bg-lime"> Submit </Button>
    </>
  );
}
