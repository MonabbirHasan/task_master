import React, { useState } from "react";
import { Badge } from "react-bootstrap";
import { Fab, IconButton } from "@mui/material";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import DeleteIcon from "@mui/icons-material/Delete";
interface ImageUploaderProps {
  // Function to send images to parent
  onImagesChange: (images: object[]) => void;
}
const ImageUploader: React.FC<ImageUploaderProps> = ({ onImagesChange }) => {
  const [images, setImages] = useState<File[]>([]);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;

    const fileList = Array.from(event.target.files);
    if (images.length + fileList.length > 5) {
      alert("You can only upload a maximum of 5 images.");
      return;
    }

    const updatedImages = [...images, ...fileList];

    setImages(updatedImages);
    // Send updated file list to parent
    onImagesChange(updatedImages);
  };

  const handleDeleteImage = (index: number) => {
    const updatedImages = images.filter((_, i) => i !== index);
    setImages(updatedImages);
    // Send updated file list to parent
    onImagesChange(updatedImages);
  };

  return (
    <div className="py-2">
      {/* Button for Upload */}
      <input
        type="file"
        accept="image/.png,.jpg"
        multiple
        id="image-upload"
        hidden
        onChange={handleImageUpload}
      />
      <Fab
        LinkComponent="label"
        sx={{
          background: "var(--primary-color)",
          border: "1px solid white",
          "&:hover": { background: "var(--secondary-color)" },
        }}
      >
        <label htmlFor="image-upload">
          <AddPhotoAlternateIcon
            htmlColor="var(--text-color)"
            fontSize="medium"
          />
        </label>
      </Fab>

      {/* Image Preview Section */}
      <div className="d-flex flex-wrap justify-content-start mt-3">
        {images.map((file, index) => (
          <div key={index} className="m-2 position-relative">
            <Badge
              //   pill
              bg="white"
              style={{
                position: "absolute",
                top: -5,
                right: -5,
                borderBottomLeftRadius: 30,
              }}
            >
              <IconButton onClick={() => handleDeleteImage(index)} size="small">
                <DeleteIcon htmlColor="red" fontSize="small" />
              </IconButton>
            </Badge>

            <img
              src={URL.createObjectURL(file)}
              alt={`upload-${index}`}
              className="rounded"
              width="100"
              height="100"
              style={{ objectFit: "cover", border: "2px solid #ddd" }}
            />
          </div>
        ))}
      </div>

      {/* Remove All Images Button */}
      {/* {images.length > 0 && (
        <Button
          variant="danger"
          className="mt-3"
          onClick={() => {
           // Send empty array to parent
            setImages([]);
            onImagesChange([]);
          }}
        >
          Remove All
        </Button>
      )} */}
    </div>
  );
};

export default ImageUploader;
