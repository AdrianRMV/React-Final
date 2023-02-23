import { useCounter, useFetch } from '../hooks';
import { LoadingQuote, Quote } from '../03-examples';

export const Layout = () => {
    const { incrementValue, counter } = useCounter(1);

    const { data, isLoading, hasError } = useFetch(
        `https://api.breakingbadquotes.xyz/v1/quotes/${counter}`
    );

    // "!!" antes del data quiere decir, si existe contenido dentro de la variable "data" entonces se va a destructurar data[0] por que ya sabemos entonces que si tiene contenido
    const { author, quote } = !!data && data[0];

    return (
        <>
            <h1>Braking Bad QUOTES</h1>
            <hr />
            {isLoading ? (
                <LoadingQuote />
            ) : (
                <Quote author={author} quote={quote} />
            )}

            <button
                className="btn btn-primary"
                onClick={() => incrementValue()}
                disabled={isLoading}
            >
                Next Quote
            </button>
        </>
    );
};
