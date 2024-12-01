import { useState, ReactNode } from 'react'
import styles from './Collapsible.module.css'

interface CollapsibleProps {
  title: string;
  children: ReactNode;
}

export default function Collapsible({ title, children }: CollapsibleProps) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleOpen = () => setIsOpen(!isOpen)

  return (
    <div className={styles.collapsible}>
      <button className={styles.toggleButton} onClick={toggleOpen}>
        {title} {isOpen ? '▲' : '▼'}
      </button>
      {isOpen && <div className={styles.content}>{children}</div>}
    </div>
  )
} 