import { useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import ContactInfo from "../components/ContactInfo";
import Field from "../components/Field";
import SectionTitle from "../components/SectionTitle";
import SocialLinks from "../components/SocialLinks";
import facebookIcon from "../assets/logo/facebook.png";
import githubIcon from "../assets/logo/github.png";
import instagramIcon from "../assets/logo/instagram.png";
import linkedinIcon from "../assets/logo/linkedin.png";
import socialIcon from "../assets/logo/social.png";

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

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const phone = String(formData.get("phone") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();
    const nextErrors: Record<string, string> = {};

    if (!name) {
      nextErrors.name = "Name is required.";
    } else if (!/^[A-Za-z\s]+$/.test(name)) {
      nextErrors.name = "Name can contain letters and spaces only.";
    }
    if (!email) {
      nextErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      nextErrors.email = "Enter a valid email address.";
    }
    const phoneDigits = phone.replace(/\D/g, "");
    if (
      phone &&
      (!/^\+?[0-9\s().-]+$/.test(phone) || phoneDigits.length < 7 || phoneDigits.length > 15)
    ) {
      nextErrors.phone = "Enter a valid international phone number.";
    }
    if (!message) {
      nextErrors.message = "Message is required.";
    }

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setSubmitted(false);
      return;
    }

    setSubmitted(true);
    event.currentTarget.reset();
  }

  function clearFieldError(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setErrors((currentErrors) => {
      if (!currentErrors[event.target.name]) return currentErrors;
      const nextErrors = { ...currentErrors };
      delete nextErrors[event.target.name];
      return nextErrors;
    });
    setSubmitted(false);
  }

  function allowNameCharacters(event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) {
    event.currentTarget.value = event.currentTarget.value.replace(/[^A-Za-z\s]/g, "");
  }

  function allowPhoneNumbers(event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const value = event.currentTarget.value.replace(/[^\d+().\s-]/g, "");
    event.currentTarget.value = value.startsWith("+")
      ? `+${value.slice(1).replace(/\+/g, "")}`
      : value.replace(/\+/g, "");
  }

  return (
    <main>
      <section className="bg-[#eff7ff]">
        <div className="mx-auto max-w-5xl px-6 py-10">
          <h1 className="text-3xl font-bold text-slate-800 sm:text-4xl">
            Contact <span className="text-blue-600">Me</span>
          </h1>
          <p className="mt-2 text-sm text-slate-600">
            Have a question or want to discuss a project? Get in touch.
          </p>
        </div>
      </section>
      <section className="mx-auto grid max-w-5xl gap-8 px-6 py-10 sm:grid-cols-[.8fr_1.2fr]">
        <div>
          <SectionTitle>
            Let’s <span>Connect</span>
          </SectionTitle>
          <p className="mb-6 text-sm leading-6 text-slate-600">
            I am open to conversations about learning opportunities, web
            development and practical projects.
          </p>
          <ContactInfo details={contactDetails} />
          <div className="mt-6">
            <SocialLinks links={socialLinks} />
          </div>
        </div>
        <form
          className="rounded-md bg-white p-5 shadow-sm"
          onSubmit={handleSubmit}
          noValidate
        >
          <div className="grid gap-3 sm:grid-cols-2">
            <Field
              label="Name"
              name="name"
              placeholder="Enter your name"
              pattern="[A-Za-z ]+"
              required
              onChange={clearFieldError}
              onInput={allowNameCharacters}
              error={errors.name}
            />
            <Field
              label="Email"
              name="email"
              placeholder="Enter your email"
              type="email"
              required
              onChange={clearFieldError}
              error={errors.email}
            />
          </div>
          <Field
            label="Phone"
            name="phone"
            placeholder="Enter your phone number"
            type="tel"
            pattern="\+?[0-9\s().-]+"
            inputMode="tel"
            onChange={clearFieldError}
            onInput={allowPhoneNumbers}
            error={errors.phone}
          />
          <Field
            label="Message"
            name="message"
            placeholder="Write your message here..."
            textarea
            required
            onChange={clearFieldError}
            error={errors.message}
          />
          <button
            type="submit"
            className="mt-1 flex w-full items-center justify-center gap-2 rounded-md bg-blue-600 py-2.5 text-xs font-medium text-white hover:bg-blue-700"
          >
            <Send size={13} />
            Send Message
          </button>
          {submitted && (
            <p className="mt-3 text-center text-xs text-emerald-600">
              Thank you! Your message has been received.
            </p>
          )}
        </form>
      </section>
    </main>
  );
}

export default Contact;
