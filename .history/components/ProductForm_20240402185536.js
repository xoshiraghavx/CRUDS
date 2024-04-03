import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";

export default function ProductForm(
    {
    _id,
    title:existingTitle,
    email:existingEmail,
    price:existingPrice,
    }
    ){
    const [title, setTitle] = useState(existingTitle || '');

    const [price, setPrice] = useState(existingPrice || '');
    const [goToProducts, setGoToProducts] = useState(false);

    const [email, setEmail] = useState(existingEmail || '');

  const handleEmailChange = (ev) => {
    const { value } = ev.target;
    // Regular expression for validating email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Check if the input matches the email format
    if (emailRegex.test(value)) {
      setEmail(value);
    } else {
      // Display an error message or handle invalid input as needed
      console.log('Invalid email format');
    }
  };

    const router = useRouter();
    async function saveProduct(ev){
        ev.preventDefault();
        const data ={title, email, price};
        if(_id){
            //update
            await axios.put('/api/products', {...data, _id});
        }else{
            //create
            await axios.post('/api/products', data);
        }
        setGoToProducts(true);
    }
    if(goToProducts){
        router.push('/');
    }

    return(
            <form onSubmit={saveProduct}>
            
            <label>Name</label>
            <input 
            type="text" 
            placeholder="Name"
            value={title}
            onChange={ev=> setTitle(ev.target.value)} />
            
            <label>Email</label>
            <textarea 
            type="email"
            placeholder="Email"
            value={email}
            onChange={ev=>setEmail(ev.target.value)}/>

            <label>Price (in INR)</label>
            <input 
            type="number" 
            placeholder="price"
            value={price}
            onChange={ev=>setPrice(ev.target.value)}/>
            <button 
            type="submit" 
            className="btn-primary">
                Save
            </button>
            </form>
    )
}