import studentReading from '../../assets/student-reading.png'
import studentsWithMoney from '../../assets/students-with-money.png'
import teacherTeaching from '../../assets/teacher-teaching.png'
import threeStudents from '../../assets/three-students.png'

const AboutUsData = () => {
    return (
        <div className="data-content-wrapper-about-us">  
            <div>
                <img src={threeStudents} alt=""/>
                <h1>+500 alunos</h1>
                <p>estudam atualmente na escola</p>
            </div>
            <div>
                <img src={studentsWithMoney} alt=""/>
                <h1>R$ 5 mil</h1>
                <p>média salarial dos recém-formados</p>
            </div>
            <div>
                <img src={studentReading} alt=""/>
                <h1>1,3 mil alunos</h1>
                <p>já passaram pela Germinare</p>
            </div>
            <div>
                <img src={teacherTeaching} alt=""/>
                <h1>+ de 4.500</h1>
                <p>horas-aula de administração de empresas</p>
            </div>
        </div>
    )
}

export default AboutUsData