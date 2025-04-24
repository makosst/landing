import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    title: "Live Buy‑Box Price",
    desc: "Returns the *real* landed price—including coupons and Prime‑only discounts—in <1 s when cached.",
  },
  {
    title: "Add‑to‑Cart Verify",
    desc: "Confirms the item can reach checkout to your default address before you reprice or alert a user.",
  },
  {
    title: "Sub‑Second Cache",
    desc: "We cache selector paths per ASIN so repeated calls skip the full browser run.",
  },
  {
    title: "MCP‑Ready",
    desc: "One manifest → any OpenAI / Claude agent can call the API with zero glue code.",
  },
];

const plans = [
  {
    name: "Free",
    price: "$0",
    subtitle: "1 000 calls / mo",
  },
  {
    name: "Growth",
    price: "$99",
    subtitle: "50 k calls / mo",
  },
  {
    name: "Scale",
    price: "Contact",
    subtitle: ">1 M calls / mo",
  },
];

export default function LandingPage() {
  return (
    <main className="flex flex-col items-center text-gray-900 dark:text-gray-50">
      {/* Hero */}
      <section className="w-full bg-gradient-to-br from-indigo-600 to-purple-600 py-24 text-center text-white">
        <h1 className="text-4xl font-extrabold md:text-6xl">
          Sub‑Second Amazon Buy‑Box API
        </h1>
        <p className="mt-6 max-w-xl mx-auto text-lg opacity-90">
          Final price, add‑to‑cart, and stock check—all in one deterministic API call.
        </p>
        <Button asChild size="lg" className="mt-10 text-lg font-semibold">
          <a href="#signup">Get Early Access</a>
        </Button>
      </section>

      {/* Features */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6 py-16 max-w-5xl w-full">
        {features.map((f) => (
          <Card key={f.title} className="backdrop-blur-sm bg-white/80 dark:bg-black/30 shadow-xl">
            <CardHeader>
              <CardTitle className="text-xl font-semibold">{f.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm leading-relaxed opacity-80" dangerouslySetInnerHTML={{ __html: f.desc }} />
            </CardContent>
          </Card>
        ))}
      </section>

      {/* Pricing */}
      <section id="pricing" className="w-full bg-gray-50 dark:bg-gray-900 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">Pricing</h2>
        <div className="flex flex-col md:flex-row justify-center gap-8 max-w-4xl mx-auto px-6">
          {plans.map((p) => (
            <Card key={p.name} className="flex-1 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-center">
                  {p.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col items-center gap-4">
                <div className="text-4xl font-bold">{p.price}</div>
                <p className="opacity-75 text-center text-sm">{p.subtitle}</p>
                <Button size="sm" className="w-full">Select</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Signup */}
      <section id="signup" className="py-24 px-6 text-center w-full">
        <h2 className="text-3xl font-bold">Join the private beta</h2>
        <p className="mt-4 opacity-80 max-w-md mx-auto">
          Drop your email and we’ll send you an API key & Postman collection.
        </p>
        <form
          action="https://getrevue.co/profile/yourlist/add_subscriber" // replace with your tool
          method="post"
          className="mt-8 flex flex-col md:flex-row gap-3 md:justify-center"
        >
          <input
            name="member[email]"
            type="email"
            required
            placeholder="you@example.com"
            className="rounded-xl px-4 py-3 w-full md:w-80 text-black"
          />
          <Button type="submit" size="lg" className="w-full md:w-auto">
            Get API Key
          </Button>
        </form>
      </section>

      {/* Footer */}
      <footer className="py-10 text-sm opacity-70 text-center w-full">
        © {new Date().getFullYear()} Your Company — Built in SF Bay Area
      </footer>
    </main>
  );
}
