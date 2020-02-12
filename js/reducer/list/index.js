import Types from '../../action/types';

const defaultState = {};
export default function onAction(state = defaultState, action) {
  switch (action.type) {
    case Types.LIST_REFRESH:
      return {
        ...state,
        ActivityList: {
          ...action.storeName,
          isLoading: true,
        },
      };
    case Types.LIST_LOAD_SUCCESS:
      return {
        ...state,
        ActivityList: {
          items: action.items,
          isLoading: false,
        },
      };
    case Types.LIST_LOAD_FAIl:
      return {
        ...state,
        ActivityList: {
          items: action.items,
          isLoading: false,
        },
      };
    default:
      return state;
  }
}
