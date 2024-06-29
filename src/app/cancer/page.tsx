/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import s from './styles.module.css'

export default function CancerInfantil() {
  return (
    <main className={s.container}>
      <section className={s.containerTitle}>
        <h1 className={s.title}>¿Qué es el Cáncer Infantil?</h1>
      </section>
      <section className={s.sectionTextContainer}>
        <aside className={s.textContainer}>
          <p>
            Es un grupo de enfermedades, cada una con un nombre, características, pronóstico y
            tratamientos específicos diferentes entre sí, pero todas causadas por el crecimiento
            anormal de las células.
          </p>
          <br />
          <p>
            En un cuerpo sano, las células se dividen y multiplican ordenadamente, pero, a veces,
            algunas pierden el control y se dividen más de lo que deberían, formando masas llamadas
            tumores o neoplasias.{' '}
          </p>
          <br />
          <p>
            A algunos tumores se los conoce como tumores benignos. Son aquellos que interfieren
            sobre ciertas funciones orgánicas, pero no crecen desproporcionadamente ni invaden otras
            partes del cuerpo en forma agresiva, y deben ser extirpados siempre que sea posible.
          </p>
          <br />
          <p>
            Es un término que engloba distintos tipos de cánceres que afectan a niños y
            adolescentes, desde recién nacidos hasta los 18 años. Aunque es menos común que el
            cáncer en adultos, sigue siendo una preocupación importante debido a su impacto en la
            vida de los más pequeños y sus seres queridos.
          </p>
          <div className={s.imageContainer}>
            <img src='/images/cancer-infantil-section/image.avif' className={s.image} />
          </div>
          <p>
            Nuestro objetivo es proporcionar apoyo tanto a las familias que están pasando por esta
            experiencia como a aquellas que buscan información preventiva. Queremos ayudarte a
            entender el cáncer infantil y ofrecerte herramientas para afrontarlo de la mejor manera
            posible.
          </p>
        </aside>
      </section>
    </main>
  )
}
