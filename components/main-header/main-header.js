import Link from "next/link";
import logo from '@/assets/logo.png'
import classes from './main-header.module.css'
import Image from "next/image";
import HeaderBackg from './header-backg'
import NavLink from "../nav-link";
export default function Header(params) {
    return (
        <>
            <HeaderBackg />
            <header className={classes.header}>
                <Link className={classes.logo} href={"/"}>
                    <Image src={logo} alt="a plate with food on it" priority />
                    {/* <img src={logo.src} alt="a plate with food on it"/> */}
                    NextLevel Food
                </Link>

                <nav className={classes.nav}>
                    <ul>
                        <li>
                            <NavLink href={"/meals"} >Browse Meals</NavLink>
                        </li>
                        <li>
                            <NavLink href={"/community"} >Foodie community</NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}