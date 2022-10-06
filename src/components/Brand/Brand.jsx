import BrandStyle from "./BrandStyle";
import BrandAtributes from "./BrandAssets";

function Brand() {
  const pathImage = `images/${BrandAtributes.image}`;
  return (
    <BrandStyle>
      <img src={pathImage} alt={BrandAtributes.alt} />
    </BrandStyle>
  );
}

export default Brand;
