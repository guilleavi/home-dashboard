import { PropsWithChildren } from "react"
import styles from "./CardContainer.module.scss"

interface SectionProps extends PropsWithChildren {
  title: string
}

const CardContainer = ({ title, children }: SectionProps) => (
  <section className="block-container">
    <header>
      <h2 className={styles["card-header"]}>{title}</h2>
    </header>
    <div className={styles["card"]}>{children}</div>
  </section>
)

export default CardContainer
