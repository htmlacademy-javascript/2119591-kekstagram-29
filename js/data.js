import {getRandomInteger, getRandomArrayElement} from './util.js';

const NAMES = [
  'Роман',
  'Агния',
  'Нарцисса',
  'Пётр',
  'Виктор',
  'Иван',
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const DESCRIPTIONS = [
  'Очень люблю это фото',
  'Старое фото',
  'Одно из любимых',
  'По-моему отлично получилось!',
  'С этим фото много воспоминаний',
];

const PHOTO_COUNT = 25;

const COMMENT_COUNT = {
  min: 0,
  max: 30
};

const AVATAR_COUNT = {
  min: 1,
  max: 6
};

const LIKE_COUNT = {
  min: 15,
  max: 200
};

//конструктор сообщения для комментария
const createMessage = () => Array.from(
  {length: getRandomInteger(1, 2)},
  () => getRandomArrayElement(MESSAGES),
).join(' ');

//конструктор комментария
const createComment = (index) => ({
  id: index,
  avatar: `img/avatar-${getRandomInteger(AVATAR_COUNT.min, AVATAR_COUNT.max)}.svg`,
  message: createMessage(),
  name: getRandomArrayElement(NAMES),
});

//конструктор объекта фотографии
const createPhoto = (index) => ({
  id: index,
  url: `photos/${index}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomInteger(LIKE_COUNT.min, LIKE_COUNT.max),
  comments: Array.from(
    {length: getRandomInteger(COMMENT_COUNT.min, COMMENT_COUNT.max)},
    (_, commentIndex) => createComment(commentIndex + 1)),
});

//конструктор массива объектов фотографии
const similarPhotos = () => Array.from(
  {length: PHOTO_COUNT},
  (_, photoIndex) => createPhoto(photoIndex + 1),
);

export {similarPhotos};
