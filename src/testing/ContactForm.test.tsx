import React from 'react';
import ContactForm from '@/components/layout/header/ContactForm';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';

test('displays success message after form submit', async () => {
  global.fetch = jest.fn().mockResolvedValue({
    ok: true,
    json: async () => ({}),
  });

  render(<ContactForm />);

  fireEvent.change(screen.getByPlaceholderText(/name/i), {
    target: { value: 'Bob Marley' },
  });
  fireEvent.change(screen.getByPlaceholderText(/e-mail/i), {
    target: { value: 'bob@example.com' },
  });
  fireEvent.change(screen.getByPlaceholderText(/your message here.../i), {
    target: { value: 'Testing this form!' },
  });
  fireEvent.click(screen.getByRole('button', { name: /submit/i }));

  await waitFor(() =>
    expect(screen.getByText(/form sent!/i)).toBeInTheDocument(),
  );
});
