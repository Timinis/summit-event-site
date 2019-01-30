let initialState = [
  {
    src: 'https://via.placeholder.com/350x150',
    alt: 'placeholder image'
  },
  {
    src: 'https://via.placeholder.com/350x150',
    alt: 'placeholder image'
  },
  {
    src: 'https://via.placeholder.com/350x150',
    alt: 'placeholder image'
  },
  {
    src: 'https://via.placeholder.com/350x150',
    alt: 'placeholder image'
  },
  {
    src: 'https://via.placeholder.com/350x150',
    alt: 'placeholder image'
  },
  {
    src: 'https://via.placeholder.com/350x150',
    alt: 'placeholder image'
  }
];

export default (state = initialState, action) => {
  let { type, payload } = action;

  switch (type) {
    default:
      return state;
  }
};
