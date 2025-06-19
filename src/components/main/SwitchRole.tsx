'use client';
import { useEffect, useState } from 'react';
const roles = [
  'Data Analyst',
  'Georgia Tech Student',
  'Data Science Volunteer',
  'Hamster Fan',
];

export function SwitchRole() {
  const [currRole, setCurrRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrRole((a) => (a + 1) % roles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return <span className="text-pine font-semibold">{roles[currRole]}</span>;
}
