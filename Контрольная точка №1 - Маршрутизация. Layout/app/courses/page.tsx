import Link from "next/link";

interface Course {
    id: string;
    title: string;
}

export default function CoursesPage() {
    const courses: Course[] = [
        { id: '1', title: 'Основы Next.js' },
        { id: '2', title: 'TypeScript для начинающих' },
        { id: '3', title: 'Разработка программных модулей' },
    ];

    return (
        <div>
            <h1>Курсы</h1>
            <ul>
                {courses.map((course) => (
                    <li key={course.id}>
                        <Link href={`/courses/${course.id}`}>{course.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
