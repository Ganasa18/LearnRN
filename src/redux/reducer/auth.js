const initStateRegister = {
  name: '',
  email: '',
  password: '',
  password_confirmation: '',
  // address: '',
  // city: '',
  // houseNumber: '',
  // phoneNumber: '',
};

// like state normal [name, setName]
export const registerReducer = (state = initStateRegister, action) => {
  if (action.type === 'SET_REGISTER') {
    return {
      ...state,
      name: action.value.name,
      email: action.value.email,
      password: action.value.password,
      password_confirmation: action.value.password,
    };
  }

  // if (action.type === 'SET_ADDRESS') {
  //   return {
  //     ...state,
  //     phoneNumber: action.value.phoneNumber,
  //     address: action.value.address,
  //     houseNumber: action.value.houseNumber,
  //     city: action.value.city,
  //   };
  // }

  return state;
};
