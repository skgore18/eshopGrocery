<<<<<<< HEAD
import { useNavigate } from 'react-router-dom';

export const Back = () => {
    let history = useNavigate();
    return (
        <>
          <button onClick={() => history.goBack()}>Back</button>
        </>
    );
=======
import { useNavigate } from 'react-router-dom';

export const Back = () => {
    let history = useNavigate();
    return (
        <>
          <button onClick={() => history.goBack()}>Back</button>
        </>
    );
>>>>>>> ebfd4258418cc50828d3b35c9aa9be5a4de1ee6f
};