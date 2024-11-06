import React, {useState, useEffect} from "react";
import styles from './styles.css';
import mobile from './mobile.css';
import Elipse from '../../components/Elipse';

function Home()
{
    const [size, setSize] = useState(window.innerWidth);
    useEffect(() => {
        windowSize();
    }, []);

    function windowSize()
    {
        setSize(window.innerWidth);
    }

    return(
        <>
            <header className="container">
                <div className="elipse-container">
                    <div className="elipse-left">
                        <Elipse size={120} opacity={0.2} styles={'circle-left-one'}/>
                        <Elipse size={180} opacity={0.4} styles={'circle-left-two'}/>
                    </div>

                    <div className="elipse-right"></div>
                </div>

                {/* Informações e Form*/}
                <div className="information-container">
                    <div className="information-left">
                        <div className="information-text">
                            <h3>Sabor & Saúde</h3>
                            <h1>Transforme sua alimentação e <br/> Tenha mais qualidade de vida!  </h1>
                            <p>Transforme sua alimentação e viva com mais qualidade de vida! Descubra como se alimentar de forma saudável sem abrir mão do sabor com nosso e-book de receitas gratuito!</p>
                            <h4>Não perca essa oportunidade de mudar seus hábitos</h4>
                            <p>* Descubra receitas saudáveis e saborosas</p>
                            <p>* Fácil de preparar</p>
                            <p>* Receitas preparadas com base em sua praticidade</p>
                            <p>* Mais qualidade de vida</p>
                        </div>
                    </div>

                    <div className="information-right">
                        <form>
                            <div className="form-input">
                                <input type="text" className="input" id="firstName"/>
                                <label htmlFor="firstName" className="label-input">Primeiro Nome</label>
                            </div>

                            <div className="form-input">
                                <input type="text" className="input" id="lastName"/>
                                <label htmlFor="lastName" className="label-input">Sobre Nome</label>
                            </div>

                            <div className="form-input">
                                <input type="text" className="input" id="email"/>
                                <label htmlFor="email" className="label-input">Email</label>
                            </div>

                            <div className="form-text">
                                <span>
                                    <p>Inscreva-se para receber em primeira mão dicas e receitas que irão transformar sua alimentação e melhorar sua qualidade de vida.</p>
                                </span>
                            </div>

                            <div className="form-enquete">
                                <input type="radio" id="formYes" name="option" />
                                <label htmlFor="formYes">Sim! desejo me inscrever</label>
                            </div>

                            <div className="form-enquete">
                                <input type="radio" id="formNo" name="option" />
                                <label htmlFor="formNo">Não, obrigado!</label>
                            </div>

                            <button className="form-button">Download Ebook</button>
                        </form>
                    </div>

                </div>
            </header>

            <main>
                <section className="services">
                    <span>Além do nosso e-book gratuito, oferecemos um produto para quem busca uma mudança duradoura em sua alimentação e saúde. Com o nosso programa, você terá acesso a consultas online com nutricionistas, acompanhamento em grupo pelo Telegram e muito mais! Transforme sua vida agora mesmo e alcance seus objetivos de forma sustentável. Saiba mais em nossa página de produtos.</span>
                </section>

                <section className="social-media">
                    <div className="contact">
                        <a href="#"><span>Receitas de sabor e saúde</span></a>
                    </div>

                    <div className="contact">
                        <a href="#"><span>Siga nosso Instagram</span></a>
                    </div>

                    <div className="contact">
                        <a href="#"><span>Veja nossos videos no Youtube</span></a>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Home;