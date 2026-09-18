import { Link } from "react-router-dom";
import SectionTitle from "../components/SectionTitle";
import ServiceCard from "../components/ServiceCard";
import { serviceItems } from "../data/services";

function Services() {
  return (
    <main>
      <section className="bg-[#eff7ff]">
        <div className="mx-auto max-w-5xl px-6 py-10">
          <h1 className="text-3xl font-bold text-slate-800 sm:text-4xl">
            My <span className="text-blue-600">Services</span>
          </h1>
          <p className="mt-2 text-sm text-slate-600">
            Simple, responsive web solutions built with care and attention to
            detail.
          </p>
        </div>
      </section>
      <section className="mx-auto max-w-5xl px-6 py-10">
        <div className="grid gap-5 sm:grid-cols-3">
          {serviceItems.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </section>
      <section className="bg-[#f3f8fd]">
        <div className="mx-auto max-w-5xl px-6 py-10">
          <SectionTitle>
            My <span>Approach</span>
          </SectionTitle>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {[
              "Understand requirements",
              "Plan the layout",
              "Develop the page",
              "Make it responsive",
              "Review and improve",
            ].map((step, index) => (
              <div key={step} className="rounded-md bg-white p-4 shadow-sm">
                <span className="text-sm font-bold text-blue-600">
                  0{index + 1}
                </span>
                <p className="mt-2 text-xs font-medium leading-5 text-slate-700">
                  {step}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-5xl px-6 py-10">
        <div className="rounded-md border border-blue-100 bg-white p-6 text-center shadow-sm">
          <h2 className="text-xl font-bold text-slate-800">
            Have a project in mind?
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Let’s talk about what you are building and how I can help.
          </p>
          <Link
            to="/contact"
            className="mt-5 inline-block rounded-md bg-blue-600 px-6 py-2.5 text-xs font-medium text-white hover:bg-blue-700"
          >
            Contact Me
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Services;
