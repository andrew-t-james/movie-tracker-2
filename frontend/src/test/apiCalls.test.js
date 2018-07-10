import { API_KEY } from '../api-key';
import { movieFetch } from '../helpers/apiCalls';

describe('HELPERS', () => {
  test('should call fetch when movieFetch is called', async () => {
    const url = `https://api.themoviedb.org/3/list/1?api_key=${API_KEY}`;
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve()
      }));

    await movieFetch();

    expect(window.fetch).toHaveBeenCalled();
    expect(window.fetch).toHaveBeenCalledWith(url);
  });

  test('should throw and error if fetch fails', async () => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: false,
        json: () => Promise.reject()
      }));

    await expect(movieFetch()).rejects.toEqual(Error('failed fetch request'));
  });

});
