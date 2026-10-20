export async function generateStaticParams() {
    return [{ slug: 'nextjs-vvedenie' }, { slug: 'react-osnovy' }]
}

export default async function BlogsPost({
    params
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    return (
        <article>
            <h1>{slug}</h1>
        </article>
    );
}