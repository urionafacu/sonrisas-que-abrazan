import s from './commitments.module.css'

const commitments = [
  'ayuda directa e inmediata a quienes lo necesitan.',
  ' la concienciación sobre las dificultades que enfrentan los niños con cáncer y las personas vulnerables.',
  'Involucrar a la comunidad en acciones solidarias, promoviendo la empatía, la generosidad y el voluntariado.',
]

const Commitments = () => {
  return (
    <section className={s.container}>
      <p className={s.paragraph}>
        <span className={s.paragraphBold}>Proporcionar </span>
        {commitments[0]}
      </p>
      <div className={s.divider} />
      <p className={s.paragraph}>
        <span className={s.paragraphBold}>Fomentar </span>
        {commitments[1]}
      </p>
      <div className={s.divider} />
      <p className={s.paragraph}>
        <span className={s.paragraphBold}>Involucrar </span>
        {commitments[2]}
      </p>
    </section>
  )
}

export default Commitments
