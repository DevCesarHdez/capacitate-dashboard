interface people {
    name: string
    lastName: string
}

interface ResponseData {
    email: string,
    people: [people], 
    inscriptions: Array<CardProps>
} 