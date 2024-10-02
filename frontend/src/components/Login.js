import React from 'react';
import KakaoLogin from 'react-kakao-login';

function Login() {
  const responseKakao = (response) => {
    console.log(response);
    // 여기서 백엔드로 토큰을 보내 사용자 정보를 저장하거나 검증합니다.
  }

  return (
    <KakaoLogin
      token={'your_app_key'}
      onSuccess={responseKakao}
      onFail={console.error}
      onLogout={console.info}
    />
  );
}

export default Login;
