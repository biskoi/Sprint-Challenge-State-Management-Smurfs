export const initialState = {
   data: [],
   search: '',
   loading: false,
   error: ''
}
export const smurfReducer = (state = initialState, action) => {

   switch(action.type) {

      case 'FETCH_DATA': return {
         ...state, 
         loading: true
      }

      case 'FETCH_DATA_OK': return {
         ...state, 
         loading: false,
         data: action.payload
      }

      case 'FETCH_DATA_FAIL': return {
         ...state, 
         loading: false,
         error: action.payload
      }

      case 'POST_OK': return {
         ...state,
         loading: false,
         data: action.payload
      }

      case 'POST_FAIL': return {
         ...state,
         error: action.payload
      }

      default: return state;

   }

}