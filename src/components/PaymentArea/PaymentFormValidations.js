const validations = {
  cardName: {
    custom: {
      isValid: (value) => isValidString(value),
      message: 'Digite um nome válido',
    },
  },

  cardNumber: {
    custom: {
      isValid: (value) => Number(value),
      message: 'Digite um número válido',
    },
  },

  cvc: {
    custom: {
      isValid: (value) => isValidCVC(value),
      message: 'Digite um código válido',
    },
  },

  expiry: {
    custom: {
      isValid: (value) => value?.length === 4,
      message: 'Digite uma validade correta',
    },
  },
};

export default validations;

function isValidString(value) {
  return value || value?.trim();
}

function isValidCVC(value) {
  const cleanedValue = value.replace(/\D/g, '');

  if (!/^\d+$/.test(cleanedValue) || (cleanedValue.length !== 3 && cleanedValue.length !== 4)) {
    return false;
  }

  return true;
}

