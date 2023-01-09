{
  // function: login => success, fail
  // discriminated union을 위해서는
  // 동일한 공통 프로퍼티 키에 서로 다른 값을 할당
  type SuccessState = {
    result: "success";
    response: {
      body: string;
    };
  };
  type FailState = {
    result: "fail";
    reason: String;
  };
  type LoginState = SuccessState | FailState;

  function logIn(): LoginState {
    return {
      result: "success",
      response: {
        body: "logged in!",
      },
    };
  }

  // printLoginState(state: LoginState)
  // success -> body
  // fail -> reason
  function printLoginState(state: LoginState) {
    if (state.result === "success") {
      console.log(`🎈 ${state.response.body}`);
    } else if (state.result === "fail") {
      console.log(`😓 ${state.reason}`);
    }
  }
}
