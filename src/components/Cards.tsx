import { FC } from "react";
import Card from "./Card";

const Cards: FC<CardsProps> = ({cards}) => {
    console.log(cards)
    return cards.map(card => <Card key={card.courseId} {...card} />)
}

export default Cards