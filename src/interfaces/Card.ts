interface Sector {
    id: number;
    name: string;
    colorTheme: string
}

interface Course {
    name: string;
    imageUrl: string;
    sector: Sector
}

interface CardProps {
    courseId: number;
    advance: number;
    scoreCourse: number;
    course: Course;
}

interface CardsProps {
    cards: Array<CardProps>
}