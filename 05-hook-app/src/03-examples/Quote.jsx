import { useLayoutEffect, useRef, useState } from 'react';

export const Quote = ({ quote, author }) => {
    const pTagRef = useRef();

    const [boxSize, setBoxSize] = useState({
        width: 0,
        height: 0,
    });

    useLayoutEffect(() => {
        const { width, height } = pTagRef.current.getBoundingClientRect();
        setBoxSize({
            width,
            height,
        });
    }, [quote]);

    return (
        <>
            <code>{JSON.stringify(boxSize)}</code>
            <blockquote
                className="blockquote text-end"
                style={{ display: 'flex' }}
            >
                <p ref={pTagRef} className="mb-3">
                    {quote}
                </p>
                <footer className="blockquote-footer">{author}</footer>
            </blockquote>
        </>
    );
};
