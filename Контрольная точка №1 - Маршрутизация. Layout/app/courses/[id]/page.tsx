interface CoursePageProps {
    params: Promise<{ id: string }>
}

export default async function CoursePage({ params }: CoursePageProps) {
    const { id } = await params
    return (
        <div>
            <h1>Курс №{id}</h1>
            <p>Это содержимое курса с идентификатором {id}.</p>
        </div>
    )
}
