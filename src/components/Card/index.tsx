import { FC } from "react";

const Card: FC<CardProps> = ({courseId, advance, scoreCourse, course}) => {
    const { sector } = course
    return <div className="card" key={courseId}>
        <p className="tag">{sector.name}</p>
        <div className="body">
            <div className="content">
                <img className='avatar' style={{ backgroundColor: sector.colorTheme }} src={course.imageUrl} alt={course.name} />
                <h3 className="title">{course.name}</h3>
            </div>
        </div>
        <div className="progress">
            <div className="porcent" style={{ backgroundColor: sector.colorTheme, width: `${advance}%` }}></div>
        </div>
        <div className="footer">
            <div>
                <p className="info">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 019 9v.375M10.125 2.25A3.375 3.375 0 0113.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 013.375 3.375M9 15l2.25 2.25L15 12" />
                    </svg>
                    <span className='porcent'>{advance}</span>
                </p>

                <p className="info">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25M9 16.5v.75m3-3v3M15 12v5.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                    </svg>
                    <span>{scoreCourse}</span>
                </p>
            </div>
            <div className='btn-group'>
                {advance === 100 
                    ? <button className="secondary">Descargar certificado</button>
                    : <button className='primary'>Continuar</button>
                }
            </div>
        </div>
    </div>
}

export default Card