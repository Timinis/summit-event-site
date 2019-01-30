let initialState = [
  {
    date: 'February 4-5, 2019',
    title: 'Institute Fund Summit America',
    location: `Scottdale, AZ`
  },
  {
    date: 'March 26-27, 2019',
    title: 'Institute Fund Summit Europe',
    location: `Frankfurt, Germany`
  }
];

export default (state = initialState, action) => {
  let { type, payload } = action;

  switch (type) {
    default:
      return state;
  }
};
