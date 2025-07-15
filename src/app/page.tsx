import Link from "next/link";

export default function Home() {
  return (
    <div className="mx-auto mt-4 flex w-3xl flex-col rounded-lg bg-white/10 p-4">
      <h1 className="text-2xl font-bold">VTS Playground</h1>
      <ul className="list-disc pl-4">
        <li className="text-vts-purple-700 underline">
          <Link href="/vts/insights/market-heatmap">Market Heatmap</Link>
        </li>
        <li className="text-vts-purple-700 underline">
          <Link href="/vts/insights/vts-max-ai">VTS Max AI</Link>
        </li>
        <li className="text-vts-purple-700 underline">
          <Link href="/vts/lease/deals">Deals</Link>
        </li>
      </ul>
    </div>
  );
}
