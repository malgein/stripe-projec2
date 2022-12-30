import React from 'react'
import { useGlobalContext } from '../context/context'
import styles from '../styles/Navbar.module.css'
import Image from 'next/image'
import logo from '../images/logo.svg'
import {FaBars} from 'react-icons/fa'

const Navbar =() =>{
	const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();
  const displaySubmenu = (e) => {
    const page = e.target.textContent;
    const tempBtn = e.target.getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn.bottom - 3;
    openSubmenu(page, { center, bottom });
  };

	const handleSubmenu = e =>{
		if(!e.target.classList.contains(styles.LinkBtn)){
			closeSubmenu
		}
	}
	return(
		<nav className={styles.nav} onMouseOver={handleSubmenu}>
			<div className={styles.navCenter}>
				<div className={styles.navHeader}>
					<Image src={logo} className={styles.navLogo} alt='stripe' priority/>
					<button  className={styles.toggleBtn} onClick={openSidebar}>
						<FaBars />
					</button>
				</div>
				<ul className={styles.navLinks}>
					<li>
						<button  className={styles.linkBtn} 
							onMouseOver={displaySubmenu}>
							products
						</button>
					</li>
					<li>
						<button className={styles.linkBtn} 
							onMouseOver={displaySubmenu}>
							developers
						</button>
					</li>
					<li>
						<button  className={styles.linkBtn} 
							onMouseOver={displaySubmenu}>
								company
							</button>
					</li>
				</ul>
				<button className={styles.signinBtn}>Sing in</button>
			</div>
		</nav>
	)
}

export default Navbar