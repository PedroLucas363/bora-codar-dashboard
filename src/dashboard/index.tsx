import styles from "./index.module.css";

import Emoji from "../assets/img/emoji.png";
import Bar from "../components/Bar";

export default function Dashboard() {
  return (
    <div className={styles.page}>
      <div className={styles.content}>
        <div className={styles.sectionsContainer}>
          <section className={styles.firstSection}>
            <p className={styles.title}>NPS geral</p>
            <div className={styles.emojiContainer}>
              <img src={Emoji} alt="emoji" />
              <span className={styles.feedbackText}>Excelente!</span>
            </div>
            <p className={styles.label}>
              NPS Score<span className={styles.value}>75</span>
            </p>
          </section>
          <section className={styles.secondSection}>
            <p className={styles.title}>Vendas fechadas</p>
            <svg
              width="197"
              height="197"
              viewBox="0 0 197 197"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.1"
                d="M197 98.5C197 152.9 152.9 197 98.5 197C44.1 197 0 152.9 0 98.5C0 44.1 44.1 0 98.5 0C152.9 0 197 44.1 197 98.5ZM29.7666 98.5C29.7666 136.46 60.5396 167.233 98.5 167.233C136.46 167.233 167.233 136.46 167.233 98.5C167.233 60.5396 136.46 29.7666 98.5 29.7666C60.5396 29.7666 29.7666 60.5396 29.7666 98.5Z"
                fill="#D9D9D9"
              />
              <path
                d="M98.5 14.775C98.5 6.615 105.152 -0.113419 113.22 1.10605C126.193 3.06681 138.695 7.60779 149.966 14.5149C165.455 24.0064 178.017 37.5963 186.264 53.7819C194.511 69.9676 198.122 88.1186 196.696 106.228C195.271 124.338 188.866 141.701 178.188 156.397C167.511 171.093 152.977 182.55 136.194 189.502C119.411 196.454 101.033 198.629 83.0912 195.787C65.1493 192.946 48.3426 185.198 34.5294 173.4C24.4772 164.815 16.2952 154.328 10.4216 142.596C6.76851 135.299 11.1122 126.894 18.8728 124.372V124.372C26.6334 121.851 34.8412 126.217 38.9554 133.264C42.8349 139.909 47.817 145.888 53.7206 150.93C63.3898 159.188 75.1545 164.612 87.7138 166.601C100.273 168.59 113.138 167.068 124.886 162.201C136.634 157.335 146.807 149.315 154.282 139.028C161.756 128.74 166.24 116.586 167.237 103.91C168.235 91.233 165.708 78.5273 159.935 67.1974C154.162 55.8674 145.368 46.3545 134.526 39.7105C127.907 35.6539 120.681 32.7633 113.162 31.127C105.189 29.3917 98.5 22.935 98.5 14.775V14.775Z"
                fill="url(#paint0_linear_217_2)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_217_2"
                  x1="1.97421e-07"
                  y1="82"
                  x2="154"
                  y2="178"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#CE9FFC" />
                  <stop offset="1" stop-color="#7367F0" />
                </linearGradient>
              </defs>
            </svg>
            <div className={styles.percentageContainer}>
              <h1>70%</h1>
              <p>alcançada</p>
            </div>
            <div className={styles.footer}>
              <div className={styles.flex}>
                <div className={`${styles.ball}`} />
                <p className={styles.label}>
                  Esperado<span className={styles.value}>100</span>
                </p>
              </div>
              <div className={styles.flex}>
                <div className={`${styles.ball}`} />
                <p className={styles.label}>
                  Alcançado<span className={styles.value}>70</span>
                </p>
              </div>
            </div>
          </section>
          <section className={styles.thirdSection}>
            <p className={styles.title}>Meta mensal</p>
            <svg
              width="197"
              height="197"
              viewBox="0 0 197 197"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.1"
                d="M197 98.5C197 152.9 152.9 197 98.5 197C44.1 197 0 152.9 0 98.5C0 44.1 44.1 0 98.5 0C152.9 0 197 44.1 197 98.5ZM29.7666 98.5C29.7666 136.46 60.5396 167.233 98.5 167.233C136.46 167.233 167.233 136.46 167.233 98.5C167.233 60.5396 136.46 29.7666 98.5 29.7666C60.5396 29.7666 29.7666 60.5396 29.7666 98.5Z"
                fill="#D9D9D9"
              />
              <path
                d="M98.5 14.775C98.5 6.615 105.152 -0.113552 113.22 1.1059C131.319 3.84143 148.404 11.5857 162.471 23.6C180.305 38.8316 192.118 59.9268 195.787 83.0912C199.456 106.256 194.739 129.969 182.485 149.966C170.231 169.963 151.243 184.932 128.938 192.179C106.633 199.426 82.4735 198.477 60.8057 189.502C39.1378 180.527 21.3833 164.115 10.7358 143.218C0.0883385 122.321 -2.75347 98.3107 2.72157 75.5056C7.04015 57.5175 16.3096 41.2104 29.3443 28.3588C35.155 22.6298 44.4914 24.1634 49.2877 30.765C54.084 37.3666 52.4674 46.5219 47.0368 52.6125C39.5144 61.0493 34.129 71.2663 31.4551 82.4039C27.6226 98.3675 29.6118 115.175 37.0651 129.803C44.5183 144.43 56.9464 155.919 72.114 162.201C87.2815 168.484 104.193 169.149 119.807 164.075C135.42 159.002 148.712 148.524 157.29 134.526C165.868 120.528 169.169 103.929 166.601 87.7139C164.033 71.4988 155.763 56.7321 143.279 46.07C134.57 38.6311 124.207 33.5308 113.163 31.127C105.189 29.3916 98.5 22.935 98.5 14.775Z"
                fill="url(#paint0_linear_217_3)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_217_3"
                  x1="1.97421e-07"
                  y1="82"
                  x2="154"
                  y2="178"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#DF9780" />
                  <stop offset="1" stop-color="#A66DE9" />
                </linearGradient>
              </defs>
            </svg>
            <div className={styles.percentageContainer}>
              <h1>90%</h1>
              <p>alcançada</p>
            </div>
            <div className={styles.footer}>
              <div className={styles.flex}>
                <div className={`${styles.ball}`} />
                <p className={styles.label}>
                  Esperado<span className={styles.value}>R$ 70K</span>
                </p>
              </div>
              <div className={styles.flex}>
                <div className={`${styles.ball}`} />
                <p className={styles.label}>
                  Alcançado<span className={styles.value}>R$ 63K</span>
                </p>
              </div>
            </div>
          </section>
        </div>
        <section className={styles.forthSection}>
          <p className={styles.title}>Vendas por dia da semana</p>
          <div className={styles.graphicContainer}>
            <dl>
              <dt>
                <div className={styles.arrowUp} />
                <p className={styles.label}>Dia com mais vendas</p>
              </dt>
              <dt>
                <p>quarta-feira</p>
              </dt>
              <dt>
                <div className={styles.arrowDown} />
                <p className={styles.label}>Dia com menos vendas</p>
              </dt>
              <dt>
                <p>domingo</p>
              </dt>
            </dl>
            <div className={styles.graphic}>
              <hr className={styles.divider} />
              <div>
                <Bar height={39} />
                <p className={styles.label}>dom</p>
              </div>
              <div>
                <Bar height={115} />
                <p className={styles.label}>seg</p>
              </div>
              <div>
                <Bar height={76} />
                <p className={styles.label}>ter</p>
              </div>
              <div>
                <Bar height={159} />
                <p className={styles.label}>qua</p>
              </div>
              <div>
                <Bar height={129} />
                <p className={styles.label}>qui</p>
              </div>
              <div>
                <Bar height={120} />
                <p className={styles.label}>sex</p>
              </div>
              <div>
                <Bar height={69} />
                <p className={styles.label}>sab</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
