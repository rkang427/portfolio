'use client';
export default function Footer() {
  return (
    <footer className="white medGray p-4 mt-auto">
      <div className="container mx-auto text-center">
        © {new Date().getFullYear()} Built and Designed by Rhee Kang, inspired
        by Elia. All rights reserved.
      </div>
    </footer>
  );
}
