import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import SolidButton from '../components/solid-button'
import Cena from '../components/cena'
import projectStyles from '../style.module.css'
import styles from './sprztaniebiura.module.css'

const Sprztaniebiura = () => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>SprzÄtanie biura - Czysto JuÅ¼ - SprzÄtanie w Opolu</title>
        <meta name="description" content="SprzÄtanie w Opolu" />
        <meta
          property="og:title"
          content="SprzÄtanie biura - Czysto JuÅ¼ - SprzÄtanie w Opolu"
        />
        <meta property="og:description" content="SprzÄtanie w Opolu" />
      </Helmet>
      <div className={styles['Top-container']}>
        <nav data-role="Header" className={styles['Navbar']}>
          <Link to="/" className={styles['navlink']}>
            <h1 className={styles['Logo']}>
              <span className={styles['text']}>Czysto JuÅ¼</span>
            </h1>
          </Link>
          <div className={styles['Links-container']}>
            <Link to="/blog" className={styles['navlink1']}>
              Blog
            </Link>
            <Link to="/onas" className={styles['navlink2']}>
              O nas
            </Link>
            <Link to="/cennik" className={styles['navlink3']}>
              Cennik
            </Link>
            <Link to="/kontakt" className={styles['navlink4']}>
              Kontakt
            </Link>
          </div>
          <div className={styles['container01']}>
            <div className={styles['container02']}>
              <div className={styles['Right-side']}>
                <Link to="/kontakt" className={styles['navlink5']}>
                  <SolidButton
                    button="ZamÃ³w wycenÄ"
                    rootClassName="rootClassName7"
                    className={styles['component']}
                  ></SolidButton>
                </Link>
              </div>
            </div>
          </div>
        </nav>
        <div className={styles['Hero']}>
          <div className={styles['Content-container']}>
            <h1 className={` ${styles['text01']} ${projectStyles['heading']} `}>
              Firma sprzÄtajÄca w Opolu &quot;Czysto JuÅ¼&quot; profesjonalne
              sprzÄtanie biur
            </h1>
            <SolidButton
              button="ZamÃ³w wycenÄ"
              rootClassName="rootClassName10"
            ></SolidButton>
          </div>
        </div>
      </div>
      <div id="main-section" className={styles['Main']}>
        <h2 className={styles['text02']}>SprzÄtanie biura w Opolu</h2>
        <div className={styles['container03']}>
          <img
            alt="image"
            src="/playground_assets/sprzatnaie-biura-600w.jpg"
            className={styles['image']}
          />
          <span className={styles['text03']}>
            <span className={styles['text04']}>
              Klienci zamawiajÄ sprzÄtanie w Opolu telefonicznie oraz na stronie
              internetowej. Pilne sprzÄtanie moÅ¼emy przeprowadziÄ przyjeÅ¼dÅ¼ajÄc
              pod wskazany adres w dniu zlozenia zamowienia. Eksperci ÅwiadczÄ
              wysokiej jakoÅci usÅugi, szybko osiÄgajÄc idealny wynik.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className={styles['text05']}></span>
          </span>
          <span className={styles['text06']}>
            <span className={styles['text07']}>
              Jest wiele form wspÃ³Åpracy. Na przykÅad moÅ¼esz zamÃ³wiÄ jednorazowÄ
              wizytÄ pracownikÃ³w lub zÅoÅ¼yÄ wniosek o usÅugÄ w ustalonym
              terminie (miesiÄc, pÃ³Å roku, rok). Do kaÅ¼dego klienta podchodzimy
              indywidualnie, ÅciÅle przestrzegajÄc jego wymagaÅ i Å¼yczeÅ.
              Wszystkie prace porzÄdkowe wykonywane sÄ w ÅcisÅej zgodnoÅci z
              obowiÄzujÄcymi normami sanitarno-higienicznymi.
            </span>
          </span>
          <span className={styles['text08']}>
            <span className={styles['text09']}>
              Jest wiele form wspÃ³Åpracy. Na przykÅad moÅ¼esz zamÃ³wiÄ jednorazowÄ
              wizytÄ pracownikÃ³w lub zÅoÅ¼yÄ wniosek o usÅugÄ w ustalonym
              terminie (miesiÄc, pÃ³Å roku, rok). Do kaÅ¼dego klienta podchodzimy
              indywidualnie, ÅciÅle przestrzegajÄc jego wymagaÅ i Å¼yczeÅ.
              Wszystkie prace porzÄdkowe wykonywane sÄ w ÅcisÅej zgodnoÅci z
              obowiÄzujÄcymi normami sanitarno-higienicznymi.
            </span>
          </span>
        </div>
        <div className={styles['container04']}>
          <h2 className={styles['text10']}>Oferta</h2>
          <div className={styles['container05']}>
            <Cena
              city="Biuro od 200mÂ²"
              city1="od 200 PLN"
              image="/playground_assets/big-offices-1500h.jpg"
              description="SprzÄtanie duÅ¼ych biur o powierzchni ponad 200 metrÃ³w kwadratowych. Czas realizacji usÅugi od 5 godzin."
              rootClassName="rootClassName1"
            ></Cena>
            <Cena
              city="Biuro do 100mÂ²"
              city1="od 40 PLN"
              image="/playground_assets/ma%C5%82e-biuro-1500h.jpg"
              description="SprzÄtanie maÅego biura do 100 metrÃ³w kwadratowych to usÅuga. Czas realizacji usÅugi do 4 godzin."
              rootClassName="rootClassName"
            ></Cena>
            <Cena
              city="Biuro do 200mÂ²"
              city1="od 90 PLN"
              image="/playground_assets/midlle-office-1500h.png"
              description="SprzÄtanie Åredniej wielkoÅci biura do 200 metrÃ³w kwadratowych. Czas realizacji usÅugi do 4 godzin."
              rootClassName="rootClassName2"
            ></Cena>
          </div>
        </div>
        <div className={styles['container06']}>
          <div className={styles['container07']}>
            <Cena
              city="Biuro do 200mÂ²"
              city1="od 90 PLN"
              image="/playground_assets/midlle-office-1500h.png"
              description="SprzÄtanie Åredniej wielkoÅci biura do 200 metrÃ³w kwadratowych. Czas realizacji usÅugi do 4 godzin."
              rootClassName="rootClassName5"
            ></Cena>
            <Cena
              city="Biuro od 200mÂ²"
              city1="od 200 PLN"
              image="/playground_assets/big-offices-1500h.jpg"
              description="SprzÄtanie duÅ¼ych biur o powierzchni ponad 200 metrÃ³w kwadratowych. Czas realizacji usÅugi od 5 godzin."
              rootClassName="rootClassName3"
            ></Cena>
            <Cena
              city="Biuro do 100mÂ²"
              city1="od 40 PLN"
              image="/playground_assets/ma%C5%82e-biuro-1500h.jpg"
              description="SprzÄtanie maÅego biura do 100 metrÃ³w kwadratowych to usÅuga. Czas realizacji usÅugi do 4 godzin."
              rootClassName="rootClassName4"
            ></Cena>
          </div>
        </div>
        <h1 className={styles['text11']}>Skontaktuj siÄ z nami !</h1>
        <div className={styles['container08']}>
          <form className={styles['form']}>
            <input
              type="text"
              placeholder="Imie"
              className={` ${styles['Input']} ${projectStyles['input']} `}
            />
            <input
              type="text"
              placeholder="Kontakt"
              className={` ${styles['textinput']} ${projectStyles['input']} `}
            />
            <button
              className={` ${styles['button']} ${projectStyles['button']} `}
            >
              WyÅyÅam
            </button>
          </form>
        </div>
      </div>
      <div className={styles['Footer']}>
        <div className={styles['Menu']}>
          <Link to="/" className={styles['navlink6']}>
            <h1 className={styles['Logo1']}>Czysto JuÅ¼</h1>
          </Link>
          <div className={styles['container09']}>
            <span className={styles['text12']}>
              <span className={styles['text13']}>O n</span>
              <Link to="/onas"></Link>
              <span className={styles['text14']}>as</span>
            </span>
            <Link to="/kontakt" className={styles['navlink8']}>
              Kontakt
            </Link>
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
              className={styles['link']}
            >
              Personalna oferta
            </a>
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
              className={styles['link1']}
            >
              Regulamin
            </a>
          </div>
          <div className={styles['Follow-container']}>
            <span className={styles['text15']}>Za subskrybuj nas</span>
            <div className={styles['Icons-container']}>
              <div className={styles['container10']}>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className={styles['link2']}
                >
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className={styles['icon']}
                  >
                    <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                  </svg>
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className={styles['link3']}
                >
                  <svg
                    viewBox="0 0 602.2582857142856 1024"
                    className={styles['icon2']}
                  >
                    <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                  </svg>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className={styles['link4']}
                >
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className={styles['icon4']}
                  >
                    <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sprztaniebiura
