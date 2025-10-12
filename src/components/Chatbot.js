import React, { useEffect, useMemo, useRef, useState } from "react";

/**
 * Chatbot — AI‑ready, minimal, DeviceLab‑aligned
 *
 * Plug into your backend at /api/chat (provider‑agnostic). Example server payload:
 *   POST /api/chat { messages: [...], topic: "web|repairs|it|retail|supply" }
 *   -> { reply: string, sources?: [{title, url}] }
 *
 * If apiUrl is not provided, a tiny local fallback bot will reply with canned tips.
 */

const SUGGESTIONS = {
  web: [
    "What’s included in the $99/mo website plan?",
    "Can you migrate my site from Wix?",
    "How do booking & maps integration work?",
  ],
  repairs: [
    "How long for an iPhone screen replacement?",
    "Do you fix water damage?",
    "Is there a warranty on repairs?",
  ],
  it: [
    "Can you set up our POS and Wi‑Fi?",
    "Do you handle Microsoft 365 migrations?",
    "How do you do backups for small business?",
  ],
  retail: [
    "Do you have cases for Pixel 8?",
    "What chargers do you recommend?",
    "Any bundles for accessories?",
  ],
  supply: [
    "Do you wholesale screens and batteries?",
    "Can I open a parts account?",
    "What are your shipping times?",
  ],
};

function FallbackBot({ prompt, topic }) {
  const KB = {
    web: "Our website subscription includes design, hosting, maintenance, backups, basic SEO, and content edits included each month.",
    repairs:
      "Most screen and battery replacements are same‑day; water damage requires diagnostics first. 90‑day workmanship warranty.",
    it: "We set up Wi‑Fi, POS, Microsoft 365/Google Workspace, and automated backups. Same‑day remote help for critical issues.",
    retail:
      "We stock cases, tempered glass, chargers, and audio. Bundles available at checkout.",
    supply:
      "Wholesale parts accounts available with NET terms after approval. Edmonton pickup and fast shipping in Canada.",
  };
  const base = KB[topic] || KB.web;
  return `Here\'s what I can tell you: ${base}\n\nIf you want a quote, share your device/model or business details.`;
}

export default function Chatbot({
  id = "chatbot",
  title = "DeviceLab Assistant",
  apiUrl = "/api/chat", // set to null to force local fallback
  initialTopic = "web", // web | repairs | it | retail | supply
  placeholder = "Type your message…",
  greeting = "Hi! I'm here to help with websites, repairs, IT, accessories, and parts.",
}) {
  const [topic, setTopic] = useState(initialTopic);
  const [input, setInput] = useState("");
  const [cooldown, setCooldown] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [messages, setMessages] = useState(() => {
    const saved = sessionStorage.getItem("dl_chat_messages");
    return saved
      ? JSON.parse(saved)
      : [{ role: "assistant", content: greeting, ts: Date.now() }];
  });
  const scrollRef = useRef(null);

  useEffect(() => {
    sessionStorage.setItem("dl_chat_messages", JSON.stringify(messages));
  }, [messages]);

  useEffect(() => {
    if (scrollRef.current)
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages, loading]);

  const suggestions = useMemo(() => SUGGESTIONS[topic] || [], [topic]);

  const tooSoon = () => cooldown;

  async function sendMessage(text) {
    if (!text.trim()) return;
    if (tooSoon()) return;

    setCooldown(true);
    setTimeout(() => setCooldown(false), 2500);

    const userMsg = {
      role: "user",
      content: text.trim(),
      ts: Date.now(),
      topic,
    };
    setMessages((m) => [...m, userMsg]);
    setInput("");
    setLoading(true);
    setError("");

    try {
      // If apiUrl is falsy, use local fallback
      if (!apiUrl) {
        const reply = FallbackBot({ prompt: text, topic });
        await new Promise((r) => setTimeout(r, 400));
        setMessages((m) => [
          ...m,
          { role: "assistant", content: reply, ts: Date.now() },
        ]);
      } else {
        const res = await fetch(apiUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ messages: [...messages, userMsg], topic }),
        });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        const reply = data.reply || "(No reply)";
        const srcs = Array.isArray(data.sources) ? data.sources : [];
        setMessages((m) => [
          ...m,
          { role: "assistant", content: reply, ts: Date.now(), sources: srcs },
        ]);
      }
    } catch (e) {
      console.error(e);
      setError("Couldn't reach the assistant. Using fallback reply.");
      const reply = FallbackBot({ prompt: text, topic });
      setMessages((m) => [
        ...m,
        { role: "assistant", content: reply, ts: Date.now() },
      ]);
    } finally {
      setLoading(false);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage(input);
  };

  return (
    <section id={id} className="w-full bg-white">
      <div className="mx-auto max-w-3xl px-4 py-8">
        {/* Header & Topic switcher */}
        <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-xl font-bold text-slate-900">{title}</h2>
            <p className="text-xs text-slate-600">
              Choose a topic to get tailored help.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {["web", "repairs", "it", "retail", "supply"].map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setTopic(t)}
                className={`rounded-lg border px-3 py-1.5 text-xs capitalize transition hover:bg-slate-50 ${
                  topic === t
                    ? "border-slate-900 bg-slate-50"
                    : "border-slate-300 bg-white"
                }`}
                aria-pressed={topic === t}
              >
                {t === "web" ? "Website" : t === "it" ? "IT & Networking" : t}
              </button>
            ))}
          </div>
        </div>

        {/* Suggestions */}
        <div className="mb-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
          {suggestions.map((s) => (
            <button
              key={s}
              onClick={() => sendMessage(s)}
              className="truncate rounded-lg border border-slate-300 px-3 py-2 text-left text-xs hover:bg-slate-50"
              type="button"
            >
              {s}
            </button>
          ))}
        </div>

        {/* Transcript */}
        <div
          ref={scrollRef}
          className="h-[420px] w-full overflow-y-auto rounded-xl border border-slate-200 bg-slate-50 p-4"
        >
          {messages.map((m, i) => (
            <div
              key={i}
              className={`mb-3 flex ${
                m.role === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`${
                  m.role === "user"
                    ? "bg-slate-900 text-white"
                    : "bg-white text-slate-900"
                } max-w-[80%] whitespace-pre-wrap rounded-xl px-3 py-2 text-sm shadow-sm`}
              >
                {m.content}
                {m.sources?.length ? (
                  <div className="mt-2 border-t border-slate-200 pt-1 text-xs opacity-80">
                    Sources:{" "}
                    {m.sources
                      .map((s, idx) => (
                        <a
                          key={idx}
                          className="underline"
                          href={s.url}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {s.title || s.url}
                        </a>
                      ))
                      .reduce((prev, curr) => [prev, ", ", curr])}
                  </div>
                ) : null}
              </div>
            </div>
          ))}
          {loading && (
            <div className="flex justify-start">
              <div className="max-w-[80%] rounded-xl bg-white px-3 py-2 text-sm text-slate-500 shadow-sm">
                Typing…
              </div>
            </div>
          )}
        </div>

        {/* Composer */}
        <form onSubmit={handleSubmit} className="mt-3 flex items-center gap-2">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={placeholder}
            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900"
          />
          <button
            type="submit"
            disabled={loading || !input.trim()}
            className={`rounded-lg bg-slate-900 px-3 py-2 text-sm font-medium text-white transition hover:opacity-90 ${
              loading || !input.trim() ? "cursor-not-allowed opacity-60" : ""
            }`}
          >
            Send
          </button>
        </form>

        {error && <p className="mt-2 text-xs text-red-600">{error}</p>}

        {/* Footnote */}
        <p className="mt-4 text-center text-[11px] text-slate-500">
          This assistant can provide general information. For diagnostics or
          account issues, please contact support.
        </p>
      </div>
    </section>
  );
}
