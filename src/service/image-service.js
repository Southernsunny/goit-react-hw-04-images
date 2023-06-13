const API_KEY = '35671692-51ec16839e173ffbc9750b66b';
const BASE_URL = 'https://pixabay.com/api';

const params = new URLSearchParams({
  per_page: 12,
  image_type: 'photo',
  orientation: 'horizontal',
});

export const getImages = async (query, page) => {
  try {
    const data = await fetch(
      `${BASE_URL}/?q=${query}&page=${page}&key=${API_KEY}&${params.toString()}`
    );
    const response = await data.json();
    return response;
  } catch (err) {
    console.log('Error', err);
  }
};

// export const getImages = (query, page) => {
//   return fetch(`${BASE_URL}/?q=${query}&page=${page}&key=${API_KEY}&${params.toString()}`).then(
//     response => {
//       if (!response.ok) {
//         throw new Error('Something went wrong');
//       }
//       return response.json();
//     }
//   );
// };
