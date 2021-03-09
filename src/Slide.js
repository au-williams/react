import parse from 'html-react-parser';

export function Slide({animate, content, onAnimationEnd}) {
    return (
        <section
            className={animate ? 'fade':''}
            onAnimationEnd={onAnimationEnd}>
            {content.map(c =>
                <article>{parse(c)}</article>
            )}
        </section>
    )
}