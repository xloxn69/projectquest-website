import { Card, CardContent } from "@/components/ui/card"
import { AppWindow, ListPlus, BarChart3 } from 'lucide-react'
import styles from '../styles/GetStarted.module.css'

export default function GettingStarted() {
  const steps = [
    {
      number: "1",
      icon: AppWindow,
      title: "Install Simplicity",
      description: "Get up and running in minutes— download and install the app to start simplifying your workflow immediately.",
    },
    {
      number: "2",
      icon: ListPlus,
      title: "Add Your Tasks",
      description: "Quickly add and organize your to-dos. Stay focused on what matters most without the clutter.",
    },
    {
      number: "3",
      icon: BarChart3,
      title: "Track and Complete",
      description: "See your progress at a glance as you tick off tasks. Stay productive and in control, one step at a time.",
    },
  ]

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.label}>How it works</h2>
          <h3 className={styles.title}>
            Getting started is <span className={styles.italic}>simple</span>.
          </h3>
          <p className={styles.description}>
            A simple, three step process to getting your life organized.
          </p>
        </div>
        
        <div className={styles.grid}>
          {steps.map((step, index) => (
            <Card key={index} className={styles.card}>
              <CardContent className={styles.cardContent}>
                <span className={styles.stepNumber}>
                  {step.number}
                </span>
                <div className={styles.iconWrapper}>
                  <step.icon className={styles.icon} strokeWidth={1} />
                </div>
                <h4 className={styles.stepTitle}>{step.title}</h4>
                <p className={styles.stepDescription}>
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
} 