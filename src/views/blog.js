import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import SolidButton from '../components/solid-button'
import BlogPostCard22 from '../components/blog-post-card22'
import styles from './blog.module.css'

const Blog = () => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Blog - Czysto JuÅ¼ - SprzÄtanie w Opolu</title>
        <meta name="description" content="SprzÄtanie w Opolu" />
        <meta
          property="og:title"
          content="Blog - Czysto JuÅ¼ - SprzÄtanie w Opolu"
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
                    rootClassName="rootClassName23"
                    className={styles['component']}
                  ></SolidButton>
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <div id="main-section" className={styles['Main']}>
        <div className={styles['Blog']}>
          <div className={styles['container3']}>
            <BlogPostCard22
              profile_src="https://images.unsplash.com/photo-1611232658409-0d98127f237f?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIzfHxwb3J0cmFpdCUyMHdvbWFufGVufDB8fHx8MTYyNjQ1MDU4MQ&amp;ixlib=rb-1.2.1&amp;h=1200"
              rootClassName="rootClassName3"
            ></BlogPostCard22>
          </div>
          <div className={styles['container4']}>
            <BlogPostCard22
              image_src="https://images.unsplash.com/photo-1595565312451-23051ab0666c?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDI0fHxwb3J0cmFpdCUyMHdvbWFufGVufDB8fHx8MTYyNjQ1MDU4MQ&amp;ixlib=rb-1.2.1&amp;h=1000"
              profile_src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDExfHxwb3J0cmFpdCUyMHdvbWFufGVufDB8fHx8MTYyNjQ1MDU4MQ&amp;ixlib=rb-1.2.1&amp;h=1200"
              rootClassName="rootClassName"
            ></BlogPostCard22>
          </div>
          <BlogPostCard22
            image_src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIxfHxwb3J0cmFpdCUyMHdvbWFuJTIwY29sb3J8ZW58MHx8fHwxNjI2NDUwNTU4&amp;ixlib=rb-1.2.1&amp;h=1000"
            profile_src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE0fHxwb3J0cmFpdCUyMHdvbWFufGVufDB8fHx8MTYyNjQ1MDU4MQ&amp;ixlib=rb-1.2.1&amp;h=1200"
            rootClassName="rootClassName2"
          ></BlogPostCard22>
        </div>
      </div>
      <div className={styles['Footer']}>
        <div className={styles['Menu']}>
          <Link to="/" className={styles['navlink6']}>
            <h1 className={styles['Logo1']}>Czysto JuÅ¼</h1>
          </Link>
          <div className={styles['container5']}>
            <span className={styles['text01']}>
              <span className={styles['text02']}>O n</span>
              <Link to="/onas"></Link>
              <span className={styles['text03']}>as</span>
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
            <span className={styles['text04']}>Za subskrybuj nas</span>
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
      <div className={styles['Stats']}>
        <div className={styles['Stat']}>
          <h1 className={styles['text05']}>
            <span>50</span>
            <span>+</span>
          </h1>
          <span className={styles['text08']}>Happy clients</span>
          <span className={styles['text09']}>
            Lorem ipsum dolor sit amet, consectetur adipiscing.
          </span>
        </div>
        <div className={styles['Stat1']}>
          <h1 className={styles['text10']}>
            <span>369</span>
          </h1>
          <span className={styles['text12']}>Projects completed</span>
          <span className={styles['text13']}>
            Lorem ipsum dolor sit amet, consectetur adipiscing.
          </span>
        </div>
        <div className={styles['Stat2']}>
          <h1 className={styles['text14']}>
            <span>500</span>
            <span>+</span>
          </h1>
          <span className={styles['text17']}>Hours</span>
          <span className={styles['text18']}>
            Lorem ipsum dolor sit amet, consectetur adipiscing.
          </span>
        </div>
        <div className={styles['Stat3']}>
          <h1 className={styles['text19']}>
            <span>24/7</span>
          </h1>
          <span className={styles['text21']}>Support</span>
          <span className={styles['text22']}>
            Lorem ipsum dolor sit amet, consectetur adipiscing.
          </span>
        </div>
      </div>
    </div>
  )
}

export default Blog
