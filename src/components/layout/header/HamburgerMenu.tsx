import React, { useState } from 'react';
import { Menu, MenuItem } from '@mui/material';

export default function HamburgerMenu() {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <div
        onClick={handleClick}
        className="border border-medGray rounded-full px-2 py-1 bg-white text-medGray hover:border-pine hover:text-pine transition delay-75 font-semibold cursor-pointer inline-flex items-center"
      >
        <svg
          className="w-3 h-5"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 6h16M4 12h12M4 18h16"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        <MenuItem
          sx={{
            '&:hover': {
              backgroundColor: 'var(--lightLime)',
            },
            '&.Mui-focusVisible': {
              backgroundColor: 'var(--white)',
            },
          }}
          component="a"
          href="/about"
          onClick={handleClose}
        >
          About Me
        </MenuItem>
        <MenuItem
          sx={{
            '&:hover': {
              backgroundColor: 'var(--lightLime)',
            },
            '&.Mui-focusVisible': {
              backgroundColor: 'var(--white)',
            },
          }}
          component="a"
          href="/blog"
          onClick={handleClose}
        >
          Blog
        </MenuItem>
        <MenuItem
          sx={{
            '&:hover': {
              backgroundColor: 'var(--lightLime)',
            },
            '&.Mui-focusVisible': {
              backgroundColor: 'var(--white)',
            },
          }}
          component="a"
          href="/currentwork"
          onClick={handleClose}
        >
          Current Work
        </MenuItem>
        <MenuItem
          sx={{
            '&:hover': {
              backgroundColor: 'var(--lightLime)',
            },
            '&.Mui-focusVisible': {
              backgroundColor: 'var(--white)',
            },
          }}
          component="a"
          href="/pastproj"
          onClick={handleClose}
        >
          Past Projects
        </MenuItem>
        <MenuItem
          sx={{
            '&:hover': {
              backgroundColor: 'var(--lightLime)',
            },
            '&.Mui-focusVisible': {
              backgroundColor: 'var(--white)',
            },
          }}
          component="a"
          href="/inspo"
          onClick={handleClose}
        >
          About this Site
        </MenuItem>
      </Menu>
    </>
  );
}
