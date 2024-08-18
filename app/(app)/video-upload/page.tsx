"use client"
import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function VideoUpload() {
    const [file, setFile] = useState<File | null>(null);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [isUploading, setIsUploading] = useState(false);

    const router = useRouter();
    const MAX_FILE_SIZE = 70 * 1024 * 1024; // 70 MB

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!file) return;

        if (file.size > MAX_FILE_SIZE) {
            toast.error("current upload size exceeds 70 mb");
            return;
        }

        setIsUploading(true);
        const formData = new FormData();
        formData.append("file", file);
        formData.append("title", title);
        formData.append("description", description);
        formData.append("originalSize", file.size.toString());

        try {
            const response = await axios.post("/api/video-upload", formData);
            if (response.status === 200) {
                toast.success("Video uploaded successfully!");
                router.push("/");
            } else {
                toast.error("Failed to upload video. Please try again.");
            }
        } catch (error) {
            console.error(error);
            toast.error("An error occurred during upload.");
        } finally {
            setIsUploading(false);
        }
    };

    return (
        <div></div>
    );
}

export default VideoUpload;
