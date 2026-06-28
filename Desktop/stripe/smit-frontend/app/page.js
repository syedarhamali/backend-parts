'use client';

import { useState } from 'react';

const plans = [
  {
    id: 'basic',
    name: 'Iphone 15',
    price: 2000,
    features: ['1 Website', 'Email Support', 'Basic Features'],
  },
  {
    id: 'standard',
    name: 'Iphone 16 Pro',
    price: 3000,
    features: ['5 Websites', 'Priority Support', 'Advanced Features'],
  },
  {
    id: 'premium',
    name: 'Iphone 17 Pro',
    price: 5000,
    features: ['Unlimited Websites', '24/7 Support', 'All Features'],
  },
];

export default function Page() {
  const [quantities, setQuantities] = useState({
    basic: 1,
    standard: 1,
    premium: 1,
  });

  const changeQuantity = (id, value) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max(1, Number(value)),
    }));
  };

  const handleCheckout = async (plan) => {
    const quantity = quantities[plan.id];

    const res = await fetch('http://localhost:3001/checkout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: plan.name,
        price: plan.price,
        quantity,
      }),
    });

    const data = await res.json();

    if (data.url) {
      window.location.href = data.url;
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-10">
        Choose Your Product
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className="border rounded-xl p-6 shadow hover:shadow-lg transition"
          >
            <h2 className="text-2xl font-bold">{plan.name}</h2>

            <p className="text-4xl font-bold my-4">
              ${plan.price}
            </p>

            <ul className="space-y-2 mb-4">
              {plan.features.map((feature) => (
                <li key={feature}>✓ {feature}</li>
              ))}
            </ul>

            {/* Quantity Selector */}
            <div className="mb-4">
              <label className="block mb-2 font-semibold">
                Quantity
              </label>

              <input
                type="number"
                min="1"
                value={quantities[plan.id]}
                onChange={(e) =>
                  changeQuantity(plan.id, e.target.value)
                }
                className="w-full border rounded p-2"
              />
            </div>

            {/* Total Price */}
            <p className="text-lg font-semibold mb-4">
              Total: $
              {plan.price * quantities[plan.id]}
            </p>

            <button
              onClick={() => handleCheckout(plan)}
              className="w-full bg-black text-white py-3 rounded-lg"
            >
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}