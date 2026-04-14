const ERROR_MESSAGES: Record<number, string> = {
  400: '잘못된 요청입니다',
  401: '로그인이 필요합니다',
  403: '접근 권한이 없습니다',
  404: '요청한 리소스를 찾을 수 없습니다',
  409: '이미 존재하는 데이터입니다.',
  422: '입력 형식이 올바르지 않습니다.',
  500: '서버 오류가 발생했습니다',
} as const;

export const NETWORK_ERROR_MESSAGE = '네트워크 오류가 발생했습니다.';

export const getErrorMessage = (status: number): string => {
  return ERROR_MESSAGES[status] || '알 수 없는 오류가 발생했습니다';
};
