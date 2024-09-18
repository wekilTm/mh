import styles from "./root.module.scss"
import Time from "./Time"

const Home = () => {
  // const [countdown, setCountdown] = useState()

  const date = new Date()
  const studyStarts = new Date("September 1, 2024 00:00:00")

  const moment = date - studyStarts
  const days = moment / 1000 / 60 / 60 / 24 + 3

  let weekType = ""

  if (Math.floor(days / 7) % 2 === 0) {
    weekType = "Sanawjy"
  } else {
    weekType = "Maýdalawjy"
  }

  // TIME-table
  const time = {
    firstPair: "11:50 - 13:10",
    secondPair: "13:20 - 14:40",
    thirdPair: "14:50 - 16:10",
  }
  return (
    <div className={styles.root__block}>
      <h1 className={styles.root__block_title}>Raspisanya</h1>
      {/* <div className='Date'>
			</div> */}
      <Time />
      <h3 className="table__weekType">{weekType} hepde</h3>

      <div className={styles.Time}>
        <div className={styles.Time__block}>
          <h3 className={styles.Time__title}>birinji para</h3>
          <p className={styles.Time__time}>{time.firstPair}</p>
        </div>
        <div className={styles.Time__block}>
          <h3 className={styles.Time__title}>ikinji para</h3>
          <p className={styles.Time__time}>{time.secondPair}</p>
        </div>
        <div className={styles.Time__block}>
          <h3 className={styles.Time__title}>üçünji para</h3>
          <p className={styles.Time__time}>{time.thirdPair}</p>
        </div>
      </div>
      <h5 className={styles.root__block_title}>
        developed by: Atamyrat Öwezgeldiýew
      </h5>
    </div>
  )
}

export default Home
