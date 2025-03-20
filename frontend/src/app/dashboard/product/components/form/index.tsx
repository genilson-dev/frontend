"use client"
import { ChangeEvent, useState } from 'react'
import styles from './../styles.module.scss'
import {UploadCloud} from 'lucide-react'
import Image from 'next/image'


export default function Form() {
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
        </form>
    </main>
  )
}

