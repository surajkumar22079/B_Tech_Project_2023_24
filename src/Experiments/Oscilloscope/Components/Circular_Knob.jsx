import React, { useRef, useState } from 'react';

const CircularKnob = () => {
  const knobRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [rotationAngle, setRotationAngle] = useState(0);
  const [variableValue, setVariableValue] = useState(0);

  const startDrag = (e) => {
    setIsDragging(true);

    const center = {
      x: knobRef.current.offsetLeft + knobRef.current.offsetWidth / 2,
      y: knobRef.current.offsetTop + knobRef.current.offsetHeight / 2,
    };

    const offset = {
      x: e.clientX - center.x,
      y: e.clientY - center.y,
    };

    const drag = (e) => {
      if (!isDragging) return;

      let angle = Math.atan2(e.clientY - center.y, e.clientX - center.x);
      angle = (angle * 180) / Math.PI;

      if (angle < 0) {
        angle = 360 + angle;
      }

      knobRef.current.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;

      setRotationAngle(angle);

      const value = Math.round((angle / 360) * 100);
      setVariableValue(value);
    };

    const stopDrag = () => {
      setIsDragging(false);
      document.removeEventListener('mousemove', drag);
      document.removeEventListener('mouseup', stopDrag);
      document.removeEventListener('touchmove', drag);
      document.removeEventListener('touchend', stopDrag);
    };

    document.addEventListener('mousemove', drag);
    document.addEventListener('mouseup', stopDrag);
    document.addEventListener('touchmove', drag);
    document.addEventListener('touchend', stopDrag);
  };

  return (
    <div
      className="knob-container"
      style={{
        position: 'relative',
        width: '200px',
        height: '200px',
        borderRadius: '50%',
        backgroundColor: '#eee',
        overflow: 'hidden',
      }}
    >
      <div
        ref={knobRef}
        className="knob"
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '100px',
          height: '100px',
          borderRadius: '50%',
          backgroundColor: '#3498db',
          cursor: 'grab',
          touchAction: 'none',
        }}
        onMouseDown={startDrag}
        onTouchStart={startDrag}
      ></div>
      {/* <p>Rotation Angle: {rotationAngle.toFixed(2)} degrees</p> */}
      <p>Variable Value: {variableValue}</p>
    </div>
  );
};

export default CircularKnob;
