import React from 'react'
import { useGlobalContext } from '../context/context'
import phoneImg from '../images/phone.svg'
import styles from '../styles/Hero.module.css'
import Image from 'next/image'

const Hero = () =>{
	
	const {closeSubmenu} = useGlobalContext()

	return(
		<section className={styles.hero} onMouseOver={closeSubmenu}>
			<div className={styles.heroCenter}>
				<article className={styles.heroInfo}>
					<h1>Payments infrastructure <br />
            for the internet
					</h1>
					<p>
					Millions of companies of all sizes—from startups to Fortune 500s—use
            Stripe’s software and APIs to accept payments, send payouts, and
            manage their businesses online
					</p>
					<button className={styles.btn}>Start now</button>
				</article>
				<article className={styles.heroImage}>
					<Image src={phoneImg} alt='phone-image' 
						className={styles.phoneImage} priority/>
				</article>
			</div>
		</section>
	)
}

export default Hero