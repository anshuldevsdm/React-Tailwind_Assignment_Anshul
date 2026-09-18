import { BriefcaseBusiness, GraduationCap, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import profileImage from "../assets/Profile.png";
import SectionTitle from "../components/SectionTitle";

const skills = [
  { title: "HTML", description: "Building clear, semantic page structures." },
  {
    title: "CSS",
    description: "Creating responsive layouts and polished visual details.",
  },
  {
    title: "JavaScript",
    description: "Adding useful interactions and page behavior.",
  },
  {
    title: "React",
    description: "Developing reusable interfaces with components.",
  },
];

function About() {
  return (
    <main>
      <PageIntro
        title="About Me"
        subtitle="A closer look at my background, interests and learning goals."
      />
      <section className="mx-auto grid max-w-5xl items-center gap-10 px-6 py-10 sm:grid-cols-[.8fr_1.2fr]">
        <img
          src={profileImage}
          alt="Anshul Jaswal"
          className="mx-auto w-full max-w-xs object-contain"
        />
        <div>
          <SectionTitle>
            My <span>Journey</span>
          </SectionTitle>
          <p className="text-sm leading-7 text-slate-600">
            I am a fresher web developer currently learning and exploring web
            development. I enjoy building simple, user-friendly and responsive
            websites and continuously improving my technical skills.
          </p>
          <p className="mt-4 text-sm leading-7 text-slate-600">
            I am looking to grow as a software developer, strengthen my
            fundamentals, work on real-world projects and keep learning new
            technologies through consistent practice.
          </p>
        </div>
      </section>
      <section className="bg-[#f3f8fd]">
        <div className="mx-auto max-w-5xl px-6 py-10">
          <SectionTitle>
            Personal <span>Information</span>
          </SectionTitle>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <InfoCard
              icon={<BriefcaseBusiness />}
              label="Current role"
              value="Software Developer Trainee"
            />
            <InfoCard
              icon={<GraduationCap />}
              label="Education"
              value="B.Tech CSE, 2025"
            />
            <InfoCard
              icon={<MapPin />}
              label="Location"
              value="Mohali, Punjab"
            />
            <InfoCard
              icon={<Mail />}
              label="Career interest"
              value="Web development"
            />
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-5xl px-6 py-10">
        <SectionTitle>
          Current <span>Skills</span>
        </SectionTitle>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill) => (
            <article
              key={skill.title}
              className="rounded-md border border-blue-100 bg-white p-4 shadow-sm"
            >
              <h3 className="font-bold text-slate-800">{skill.title}</h3>
              <p className="mt-2 text-xs leading-5 text-slate-600">
                {skill.description}
              </p>
            </article>
          ))}
        </div>
        <div className="mt-10 rounded-md bg-[#eff7ff] p-6">
          <h3 className="text-lg font-bold text-slate-800">Career Objective</h3>
          <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-600">
            I want to grow through practical experience, improve my development
            fundamentals and contribute to thoughtful, useful web experiences
            while continuing to learn.
          </p>
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            to="/services"
            className="rounded-md bg-blue-600 px-5 py-2.5 text-xs font-medium text-white hover:bg-blue-700"
          >
            View My Services
          </Link>
          <Link
            to="/contact"
            className="rounded-md border border-blue-600 px-5 py-2.5 text-xs font-medium text-blue-600 hover:bg-blue-50"
          >
            Contact Me
          </Link>
        </div>
      </section>
    </main>
  );
}

function PageIntro({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <section className="bg-[#eff7ff]">
      <div className="mx-auto max-w-5xl px-6 py-10">
        <h1 className="text-3xl font-bold text-slate-800 sm:text-4xl">
          {title}
        </h1>
        <p className="mt-2 text-sm text-slate-600">{subtitle}</p>
      </div>
    </section>
  );
}
function InfoCard({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-md bg-white p-4 shadow-sm">
      <span className="text-blue-600">{icon}</span>
      <p className="mt-3 text-[11px] text-slate-500">{label}</p>
      <p className="mt-1 text-sm font-medium text-slate-800">{value}</p>
    </div>
  );
}

export default About;
