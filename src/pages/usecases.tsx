
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const useCases = [
  {
    id: "cfo",
    title: "CFOs & Finance Leaders",
    subtitle: "Strategic Financial Management",
    benefits: [
      "Executive-level financial dashboards",
      "Board-ready financial reports",
      "Risk analysis and compliance tracking",
      "Strategic planning and budgeting"
    ],
    description: "Empower executive decision-making with comprehensive financial insights and automated reporting that scales with your organization."
  },
  {
    id: "analysts",
    title: "Financial Analysts",
    subtitle: "Advanced Analytics & Modeling",
    benefits: [
      "Complex financial modeling tools",
      "Variance analysis and trend identification",
      "Custom KPI tracking and alerts",
      "Collaborative analysis workflows"
    ],
    description: "Accelerate your analysis with powerful tools that turn complex data into actionable insights and professional presentations."
  },
  {
    id: "startups",
    title: "Startups & SMBs",
    subtitle: "Scalable Financial Operations",
    benefits: [
      "Affordable enterprise-grade features",
      "Easy setup with templates",
      "Investor-ready financial reports",
      "Growth tracking and forecasting"
    ],
    description: "Get enterprise-level financial capabilities without the complexity. Perfect for growing businesses that need professional reporting."
  },
  {
    id: "enterprises",
    title: "Large Enterprises",
    subtitle: "Enterprise-Scale Consolidation",
    benefits: [
      "Multi-entity consolidation",
      "Advanced security and compliance",
      "Custom integrations and APIs",
      "Dedicated support and training"
    ],
    description: "Handle complex financial structures with confidence. Built for organizations that need enterprise-scale reliability and security."
  }
];

export const UseCases = () => {
  const [activeTab, setActiveTab] = useState("cfo");
  const activeUseCase = useCases.find(uc => uc.id === activeTab);

  return (
    <section id="usecases" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Built for
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> Every Team </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Whether you're a startup or enterprise, FlowMetrix adapts to your unique financial needs and scales with your growth.
          </p>
        </div>
        
        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {useCases.map((useCase) => (
            <Button
              key={useCase.id}
              variant={activeTab === useCase.id ? "default" : "outline"}
              onClick={() => setActiveTab(useCase.id)}
              className={`px-6 py-3 rounded-lg transition-all duration-300 ${
                activeTab === useCase.id
                  ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg"
                  : "bg-slate-800/50 border-slate-600 text-slate-300 hover:bg-slate-800/70"
              }`}
            >
              {useCase.title}
            </Button>
          ))}
        </div>
        
        {/* Active Tab Content */}
        {activeUseCase && (
          <Card className="bg-slate-800/50 border-slate-700 p-8 md:p-12 max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-white mb-2">{activeUseCase.title}</h3>
              <p className="text-blue-400 text-lg font-medium">{activeUseCase.subtitle}</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-slate-300 text-lg mb-6 leading-relaxed">
                  {activeUseCase.description}
                </p>
                
                <div className="space-y-3">
                  {activeUseCase.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="bg-gradient-to-r from-blue-500 to-purple-500 w-2 h-2 rounded-full"></div>
                      <span className="text-slate-300">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-slate-700/50 to-slate-800/50 rounded-xl p-8 border border-slate-600">
                <div className="text-center">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl font-bold">✓</span>
                  </div>
                  <h4 className="text-white text-xl font-semibold mb-2">Perfect Fit</h4>
                  <p className="text-slate-300 mb-6">This use case matches your needs perfectly. Ready to get started?</p>
                  <Button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-3 rounded-lg shadow-lg transition-all duration-300">
                    Start Free Trial
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        )}
      </div>
    </section>
  );
};
