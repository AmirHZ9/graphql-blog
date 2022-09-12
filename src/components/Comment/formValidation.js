const formValidation = (state) => {
  const error = {};

  if (!state.name.trim()) {
    error.name = "نام وارد نشده!";
  } else {
    delete error.name;
  }
  if (!state.email) {
    error.email = "ایمیل وارد نشده!";
  } else if (!/\S+@\S+\.\S+/.test(state.email)) {
    error.email = "ایمیل به طور صحیح وارد نشده!";
  } else {
    delete error.email;
  }

  if (!state.text.trim()) {
    error.text = "کامنت وارد نشده!";
  } else {
    delete error.text;
  }

  return error;
};

export default formValidation;
