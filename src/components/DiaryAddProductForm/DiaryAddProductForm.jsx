import { useState } from "react";

const DiaryAddProductForm = () => {

    const [product, setProduct] = useState('');
    const [grams, setGrams ]= useState('');
    
    const resetForm = () => {
        setProduct('');
        setGrams('')
}

    const handleChange = (e) => {
    const { name, value } = e.currentTarget;
    name === 'product' && setProduct(value);
    name === 'grams' && setGrams(value);

    }
    
    const handleSubmit =(e)=> {
    e.preventDefault();
    const data = { product, grams};
        console.log('Product:', data);
        resetForm()
  }
    
    return (
        <form onSubmit={handleSubmit}>
            <input onChange={handleChange} list="products" name="product" type="text" placeholder="Enter product name" value={product} required/>
            <datalist id="products">
                <option value="aggs"/>
                <option value="каша"/>
                <option value="сир"/>
             </datalist>
            <input onChange={handleChange} type="number" placeholder="Grams" name="grams" value={grams} required/>
            <button type="submit">Add</button>
        </form>
    )
}

export default DiaryAddProductForm