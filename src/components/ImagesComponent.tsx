import { ImageEntity } from '../entities';
import { ConsultarImagenes } from '../hooks';

const Images = () => {

  const { images } = ConsultarImagenes();

  return (
      <ul className='images'>
        {images.map((image: ImageEntity) => (
          <li className='image' key={image.id}>
            <h4>{image.title}</h4>
            <img src={image.thumbnailUrl} />
          </li>
        ))}
      </ul>
  );
}

export default Images;