import React,{useState, useEffect, useRef} from 'react'
import styles from '../styles/Submenu.module.css'
import { useGlobalContext} from '../context/context'

const Submenu= () =>{
	const {
    isSubmenuOpen,
    page: { page, links },
    location,
  } = useGlobalContext()
  const container = useRef(null)

	const [columns, setColumns] = useState('submenuCenterCol2')

	useEffect(() =>{
		const submenu = container.current
    const { center, bottom } = location
    submenu.style.left = `${center}px`
    submenu.style.top = `${bottom}px`

		if (links.length === 3) {
      setColumns('submenuCenterCol3')
    }
    if (links.length > 3) {
      setColumns('submenuCenterCol4')
    }
	}, [page, location, links])

	return(
		<aside className={isSubmenuOpen ? styles.submenuShow : styles.submenu}
		 ref={container}>
			<h4>{page}</h4>
			<div className={styles[columns]}>
				{links.map((link, index) => {
					const {label, icon, url } =link  
			  	return(
					<a key={index} hrf={url}>
						{icon}     
						{label}  
					</a>)})}
			</div>
		</aside>
	)
}

export default Submenu