import { isEscapeKey } from './util.js';

const bigPictureElement = document.querySelector('.big-picture');
const bigPictureCancelElement = bigPictureElement.querySelector('.big-picture__cancel');
const commentsListElement = bigPictureElement.querySelector('.social__comments');
const commentsCountElement = bigPictureElement.querySelector('.social__comment-count');
const commentsLoaderElement = bigPictureElement.querySelector('.comments-loader');
const bodyElement = document.querySelector('body');
const commentTemplateElement = document
  .querySelector('#comment').content
  .querySelector('.social__comment');

const createComment = ({avatar, message, name}) => {
  const commentElement = commentTemplateElement.cloneNode(true);
  commentElement.querySelector('.social__picture').src = avatar;
  commentElement.querySelector('.social__picture').alt = name;
  commentElement.querySelector('.social__text').textContent = message;

  return commentElement;
};

const renderComments = (comments) => {
  commentsListElement.innerHTML = '';

  const commentsListFragment = document.createDocumentFragment();
  comments.forEach((item) => {
    const commentElement = createComment(item);
    commentsListFragment.append(commentElement);
  });

  commentsListElement.append(commentsListFragment);
};

const hideBigPicture = () => {
  bigPictureElement.classList.add('hidden');
  bodyElement.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
};

function onDocumentKeydown(evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    hideBigPicture();
  }
}

const onCancelButtonClick = () => hideBigPicture();

const renderPicture = ({url, likes, comments, description}) => {
  bigPictureElement.querySelector('.big-picture__img img').src = url;
  bigPictureElement.querySelector('.likes-count').textContent = likes;
  bigPictureElement.querySelector('.comments-count').textContent = comments;
  bigPictureElement.querySelector('.social__caption').textContent = description;
};

const showBigPicture = (data) => {
  bigPictureElement.classList.remove('hidden');
  bodyElement.classList.add('modal-open');
  commentsCountElement.classList.add('hidden');
  commentsLoaderElement.classList.add('hidden');
  document.addEventListener('keydown', onDocumentKeydown);

  renderPicture(data);
  renderComments(data.comments);

};

bigPictureCancelElement.addEventListener('click', onCancelButtonClick);

export {showBigPicture};

