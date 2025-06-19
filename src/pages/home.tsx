import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Star, Sparkles, Play } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen w-full p-5 md:p-20 bg-gradient-to-b from-blue-600 via-blue-700 to-gray-800 relative overflow-hidden">
      <Navbar />

      {/* Background decorative elements */}
      {/* <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl">ajay</div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-white/5 rounded-full blur-lg">ajay</div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-white/5 rounded-full blur-2xl">ajay</div>
        <div className="absolute bottom-10 right-10 w-20 h-20 bg-red-400/30 rounded-full blur-lg">ajay</div>
      </div> */}
      <div className="w-7xl">
        {/* Dashboard mockup elements */}
        <div className="absolute top-32 left-8 opacity-30 hidden md:flex">
          <div className="w-72 h-48 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-4">
            <div className="flex items-center justify-between mb-4">
              <div className="text-white/70 text-sm">Expenses</div>
              <div className="text-white/70 text-sm">$56.2K</div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 rounded-full border-4 border-white/30 border-t-white/70"></div>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-white/50 rounded-full"></div>
                  <div className="text-white/60 text-xs">Travel</div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-white/30 rounded-full"></div>
                  <div className="text-white/60 text-xs">Legal Expenses</div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-white/20 rounded-full"></div>
                  <div className="text-white/60 text-xs">Other</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute top-20 right-8 opacity-25 hidden md:flex">
          <div className="w-80 h-56 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-4">
            <div className="text-white/70 text-sm mb-4">Dashboard Overview</div>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <div className="text-white/60 text-xs">Revenue</div>
                <div className="w-24 h-2 bg-white/20 rounded-full">
                  <div className="w-16 h-2 bg-white/50 rounded-full"></div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="text-white/60 text-xs">Expenses</div>
                <div className="w-24 h-2 bg-white/20 rounded-full">
                  <div className="w-12 h-2 bg-white/40 rounded-full"></div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="text-white/60 text-xs">Profit</div>
                <div className="w-24 h-2 bg-white/20 rounded-full">
                  <div className="w-20 h-2 bg-white/60 rounded-full"></div>
                </div>
              </div>
            </div>
            <div className="mt-4 flex space-x-1">
              {Array.from({ length: 12 }).map((_, i) => (
                <div
                  key={i}
                  className={`w-4 h-${Math.floor(Math.random() * 8) + 4} bg-white/30 rounded-sm`}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 py-8 mt-10">
        {/* Rating badges */}
        <div className="flex flex-wrap justify-center items-center gap-6 mb-16 text-white">
          <div className="flex items-center space-x-2">
            <Star className="w-4 h-4 fill-current" />
            <span className="text-sm font-medium">4.8 rating on</span>
            <span className="font-semibold">Capterra</span>
          </div>
          <div className="flex items-center space-x-2">
            <Star className="w-4 h-4 fill-current" />
            <span className="text-sm font-medium">4.8 rating on</span>
            <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
              <span className="text-blue-600 font-bold text-xs">G2</span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Star className="w-4 h-4 fill-current" />
            <span className="text-sm font-medium">350+ reviews on</span>
            <span className="font-semibold text-blue-300 text-xl">xero</span>
          </div>
          <div className="flex items-center space-x-2">
            <Star className="w-4 h-4 fill-current" />
            <span className="text-sm font-medium">550+ reviews on</span>
            <span className="font-semibold text-green-300">TrustPilot</span>
          </div>
        </div>

        {/* Main heading */}
        <div className="text-center max-w-7xl mx-auto">
          <h1 className="text-[50px] md:text-[80px] font-bold text-white leading-tight mb-8">
            Create reports, forecasts,
            <br />
            dashboards & consolidations
          </h1>

          {/* AI insights badge */}
          <div className="flex items-center justify-center space-x-3 mb-12 min-md:m-10">
            <Sparkles className="w-7 h-7 text-yellow-300" />
            <span className="text-2xl text-white font-medium">
              Now with AI-insights
            </span>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col items-center justify-center space-y-4 ">
            <Button
              size="lg"
              className="bg-white text-blue-700 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-lg"
            >
              Start 14-day free trial
            </Button>

            <button className="flex items-center space-x-2 text-white hover:text-blue-400 transition-colors">
              <Play className="w-4 h-4" />
              <span className="text-lg underline">See what we do</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
