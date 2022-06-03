import styles from '../styles/Home.module.css'
import { motion } from 'framer-motion'
import {useRef,useEffect,useState} from "react";

export default function CommentBlog(){

    const [width,setWidth] = useState(0)
    const carousel = useRef()

    useEffect(()=>{
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
    },[])

    return(
        <motion.div ref={carousel} className={styles.carousel} whileTap={{cursor: "grabbing"}}>
            <motion.div drag={"x"} dragConstraints={{right:0, left: -width}} className={styles.innerCarousel}>
                <div className={styles.deneme}>
                    <div className={styles.title}>
                        <h3>Magdalena ve Annie</h3>
                    </div>
                    <h1>❝</h1>
                    <p>Bana şimdiye kadar duyduğum EN KÖTÜ tavlama cümlelerinden birini yazdı ama iş yerinde sıkıldığım için cevap verdim. O anda itibaren konuşmaya, flörtleşmeye ve birbirimize daha da aşık olmaya hiç ara vermedik.</p>
                </div>
                <div className={styles.deneme}>
                    <div className={styles.title}>
                        <h3>Kenneth ve Elliot</h3>
                    </div>
                    <h1>❝</h1>
                    <p>
                        ... kötü bir ayrılık dönemindeydim ve zihnimi biraz uzaklaştırmak için bir Tinder hesabı oluşturdum. Yaklaşık bir hafta süren sohbetten sonra bir şeyler içmek için mahalledeki bir barda buluşmaya karar verdik. Nihayetinde, 27 Haziran
                        2020'de New Jersey'de 18 kişinin katıldığı bir evlilik töreniyle hayatımızı birleştirmeye karar verdik.
                    </p>
                </div>
                <div className={styles.deneme}>
                    <div className={styles.title}>
                        <h3>Gabriel ve Nişanlısı</h3>
                    </div>
                    <h1>❝</h1>
                    <p>Bir yol ayrımındaydık ve birkaç ay birlikte takıldıktan sonra ilişkimizi bitirmeye karar verdik. Ona aşıktım ama bu aşk hikayesinin uzun süreceğini sanmıyordum. 9 ay ileri saralım, şu anda ayrılmaz bir çiftiz.</p>
                </div>
                <div className={styles.deneme}>
                    <div className={styles.title}>
                        <h3>Ryan ve Lindsey Walsh</h3>
                    </div>
                    <h1>❝</h1>
                    <p>Bana şimdiye kadar duyduğum EN KÖTÜ tavlama cümlelerinden birini yazdı ama iş yerinde sıkıldığım için cevap verdim. O anda itibaren konuşmaya, flörtleşmeye ve birbirimize daha da aşık olmaya hiç ara vermedik.</p>
                </div>
                <div className={styles.deneme}>
                    <div className={styles.title}>
                        <h3>Lauren Delarmente</h3>
                    </div>
                    <h1>❝</h1>
                    <p>Tinder sayesinde hayatımın aşkını buldum ve evlenmeye karar verdik. Birkaç randevuya çıktıktan ve birkaç eğlenceli gece geçirdikten sonra
                        Miranda'ya rastladım. Profilini ve özellikle de son cümlesini okuduktan sonra onu sağa kaydırma fikrine engel olamadım:  ❤</p>
                </div>
                <div className={styles.deneme}>
                    <div className={styles.title}>
                        <h3>Shannon Escobar</h3>
                    </div>
                    <h1>❝</h1>
                    <p>Bir ilişkimden daha yeni çıkmıştım ve Annie de kadınlarla çıkmaya yeni başlamıştı.
                        Bu yüzden ikimiz de biraz gergindik ve dikkatli davranıyorduk! Birbirimize hızla
                        sırılsıklam aşık olduk, ikimiz de aradığımız kişiyi hemen bulduğumuzu anlamıştık.
                    </p>
                </div>
            </motion.div>
        </motion.div>
    )
}
