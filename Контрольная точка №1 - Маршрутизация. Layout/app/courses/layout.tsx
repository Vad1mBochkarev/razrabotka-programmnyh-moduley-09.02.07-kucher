import type { ReactNode } from 'react';

interface CoursesLayoutProps {
    children: ReactNode;
}

export default function CoursesLayout({ children }: CoursesLayoutProps) {
    return (
        <section style={{ border: '1px solid #999', padding: '16px', marginTop: '16px' }}>
            <h2>Раздел «Курсы»</h2>
            <p>Этот блок отрисовывается один раз и сохраняется при переходах.</p>
            {children}
        </section>
    );
}
