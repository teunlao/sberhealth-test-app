import parsePhoneNumberFromString, { AsYouType, isValidPhoneNumber } from 'libphonenumber-js';

const normalizePhoneNumber = (value: string): string => {
  const phoneString = new AsYouType('RU').input(value);

  if (isValidPhoneNumber(phoneString, 'RU')) {
    const phoneNumber = parsePhoneNumberFromString(phoneString, 'RU');
    if (phoneNumber) {
      return phoneNumber.formatInternational();
    }
  }

  return phoneString;
};

export { normalizePhoneNumber, isValidPhoneNumber };
