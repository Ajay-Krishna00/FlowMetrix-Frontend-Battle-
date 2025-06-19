
import { Card } from "@/components/ui/card";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CFO",
    company: "TechFlow Inc.",
    rating: 5,
    text: "FlowMetrix transformed our financial reporting process. What used to take our team 3 days now takes 3 hours, and the insights are far more actionable.",
    avatar: "SC"
  },
  {
    name: "Michael Rodriguez",
    role: "Financial Analyst",
    company: "Growth Dynamics",
    rating: 5,
    text: "The AI forecasting feature is incredibly accurate. It's helped us identify trends we would have missed and make better strategic decisions.",
    avatar: "MR"
  },
  {
    name: "Emily Watson",
    role: "Startup Founder",
    company: "InnovateLab",
    rating: 5,
    text: "As a startup, we needed enterprise-level reporting without the complexity. FlowMetrix gave us exactly that, plus investor-ready reports.",
    avatar: "EW"
  },
  {
    name: "David Park",
    role: "VP Finance",
    company: "Global Solutions Corp",
    rating: 5,
    text: "The multi-entity consolidation feature saved us countless hours. Our board reports are now more comprehensive and delivered on time, every time.",
    avatar: "DP"
  }
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Trusted by
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> Finance Leaders </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Don't just take our word for it. See what finance professionals are saying about FlowMetrix.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="bg-slate-800/50 border-slate-700 p-8 hover:bg-slate-800/70 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
            >
              {/* Rating Stars */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <div key={i} className="w-4 h-4 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-sm mr-1"></div>
                ))}
              </div>
              
              {/* Testimonial Text */}
              <blockquote className="text-slate-300 text-lg mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </blockquote>
              
              {/* Author Info */}
              <div className="flex items-center">
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-sm">{testimonial.avatar}</span>
                </div>
                <div>
                  <div className="text-white font-semibold">{testimonial.name}</div>
                  <div className="text-blue-400 text-sm">{testimonial.role}</div>
                  <div className="text-slate-400 text-sm">{testimonial.company}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-slate-800/50 to-slate-700/50 border border-slate-600 rounded-2xl p-12">
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Financial Analytics?
          </h3>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Join hundreds of finance teams who trust FlowMetrix to power their most important decisions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-4 text-lg rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              Start Your Free Trial
            </button>
            <button className="border border-slate-400 text-slate-300 hover:bg-slate-800 px-8 py-4 text-lg rounded-lg transition-all duration-300">
              Schedule a Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
