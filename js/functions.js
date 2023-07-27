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

/*Делу — время
function checkMeeting (workStart, workEnd, meetingStart, meetingDuration) {
  const timeInMinutes = (time) => {
    const timeParts = time.split(':');
    return Number(timeParts[0]) * 60 + Number(timeParts[1]);
  };

  const workStartInMinutes = timeInMinutes(workStart);
  const workEndInMinutes = timeInMinutes(workEnd);
  const meetingStartInMinutes = timeInMinutes(meetingStart);

  return (workStartInMinutes <= meetingStartInMinutes && meetingStartInMinutes + meetingDuration <= workEndInMinutes);
}

console.log(checkMeeting('08:00', '17:30', '14:00', 90));
console.log(checkMeeting('8:0', '10:0', '8:0', 120));
console.log(checkMeeting('08:00', '14:30', '14:00', 90));
console.log(checkMeeting('14:00', '17:30', '08:0', 90));
console.log(checkMeeting('8:00', '17:30', '08:00', 900));
*/
