import Taskbar from '../components/Taskbar'

import styles from '../styles/Screen.module.css'

export default function Screen() {
  return (
    <div className={styles.screen}>
      <div className={styles.windowLand}></div>
      
      <Taskbar />
    </div>
  )
}
