'use client';

export default function CancelPage() {
  return (
    <div className="h-screen flex flex-col items-center justify-center text-center px-4">
      
      {/* Icon */}
      <div className="text-red-500 text-6xl mb-4">
        ✕
      </div>

      {/* Heading */}
      <h1 className="text-3xl font-bold mb-2">
        Payment Cancelled
      </h1>

      {/* Message */}
      <p className="text-gray-600 mb-6">
        Your payment was not completed. You can try again anytime.
      </p>

      {/* Buttons */}
      <div className="flex gap-4">
        <a
          href="/"
          className="bg-black text-white px-6 py-3 rounded-lg"
        >
          Back to Home
        </a>

        <a
          href="/"
          className="border border-black px-6 py-3 rounded-lg"
        >
          Retry Payment
        </a>
      </div>
    </div>
  );
}