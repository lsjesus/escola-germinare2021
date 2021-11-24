import './style.css'
import classroom from '../../assets/classroom.png'
import studentReading from '../../assets/student-reading.png'
import studentsWithMoney from '../../assets/students-with-money.png'
import teacherTeaching from '../../assets/teacher-teaching.png'
import threeStudents from '../../assets/three-students.png'


const AboutOurSchool = ()=>{
    return(
        <section className="about-our-school"> 
            <h1 className="hr-about-our-school" data-aos='fade-right' data-aos-duration='1700' data-aos-ease='ease-in-out'></h1>
            <h1 className="about-our-school-title">Sobre a nossa escola</h1>
            <div className="top-content">
                <img src={classroom} className="classroom-img" alt="Foto de sala de aula" />
                <div className="top-content-text">
                <img src={classroom} className="classroom-img" alt="Foto de sala de aula" />
                    <div>
                        <p>
                            A Escola de Negócios Germinare é uma entidade sem fins lucrativos voltada a alunos do 6º ano do Ensino Fundamental II ao 3º ano do Ensino Médio  e oferece ensino integral gratuito a todos os alunos. Além das aulas, os alunos recebem uniforme, material didático e refeições totalmente gratuitas.
                        </p>
                        <p className="text-at-the-top">
                            Ao concluir o Ensino Médio, os alunos recebem dois diplomas, sendo eles: Diploma de Ensino Médio e Diploma de Técnico em Administração de empresas.
                        </p>
                    </div>             
                </div>
            </div>
            <p className="text-at-the-bottom">
                Ao concluir o Ensino Médio, os alunos recebem dois diplomas, sendo eles: Diploma de Ensino Médio e Diploma de Técnico em Administração de empresas. 
            </p>
            <div className="data-content-wrapper-about-us">  
                <div data-aos="fade-left" data-aos-duration="500" >
                    <img src={threeStudents} alt="Ícone de três estudantes"/>
                    <h2>+500 alunos</h2>
                    <p>estudam atualmente na escola</p>
                </div>
                <div data-aos="fade-left" data-aos-duration="1000" >
                    <img src={studentsWithMoney} alt="Ícone de dois estudantes com dinheiro"/>
                    <h2>R$ 5 mil</h2>
                    <p>média salarial dos recém-formados</p>
                </div>
                <div className="data-student-reading" data-aos="fade-left" data-aos-duration="1500" >
                    <img src={studentReading} className="student-reading" alt="Ícone de um estaudente lendo"/>
                    <h2>1,3 mil alunos</h2>
                    <p>já passaram pela Germinare</p>
                </div>
                <div data-aos="fade-left" data-aos-duration="2000" >
                    <img src={teacherTeaching} alt="Ícone de um professor dando aula"/>
                    <h2>+ de 4.500</h2>
                    <p>horas-aula de administração de empresas</p>
                </div>
            </div>
        </section>
    )
}
export default AboutOurSchool