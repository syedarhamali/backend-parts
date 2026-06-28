'use client';

import { useEffect, useState } from 'react';

export default function SuccessPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // simulate verification delay (optional)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <h1 className="text-xl font-semibold">Verifying payment...</h1>
      </div>
    );
  }

  return (
    <div className="h-screen flex flex-col items-center justify-center text-center px-4">
      <div className="text-green-500 text-6xl mb-4">✓</div>

      <h1 className="text-3xl font-bold mb-2">
        Payment Successful
      </h1>

      <p className="text-gray-600 mb-6">
        Thank you! Your payment has been completed successfully.
      </p>

      <a
        href="/"
        className="bg-black text-white px-6 py-3 rounded-lg"
      >
        Go to Home
      </a>
    </div>
  );
}