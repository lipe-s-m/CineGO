fetch('/api/key')
  .then((response) => response.json())
  .then((data) => {
    console.log('API Key:', data.apiKey);
  })
  .catch((error) => console.error('Erro ao buscar API Key:', error));
