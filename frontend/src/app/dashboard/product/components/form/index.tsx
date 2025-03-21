"use client"
import { ChangeEvent, useState } from 'react'
import styles from './../styles.module.scss'
import {UploadCloud} from 'lucide-react'
import Image from 'next/image'
import { Button } from '@/app/dashboard/components/button'

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
    }
  return (
    <main className={styles.container}>
        <h1>New Product</h1>       

        <form className={styles.form}>
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
                name='name' 
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

