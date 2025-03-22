import Link from "next/link";
import logo from '@/assets/logo.png'
import classes from './main-header.module.css'
import Image from "next/image";
import HeaderBackg from './header-backg'
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
                            <Link href={"/meals"} >Browse Meals</Link>
                        </li>
                        <li>
                            <Link href={"/community"} >Foodie community</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
        
    )
}