import { useDispatch } from "react-redux"
import { deleteProduct } from "redux/products/products-operations"

const DiaryProductsListItem = ({ id, title, weight, calories }) => {
    const dispath = useDispatch()

    return (
        <li>
            <span>{title}</span>
            <span>{weight} g</span>
            <span>{ calories} kcal</span>
            <button onClick={()=> dispath(deleteProduct(id))}>delete</button>
        </li>
    )
}

export default DiaryProductsListItem