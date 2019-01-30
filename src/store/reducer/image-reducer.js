let initialState = [
  {
    src:
      'https://images.pexels.com/photos/302743/pexels-photo-302743.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'frozen bubble',
    title: 'reeeee',
    description: 'The war cry of a meme frog'
  },
  {
    src:
      'https://cdn.pixabay.com/photo/2016/11/29/04/19/beach-1867285_1280.jpg',
    alt: 'waves',
    title: 'waveeeessss up bro',
    description: 'surfs up brooooooooooooooooo'
  },
  {
    src:
      'https://assets.entrepreneur.com/article/1413519079_unsplash-1024x682.jpg',
    alt: 'man over lake',
    title: 'cuckman over the lake',
    description: 'Just a lil cuck'
  }
];

export default (state = initialState, action) => {
  let { type, payload } = action;

  switch (type) {
    default:
      return state;
  }
};
