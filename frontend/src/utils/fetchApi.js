export const fetchApi = async (url, options) => {
  try {
    const token = localStorage.getItem("token");
    const response = await fetch(url, {
      headers: {
        // TODO: 추후 토큰 추가
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      ...options,
    });

    const contentType = response.headers.get("Content-Type");

    if (contentType && contentType.includes("application/json")) {
      const data = await response.json();
      return data;
    } else {
      const textData = await response.text();
      return textData;
    }
  } catch (error) {
    console.error("Error:", error);
  }
};
