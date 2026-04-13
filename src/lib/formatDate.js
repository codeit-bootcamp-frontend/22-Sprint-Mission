export function formatDate(dateString) {
  const date = new Date(dateString);

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  return `${year}. ${month}. ${day}`;
}

export function formatRelativeTime(dateString) {
  const now = new Date();
  const date = new Date(dateString);

  const diffMs = now - date; // 밀리초 차이

  const diffMin = Math.floor(diffMs / (1000 * 60));
  const diffHour = Math.floor(diffMs / (1000 * 60 * 60));

  // 1분 미만
  if (diffMin < 1) return '방금 전';

  // 1시간 미만
  if (diffMin < 60) return `${diffMin}분 전`;

  // 24시간 미만
  if (diffHour < 24) return `${diffHour}시간 전`;

  // 24시간 이상 → 날짜 표시
  return formatDate(dateString);
}
