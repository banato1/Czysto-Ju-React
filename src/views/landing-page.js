import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import SolidButton from '../components/solid-button'
import Usluga from '../components/usluga'
import projectStyles from '../style.module.css'
import styles from './landing-page.module.css'

const LandingPage = () => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Czysto JuÅ¼ - SprzÄtanie w Opolu</title>
        <meta name="description" content="SprzÄtanie w Opolu" />
        <meta property="og:title" content="Czysto JuÅ¼ - SprzÄtanie w Opolu" />
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
            <Link to="/blog" className={styles['navlink01']}>
              Blog
            </Link>
            <Link to="/onas" className={styles['navlink02']}>
              O nas
            </Link>
            <Link to="/cennik" className={styles['navlink03']}>
              Cennik
            </Link>
            <Link to="/kontakt" className={styles['navlink04']}>
              Kontakt
            </Link>
          </div>
          <div className={styles['Hero']}>
            <div className={styles['Content-container']}>
              <h1
                className={` ${styles['text01']} ${projectStyles['heading']} `}
              >
                Profesjonalne usÅugi sprzÄtania
              </h1>
              <h2
                className={` ${projectStyles['subheading']} ${styles['Subheading']} `}
              >
                <span className={styles['text02']}>
                  Daj sobie chwilÄ odpoczÄÄ,
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span className={styles['text04']}>
                  A my zajmiemy siÄ sprzÄtaniem
                </span>
              </h2>
              <span className={styles['text05']}>
                <span className={styles['text06']}>
                  SprzÄtanie domÃ³w, biur i wszystkiego, co powinno byÄ idealne
                </span>
                <span className={styles['text07']}></span>
              </span>
              <Link to="/kontakt" className={styles['navlink05']}>
                <SolidButton
                  button="ZamÃ³w wycenÄ"
                  rootClassName="rootClassName1"
                  className={styles['component']}
                ></SolidButton>
              </Link>
            </div>
          </div>
        </nav>
        <div className={styles['Hero1']}>
          <div className={styles['Content-container1']}>
            <h1 className={` ${styles['text08']} ${projectStyles['heading']} `}>
              Profesjonalne usÅugi sprzÄtania
            </h1>
            <h2
              className={` ${projectStyles['subheading']} ${styles['Subheading1']} `}
            >
              <span className={styles['text09']}>
                Daj sobie chwilÄ odpoczÄÄ,
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span className={styles['text11']}>
                A my zajmiemy siÄ sprzÄtaniem
              </span>
            </h2>
            <span className={styles['text12']}>
              <span className={styles['text13']}>
                SprzÄtanie domÃ³w, biur i wszystkiego, co powinno byÄ idealne
              </span>
            </span>
            <Link to="/kontakt" className={styles['navlink06']}>
              <SolidButton
                button="ZamÃ³w wycenÄ"
                rootClassName="rootClassName24"
                className={styles['component1']}
              ></SolidButton>
            </Link>
          </div>
        </div>
      </div>
      <div id="main-section" className={styles['Main']}>
        <h1 className={styles['text14']}>Naszy usÅugi</h1>
        <div className={styles['container1']}>
          <div className={styles['container2']}>
            <Link to="/sprztaniemieszkania" className={styles['navlink07']}>
              <Usluga
                city="SprzÄtanie mieszkania"
                image="/playground_assets/542261_936x530-1500h.jpg"
                description="Z naszÄ pomocÄ uratujesz swÃ³j dom przed kurzem i brudem oraz sprawisz, Å¼e bÄdzie czysty i wygodny. ZespÃ³Å profesjonalnych sprzÄtaczy jest gotowy do szybkiego i bezpiecznego usuniÄcia wszelkich zanieczyszczeÅ. Odpowiedzialnie podchodzimy do zadaÅ postawionych przed sprzÄtaniem mieszkaÅ."
                rootClassName="rootClassName5"
                className={styles['component2']}
              ></Usluga>
            </Link>
            <Link to="/sprztanieporemoncie" className={styles['navlink08']}>
              <Usluga
                city="SprzÄtanie po remoncie"
                image="/playground_assets/poslerem-1500h.jpg"
                description='Ålady farby i szpachli, plamy kleju i rozpuszczalnika, resztki gruzu budowlanego i kurzu, kurz na dosÅownie wszystkich powierzchniach - ile czasu zajmie czyszczenie! UporzÄdkowanie pomieszczenia bÄdzie wymagaÅo wiele wysiÅku, wysokiej jakoÅci ÅrodkÃ³w czystoÅci i profesjonalnego sprzÄtu. Skontaktuj siÄ z profesjonalistami - do firmy sprzÄtajÄcej "Czysto JuÅ¼"'
                rootClassName="rootClassName3"
                className={styles['component3']}
              ></Usluga>
            </Link>
            <Link to="/sprztaniebiura" className={styles['navlink09']}>
              <Usluga
                city="SprzÄtanie biura"
                image="/playground_assets/uboroka-ofisoov-1-1000x600-1500h.jpg"
                description='Firma sprzÄtajÄca "Czysto JuÅ¼" oferuje usÅugÄ - codzienne sprzÄtanie pomieszczeÅ biurowych, ktÃ³re ma na celu utrzymanie PaÅstwa biura w atrakcyjnej dla klientÃ³w formie.UsÅuga sprzÄtania biurowcÃ³w pozwala pracownikom biurowym skoncentrowaÄ siÄ na swojej pracy.'
                rootClassName="rootClassName4"
                className={styles['component4']}
              ></Usluga>
            </Link>
          </div>
        </div>
        <div className={styles['Cards-container']}>
          <Link to="/sprztaniemieszkania" className={styles['navlink10']}>
            <Usluga
              city="SprzÄtanie mieszkania"
              image="/playground_assets/542261_936x530-1500h.jpg"
              description="Z naszÄ pomocÄ uratujesz swÃ³j dom przed kurzem i brudem oraz sprawisz, Å¼e bÄdzie czysty i wygodny. ZespÃ³Å profesjonalnych sprzÄtaczy jest gotowy do szybkiego i bezpiecznego usuniÄcia wszelkich zanieczyszczeÅ. Odpowiedzialnie podchodzimy do zadaÅ postawionych przed sprzÄtaniem mieszkaÅ."
              rootClassName="rootClassName29"
              className={styles['component5']}
            ></Usluga>
          </Link>
          <Link to="/sprztaniebiura" className={styles['navlink11']}>
            <Usluga
              city="SprzÄtanie biura"
              image="/playground_assets/uboroka-ofisoov-1-1000x600-1500h.jpg"
              description='Firma sprzÄtajÄca "Czysto JuÅ¼" oferuje usÅugÄ - codzienne sprzÄtanie pomieszczeÅ biurowych, ktÃ³re ma na celu utrzymanie PaÅstwa biura w atrakcyjnej dla klientÃ³w formie.UsÅuga sprzÄtania biurowcÃ³w pozwala pracownikom biurowym skoncentrowaÄ siÄ na swojej pracy.'
              rootClassName="rootClassName2"
              className={styles['component6']}
            ></Usluga>
          </Link>
          <Link to="/sprztanieporemoncie" className={styles['navlink12']}>
            <Usluga
              city="SprzÄtanie po remoncie"
              image="/playground_assets/poslerem-1500h.jpg"
              description='Ålady farby i szpachli, plamy kleju i rozpuszczalnika, resztki gruzu budowlanego i kurzu, kurz na dosÅownie wszystkich powierzchniach - ile czasu zajmie czyszczenie! UporzÄdkowanie pomieszczenia bÄdzie wymagaÅo wiele wysiÅku, wysokiej jakoÅci ÅrodkÃ³w czystoÅci i profesjonalnego sprzÄtu. Skontaktuj siÄ z profesjonalistami - do firmy sprzÄtajÄcej "Czysto JuÅ¼"'
              rootClassName="rootClassName"
              className={styles['component7']}
            ></Usluga>
          </Link>
        </div>
        <h1 className={styles['text15']}>Skontaktuj siÄ z nami !</h1>
        <input
          type="text"
          placeholder="Imie"
          className={` ${styles['textinput']} ${projectStyles['input']} `}
        />
        <input
          type="text"
          placeholder="Kontakt"
          className={` ${styles['textinput1']} ${projectStyles['input']} `}
        />
      </div>
      <div className={styles['Footer']}>
        <div className={styles['Menu']}>
          <Link to="/" className={styles['navlink13']}>
            <h1 className={styles['Logo1']}>Czysto JuÅ¼</h1>
          </Link>
          <div className={styles['container3']}>
            <span className={styles['text16']}>
              <span className={styles['text17']}>O n</span>
              <Link to="/onas"></Link>
              <span className={styles['text18']}>as</span>
            </span>
            <Link to="/kontakt" className={styles['navlink15']}>
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
            <span className={styles['text19']}>Za subskrybuj nas</span>
            <div className={styles['Icons-container']}>
              <div className={styles['container4']}>
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

export default LandingPage
