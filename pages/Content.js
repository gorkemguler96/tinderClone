import { Button } from 'antd';
import styles from '../styles/Home.module.css'


export default function Content(){
    return(
        <div className={styles.content}>
            <h1>Sohbete Başla</h1><br/>
            <Button size={"large"}>Hesap Oluştur</Button>
        </div>
    )
}
