import React from 'react'

import PropTypes from 'prop-types'

import styles from './navigation-links3.module.css'

const NavigationLinks3 = (props) => {
  return (
    <nav className={` ${styles['Nav']} ${styles[props.rootClassName]} `}>
      <span className={styles['text']}>{props.text}</span>
      <span className={styles['text1']}>{props.text1}</span>
      <span className={styles['text2']}>{props.text2}</span>
      <span className={styles['text3']}>{props.text3}</span>
      <span className={styles['text4']}>{props.text4}</span>
    </nav>
  )
}

NavigationLinks3.defaultProps = {
  text4: 'Blog',
  text: 'About',
  rootClassName: '',
  text2: 'Pricing',
  text1: 'Features',
  text3: 'Team',
}

NavigationLinks3.propTypes = {
  text4: PropTypes.string,
  text: PropTypes.string,
  rootClassName: PropTypes.string,
  text2: PropTypes.string,
  text1: PropTypes.string,
  text3: PropTypes.string,
}

export default NavigationLinks3
