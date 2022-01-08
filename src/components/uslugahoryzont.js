import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import OutlineButton from './outline-button'
import styles from './uslugahoryzont.module.css'

const Uslugahoryzont = (props) => {
  return (
    <div className={` ${styles['container']} ${styles[props.rootClassName]} `}>
      <div className={styles['container1']}>
        <div className={styles['container2']}>
          <img
            alt={props.image_alt}
            src={props.image}
            className={styles['image']}
          />
          <div className={styles['container3']}>
            <span className={styles['text']}>{props.city}</span>
            <span className={styles['text1']}>{props.description}</span>
            <span className={styles['text2']}>{props.city1}</span>
            <Link to="/kontakt" className={styles['navlink']}>
              <OutlineButton
                button1="ZamÃ³wiÄ"
                rootClassName="rootClassName"
                className={styles['component']}
              ></OutlineButton>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

Uslugahoryzont.defaultProps = {
  image_alt: 'image',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
  city: 'City Name',
  image:
    'https://images.unsplash.com/photo-1514924013411-cbf25faa35bb?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1500',
  rootClassName: '',
  city1: 'City Name',
}

Uslugahoryzont.propTypes = {
  image_alt: PropTypes.string,
  description: PropTypes.string,
  city: PropTypes.string,
  image: PropTypes.string,
  rootClassName: PropTypes.string,
  city1: PropTypes.string,
}

export default Uslugahoryzont
