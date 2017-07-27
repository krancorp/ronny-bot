'use strict';

exports.safe = function () {
  const message = {
    msgString: 'Also safe?',
    params: {
      as_user: false,
      icon_emoji: ':derfickerx:',
      username: 'Chris'
    }
  };
  return message;
};

exports.inverseSafe = function () {
  const message = {
    msgString: 'Hab ich da :A5: gehört?',
    params: {
      as_user: false,
      icon_emoji: ':derfickerx:',
      username: 'Chris'
    }
  };
  return message;
};
