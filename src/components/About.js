import React, {Component} from 'react';

class About extends Component {

    render() {
        return (
            <section className="resume-section" id="about">
                <div className="resume-section-content">
                    <h1 className="mb-0">
                        Juan Bautista
                        <br />
                        <span className="text-primary">Lozano</span>
                    </h1>
                    <div className="subheading mb-5">
                        Juncal 685 · Buenos Aires, Argentina , CP 1062 · +54 (9 11)-3181-5830 ·
                        <a href="mailto:juanbi.lozano@gmail.com">juanbi.lozano@gmail.com</a>
                    </div>
                    <p className="lead mb-5">Soy un programador autoeducado, con conocimientos en HTML5, CSS3, Javascript y ReactJs.
                    <br />Tambien soy estudiante de Derecho en la Pontificia Universidad Catolica, en el ultimo año de la carrera.
                    <br />Y cuento con un buen entendimiento de computadoras, sus componentes, como estan armadas, que problemas pueden llegar a tener, y como arreglarlas.</p>
                    <div className="social-icons">
                        <a className="social-icon" href="#!"><i className="fab fa-linkedin-in"></i></a>
                        <a className="social-icon" href="#!"><i className="fab fa-github"></i></a>
                        <a className="social-icon" href="#!"><i className="fab fa-facebook-f"></i></a>
                    </div>
                </div>
            </section>
        );
    }
}

export default About;
