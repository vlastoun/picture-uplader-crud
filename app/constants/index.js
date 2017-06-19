

function resolveHost() {
  if (process.env.NODE_ENV !== 'development') {
    return 'https://picture-uploader-server.herokuapp.com/';
  }
  return 'http://localhost:8080/';
}

export const HOST = resolveHost();
