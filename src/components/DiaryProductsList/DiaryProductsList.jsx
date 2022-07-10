import DiaryProductsListItem from "../DiaryProductsListItem/DiaryProductsListItem"

const DiaryProductsList = () => {

    const products = [
        {
            id: 1,
            weight: 100,
            title: { ua: "Гречана крупа Містраль ядриця" },
            calories: 353,
        },
        {
            id: 2,
            weight: 100,
            title: { ua: "Гречані пластівці Myllyn Paras" },
            calories: 340,
        },
        {
            id: 3,
            weight: 100,
            title: { ua: "Каша 7 злаків Маtti" },
            calories: 320,
        },
    ];

    return (
        <ul>
            {products.map(product => (<DiaryProductsListItem
                key={product.id}
                id= {product.id}
                title={product.title.ua}
                weight={product.weight}
                calories ={product.calories}
            />))}
        </ul>
    )
}

export default DiaryProductsList