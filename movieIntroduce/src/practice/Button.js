// npm i pro-types : proptype 확인할 수 있음
import PropTypes from "prop-types"; 

import styles from "./Button.module.css";   
// create-react-app은 css 코드를 javascript 오브젝트로 변환해준다.



function Button({ text }){

    return (
    // styles.btn을 통해 해당 버튼만 적용한다.
    <button className ={styles.btn}>
    {text}
    </button>
    );
}



Button.propTypes = {
    text: PropTypes.string.isRequired
}



export default Button; // App.js에 Button을 보낸다.