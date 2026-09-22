export interface IEmoji {
    emoji: string
    title: string
    keywords: string
}

function Card({emoji, title, keywords}: IEmoji){
    return (
        <div className='card'>
            <p className='card-emoji'>{emoji}</p>
            <p className='card-title'>{title}</p>
            <p className='card-description'>{keywords}</p>
        </div>
    )
}
export default Card
