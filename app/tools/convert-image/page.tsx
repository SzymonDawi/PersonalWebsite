'use client';

import { useState } from "react";
import Title from "../../components/title";
import styles from "../../styles/projects_page.module.css";

export default function ConvertImage() {
    const [files, setFiles] = useState<File[]>([]);

    const handleSlectedFiles = (event: React.ChangeEvent<HTMLInputElement>) => {
        const target = event.target;
        if (target.files) {
            const selectedFiles: FileList = target.files;
            setFiles(Array.from(selectedFiles));
        }
    }

    return (
        <div>
            <Title componentCat="projectComponent" title="Image Converter" backUrl="/" />
            <div className={styles.projectsContainer}>
                <h1>image converter</h1>
                <input type="file" id="imageUpload" accept="image/*" multiple onChange={handleSlectedFiles}/>
                <h3>Files</h3>
                {files.map((file, index) => {
                    return(
                        <div key={index}>
                            <p>{file.name}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}