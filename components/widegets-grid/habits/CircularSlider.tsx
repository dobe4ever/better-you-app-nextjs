// CircularSlider.tsx
import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

interface CircularSliderProps {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  size?: number;
}

export const CircularSlider: React.FC<CircularSliderProps> = ({
  value,
  onChange,
  min = 25,
  max = 100,
  size = 200,
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);

  const calculateAngleFromValue = (val: number): number => {
    const percentage = ((val - min) / (max - min)) * 100;
    return (percentage / 100) * 360;
  };

  const calculateValueFromAngle = (angle: number): number => {
    // Normalize angle to 0-360
    let normalizedAngle = angle;
    if (normalizedAngle < 0) normalizedAngle += 360;

    const percentage = normalizedAngle / 360;
    const rawValue = min + (max - min) * percentage;
    return Math.round(Math.max(min, Math.min(max, rawValue)));
  };

  const handlePointerMove = (event: PointerEvent) => {
    if (!isDragging || !sliderRef.current) return;

    const rect = sliderRef.current.getBoundingClientRect();
    const center = {
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2,
    };

    const angle = Math.atan2(
      event.clientY - center.y,
      event.clientX - center.x
    ) * (180 / Math.PI);

    // Adjust angle to start from top (90° offset)
    const adjustedAngle = (angle + 90 + 360) % 360;
    const newValue = calculateValueFromAngle(adjustedAngle);
    onChange(newValue);
  };

  useEffect(() => {
    const handlePointerUp = () => setIsDragging(false);

    if (isDragging) {
      window.addEventListener('pointermove', handlePointerMove);
      window.addEventListener('pointerup', handlePointerUp);
    }

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerup', handlePointerUp);
    };
  }, [isDragging]);

  const angle = calculateAngleFromValue(value);
  const percentage = ((value - min) / (max - min)) * 100;

  return (
    <div
      ref={sliderRef}
      className="relative"
      style={{ width: size, height: size }}
    >
      {/* Track */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background: `conic-gradient(
            from -90deg,
            rgb(249, 115, 22) ${percentage}%,
            rgb(229, 231, 235) ${percentage}%
          )`,
        }}
      />

      {/* Inner circle */}
      <div
        className="absolute rounded-full bg-white"
        style={{
          inset: '10%',
          boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.1)',
        }}
      >
        {/* Value display */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <span className="text-4xl font-bold text-gray-900">{value}</span>
            <span className="text-xl text-gray-600">%</span>
          </div>
        </div>
      </div>

      {/* Handle */}
      <motion.div
        className="absolute w-8 h-8 cursor-pointer"
        style={{
          top: '50%',
          left: '50%',
          transform: `rotate(${angle}deg) translate(${size / 2 - 16}px) rotate(-${angle}deg)`,
        }}
        onPointerDown={() => setIsDragging(true)}
      >
        <motion.div
          className="w-full h-full bg-orange-500 rounded-full shadow-lg"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        />
      </motion.div>
    </div>
  );
};

export default CircularSlider;