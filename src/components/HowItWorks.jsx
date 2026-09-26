export default function HowItWorks() {
  const steps = [
    {
      num: "01",
      title: "Choose a Template",
      description: "Select from our curated collection of professional Bangla poster layouts."
    },
    {
      num: "02",
      title: "Add Your Information",
      description: "Enter the event details, dates, and organizational information."
    },
    {
      num: "03",
      title: "Upload Photos",
      description: "Upload photos of speakers or guests. AI handles the cropping."
    },
    {
      num: "04",
      title: "Generate Your Poster",
      description: "Download a high-resolution, print-ready poster instantly."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">How It Works</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Create professional posters in four simple steps without any design experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              <div className="bg-slate-50 rounded-2xl p-8 h-full border border-slate-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="text-4xl font-black text-green-100 group-hover:text-green-200 mb-6 transition-colors">
                  {step.num}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
              {/* Connector line for large screens */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 -right-4 w-8 border-t-2 border-dashed border-slate-200"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
