import React from 'react'
import styles from './page.module.scss';
import logo from '../../public/logo.svg';
import Image from 'next/image';

export default function Page() {
  return (
    <>
      <div className={styles.containerCenter} >
        <Image src={logo} alt="logo" />

      </div>
    </>
  )
}
