type SocialLinksProps = {
  links: Array<{ image: string; label: string }>
}

function SocialLinks({ links }: SocialLinksProps) {
  return (
    <div className="flex gap-3">
      {links.map(({ image, label }) => (
        <a key={label} href="#contact" aria-label={label} className="transition hover:scale-110">
          <img src={image} alt="" className="h-5 w-5" />
        </a>
      ))}
    </div>
  )
}

export default SocialLinks
