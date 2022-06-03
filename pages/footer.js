import styles from '../styles/Home.module.css'
import Link from 'next/link'
import {Button} from "antd";
import { InstagramOutlined,YoutubeOutlined, TwitterOutlined, FacebookOutlined, LinkedinOutlined  } from '@ant-design/icons';
import applestore2 from '../public/applestore2.png'
import googlePlay from '../public/google-play-badge.png'
import Image from "next/image";

export default function Footer(){
    return(
        <div>
        <div className={styles.footer}>
            <div className={styles.ayar}>
                <h2>YASAL</h2>
                <a>Gizlilik</a>
                <a>Koşullar</a>
                <a>Çerez Politikası</a>
                <a>Fikri Mülkiyet</a>
            </div>
            <div className={styles.ayar}>
                <h2>KARİYER</h2>
                <a>Kariyer Portalı</a>
                <a>Teknoloji Blogu</a>
            </div>
            <div className={styles.social}>
                <h2>SOSYAL</h2>
                <span><InstagramOutlined /></span>
                <span><YoutubeOutlined /></span>
                <span><TwitterOutlined /></span>
                <span><FacebookOutlined /></span>
                <span><LinkedinOutlined /></span>
            </div>
            <div>
                <Link href={""}>
                    <a>SSS</a>
                </Link>
                <Link href={""}>
                    <a>Varış Noktaları</a>
                </Link>
                <Link href={""}>
                    <a>Basın Odası</a>
                </Link>
                <Link href={""}>
                    <a>Bize Ulaşın</a>
                </Link>
                <Link href={""}>
                    <a>Promosyon Kodu</a>
                </Link>
            </div>
        </div>
            <div>
                <div className={styles.cerez}>
                    <h2 style={{marginRight:50}}>UYGULAMAYI İNDİR</h2>
                    <a href=""><Image className={styles.apple} width={220} height={65}  src={applestore2} alt=""/></a>
                    <a href=""><Image width={250} height={100} src={googlePlay} alt=""/></a>
                </div>
                <div className={styles.metinCrz}>
                    <p>Sevgili bekârlar, bize kulak verin: Eğer aşkı arıyorsanız, flört etmek istiyorsanız veya plansız ilişkiler peşindeyseniz, mutlaka Tinder'da olmalısınız. Bugüne kadar 55 milyardan fazla eşleşme sağlayan uygulamamız, kendine en uygun eşleşmeyi bulmak için en doğru yer. Gerçekçi olalım; flörtleşme dünyası son günlerde çok değişti zira artık çoğu insan online platformlarda birbiriyle tanışıyor ve sosyalleşiyor. Dünyanın en popüler ücretsiz arkadaşlık uygulaması olan Tinder sayesinde, tıpkı sizin gibi bekâr ve yeni insanlarla tanışmaya hazır milyonlarca kişi parmaklarınızın ucunda. İster heteroseksüel ister LGBTQIA topluluğuna ait bir birey olun, Tinder tüm potansiyel eşleşmelerizi karşınıza çıkarmak için burada.<br/><br/>
                        Tinder'da herkes için bir şey var. Bir ilişki mi istiyorsunuz? Burada bulabilirsiniz. Yeni arkadaşlar bulmaya mı çalışıyorsunuz? Doğru adres burası. Kampüse girdiği andan itibaren üniversite deneyiminin keyfini çıkarmak isteyen bir öğrenci misiniz? Tinder U tam da istediğiniz şey. Tinder bildiğiniz arkadaşlık sitelerinden değildir. Farklı geçmişlere ve deneyimlere sahip yetişkinlerin yepyeni bağlantılar kurmak, anı biriktirmek ve daha birçok şeyi birlikte yapmak için davet edildiği çok renkli bir arkadaşlık uygulamasıdır.
                    </p>
                </div>
            </div>
            <div className={styles.sonCrz}>
                <Link href={""}>
                    <a>SSS</a>
                </Link>
                <p>/</p>
                <Link href={""}>
                    <a>Güvenlik İpuçları</a>
                </Link>
                <p>/</p>

                <Link href={""}>
                    <a>Koşullar</a>
                </Link>
                <p>/</p>

                <Link href={""}>
                    <a>Çerez Politikası</a>
                </Link>
                <p>/</p>

                <Link href={""}>
                    <a>Gizlilik Ayarları</a>
                </Link>
            </div>
        </div>
    )
}
