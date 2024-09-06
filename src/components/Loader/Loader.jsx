import ReactLoading from 'react-loading';

export const Loader = ({type = 'bubbles', color = '#ff0d56'}) => {


    return (
        <div className="loader">
            <ReactLoading type={type} color={color} height={'50px'} width={'100px'} />
        </div>
    )
};