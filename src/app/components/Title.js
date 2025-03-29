import styles from "@/styles/home.module.css";
import GradientText from './GradientText';  

export default function Hero() {
  return (
    <section id="home" className={styles.container}>
      <div className={styles.titleContainer}>
        <h1 className="title">Illumine&#39; 2025</h1>
        <GradientText
          colors={["#ffffff", "rgb(255, 204, 0)", "#ffffff", "rgb(255, 204, 0)", "#ffffff"]} // Updated gradient colors (white and yellow)
          animationSpeed={3} 
          showBorder={false} 
          className="subtitle" 
        >
          Innofashion Show 7
        </GradientText>
      </div>
    </section>
  );
}
