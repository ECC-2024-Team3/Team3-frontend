export const COMMON_API_URL = "https://oimarket.vercel.app/api"; // ✅ Vercel 프록시 사용

export const API_URLS = {
  users: `${COMMON_API_URL}/users`,
  posts: `${COMMON_API_URL}/posts`,  // ✅ 모든 게시글 조회
  postById: (postId, userId) => 
    userId 
      ? `${COMMON_API_URL}/posts/${postId}?userId=${userId}`  // ✅ userId 있을 때
      : `${COMMON_API_URL}/posts/${postId}`,  // ✅ userId 없을 때
  search: `${COMMON_API_URL}/posts/search`,
  signup: `${COMMON_API_URL}/users/signup`,
  login: `${COMMON_API_URL}/users/login`,
  comments: `${COMMON_API_URL}/comments`,
  mypage: `${COMMON_API_URL}/mypage`,
};
