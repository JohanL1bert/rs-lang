import { basePath } from 'common/config/env.config';
import { responseCatch } from 'entities/responseStatus';

export const useSprinStateWords = async (group: number, page: number) => {
  try {
    const response = await fetch(`${basePath}/words?group=${group}&page=${page}`, {
      method: 'GET',
      cache: 'no-cache',
    });
    responseCatch(response.status, response.statusText);
    return await response.json();
  } catch (err: unknown) {
    if (err instanceof Error) {
      err.message;
    } else {
      throw new Error('err');
    }
  }
};
