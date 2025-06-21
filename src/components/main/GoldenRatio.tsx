export default function GoldenRatio() {
  const width = 400;
  const height = 400;
  const centerX = width - 150;
  const centerY = height - 220;
  const interval = 64;
  const interval2 = 22;
  const interval3 = 800;
  const a = 0.3;
  const rotations = 230;
  const points: string[] = [];
  const dots: { x: number; y: number }[] = [];
  const dotted: { x: number; y: number }[] = [];
  const dotted_new: { x2: number; y2: number }[] = [];
  const steps = 11000;

  for (let i = 0; i < steps; i++) {
    const theta = (Math.PI * 2 * rotations * i) / steps;
    const r = -a - 0.157 * i * theta;
    let r2 = -a - 0.157 * i * theta;

    const x = centerX + r * Math.sin(theta);
    const y = centerY + r * Math.cos(theta);

    if (x >= -300 && x <= width + 200 && y >= -300 && y <= height + 200) {
      points.push(`${x},${y}`);
      if (i % interval === 0) dots.push({ x, y });
      if (i % interval2 === 0) dotted.push({ x, y });
    }

    const maxRadius = 150;
    if (Math.abs(r2) > maxRadius) {
      r2 = (r2 > 0 ? 1 : -1) * maxRadius;
    }

    const x2 = centerX + r2 * Math.sin(theta);
    const y2 = centerY + r2 * Math.cos(theta);

    if (x2 >= 0 && x2 <= width && y2 >= 0 && y2 <= height) {
      if (i % interval3 === 0) dotted_new.push({ x2, y2 });
    }
  }

  return (
    <>
      <svg width="100%" height="50%" className="bg-white">
        <g
          style={{
            transformOrigin: `${width / 2}px ${height / 2}px`,
            animation: 'spin 20s linear infinite',
          }}
        >
          <polyline
            fill="none"
            stroke="black"
            strokeWidth="2"
            points={points.join(' ')}
          />

          {dotted.map((dot, index) => (
            <circle key={index} cx={dot.x} cy={dot.y} r="4" fill="#DFF314" />
          ))}
          {dotted.map((dot, index) => {
            if (index === 0) return null;

            const prev = dots[0];
            const midX = (prev.x + dot.x) / 2;
            const midY = (prev.y + dot.y) / 2;

            return (
              <path
                key={index}
                d={`M ${prev.x},${prev.y} Q ${midX},${midY - 40} ${dot.x},${dot.y}`} //quad bezier curve
                stroke="gray"
                strokeWidth="1"
                fill="none"
                strokeDasharray="3,3"
              />
            );
          })}

          {dotted_new.map((dot, index) => {
            if (index === 0) return null;
            if (index % 3 !== 0 || index + 3 >= dotted_new.length) return null;

            const start = dotted_new[index];
            const end = dotted_new[index + 3];
            const midX = (start.x2 + end.x2) / 1.5;
            const midY = (start.y2 + end.y2) / 1.5;
            console.log('text pos:', midX, midY, 'index:', index);

            return (
              <text
                key={index}
                x={midX}
                y={midY}
                fill="black"
                fontSize="22"
                textAnchor="middle"
                dominantBaseline="middle"
              >
                {2 * index - 1}
              </text>
            );
          })}
        </g>
      </svg>
    </>
  );
}
