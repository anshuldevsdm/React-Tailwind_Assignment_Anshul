import { useState } from 'react'
import { Mail, MapPin, Phone, Send } from 'lucide-react'
import ContactInfo from '../components/ContactInfo'
import Field from '../components/Field'
import SectionTitle from '../components/SectionTitle'
import SocialLinks from '../components/SocialLinks'
import facebookIcon from '../assets/logo/facebook.png'
import githubIcon from '../assets/logo/github.png'
import instagramIcon from '../assets/logo/instagram.png'
import linkedinIcon from '../assets/logo/linkedin.png'
import socialIcon from '../assets/logo/social.png'

const contactDetails = [
  { icon: MapPin, text: 'Mohali, Punjab' },
  { icon: Mail, text: 'anshuljaswal9@gmail.com' },
  { icon: Phone, text: '+91 78760-81532' },
]

const socialLinks = [
  { image: facebookIcon, label: 'Facebook' },
  { image: linkedinIcon, label: 'LinkedIn' },
  { image: githubIcon, label: 'GitHub' },
  { image: socialIcon, label: 'WhatsApp' },
  { image: instagramIcon, label: 'Instagram' },
]

function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
    event.currentTarget.reset()
  }

  return (
    <main>
      <section className="bg-[#eff7ff]"><div className="mx-auto max-w-5xl px-6 py-10"><h1 className="text-3xl font-bold text-slate-800 sm:text-4xl">Contact <span className="text-blue-600">Me</span></h1><p className="mt-2 text-sm text-slate-600">Have a question or want to discuss a project? Get in touch.</p></div></section>
      <section className="mx-auto grid max-w-5xl gap-8 px-6 py-10 sm:grid-cols-[.8fr_1.2fr]">
        <div><SectionTitle>Let’s <span>Connect</span></SectionTitle><p className="mb-6 text-sm leading-6 text-slate-600">I am open to conversations about learning opportunities, web development and practical projects.</p><ContactInfo details={contactDetails} /><div className="mt-6"><SocialLinks links={socialLinks} /></div></div>
        <form className="rounded-md bg-white p-5 shadow-sm" onSubmit={handleSubmit}>
          <div className="grid gap-3 sm:grid-cols-2"><Field label="Name" placeholder="Enter your name" required /><Field label="Email" placeholder="Enter your email" type="email" required /></div>
          <Field label="Phone" placeholder="Enter your phone number" type="tel" />
          <Field label="Message" placeholder="Write your message here..." textarea required />
          <button type="submit" className="mt-1 flex w-full items-center justify-center gap-2 rounded-md bg-blue-600 py-2.5 text-xs font-medium text-white hover:bg-blue-700"><Send size={13} />Send Message</button>
          {submitted && <p className="mt-3 text-center text-xs text-emerald-600">Thank you! Your message has been received.</p>}
        </form>
      </section>
    </main>
  )
}

export default Contact
