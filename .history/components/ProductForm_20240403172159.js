import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";

export default function ProductForm(
    {
    _id,
    title:existingTitle,
    description:existingDescription,
    price:existingPrice,
    email:existingEmail,
    }
    ){
    const [title, setTitle] = useState(existingTitle || '');
    const [email, setEmail] = useState(existingEmail || '');
    const [description, setDescription] = useState(existingDescription || '');
    const [price, setPrice] = useState(existingPrice || '');
    const [goToProducts, setGoToProducts] = useState(false);
    const router = useRouter();
    async function saveProduct(ev){
        ev.preventDefault();
        const data ={title, description, price, email};
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
<label>Phone Number</label>

            <input 
            type="number" 
            placeholder="Phone Number"
            value={price}
            onChange={ev=>setPrice(ev.target.value)}/>
            <label>Email</label>
            <input 
            type="text" 
            placeholder="Email"
            value={email}
            onChange={ev=> setEmail(ev.target.value)} />
            
            <label>Hobbies</label>
            <textarea 
            placeholder="Hobbies"
            value={description}
            onChange={ev=>setDescription(ev.target.value)}/>
            <button 
            type="submit" 
            className="btn-primary">
                Save
            </button>
            </form>
    )
}