export const login = async (user) => {
  const settings = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  };
  try {
    const response = await fetch(
      `https://api-flordeemprendedora.start-7.com/api/auth/login/`,
      settings
    );
    console.log("response --> ", response)
    const data = await response.json();
    const { token, ...userInfo } = data;
    console.log(data)
    window.localStorage.setItem("token", JSON.stringify(token));
    window.localStorage.setItem("user", JSON.stringify(userInfo));
  } catch (error) {
    console.log(error);
  }
};
