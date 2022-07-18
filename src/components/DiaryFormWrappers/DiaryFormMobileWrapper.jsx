import s from "./DiaryFormWrapper.module.scss"


const DiaryFormMobileWrapper = ({children}) => {
    return <div className={s.mobile_wrapper}>
        {children}
    </div>
}

export default DiaryFormMobileWrapper