{
  /**
   * Union Types: OR
   */
  type Direction = 'left' | 'right' | 'up' | 'down';
  function move(direction: Direction) {
    console.log(direction);
  }
  move('down'); // <= Direction 타입에서만 정할 수 있다.

  type TileSize = 8 | 16 | 32;
  const tile: TileSize = 16; // <= TileSize 타입에서만 정할 수 있다.

  // function: login => success, fail
  type SuccessState = {
    response: {
      body: string;
    };
  };
  type FailState = {
    reason: string;
  };
  type LoginState = SuccessState | FailState;

  // function logIn(id: string, password: string): Promise<LoginState> {
  //   return {
  //     response: {
  //       body: "logged in!",
  //     },
  //   };
  // }

  // function logIn(): LoginState {
  //   return {
  //     response: {
  //       body: "logged in!",
  //     },
  //   };
  // }

  // exercise
  // printLoginState(state: LoginState)
  // success -> body
  // fail -> reason
  // function printLoginState(state: LoginState) {
  //   if ("response" in state) {
  //     console.log(`🎈 ${state.response.body}`);
  //   } else {
  //     console.log(`😓 ${state.reason}`);
  //   }
  // }
}
