// import KakaoLogin from 'react-kakao-login';  // 이 줄을 주석 처리
import React from 'react';

function Login() {
  // const responseKakao = (response) => {
  //   console.log(response);
  // }

  return (
    <div>
      <h2>Login Page</h2>
      {/* <KakaoLogin
        token={'your_app_key'}
        onSuccess={responseKakao}
        onFail={console.error}
        onLogout={console.info}
      /> */}
    </div>
  );
}

export default Login;
