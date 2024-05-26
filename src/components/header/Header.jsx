import Link from "next/link"
import style from './header.module.css'
import { FaMagnifyingGlass } from "react-icons/fa6";

export default function Header() {
  return (
    <div className={style.headerMainWrapper}>
    <header className={style.headerContainerMain}>
        <Link href="/" className={style.headerLogoMain}>Adventure Guild</Link>
        <div className={style.searchWrapper}>
            <form>
                <div className={style.searchContainer}>
                    <input
                    className=""
                    name="searchQuery"
                    placeholder="Search"/>
                   <button>
                   <FaMagnifyingGlass />
                   </button>
                   
                </div>
            </form>
        </div>
        <nav className={style.headerContainerNav}>
          <Link className={style.navLink}  href="/viewGuildMembers">Sign in</Link>
        </nav>
    </header>
  </div>
  )
}

