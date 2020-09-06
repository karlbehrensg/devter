import Link from "next/link";
import styles from '../../styles/Timelin.module.css'

export default function Timeline () {
  return (
    <>
      <h1 className={styles.h1}>This is the timeline</h1>
      <Link href='/'>Go home</Link>
    </>
  )
}