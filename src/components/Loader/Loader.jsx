import ReactLoading from 'react-loading';

export const Loader = ({type = 'bubbles', color = '#ff0d56', width = '100px', height = '50px'}) => {


    return (
        <div className="loader">
            <ReactLoading type={type} color={color} width={width} height={height} />
        </div>
    )
};