const initialState = {
    fuga: 1,
    user:{
        
    }
  }
  
  export default function reducer(state = initialState, action) {
    switch(action.type) {
      case 'INCREMENT':
        break
      case 'LOGIN':
          // ログイン情報{login_id, login_pass, benesse_id}
        return action.user
      default:
        return state
    }
  }