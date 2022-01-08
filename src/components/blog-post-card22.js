import React from 'react'

import PropTypes from 'prop-types'

import styles from './blog-post-card22.module.css'

const BlogPostCard22 = (props) => {
  return (
    <div
      className={` ${styles['BlogPostCard']} ${styles[props.rootClassName]} `}
    >
      <img
        alt={props.image_alt}
        src={props.image_src}
        image_src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&amp;ixlib=rb-1.2.1&amp;h=1000"
        className={styles['image']}
      />
      <div className={styles['container']}>
        <div className={styles['container1']}>
          <span className={styles['text']}>{props.label}</span>
          <span className={styles['text1']}>{props.when}</span>
        </div>
        <h1 className={styles['text2']}>{props.title}</h1>
        <span className={styles['text3']}>{props.description}</span>
        <div className={styles['Container2']}>
          <span className={styles['text4']}>Read More -&gt;</span>
        </div>
      </div>
    </div>
  )
}

BlogPostCard22.defaultProps = {
  rootClassName: '',
  title: 'Lorem ipsum dolor sit amet',
  label: 'ENTERPRISE',
  image_alt: 'image',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non volutpat turpis. Mauris luctus rutrum mi ut rhoncus. Integer in dignissim tortor. Lorem ipsum dolor sit amet, consectetur adipiscing ...',
  when: '3 days ago',
  image_src:
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&ixlib=rb-1.2.1&w=1000',
}

BlogPostCard22.propTypes = {
  rootClassName: PropTypes.string,
  title: PropTypes.string,
  label: PropTypes.string,
  image_alt: PropTypes.string,
  description: PropTypes.string,
  when: PropTypes.string,
  image_src: PropTypes.string,
}

export default BlogPostCard22
