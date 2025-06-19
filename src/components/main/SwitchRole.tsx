'use client';
import { useEffect, useState } from 'react';

const roles = [
  'Data Analyst',
  'Georgia Tech Student',
  'Data Science Volunteer',
  'Hamster Fan',
];

export function SwitchRole() {
  const [currRoleIndex, setCurrRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = roles[currRoleIndex];
    const speed = isDeleting ? 50 : 100;

    const handleTyping = () => {
      setDisplayedText((prev) => {
        const nextLength = isDeleting ? prev.length - 1 : prev.length + 1;
        return fullText.substring(0, nextLength);
      });

      if (!isDeleting && displayedText === fullText) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && displayedText === '') {
        setIsDeleting(false);
        setCurrRoleIndex((prev) => (prev + 1) % roles.length);
      }
    };

    const timer = setTimeout(handleTyping, speed);
    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currRoleIndex]);

  return <span className="font-semibold">{displayedText}&nbsp;</span>;
}
