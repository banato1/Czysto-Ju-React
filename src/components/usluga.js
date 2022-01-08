import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import OutlineButton from './outline-button'
import styles from './usluga.module.css'

const Usluga = (props) => {
  return (
    <div className={` ${styles['container']} ${styles[props.rootClassName]} `}>
      <img
        alt={props.image_alt}
        src={props.image}
        className={styles['image']}
      />
      <div className={styles['container1']}>
        <span className={styles['text']}>{props.city}</span>
        <span className={styles['text1']}>{props.description}</span>
        <Link to="/kontakt" className={styles['navlink']}>
          <OutlineButton
            button1="ZamÃ³wiÄ"
            className={styles['component']}
          ></OutlineButton>
        </Link>
      </div>
    </div>
  )
}

Usluga.defaultProps = {
  image:
    'https://images.unsplash.com/photo-1514924013411-cbf25faa35bb?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1500',
  rootClassName: '',
  image_alt: 'image',
  city: 'City Name',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
}

Usluga.propTypes = {
  image: PropTypes.string,
  rootClassName: PropTypes.string,
  image_alt: PropTypes.string,
  city: PropTypes.string,
  description: PropTypes.string,
}

export default Usluga
