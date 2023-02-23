import PropTypes from 'prop-types';

export const FirstApp = ({title, subtitle, myname}) => {
    return(
        <>
            <h1 data-testid="test-title"> {title} </h1>
            <p>{subtitle}</p>
            <p>{subtitle}</p>
            <p>{myname}</p>
        </>
    );
}

/**
 * * Obliga a que las propiedades tengan un tipo de dato especifico y si ponemos
 * ! "isRequired significa que tronara el programa si no es ese tipo de dato"
 */

FirstApp.propTypes = {
    title: PropTypes.string.isRequired
}

FirstApp.defaultProps = {
    // title: 'Ningun titulo',
    subtitle: 'Cero',
    myname: 'Adrian Ramirez Vazquez',
}