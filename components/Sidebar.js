import { useGlobalContext } from "../context/context";
import { FaTimes } from "react-icons/fa";
import styles from '../styles/Sidebar.module.css'
import sublinks from "../pages/data"; 

const Sidebar = () =>{
	const {isSidebarOpen, closeSidebar} = useGlobalContext()

	return(
		<aside className={isSidebarOpen ? styles.sidebarWrapperShow : styles.sidebarWrapper}>
			<div className={styles.sidebar}>
				<button className={styles.closeBtn} onClick={closeSidebar}>
					<FaTimes />
				</button>
				<div className={styles.sidebarLinks}>
					{sublinks.map((item, index) => {
						const {page, links} = item
						return(
							<article key={index}>
								<h4>{page}</h4>
								<div className={styles.sidebarSublinks}>
									{links.map((link, index)=>{
										const {url, icon, label} = link
										return(
											<a key={index} href={url}>
												{icon}
												{label}
											</a>
										)
									})}
								</div>
							</article>
						)
					})}
				</div>
			</div>
		</aside>
	)
}

export default Sidebar