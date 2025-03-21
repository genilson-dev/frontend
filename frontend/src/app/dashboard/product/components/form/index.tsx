"use client"
import { ChangeEvent, useState } from 'react'
import styles from './../styles.module.scss'
import {UploadCloud} from 'lucide-react'
import Image from 'next/image'
import { Button } from '@/app/dashboard/components/button'
import { redirect } from 'next/navigation'
import { api } from '@/service/api'
import { getCookieClient } from '@/lib/cookieClient'

interface CategoryProps{
    id: string;
    name: string;
}
interface FormProps{
    categories: CategoryProps[];
}

export default function Form({categories}: FormProps) {
    const [image, setImage] = useState<File>();
    const [previewImage, setPreviewImage] = useState<string>("");

    async function handleRegisterProduct(formData: FormData){
        const name = formData.get('name-product');
        const price = formData.get('price');
        const description = formData.get('description');
        const categoryIndex = formData.get('category');

        if(!name || !price || !description || !categoryIndex || !image) {
            console.log('Invalid form data');
            return;
        }   


        // console.log(categories[Number(categoryIndex)].id);
        // console.log(categories[Number(categoryIndex)].name);
        // console.log(categories[Number(categoryIndex)]);
        const data = new FormData();
        data.append('name', name);
        data.append('price', price);
        data.append('description', description);    
        data.append('category_id', categories[Number(categoryIndex)].id);
        data.append('file', image);

        const token = await getCookieClient();

        await api.post("/product", data, {
            headers: {
               Authorization: `Bearer ${token}`
            }
        })
        console.log('Product registered');
    }

    function handleFile(event: ChangeEvent<HTMLInputElement>) {
        if(event.target.files && event.target.files[0]){
            const image = event.target.files[0];

            if (image.type !== 'image/jpeg' && image.type !== 'image/png') {
                console.log('Invalid image type');
                return;
            }
            setImage(image);
            setPreviewImage(URL.createObjectURL(image));
        }
        redirect('/dashboard/product')
    }
  return (
    <main className={styles.container}>
        <h1>New Product</h1>       

        <form className={styles.form} action={handleRegisterProduct}>
            <label className={styles.labelImagem} >
                <span>
                    <UploadCloud size={30} color='#fff' />
                </span>
                    <input 
                    type="file" 
                    accept='image/png, image/jpeg' 
                    required
                    onChange={handleFile}
                    />
                {previewImage && (
                    <Image 
                    alt="Preview" 
                    src={previewImage} 
                    className={styles.preview}
                    fill={true}
                    quality={100}
                    priority={true}
                    />
                )}
            </label>
            <select name="category">
                {categories.map((category, index) => (
                    <option key={category.id} value={index}> {category.name} </option>
                ))}
            </select>
            <input 
                type="text" 
                name='name-product' 
                placeholder='Nome do produto' 
                required  
                className={styles.input}
                />
                <input 
                type="text" 
                name='price' 
                placeholder='Preço do produto' 
                required  
                className={styles.input}
                />
                <textarea 
                    name="description" 
                    className={styles.input} 
                    placeholder='Descriçãodo produto..'
                    required
                    ></textarea>
                    <Button name='Novo produto' />
        </form>
    </main>
  )
}

