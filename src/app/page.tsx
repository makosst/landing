import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

/**
 * SwiftBox landing – dark, zinc, with two centered feature cards.
 */

const bullets = [
  "UI‑ready JSON in <3 s",
  "MCP or REST API",
];

const example = `{
  "sku": "B08FGHS84Q",
  "title": "Japanese Mochi 8‑Pack",
  "price": 34.99,
  "image": "https://m.media-amazon.com/images/I/81TVgwV3BHL._AC_UL320_.jpg",
  "store": "Amazon",
  "latency_ms": 620,
  "url": "https://www.amazon.com/dp/B08FGHS84Q/"
}`;

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 antialiased flex flex-col items-center font-inter">
      {/* Hero */}
      <section className="w-full max-w-4xl px-6 pt-24 pb-14 text-center">
        {/* <img src="/swiftbox-logo.png" alt="SwiftBox logo" className="mx-auto h-12 w-auto mb-6" /> */}
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">E‑commerce API</h1>
        <p className="mt-3 text-lg text-zinc-300">Instant product JSON. Zero wait.</p>
      </section>

      {/* Bullets – centered layout for two cards */}
      <section className="flex flex-col sm:flex-row justify-center gap-4 w-full max-w-xl px-6 pb-14">
        {bullets.map((b) => (
          <Card key={b} className="flex-1 bg-zinc-900/80 border border-zinc-800 rounded-xl p-5 text-center min-w-[200px]">
            <CardHeader className="p-0">
              <CardTitle className="text-sm font-medium leading-snug text-zinc-100">{b}</CardTitle>
            </CardHeader>
          </Card>
        ))}
      </section>

      {/* Example response */}
      <section className="w-full max-w-3xl px-6 pb-10">
        <Card className="bg-zinc-900/80 border border-zinc-800 rounded-xl">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-zinc-400">Example response</CardTitle>
          </CardHeader>
          <CardContent>
            <pre className="text-xs md:text-sm text-zinc-200 whitespace-pre-wrap leading-relaxed">{example}</pre>
          </CardContent>
        </Card>
        <div className="flex justify-center mt-6">
          <Button asChild size="lg" className="bg-indigo-600 hover:bg-indigo-500">
            <a href="https://api.example.com/demo/price?sku=B08FGHS84Q" target="_blank" rel="noopener noreferrer">Run 3 s live call</a>
          </Button>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="w-full max-w-4xl px-6 pb-28 text-center">
        <h2 className="text-2xl font-bold mb-10">Pricing</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Free */}
          <Card className="bg-zinc-900/80 border border-zinc-800 rounded-xl p-6 flex flex-col">
            <CardHeader className="p-0 mb-4 text-center"><CardTitle className="text-lg font-semibold text-zinc-100">Free</CardTitle></CardHeader>
            <CardContent className="flex flex-col grow items-center gap-4 text-sm text-zinc-300">
              <div className="text-3xl text-zinc-100 font-bold">$0</div>
              <p className="text-zinc-300">1 000 calls / month</p>
              <Button asChild size="sm" className="mt-auto bg-indigo-600 hover:bg-indigo-500 w-full"><a href="https://swiftbox.app/signup?plan=free">Start</a></Button>
            </CardContent>
          </Card>
          {/* Basic */}
          <Card className="bg-zinc-900/80 border border-zinc-800 rounded-xl p-6 flex flex-col">
            <CardHeader className="p-0 mb-4 text-center"><CardTitle className="text-lg font-semibold text-zinc-100">Basic</CardTitle></CardHeader>
            <CardContent className="flex flex-col grow items-center gap-4 text-sm text-zinc-300">
              <div className="text-3xl text-zinc-100 font-bold">$30</div>
              <p className="text-zinc-300">50 000 calls / month</p>
              <Button asChild size="sm" className="mt-auto bg-indigo-600 hover:bg-indigo-500 w-full"><a href="https://swiftbox.app/signup?plan=basic">Choose</a></Button>
            </CardContent>
          </Card>
          {/* Growth */}
          <Card className="bg-zinc-900/80 border border-zinc-800 rounded-xl p-6 flex flex-col">
            <CardHeader className="p-0 mb-4 text-center"><CardTitle className="text-lg font-semibold text-zinc-100">Growth</CardTitle></CardHeader>
            <CardContent className="flex flex-col grow items-center gap-4 text-sm text-zinc-300">
              <div className="text-3xl text-zinc-100 font-bold">Contact</div>
              <p className="text-zinc-300">Custom volume + SLA</p>
              <Button asChild size="sm" className="mt-auto bg-indigo-600 hover:bg-indigo-500 w-full"><a href="mailto:sales@swiftbox.app">Contact</a></Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="w-full py-8 text-center text-xs text-zinc-500">© {new Date().getFullYear()} — Built in San Francisco</footer>
    </main>
  );
}
