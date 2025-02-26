export const COMMON_API_URL =
  "http://oimarket-backend.ap-northeast-2.elasticbeanstalk.com";

export const API_URLS = {
  users: `${COMMON_API_URL}/api/users`,
  posts: `${COMMON_API_URL}/api/posts`,  // ✅ 모든 게시글 조회
  postById: (postId, userId) => 
    userId 
      ? `${COMMON_API_URL}/api/posts/${postId}?userId=${userId}`  // ✅ userId 있을 때
      : `${COMMON_API_URL}/api/posts/${postId}`,  // ✅ userId 없을 때
    search: `${COMMON_API_URL}/api/posts/search`,
  signup: `${COMMON_API_URL}/api/users/signup`,
  login: `${COMMON_API_URL}/api/users/login`,
  comments: `${COMMON_API_URL}/api/comments`,
  mypage: `${COMMON_API_URL}/api/mypage`
};
  