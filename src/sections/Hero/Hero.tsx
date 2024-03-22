import Image from "next/image";
import Avatar from "@/assets/images/beatriz_miranda.png";
import styles from "./Hero.module.scss"
import { Container } from "@/components";

export default function Hero(){
    return (
        <section className={styles.Hero}>
            <Container size="md">
                <Image
                    src={Avatar}
                    alt="Beatriz Miranda"
                    width={200}
                    height={200}
                    className={styles.avatar}
                />
            </Container>
        </section>
    );
}