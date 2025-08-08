export default function VtsAiUpsell() {
  return (
    <div className="layered-shadow mb-2 flex flex-col gap-2 rounded-2xl bg-[linear-gradient(45deg,var(--color-vts-ai-light)_0%,var(--color-vts-ai-medium)_10%,var(--color-vts-ai-dark)_50%,var(--color-vts-ai-gray)_200%)] p-4 text-white/90">
      <h3 className="text-base font-semibold">Unlock the full potential of VTS AI</h3>
      <p className="text-sm">
        You are seeing a preview of VTS AI. To get full access to AI-powered market data and insights{" "}
        <a className="underline hover:text-purple-200" href="https://www.vts.com/vts-data" target="_blank">
          upgrade to VTS4
        </a>
        .
      </p>
    </div>
  );
}
