import { useEffect, useState } from "react";
import {Button} from "antd";
import styles from '../styles/Home.module.css'
import Link from "next/link";

export default function Denemeliknav(){
    const [clientWindowHeight, setClientWindowHeight] = useState("");

    const [backgroundTransparacy, setBackgroundTransparacy] = useState(0);
    const [padding, setPadding] = useState(30);
    const [boxShadow, setBoxShadow] = useState(0);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    });

    const handleScroll = () => {
        setClientWindowHeight(window.scrollY);
    };

    useEffect(() => {
        let backgroundTransparacyVar = clientWindowHeight / 600;

        if (backgroundTransparacyVar < 1) {
            let paddingVar = 30 - backgroundTransparacyVar * 20;
            let boxShadowVar = backgroundTransparacyVar * 0.1;
            setBackgroundTransparacy(backgroundTransparacyVar);
            setPadding(paddingVar);
            setBoxShadow(boxShadowVar);
        }
    }, [clientWindowHeight]);

    return(
        <nav
            className="navbar navbar-expand-lg navbar-light fixed-top"
            style={{
                height:120,
                background: `rgba(255, 255, 255, ${backgroundTransparacy})`,
                padding: `${padding}px 0px`,
                boxShadow: `rgb(0 0 0 / ${boxShadow}) 0px 0px 20px 6px`,
            }}
        >
            <div className={styles.header}>
                <Link rel="stylesheet" href="/"><a><img height={90} src="/unblur.jpg" alt="Unblur"/></a></Link>
                <Link rel="stylesheet" href=""><a>Ürünler</a></Link>
                <Link rel="stylesheet" href=""><a>Keşfet</a></Link>
                <Link rel="stylesheet" href=""><a>Güvenlik</a></Link>
                <Link rel="stylesheet" href=""><a>Destek</a></Link>
                <Link rel="stylesheet" href=""><a>İndir</a></Link>
                <Button size={"large"}>Oturum aç</Button>
            </div>
        </nav>
    )
}
