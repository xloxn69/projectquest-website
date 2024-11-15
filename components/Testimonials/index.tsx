'use client'

import { useEffect, useRef } from "react"
import Image from "next/image"
import styles from './Testimonials.module.css'

interface Testimonial {
  name: string
  role: string
  image: string
  quote: string
}

export default function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      name: "Name",
      role: "Bot Name",
      image: "https://cdn.discordapp.com/guilds/1039292449325060178/users/534020157132111872/avatars/08aaa048a093ee702d7049683ca77148.webp?size=128",
      quote: "Review quote here"
    },
    {
      name: "Name",
      role: "Bot Name",
      image: "https://cdn.discordapp.com/guilds/1039292449325060178/users/534020157132111872/avatars/08aaa048a093ee702d7049683ca77148.webp?size=128",
      quote: "Review quote here"
    },
    {
      name: "Name",
      role: "Bot Name",
      image: "https://cdn.discordapp.com/guilds/1039292449325060178/users/534020157132111872/avatars/08aaa048a093ee702d7049683ca77148.webp?size=128",
      quote: "Review quote here"
    },
    {
      name: "Name",
      role: "Bot Name",
      image: "https://cdn.discordapp.com/guilds/1039292449325060178/users/534020157132111872/avatars/08aaa048a093ee702d7049683ca77148.webp?size=128",
      quote: "Review quote here"
    },
    {
      name: "Name",
      role: "Bot Name",
      image: "https://cdn.discordapp.com/guilds/1039292449325060178/users/534020157132111872/avatars/08aaa048a093ee702d7049683ca77148.webp?size=128",
      quote: "Review quote here"
    },
    {
      name: "Name",
      role: "Bot Name",
      image: "https://cdn.discordapp.com/guilds/1039292449325060178/users/534020157132111872/avatars/08aaa048a093ee702d7049683ca77148.webp?size=128",
      quote: "Review quote here"
    },
    {
      name: "Name",
      role: "Bot Name",
      image: "https://cdn.discordapp.com/guilds/1039292449325060178/users/534020157132111872/avatars/08aaa048a093ee702d7049683ca77148.webp?size=128",
      quote: "Review quote here"
    },
    {
      name: "Name",
      role: "Bot Name",
      image: "https://cdn.discordapp.com/guilds/1039292449325060178/users/534020157132111872/avatars/08aaa048a093ee702d7049683ca77148.webp?size=128",
      quote: "Review quote here"
    },
    {
        name: "Name",
        role: "Bot Name",
        image: "https://cdn.discordapp.com/guilds/1039292449325060178/users/534020157132111872/avatars/08aaa048a093ee702d7049683ca77148.webp?size=128",
        quote: "Review quote here"
    },
    {
      name: "Name",
      role: "Bot Name",
      image: "https://cdn.discordapp.com/guilds/1039292449325060178/users/534020157132111872/avatars/08aaa048a093ee702d7049683ca77148.webp?size=128",
      quote: "Review quote here"
    },
    {
      name: "Name",
      role: "Bot Name",
      image: "https://cdn.discordapp.com/guilds/1039292449325060178/users/534020157132111872/avatars/08aaa048a093ee702d7049683ca77148.webp?size=128",
      quote: "Review quote here"
    },
    {
      name: "Name",
      role: "Bot Name",
      image: "https://cdn.discordapp.com/guilds/1039292449325060178/users/534020157132111872/avatars/08aaa048a093ee702d7049683ca77148.webp?size=128",
      quote: "Review quote here"
    },
    {
      name: "Name",
      role: "Bot Name",
      image: "https://cdn.discordapp.com/guilds/1039292449325060178/users/534020157132111872/avatars/08aaa048a093ee702d7049683ca77148.webp?size=128",
      quote: "Review quote here"
    },
    {
      name: "Name",
      role: "Bot Name",
      image: "https://cdn.discordapp.com/guilds/1039292449325060178/users/534020157132111872/avatars/08aaa048a093ee702d7049683ca77148.webp?size=128",
      quote: "Review quote here"
    },
    {
      name: "Name",
      role: "Bot Name",
      image: "https://cdn.discordapp.com/guilds/1039292449325060178/users/534020157132111872/avatars/08aaa048a093ee702d7049683ca77148.webp?size=128",
      quote: "Review quote here"
    },
    {
      name: "Name",
      role: "Bot Name",
      image: "https://cdn.discordapp.com/guilds/1039292449325060178/users/534020157132111872/avatars/08aaa048a093ee702d7049683ca77148.webp?size=128",
      quote: "Review quote here"
    },
    {
      name: "Name",
      role: "Bot Name",
      image: "https://cdn.discordapp.com/guilds/1039292449325060178/users/534020157132111872/avatars/08aaa048a093ee702d7049683ca77148.webp?size=128",
      quote: "Review quote here"
    },
    {
      name: "Name",
      role: "Bot Name",
      image: "https://cdn.discordapp.com/guilds/1039292449325060178/users/534020157132111872/avatars/08aaa048a093ee702d7049683ca77148.webp?size=128",
      quote: "Review quote here"
    },
    {
      name: "Name",
      role: "Bot Name",
      image: "https://cdn.discordapp.com/guilds/1039292449325060178/users/534020157132111872/avatars/08aaa048a093ee702d7049683ca77148.webp?size=128",
      quote: "Review quote here"
    },
    {
      name: "Name",
      role: "Bot Name",
      image: "https://cdn.discordapp.com/guilds/1039292449325060178/users/534020157132111872/avatars/08aaa048a093ee702d7049683ca77148.webp?size=128",
      quote: "Review quote here"
    }
  ]

  const columnRefs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null)
  ]

  useEffect(() => {
    columnRefs.forEach((ref, index) => {
      if (!ref.current) return

      const column = ref.current as HTMLDivElement
      const cards = Array.from(column.children) as HTMLElement[]
      const totalHeight = cards.reduce((acc, card) => acc + card.offsetHeight + 16, 0)

      cards.forEach(card => {
        const clone = card.cloneNode(true) as HTMLElement
        column.appendChild(clone)
      })

      let currentTranslate = 0
      const speeds = [0.5, 0.3, 0.4]

      const animate = () => {
        currentTranslate -= speeds[index]
        if (currentTranslate <= -totalHeight) {
          currentTranslate = 0
        }
        column.style.transform = `translateY(${currentTranslate}px)`
        requestAnimationFrame(animate)
      }

      animate()
    })
  }, [])

  const splitTestimonials = (testimonials: Testimonial[]): Testimonial[][] => {
    const columns: Testimonial[][] = [[], [], []]
    testimonials.forEach((testimonial: Testimonial, index: number) => {
      columns[index % 3].push(testimonial)
    })
    return columns
  }

  const columns = splitTestimonials(testimonials)

  return (
    <>
      <div className={styles.gridFadeOut} />
      
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.header}>
            <h2>Love from all over the World!</h2>
            <p>
              Locadapt has just released, and we're sure future feedback will be just as amazing as the placeholders below!
            </p>
            <br>
            </br>
            <br>
            </br>
            <br>
            </br>
            <br>
            </br>
            <br>
            </br>
          </div>
          
          <div className={styles.testimonialWrapper}>
            <div className={styles.gradientTop} />
            <div className={styles.columnGrid}>
              {columns.map((column, columnIndex) => (
                <div key={columnIndex} className={styles.column}>
                  <div 
                    ref={columnRefs[columnIndex]} 
                    className={styles.scrollingContent}
                  >
                    {column.map((testimonial, index) => (
                      <div key={index} className={styles.card}>
                        <div className={styles.cardInner}>
                          <Image
                            src={testimonial.image}
                            alt={`${testimonial.name}'s avatar`}
                            width={32}
                            height={32}
                            className={styles.avatar}
                          />
                          <div className={styles.testimonialContent}>
                            <h3>{testimonial.name}</h3>
                            <p className={styles.role}>{testimonial.role}</p>
                            <p className={styles.quote}>{testimonial.quote}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.gradientBottom} />
          </div>
        </div>
      </div>
    </>
  )
} 