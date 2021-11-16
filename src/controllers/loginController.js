import Swal from "sweetalert2";

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
    const data = await response.json();
    if (data?.token) {
      const { token, ...userInfo } = data;
      window.localStorage.setItem("token", JSON.stringify(token));
      window.localStorage.setItem("user", JSON.stringify(userInfo));
      Swal.fire({
        title: "Usuário conectado com sucesso.",
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
      });
    } else {
      Swal.fire({
        title: `${data.detail}`,
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
      });
    }
  } catch (error) {
    console.log(error);
  }
};
