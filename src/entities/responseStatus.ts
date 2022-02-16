export const responseCatch = (responseStatus: number, responseText: string) => {
  if ([400, 404, 429, 500].includes(responseStatus)) {
    throw new Error(responseText);
  }
};
