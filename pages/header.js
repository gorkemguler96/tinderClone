import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { Button } from 'antd';
import {useEffect} from "react";


export default function Header(){

    return(
        <div className={styles.header}>
            <Link rel="stylesheet" href="/"><a><img height={90} src="/unblur.jpg" alt="Unblur"/></a></Link>
            <Link rel="stylesheet" href=""><a>Ürünler</a></Link>
            <Link rel="stylesheet" href=""><a>Keşfet</a></Link>
            <Link rel="stylesheet" href=""><a>Güvenlik</a></Link>
            <Link rel="stylesheet" href=""><a>Destek</a></Link>
            <Link rel="stylesheet" href=""><a>İndir</a></Link>
            <Button size={"large"}>Oturum aç</Button>
        </div>
    )
}
