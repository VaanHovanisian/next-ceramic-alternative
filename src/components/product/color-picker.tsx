"use client";

import { useState } from "react";

const colors = ["#FFFFFF", "#B86A32", "#111827", "#FBCFE8", "#78716C"];
interface Props {
  className?: string;
  color: Array<{ name: string; id: number }>;
}

export const ColorPicker: React.FC<Props> = (props) => {
  const { className, color };
  const [selectedColor, setSelectedColor] = useState(colors[0]);

  return (
    <div className="flex gap-3">
      {colors.map((color) => (
        <button
          key={color}
          onClick={() => setSelectedColor(color)}
          style={{ backgroundColor: color }}
          className={`
            w-9 h-9
            border border-gray-400
            transition-all duration-200
            hover:scale-110
            ${selectedColor === color ? "ring-2 ring-black ring-offset-2" : ""}
          `}
        />
      ))}
    </div>
  );
};
