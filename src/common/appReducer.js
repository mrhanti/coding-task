import React from 'react';

export const AppContext = React.createContext(null);

const scopeReducer = (state, action) => {
  switch (action.type) {
    case 'SCOPE_CHANGE_GLOBAL':
      return {
        ...state,
        global: true,
        internal: false,
        vendors: [],
        circles: [],
      };

      case 'SCOPE_CHANGE_INTERNAL':
        return {
          ...state,
          internal: true,
          global: false,
          vendors: [],
          circles: [],
        };

    case 'SCOPE_CHANGE_VENDORS':
      return {
        ...state,
        internal: false,
        global: false,
      };

    default:
      return state;
  }
}

export const appReducer = (state, action) => {
  switch (action.type) {
    case 'SCOPE_CHANGE_GLOBAL':
    case 'SCOPE_CHANGE_INTERNAL':
    case 'SCOPE_CHANGE_VENDORS':
      return scopeReducer(state, action);

    case 'QUERY_CACHE':
      return {
        ...state,
        cache: { ...state.cache, ...action.payload },
      };

    case 'TOGGLE_VENDOR':
      const { vendor } = action.payload;
      const found = state.vendors.find((iteree) => iteree.id === vendor.id);

      if (!found) {
        return {
          ...state,
          vendors: [...state.vendors, vendor],
        };
      }

      return {
        ...state,
        vendors: state.vendors.filter((iteree) => iteree.id !== vendor.id),
      };

    case 'TOGGLE_CIRCLE':
      const { circle } = action.payload;
      const isFound = state.circles.find((iteree) => iteree.id === circle.id);
      const vendorList = circle.vendors;

      if (!isFound) {
        return {
          ...state,
          vendors: state.vendors.filter(vendor => !vendorList.some(iteree => iteree === vendor.id)),
          circles: [...state.circles, circle],
        };
      }

      return {
        ...state,
        circles: state.circles.filter((iteree) => iteree.id !== circle.id),
      };

    case 'UNSELECT_ALL':
      return {
        ...state,
        circles: [],
        vendors: [],
      };

    default:
      return state;
  }
};
