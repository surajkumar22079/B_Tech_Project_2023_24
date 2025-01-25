import React, { useEffect, useRef } from 'react';

const SineCurve = ({
  yScale1,
  xOffset,
  yOffset1,
  yScale2,
  yOffset2,
  frequency1,
  amplitude1,
  function1,
  frequency2,
  amplitude2,
  function2,
}) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    const width = canvas.width;
    const height = canvas.height;

    context.clearRect(0, 0, width, height);

    // Draw grid lines
    context.beginPath();
    context.setLineDash([0.1, 0.1]);
    context.strokeStyle = '#ccc';

    // Draw horizontal grid lines
    for (let y = height / 10; y < height; y += height / 10) {
      context.moveTo(0, y);
      context.lineTo(width, y);
    }

    // Draw vertical grid lines
    for (let x = width / 10; x < width; x += width / 10) {
      context.moveTo(x, 0);
      context.lineTo(x, height);
    }

    context.stroke();
    context.setLineDash([]);

    // Draw axes
    context.beginPath();
    context.moveTo(0, height / 2);
    context.lineTo(width, height / 2);
    context.stroke();

    context.beginPath();
    context.moveTo(width / 2, 0);
    context.lineTo(width / 2, height);
    context.stroke();

    // Draw x-scale points
    context.beginPath();
    context.fillStyle = '#000';
    context.font = '10px Arial';

    for (let x = width / 10; x < width; x += width / 10) {
      const xPos = ((x - width / 2) * 2 * Math.PI) / width;
      context.fillText(xPos.toFixed(2), x, height / 2 + 10);
    }

    // Draw first curve
    context.beginPath();
    context.strokeStyle = 'blue';
    for (let x = 0; x < width; x++) {
      const angle = ((x - width / 2 + xOffset) * (2 * Math.PI * frequency1)) / width;
      const y = calculateSignalValue(angle, yScale1, amplitude1, yOffset1, function1, height);
      context.lineTo(x, y);
    }
    context.stroke();

    // Draw second curve
    context.beginPath();
    context.strokeStyle = 'red';
    for (let x = 0; x < width; x++) {
      const angle = ((x - width / 2 + xOffset) * (2 * Math.PI * frequency2)) / width;
      const y = calculateSignalValue(angle, yScale2, amplitude2, yOffset2, function2, height);
      context.lineTo(x, y);
    }
    context.stroke();
  }, [yScale1, xOffset, yOffset1, yScale2, yOffset2, frequency1, amplitude1, function1, frequency2, amplitude2, function2]);

  const calculateSignalValue = (angle, yScale, amplitude, yOffset, signalFunction, height) => {
    switch (signalFunction) {
      case 'sine':
        return -(Math.sin(angle) * yScale * amplitude) + height / 2 + yOffset;
      case 'cosine':
        return -(Math.cos(angle) * yScale * amplitude) + height / 2 + yOffset;
      case 'ramp':
        return (angle * yScale * amplitude) / (2 * Math.PI) + height / 2 + yOffset;
      case 'step':
        return angle >= 0 ? yScale * amplitude + height / 2 + yOffset : height / 2 + yOffset;
      default:
        return 0;
    }
  };

  return (
    <canvas
      ref={canvasRef}
      width={450}
      height={300}
      style={{
        margin: `${4}px ${4}px`,
        borderRadius: `10px`,
        border: `${3}px solid rgb(150 147 147)`,
      }}
    />
  );
};

export default SineCurve;
