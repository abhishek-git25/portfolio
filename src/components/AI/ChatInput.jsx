import { useState } from "react";
import { BsSendFill } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function ChatInput({ onSend }) {
    const [input, setInput] = useState("");

    const handleSubmit = () => {
        onSend(input);
        setInput("");
    };

    return (
        <div className="border-t border-neutral-800 pt-4 px-4 bg-black sticky bottom-0">
            <div className="flex items-center gap-3 bg-neutral-900 border border-(--neon) rounded-xl px-4 py-3 mb-3">
                <input
                    type="text"
                    placeholder="Ask something about Abhishek..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
                    className="flex-1 bg-transparent outline-none text-white placeholder-neutral-500"
                />
                <button
                    onClick={handleSubmit}
                    className="text-[var(--neon)] hover:scale-110 transition"
                >
                    <BsSendFill size={20} />
                </button>
            </div>
            <Link to="/" className="text-(--neon) underline block text-center">
                Go to Home
            </Link>
        </div>
    );
}