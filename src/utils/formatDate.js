/**
 * 날짜 형식 변환 함수
 */

export const getFormattedDate = (date) => {
  return new Date(date).toLocaleDateString("ko-KR");
};
