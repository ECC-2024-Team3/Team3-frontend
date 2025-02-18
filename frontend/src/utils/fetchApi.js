export const fetchApi = async (url, options) => {
  try {
    const response = await fetch(url, {
      headers: {
        // TODO: 추후 토큰 추가
        // Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      ...options,
    });
    const { data } = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
  }
};
