import {Link} from 'gatsby'
import React from 'react'

import styles from './styles/header.module.css'

const Header = ({siteTitle}) => (
  <div id='top' className={styles.root}>
    <div className={styles.wrapper}>
      <div className={styles.branding}>
        <Link to='/'>{siteTitle}</Link>
      </div>
    </div>
  </div>
)

export default Header