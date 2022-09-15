import './modal.scss';

const Modal = ({active, setActive, img}) => {
    return (
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
            <div className={active ? "modal__content active" : "modal__content"} onClick={e => e.stopPropagation()}>
                <img src={img} alt='pizza' className='modal__content-img'/>
            </div>
        </div>
    )
}

export default Modal;