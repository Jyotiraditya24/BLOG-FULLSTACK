import { AdvancedImage } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";
import { Transformation } from "@cloudinary/url-gen";
import { thumbnail, scale } from "@cloudinary/url-gen/actions/resize";
import { focusOn } from "@cloudinary/url-gen/qualifiers/gravity";
import { FocusOn } from "@cloudinary/url-gen/qualifiers/focusOn";

const Image = ({ uploadedImage }) => {
  const cld = new Cloudinary({
    cloud: {
      cloudName: "dndyofbi8",
    },
  });
  // Use the image with public ID, 'front_face'.
  //   this public id is coming from backend
  const myImage = cld.image(uploadedImage);
  myImage.resize(
    thumbnail().width(150).height(150).gravity(focusOn(FocusOn.face()))
  );
  return (
    <div>
      <AdvancedImage cldImg={myImage} />
    </div>
  );
};

export default Image;
