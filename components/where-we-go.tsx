import Image from "next/image"

export function WhereWeGo() {
  const companies = [
    {
      name: "Macquarie",
      logo: "/images/where-we-go/macquarie.jpg",
    },
    {
      name: "Guggenheim Partners",
      logo: "/images/where-we-go/guggenheim.jpeg",
    },
    {
      name: "Bain & Company",
      logo: "/images/where-we-go/bain.png",
    },
    {
      name: "Palantir Technologies",
      logo: "/images/where-we-go/palantir-technologies-logo.jpg",
    },
    {
      name: "J.P. Morgan",
      logo: "/images/where-we-go/jpmorgan.png",
    },
    {
      name: "Morgan Stanley",
      logo: "/images/where-we-go/morganstanley.png",
    },
  ]

  return (
    <section className="py-20 bg-white dark:bg-primary-800">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light mb-4 tracking-wide text-primary-900 dark:text-white">
            Where We Go
          </h2>
          <p className="text-xl text-primary-700 dark:text-white/90 font-light tracking-wide">
            Our members go on to work at leading firms across finance, tech, and venture capital
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-12 items-center max-w-7xl mx-auto">
          {companies.map((company, index) => (
            <div key={index} className="flex items-center justify-center w-32 sm:w-40 lg:w-48">
              <div className="relative w-full h-20 flex items-center justify-center">
                <Image
                  src={company.logo || "/placeholder.svg"}
                  alt={company.name}
                  fill
                  className="object-contain opacity-80 hover:opacity-100 transition-opacity"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}