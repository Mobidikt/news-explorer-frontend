export const pluralizeConfigArticles = {
  zero: ', у вас нет сохраненных статей',
  one: ', у вас {} сохраненная статья',
  few: ', у вас {} сохраненные статьи',
  many: ', у вас {} сохраненных статей',
  radix: 10,
  fewMax: 4,
};
export const pluralizeConfigKeyword = {
  one: '{}-му другому',
  two: '{}-м другим',
  five: '{}-ти другим',
  seven: '{}-ми другим',
  radix: 10,
  twoMax: 4,
  fiveMax: 6,
  sevenMax: 8,
};
export const TEXT_DELETE = 'Убрать из сохраненных';
export const TEXT_ADD = 'Сохранить статью';
export const TEXT_INFO = `Войдите, чтобы сохранять статьи`;

export const RegExp_EMAIL = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;

export const ERROR_EMAIL = {
  FILLED: 'Введите email',
  INVALID: 'Неправильный формат email',
};
export const ERROR_PASSWORD = {
  LENGTH: 'Длина пароля должна быть не менее 5 символов',
  INVALID: 'Пароль не может состоять только из пробелов',
};
export const ERROR_NAME = {
  FILLED: 'Длина имени должна быть от 2 до 30 символов',
  INVALID: 'Введите имя',
};
