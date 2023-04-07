import React, {Component} from 'react';

class Education extends Component {
    render() {
        return (
            <section className="resume-section" id="education">
                <div className="resume-section-content">
                    <h2 className="mb-5">Education</h2>
                    <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div className="flex-grow-1">
                            <h3 className="mb-0">Pontificia Universiidad Catolica Argentina</h3>
                            <div className="subheading mb-3">Facultad de Derecho</div>
                            <div>Amplios estudios en la carrera de Derecho, actualmente en el ultimo año de la carrera.</div>
                            <p></p>
                        </div>
                        <div className="flex-shrink-0"><span className="text-primary">Marzo 2013 - 2022</span></div>
                    </div>
                    <div className="d-flex flex-column flex-md-row justify-content-between">
                        <div className="flex-grow-1">
                            <h3 className="mb-0">Cursos de Programacion</h3>
                            <div className="subheading mb-3">Udemy y Auto-Educado</div>
                            <div>Estudiante con conocimientos en los lenguajes y frameworks de HTML, CSS, JavaScript, ReactJs y Python.</div><br />
                            <p>"Beginner Web Development" - Devslopes, August 2020</p>
                            <p>"The Complete Front-End Web Development Course" - Udemy, Abril 2022</p>
                            <p>"The Complete Full-Stack JavaScript Course" - Udemy, Junio 2022</p>
                        </div>
                        <div className="flex-shrink-0"><span className="text-primary">August 2020 - 2022</span></div>                        
                    </div>
                </div>
            </section>
        );
    }
}

export default Education;