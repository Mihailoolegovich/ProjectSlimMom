import DiaryAddProductForm from '../components/DiaryAddProductForm/DiaryAddProductForm'
import DiaryProductsList from "../components/DiaryProductsList/DiaryProductsList";

export default function DiaryPage() {
  return (
    <div  style={{
      width: '60%',
      marginTop: '150px',
      padding: "16px",
      paddingBottom: "56px"
              
            }}>
      <DiaryAddProductForm />
      <DiaryProductsList />
    </div>)
   
}
