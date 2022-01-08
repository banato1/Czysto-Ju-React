import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import SolidButton from '../components/solid-button'
import Uslugahoryzont from '../components/uslugahoryzont'
import Cena from '../components/cena'
import projectStyles from '../style.module.css'
import styles from './sprztanieporemoncie.module.css'

const Sprztanieporemoncie = () => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>SprzÄtanie po remoncie - Czysto JuÅ¼ - SprzÄtanie w Opolu</title>
        <meta name="description" content="SprzÄtanie w Opolu" />
        <meta
          property="og:title"
          content="SprzÄtanie po remoncie - Czysto JuÅ¼ - SprzÄtanie w Opolu"
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
          <div className={styles['container1']}>
            <div className={styles['container2']}>
              <div className={styles['Right-side']}>
                <Link to="/kontakt" className={styles['navlink5']}>
                  <SolidButton
                    button="ZamÃ³w wycenÄ"
                    rootClassName="rootClassName17"
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
              sprzÄtanie po remoncie
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </h1>
            <SolidButton
              button="ZamÃ³w wycenÄ"
              rootClassName="rootClassName16"
            ></SolidButton>
          </div>
        </div>
      </div>
      <div id="main-section" className={styles['Main']}>
        <h2 className={styles['text02']}>SprzÄtanie po remoncie w Opolu</h2>
        <div className={styles['container3']}>
          <img
            alt="image"
            src="/playground_assets/sprzatnaie-poremoncie-600w.jpg"
            className={styles['image']}
          />
          <span className={styles['text03']}>
            <span>
              SprzÄtanie po remoncie to trudne i Å¼mudne zadanie. JeÅli to
              moÅ¼liwe, lepiej powierzyÄ to profesjonalnym sprzÄtaczom. Nie jest
              tak drogi, jak wiele osÃ³b myÅli. Firma &quot;Czysto JuÅ¼&quot;
              zapewnia takÄ usÅugÄ od 4 PLN za mÂ². SprzÄtamy mieszkania, biura,
              domki. Napisz do nas na stronie lub zadzwoÅ pod wskazane numery.
            </span>
            <br></br>
            <span></span>
            <br></br>
            <span>
              Po kosmetycznym, a tym bardziej remoncie kapitalnym, bardzo trudno
              pozbyÄ siÄ kurzu budowlanego. PrzyjeÅ¼dÅ¼amy do PaÅstwa z caÅym
              niezbÄdnym sprzÄtem, w tym odkurzaczami przemysÅowymi i
              profesjonalnymi Årodkami czystoÅci i w jeden dzieÅ przygotowujemy
              mieszkanie lub inne pomieszczenie do wprowadzenia
            </span>
          </span>
          <img
            alt="image"
            src="/playground_assets/sprzatnaie-po-remoncie-1500w.jpg"
            className={styles['image1']}
          />
          <span className={styles['text07']}>
            <span className={styles['text08']}>
              1. Usuwamy kurz z podÅÃ³g, Åcian, sufitÃ³w, mebli
            </span>
            <br></br>
            <span className={styles['text09']}>
              2.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className={styles['text10']}>wycieramy</span>
            <span className={styles['text11']}>
              {' '}
              plamy z farb, mieszanek budowlanych, kleju
            </span>
            <br></br>
            <span className={styles['text12']}>
              3.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className={styles['text13']}>
              myjemy
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className={styles['text14']}>
              powierzchnie szklane, drzwi, lustra
            </span>
            <br></br>
            <span className={styles['text15']}>
              4.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className={styles['text16']}>wykonujemy</span>
            <span className={styles['text17']}> mycie podÅogi na mokro</span>
            <br></br>
            <span className={styles['text18']}>
              5.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className={styles['text19']}>czyÅcimy</span>
            <span className={styles['text20']}> fugi pÅytek</span>
            <br></br>
            <span className={styles['text21']}>
              6.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className={styles['text22']}>usuwamy</span>
            <span className={styles['text23']}> foliÄ ochronnÄ z okien</span>
          </span>
          <img
            alt="image"
            src="/playground_assets/sprzatnaie-po-remoncie-1500w.jpg"
            className={styles['image2']}
          />
        </div>
        <Uslugahoryzont
          city="SprzÄtanie po remoncie"
          city1="od 200 PLN"
          image="/playground_assets/sprzatnaie-po-remoncie-baner1-1500h.jpg"
          description="Po omÃ³wieniu szczegÃ³ÅÃ³w i potwierdzeniu listy usÅug nasz zespÃ³Å wyjeÅ¼dÅ¼a do PaÅstwa i od razu przystÄpuje do pracy."
          rootClassName="rootClassName"
        ></Uslugahoryzont>
        <Cena
          city="SprzÄtanie po remoncie"
          city1="od 200 PLN"
          image="/playground_assets/sprzatnaie-po-remoncie-baner1-1500h.jpg"
          description="Po omÃ³wieniu szczegÃ³ÅÃ³w i potwierdzeniu listy usÅug nasz zespÃ³Å wyjeÅ¼dÅ¼a do PaÅstwa i od razu przystÄpuje do pracy."
          rootClassName="rootClassName18"
        ></Cena>
        <div className={styles['container4']}>
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
          <div className={styles['container5']}>
            <span className={styles['text24']}>
              <span className={styles['text25']}>O n</span>
              <Link to="/onas"></Link>
              <span className={styles['text26']}>as</span>
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
            <span className={styles['text27']}>Za subskrybuj nas</span>
            <div className={styles['Icons-container']}>
              <div className={styles['container6']}>
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

export default Sprztanieporemoncie
