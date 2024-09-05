import styles from "../styles/Input.module.sass"

function Input({placeholder} : {readonly placeholder: string}){
    return(
        <input className={styles.inputCadastro} placeholder={placeholder} />
    )
}

export default Input