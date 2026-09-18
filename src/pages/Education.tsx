import { BookOpen, Code2, GraduationCap } from "lucide-react";
import SectionTitle from "../components/SectionTitle";

const education = [
  {
    icon: GraduationCap,
    course: "B.Tech CSE",
    institution: "Jaypee University of Information Technology, Solan",
    year: "2025",
  },
  {
    icon: BookOpen,
    course: "12th",
    institution: "G.S.S.S. Boys, Bilaspur",
    year: "2021",
  },
];

function Education() {
  return (
    <main>
      <section className="bg-[#eff7ff]">
        <div className="mx-auto max-w-5xl px-6 py-10">
          <h1 className="text-3xl font-bold text-slate-800 sm:text-4xl">
            My <span className="text-blue-600">Education</span>
          </h1>
          <p className="mt-2 text-sm text-slate-600">
            The academic foundation behind my continued development journey.
          </p>
        </div>
      </section>
      <section className="mx-auto max-w-5xl px-6 py-10">
        <div className="space-y-5">
          {education.map(({ icon: Icon, course, institution, year }) => (
            <article
              key={course}
              className="flex gap-4 rounded-md border border-blue-100 bg-white p-5 shadow-sm"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                <Icon size={21} />
              </span>
              <div>
                <p className="text-xs font-medium text-blue-600">{year}</p>
                <h2 className="mt-1 text-lg font-bold text-slate-800">
                  {course}
                </h2>
                <p className="mt-1 text-sm text-slate-600">{institution}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="bg-[#f3f8fd]">
        <div className="mx-auto max-w-5xl px-6 py-10">
          <SectionTitle>
            Learning & <span>Development</span>
          </SectionTitle>
          <div className="grid gap-4 sm:grid-cols-2">
            <LearningCard
              icon={<Code2 />}
              title="Frontend development"
              text="Building responsive layouts with HTML, CSS and React."
            />
            <LearningCard
              icon={<BookOpen />}
              title="Continuous learning"
              text="Strengthening JavaScript fundamentals and modern development practices through regular practice."
            />
          </div>
        </div>
      </section>
    </main>
  );
}

function LearningCard({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <article className="rounded-md bg-white p-5 shadow-sm">
      <span className="text-blue-600">{icon}</span>
      <h2 className="mt-3 text-sm font-bold text-slate-800">{title}</h2>
      <p className="mt-2 text-xs leading-5 text-slate-600">{text}</p>
    </article>
  );
}

export default Education;
