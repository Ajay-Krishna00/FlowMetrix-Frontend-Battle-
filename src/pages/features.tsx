
import { Card } from "@/components/ui/card";
import { Check, FileText, Image, Users } from "lucide-react";

const features = [
  {
    icon: FileText,
    title: "Real-time Dashboards",
    description: "Create beautiful, interactive dashboards that update automatically with your latest financial data."
  },
  {
    icon: Image,
    title: "AI-Powered Forecasting",
    description: "Leverage machine learning algorithms to predict trends and make data-driven financial decisions."
  },
  {
    icon: Users,
    title: "Multi-source Consolidation",
    description: "Seamlessly combine data from multiple sources into unified, comprehensive financial reports."
  },
  {
    icon: Check,
    title: "Automated Reporting",
    description: "Generate professional financial reports automatically, saving hours of manual work each month."
  },
  {
    icon: FileText,
    title: "Collaborative Workflows",
    description: "Enable team collaboration with shared workspaces, comments, and approval workflows."
  },
  {
    icon: Image,
    title: "Advanced Analytics",
    description: "Dive deep into your financial data with advanced statistical analysis and custom metrics."
  }
];

export const Features = () => {
  return (
    <section id="features" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Powerful Features for
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> Modern Finance </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Everything you need to transform your financial operations and drive business growth with data-driven insights.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="bg-slate-800/50 border-slate-700 p-8 hover:bg-slate-800/70 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl group"
            >
              <div className="flex items-center mb-4">
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-3 rounded-lg mr-4 group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
              </div>
              <p className="text-slate-300 leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
