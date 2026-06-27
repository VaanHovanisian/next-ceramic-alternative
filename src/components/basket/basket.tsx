import React from "react";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
}

export const Basket: React.FC<Props> = (props) => {
  const { className } = props;
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 bg-white text-[#3a3845]">
      <div className="text-sm text-gray-400 mb-2">
        Home / <span className="text-gray-600">Shopping Cart</span>
      </div>
      <h1 className="text-2xl font-medium mb-6">
        Cart ({cartItems.length} item)
      </h1>

      {cartItems.length === 0 ? (
        <div className="text-center py-12 text-gray-500">Basket is empty:</div>
      ) : (
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          <div className="w-full lg:w-3/4 overflow-x-auto">
            <table className="w-full border-collapse text-left min-w-150">
              <thead></thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr
                    key={item.id}
                    className="border-b border-gray-200 align-middle"
                  >
                    <td className="p-4 text-center">
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-red-400 hover:text-red-600 transition"
                      >
                        <X className="w-4 h-4 mx-auto" />
                      </button>
                    </td>

                    <td className="p-4">
                      <div className="w-16 h-20 bg-[#f7f7f7] rounded overflow-hidden flex items-center justify-center">
                        <Image
                          src={item.img}
                          alt={item.title}
                          width={64}
                          height={80}
                          className="object-cover w-full h-full"
                        />
                      </div>
                    </td>

                    <td className="p-4 font-medium text-xs tracking-wide max-w-50">
                      {item.title}
                    </td>

                    <td className="p-4 text-sm font-medium text-gray-600">
                      ${item.price}
                    </td>

                    <td className="p-4">
                      <div className="flex items-center justify-center border border-gray-300 rounded w-24 mx-auto h-8 bg-white">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="px-2 text-gray-500 hover:text-black"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="flex-1 text-center text-sm">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="px-2 text-gray-500 hover:text-black"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </td>

                    <td className="p-4 text-sm font-semibold text-gray-700">
                      ${item.price * item.quantity}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};
