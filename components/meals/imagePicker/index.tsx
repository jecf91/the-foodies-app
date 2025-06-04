"use client";

import { ChangeEvent, useRef, useState } from "react";
import classes from "./imagePicker.module.css";
import Image from "next/image";

interface ImagePickerProps {
  label: string;
  name: string;
}

const VALID_IMAGE_TYPES = ["image/jpeg", "image/png"];

export default function ImagePicker({ label, name }: ImagePickerProps) {
  const [pickedImage, setPickedImage] = useState<string | null>(null);
  const imageInputRef = useRef<HTMLInputElement | null>(null);

  function handlePickClick() {
    imageInputRef?.current?.click();
  }

  function handleImageChange(event: ChangeEvent<HTMLInputElement>) {
    const file = event?.target?.files?.[0];

    if (!file) {
      setPickedImage(null);
      return;
    }

    if (!VALID_IMAGE_TYPES.includes(file.type)) {
      console.warn(`Unsupported file type: ${file.type}`);
      setPickedImage(null);
      return;
    }

    const fileReader = new FileReader();
    fileReader.onload = () => {
      if (typeof fileReader.result === "string") {
        setPickedImage(fileReader.result);
      } else {
        console.error("Unexpected reader result type");
        setPickedImage(null);
      }
    };

    fileReader.onerror = (error) => {
      console.error("Error reading file:", error);
      setPickedImage(null);
    };

    fileReader.readAsDataURL(file);
  }

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!pickedImage && <p>No image picked yet.</p>}
          {pickedImage && <Image src={pickedImage} alt="image preview" fill />}
        </div>
        <input
          className={classes.input}
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          ref={imageInputRef}
          onChange={(e) => handleImageChange(e)}
          required
        />
        <button
          className={classes.button}
          type="button"
          onClick={handlePickClick}
        >
          Pick an Image
        </button>
      </div>
    </div>
  );
}
