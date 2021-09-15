function validatePhone(phoneNumber: number | string) {
  if (/^1[123456789]\d{9}$/.test(phoneNumber + '')) {
    return true;
  }
  return false;
}

export default {
  validatePhone,
};
