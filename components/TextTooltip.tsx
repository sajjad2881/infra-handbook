import { ReactNode } from 'react'
import styles from './TextTooltip.module.css'

interface TextTooltipProps {
  text: string;
  children: ReactNode;
}

export default function TextTooltip({ text, children }: TextTooltipProps) {
  return (
    <span className={styles.textTooltip}>
      <span className={styles.underlinedText}>{children}</span>
      <span className={styles.tooltipContent}>
        {text}
      </span>
    </span>
  )
} 