//Функция для проверки длины строки
function checkStringLength (string, maxLength) {
  return string.length <= maxLength;
}

//Пример проверки
checkStringLength('проверяемая строка', 10);

//Функция для проверки, является ли строка палиндромом
function checkPalindrom (string) {
  const normalizedString = string.replaceAll(' ', '').toLowerCase();
  let reverseString = '';

  for (let i = normalizedString.length - 1; i >= 0; i--) {
    reverseString += normalizedString.at(i).toLowerCase();
  }
  return (reverseString === normalizedString) ? 'Это палиндром' : 'Это не палиндром';
}

//Пример проверки
checkPalindrom ('Лёша на полке клопа нашёл ');
