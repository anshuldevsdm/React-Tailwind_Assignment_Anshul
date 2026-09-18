import { GraduationCap, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import profileImage from "../assets/Profile.png";
import facebookIcon from "../assets/logo/facebook.png";
import githubIcon from "../assets/logo/github.png";
import instagramIcon from "../assets/logo/instagram.png";
import linkedinIcon from "../assets/logo/linkedin.png";
import socialIcon from "../assets/logo/social.png";
import ContactInfo from "../components/ContactInfo";
import Info from "../components/Info";
import SectionTitle from "../components/SectionTitle";
import ServiceCard from "../components/ServiceCard";
import SocialLinks from "../components/SocialLinks";
import { serviceItems } from "../data/services";

const skills = [
  { label: "HTML", mark: "5", tone: "text-orange-500" },
  { label: "CSS", mark: "3", tone: "text-blue-500" },
  { label: "JavaScript", mark: "JS", tone: "text-yellow-500" },
  { label: "React", mark: "⚛", tone: "text-cyan-400" },
];

const contactDetails = [
  { icon: MapPin, text: "Mohali, Punjab" },
  { icon: Mail, text: "anshuljaswal9@gmail.com" },
  { icon: Phone, text: "+91 78760-81532" },
];

const socialLinks = [
  { image: facebookIcon, label: "Facebook" },
  { image: linkedinIcon, label: "LinkedIn" },
  { image: githubIcon, label: "GitHub" },
  { image: socialIcon, label: "WhatsApp" },
  { image: instagramIcon, label: "Instagram" },
];

function Home() {
  return (
    <main>
      <section className="bg-[#eff7ff]">
        <div className="mx-auto grid max-w-5xl items-center gap-8 px-6 py-9 sm:grid-cols-[1.05fr_.95fr] sm:py-11">
          <div>
            <p className="mb-1 text-base font-medium text-slate-800">
              Hello, I'm
            </p>
            <h1 className="text-4xl font-bold leading-tight text-slate-800 sm:text-[42px]">
              Anshul <span className="text-blue-600">Jaswal</span>
            </h1>
            <p className="mt-1 text-lg text-slate-600">A Software Developer</p>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-slate-600">
              I am passionate about learning new technologies and building
              simple, clean and responsive websites using the MERN stack.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                to="/services"
                className="rounded-md bg-blue-600 px-6 py-2.5 text-xs font-medium text-white shadow-sm transition hover:bg-blue-700"
              >
                View My Work
              </Link>
              <Link
                to="/contact"
                className="rounded-md border border-blue-600 px-6 py-2.5 text-xs font-medium text-blue-600 transition hover:bg-blue-50"
              >
                Contact Me
              </Link>
            </div>
          </div>
          <div className="flex min-h-56 items-center justify-center sm:min-h-64">
            <img
              src={profileImage}
              alt="Anshul Jaswal"
              className="w-full max-w-[380px] object-contain"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-5xl gap-10 px-6 py-7 sm:grid-cols-[1.2fr_.8fr]">
        <div>
          <SectionTitle>
            About <span>Me</span>
          </SectionTitle>
          <p className="max-w-lg text-xs leading-relaxed text-slate-600">
            I am a fresher web developer, currently learning and exploring the
            world of web development. I enjoy building simple and user-friendly
            websites.
          </p>
          <div className="mt-6 grid grid-cols-3 gap-3 text-[11px] text-slate-600">
            <Info icon={<GraduationCap />}>
              B.Tech CSE
              <br />
              (2025)
            </Info>
            <Info icon={<MapPin />}>
              Based in
              <br />
              Mohali, Punjab
            </Info>
            <Info icon={<Mail />}>
              Trainee @<br />
              smartDdata
            </Info>
          </div>
          <Link
            to="/about"
            className="mt-5 inline-block text-xs font-medium text-blue-600 hover:text-blue-700"
          >
            Learn More
          </Link>
        </div>
        <div>
          <h2 className="mb-4 text-base font-bold text-slate-800">My Skills</h2>
          <div className="space-y-3">
            {skills.map(({ label, mark, tone }) => (
              <div
                key={label}
                className="flex items-center gap-4 text-xs font-medium text-slate-700"
              >
                <span
                  className={`flex h-7 w-7 items-center justify-center text-lg font-black ${tone}`}
                >
                  {mark}
                </span>
                {label}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f3f8fd]">
        <div className="mx-auto max-w-5xl px-6 py-7">
          <SectionTitle>
            My <span>Services</span>
          </SectionTitle>
          <div className="grid gap-5 sm:grid-cols-3">
            {serviceItems.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
          <Link
            to="/services"
            className="mt-5 inline-block text-xs font-medium text-blue-600 hover:text-blue-700"
          >
            View All Services
          </Link>
        </div>
      </section>

      <section className="mx-auto grid max-w-5xl items-center gap-6 px-6 py-7 sm:grid-cols-[1.5fr_.75fr]">
        <div>
          <SectionTitle>
            <span>Education</span>
          </SectionTitle>
          <div className="overflow-hidden rounded-md border border-blue-100">
            <table className="w-full border-collapse text-left text-[11px]">
              <thead className="bg-blue-50 text-slate-800">
                <tr>
                  <th className="border-r border-blue-100 px-3 py-2">Course</th>
                  <th className="border-r border-blue-100 px-3 py-2">
                    College / School
                  </th>
                  <th className="px-3 py-2">Year</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border-r border-t border-blue-100 px-3 py-2">
                    B.Tech CSE
                  </td>
                  <td className="border-r border-t border-blue-100 px-3 py-2">
                    Jaypee University of Information Technology, Solan
                  </td>
                  <td className="border-t border-blue-100 px-3 py-2">2025</td>
                </tr>
                <tr>
                  <td className="border-r border-t border-blue-100 px-3 py-2">
                    12th
                  </td>
                  <td className="border-r border-t border-blue-100 px-3 py-2">
                    G.S.S.S. Boys, Bilaspur
                  </td>
                  <td className="border-t border-blue-100 px-3 py-2">2021</td>
                </tr>
              </tbody>
            </table>
          </div>
          <Link
            to="/education"
            className="mt-5 inline-block text-xs font-medium text-blue-600 hover:text-blue-700"
          >
            View Education
          </Link>
        </div>
        <div className="flex h-32 items-center justify-center overflow-hidden rounded-md bg-blue-50">
          <div className="relative h-24 w-40">
            <div className="absolute bottom-2 left-1 h-4 w-32 rotate-6 rounded-sm bg-blue-500 shadow-[0_6px_0_#f5a623,0_12px_0_#e7e7e7]" />
            <div className="absolute bottom-5 right-3 h-16 w-12 rounded-b-lg bg-white shadow-md" />
            <div className="absolute bottom-20 right-5 h-10 w-2 rotate-12 bg-slate-700" />
            <div className="absolute bottom-20 right-10 h-11 w-2 -rotate-12 bg-orange-500" />
            <div className="absolute right-0 top-1 h-14 w-14 rounded-full bg-emerald-100" />
          </div>
        </div>
      </section>

      <section className="bg-[#f3f8fd]">
        <div className="mx-auto grid max-w-5xl gap-8 px-6 py-7 sm:grid-cols-[.8fr_1.2fr]">
          <div>
            <SectionTitle>
              Contact <span>Me</span>
            </SectionTitle>
            <ContactInfo details={contactDetails} />
            <div className="mt-6">
              <SocialLinks links={socialLinks} />
            </div>
          </div>
          <div className="rounded-md bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-600">
              Have a question or want to discuss a project?
            </p>
            <Link
              to="/contact"
              className="mt-4 inline-block rounded-md bg-blue-600 px-6 py-2.5 text-xs font-medium text-white hover:bg-blue-700"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
