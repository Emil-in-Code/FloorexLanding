import styles from './CurvedLoop.module.css'

export default function CurvedLoop({ text, repeat = 6, speed = 20 }) {
  return (

    <div className={styles.marquee}>

      <div
        className={styles.track}
        style={{ animationDuration: `${speed}s` }}
      >
        {[...Array(repeat)].map((_, i) => (
          <span key={i}>{text}</span>
        ))}
      </div>
    </div>
  );
}
