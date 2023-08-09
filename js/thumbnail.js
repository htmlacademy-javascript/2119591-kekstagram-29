import {showBigPicture} from './big-picture.js';

const picturesContainerElement = document.querySelector('.pictures');
const thumbnailTemplate = document
  .querySelector('#picture')
  .content.querySelector('.picture');

const createThumbnail = ({url, description, likes, comments}) => {
  const thumbnailElement = thumbnailTemplate.cloneNode(true);

  thumbnailElement.querySelector('.picture__img').src = url;
  thumbnailElement.querySelector('.picture__img').alt = description;
  thumbnailElement.querySelector('.picture__comments').textContent = comments.length;
  thumbnailElement.querySelector('.picture__likes').textContent = likes;

  return thumbnailElement;
};

const renderThumbnails = (pictures) => {
  const picturesContainerFragment = document.createDocumentFragment();
  pictures.forEach((picture) => {
    const thumbnailElement = createThumbnail(picture);

    thumbnailElement.addEventListener('click', (evt) => {
      evt.preventDefault();
      showBigPicture(picture);
    });

    picturesContainerFragment.append(thumbnailElement);
  });

  picturesContainerElement.append(picturesContainerFragment);
};

export {renderThumbnails};
