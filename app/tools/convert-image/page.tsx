'use client';

import { useState } from "react";
import Title from "../../components/title";
import styles from "../../styles/projects_page.module.css";

export default function ConvertImage() {
    const [files, setFiles] = useState<File[]>([]);
    const [targetFileType, setTargetFileType] = useState<string>("");

    const handleSlectedFiles = (event: React.ChangeEvent<HTMLInputElement>) => {
        const target = event.target;
        if (target.files) {
            const selectedFiles: FileList = target.files;
            setFiles(Array.from(selectedFiles));
        }
    }

    const handleFileTypeSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value;
        setTargetFileType(value);
        console.log(value);
    }

    return (
        <div>
            <Title componentCat="projectComponent" title="Image Converter" backUrl="/" />
            <div className={styles.projectsContainer}>
                <h1>image converter</h1>
                <input type="file" id="imageUpload" accept="image/*" multiple onChange={handleSlectedFiles}/>
                <h3>Convert to</h3>
                <select 
                    id="fileType"
                    name="fileType" 
                    style={{width: "200px"}}
                    value={targetFileType}
                    onChange={handleFileTypeSelect}>
                    <option value="PNG">PNG</option>
                    <option value="JPG">JPG</option>
    
                </select>
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