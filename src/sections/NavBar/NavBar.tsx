import { Container } from "@/components";
import Image from "next/image";
import Logo from "@/assets/images/icon.png";
import styles from "./NavBar.module.scss"
import Link from "next/link";

export default function NavBar(){
    return (
        <header className={styles.NavBar}>
            <Container size="md">
                <Link href="">
                    <Image
                    src={Logo}
                    width={40}
                    height={40}
                    alt="Beatriz Logo"
                    />
                </Link>
            </Container>
        </header>
    )
}