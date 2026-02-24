export default function MessageBubble({ role, content }) {
  const isUser = role === "user";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`
          max-w-[75%] px-4 py-3 rounded-xl text-sm md:text-base
          ${isUser 
            ? "bg-(--neon) text-black rounded-br-none" 
            : "bg-neutral-900 border border-(--neon) text-white rounded-bl-none"}
        `}
      >
        {content}
      </div>
    </div>
  );
}