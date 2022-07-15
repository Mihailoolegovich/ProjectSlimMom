import DiaryAddProductForm from '../components/DiaryAddProductForm/DiaryAddProductForm'
import DiaryProductsList from "../components/DiaryProductsList/DiaryProductsList";
import DiaryFormButton from 'components/DiaryAddProductForm/DiaryFormButton';

//    <DiaryFormButton/> приймає:  type, action.
export default function DiaryPage() {


  return (
    <div  style={{
     
      marginTop: '150px',
      padding: "16px",
      paddingBottom: "56px"
              
    }}>
      <DiaryAddProductForm />
      <DiaryProductsList />
    
      
      
    </div>)
   
}
