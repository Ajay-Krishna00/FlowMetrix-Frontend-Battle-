
import { Card } from "@/components/ui/card";

const integrations = [
  { name: "QuickBooks", logo: "QB" },
  { name: "Excel", logo: "XL" },
  { name: "SAP", logo: "SAP" },
  { name: "Notion", logo: "NT" },
  { name: "Airtable", logo: "AT" },
  { name: "Salesforce", logo: "SF" },
  { name: "HubSpot", logo: "HS" },
  { name: "Stripe", logo: "ST" },
  { name: "PayPal", logo: "PP" },
  { name: "Xero", logo: "XR" },
  { name: "FreshBooks", logo: "FB" },
  { name: "Wave", logo: "WV" }
];

export const Integrations = () => {
  return (
    <section id="integrations" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Seamless
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> Integrations </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Connect with all your favorite tools and platforms. FlowMetrix works with the software you already use.
          </p>
        </div>
        
        {/* Integration Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-12">
          {integrations.map((integration, index) => (
            <Card 
              key={index}
              className="bg-slate-800/30 border-slate-700 p-6 hover:bg-slate-800/50 transition-all duration-300 transform hover:scale-110 hover:shadow-xl group cursor-pointer"
            >
              <div className="text-center">
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                  <span className="text-white font-bold text-sm">{integration.logo}</span>
                </div>
                <p className="text-slate-300 text-sm font-medium">{integration.name}</p>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <p className="text-slate-400 mb-6">And 50+ more integrations available</p>
          <div className="inline-flex items-center space-x-2 bg-slate-800/50 border border-slate-700 rounded-lg px-6 py-3">
            <span className="text-slate-300">Can't find your tool?</span>
            <span className="text-blue-400 font-medium cursor-pointer hover:text-blue-300 transition-colors">Request Integration</span>
          </div>
        </div>
      </div>
    </section>
  );
};
