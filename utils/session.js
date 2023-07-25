export const addDataToSession = (user) => {
  sessionStorage.setItem('user', JSON.stringify(user));
};

export const getDataFromSession = () => {
  const data = sessionStorage.getItem('user');
  const user = data ? JSON.parse(data) : null;
  return user;
};
