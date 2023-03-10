{
  /**
   * Print Loading State
   *
   * stateλ‘ discriminated νμ
   */
  type LoadingState = {
    state: 'loading';
  };

  type SuccessState = {
    state: 'success';
    response: {
      body: string;
    };
  };

  type FailState = {
    state: 'fail';
    reason: string;
  };

  type ResourceLoadState = LoadingState | SuccessState | FailState;

  function printLoginState(state: ResourceLoadState) {
    switch (state.state) {
      case 'loading':
        console.log('π loading...');
        break;
      case 'success':
        console.log(`π ${state.response.body}`);
        break;
      case 'fail':
        console.log(`π± ${state.reason}`);
        break;
      default:
        throw new Error(`Unknown State: ${state}`);
    }
  }

  printLoginState({ state: 'loading' }); // π loading...
  printLoginState({ state: 'success', response: { body: 'loaded' } }); // π loaded
  printLoginState({ state: 'fail', reason: 'no network' }); // π± no network
}
