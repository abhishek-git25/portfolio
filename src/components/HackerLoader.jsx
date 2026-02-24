import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function HackerLoader({ onComplete, lines = ["> booting portfolio...", "> loading frontend_engine...", "> access granted ✔",] }) {
    const [show, setShow] = useState(true);

    // const lines = [
    //     "> booting portfolio...",
    //     "> loading frontend_engine...",
    //     "> access granted ✔",
    // ];

    useEffect(() => {
        // Total timing:
        // 3 lines × 0.8s stagger + 1.2s wait
        const totalDuration = 800 * lines.length + 1200;

        const timer = setTimeout(() => {
            setShow(false);
            setTimeout(() => {
                onComplete?.();
            }, 700);
        }, totalDuration);

        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {show && (
                <motion.div
                    className="fixed inset-0 bg-black flex flex-col justify-center px-8 font-mono text-lg text-(--neon)"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    {lines.map((line, index) => (
                        <motion.p
                            key={index}
                            className="mb-2 glitch"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{
                                duration: 0.6,
                                delay: index * 0.8,
                            }}
                        >
                            {line}
                        </motion.p>
                    ))}
                </motion.div>
            )}
        </AnimatePresence>
    );
}