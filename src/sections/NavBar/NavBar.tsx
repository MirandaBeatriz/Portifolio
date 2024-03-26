import { Container } from "@/components";
import Image from "next/image";
import Logo from "@/assets/images/icon.png";
import styles from "./NavBar.module.scss"
import Link from "next/link";
import { tv } from "tailwind-variants";

const style =tv({
    slots:{
        container:"flex justify-between",
        menu:"flex gap-3"
    }
})

export default function NavBar(){
    return (
        <header className={styles.NavBar}>
            <Container size="md" className={style().container()}>
                <Link href="">
                    <Image
                    src={Logo}
                    width={40}
                    height={40}
                    alt="Beatriz Logo"
                    />
                </Link>
                <nav>
                    <ul className={style().menu()}>
                        <li><Link href="#about">About</Link></li>
                        <li><Link href="#skills">Skills</Link></li>
                        <li><Link href="#historic">Historic</Link></li>
                    </ul>
                </nav>
            </Container>
        </header>
    )
}