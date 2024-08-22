import { Helmet, HelmetProvider } from "react-helmet-async";
import PropTypes from 'prop-types';
const MetaComponent = ({title="Quote", description="All quotes here"}) => {
    return (
        <HelmetProvider>
            <Helmet>
                <title>{title}</title>
                <meta name="description" content={description} />
            </Helmet>
        </HelmetProvider>
    )
}

MetaComponent.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
}
export default MetaComponent