import React, { useEffect, useRef } from 'react';
import ReactIcon from '../../public/assets/icons/react';
import NextIcon from '../../public/assets/icons/nextjs';
import TailwindIcon from '../../public/assets/icons/tailwind';
import NodeIcon from '../../public/assets/icons/node';
import MongoIcon from '../../public/assets/icons/mongodb';

const icons = [
    { name: 'React', Icon: ReactIcon },
    { name: 'Next.js', Icon: NextIcon },
    { name: 'Tailwind', Icon: TailwindIcon },
    { name: 'Node.js', Icon: NodeIcon },
    { name: 'MongoDB', Icon: MongoIcon },
];


const Ballpit = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        const balls = Array.from(container.querySelectorAll('.ball'));
        const velocities = balls.map(() => ({
            dx: (Math.random() - 0.2) * 0.5, // Reduced speed
            dy: (Math.random() - 0.2) * 0.5,
        }));

        const ballSize = 100;

        balls.forEach((ball, i) => {
            let x = Math.random() * (container.offsetWidth - ballSize);
            let y = Math.random() * (container.offsetHeight - ballSize);

            const animate = () => {
                x += velocities[i].dx;
                y += velocities[i].dy;

                if (x <= 0 || x >= container.offsetWidth - ballSize) {
                    velocities[i].dx *= -1;
                    x = Math.max(0, Math.min(x, container.offsetWidth - ballSize));
                }

                const padding = 20;

                if (y <= 0 || y >= container.offsetHeight - ballSize - padding) {
                    velocities[i].dy *= -1;
                    y = Math.max(0, Math.min(y, container.offsetHeight - ballSize - padding));
                }

                ball.style.transform = `translate(${x}px, ${y}px)`;

                requestAnimationFrame(animate);
            };

            // Hover effect: push ball in a random direction
            ball.addEventListener('mouseenter', () => {
                velocities[i].dx += (Math.random() - 0.5) * 4;
                velocities[i].dy += (Math.random() - 0.5) * 4;
            });

            animate();
        });
    }, []);

    return (
        <div
            ref={containerRef}
            className="relative w-full h-full overflow-hidden pointer-events-none z-1"
        >
            {icons.map(({ name, Icon }, idx) => (
                <div
                    key={idx}
                    className="ball absolute md:w-[140px] w-[100px] md:h-[140px] h-[100px] rounded-full bg-white shadow-xl flex flex-col items-center justify-center pointer-events-auto"
                    title={name} // optional: shows name on hover
                >
                    <Icon className="md:w-12 w-8 md:h-12 h-8 mb-1" />
                    <span className="text-xs font-semibold">{name}</span>
                </div>
            ))}

        </div>
    );
};

export default Ballpit;
