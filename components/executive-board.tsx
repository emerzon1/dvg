import Image from "next/image"

interface BoardMember {
  name: string
  title: string
  image: string
  imagePosition?: string // e.g., "center 30%"
}

export function ExecutiveBoard() {
  const boardMembers: BoardMember[] = [
    {
      name: "Santiago Lattuada",
      title: "President",
      image: "/images/members/SantiH.png",
      imagePosition: "center 35%"
    },
    {
      name: "Devansh Roongta",
      title: "Executive Vice President",
      image: "/images/members/DevanshH.png",
      imagePosition: "center 45%"
    },
    {
      name: "Nathan Wong",
      title: "Executive Vice President",
      image: "/images/members/NathanH.png",
      imagePosition: "center 50%"
    },
    {
      name: "Rishi Shah",
      title: "VP of Administration",
      image: "/images/members/RishiH.png",
    },
    {
      name: "Solene Luttway",
      title: "VP of Education",
      image: "/images/members/SoleneH.png",
      imagePosition: "center 63%",
    },
    {
      name: "Dev Dwivedy",
      title: "VP of Education",
      image: "/images/members/DevH.png",
    },
    {
      name: "Augustine Barreirinhas",
      title: "VP of Partnerships",
      image: "/images/members/AugieH.png",
      imagePosition: "center 40%",
    },
    {
      name: "Sloane Conway",
      title: "Vice President of Education",
      image: "/images/members/SloaneH.png",
      imagePosition: "center 40%",
    },
    {
      name: "Liza Howard",
      title: "VP of Recruiting",
      image: "/images/members/LizaH.png",
    },
     {
      name: "Akshara Datla",
      title: "VP of Technology",
      image: "/images/members/AksharaH.png",
    },
    
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="container">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {boardMembers.map((member, index) => (
            <div key={index} className="text-left">
              <div className="mb-6">
                <div className="relative w-full max-w-[400px] h-[520px] mx-auto overflow-hidden shadow-sm">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover"
                    priority={index < 6}
                    style={{
                      objectPosition: member.imagePosition ?? "center",
                    }}
                  />
                </div>
              </div>

              <h3 className="text-xl font-normal mb-2 tracking-wide text-primary-900 dark:text-white">{member.name}</h3>
              <p className="text-sm font-light text-primary-600 dark:text-primary-400 mb-4 tracking-wide">
                {member.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
