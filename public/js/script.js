fetch('https://cine-go-lipesm.vercel.app/api/key')
  .then((response) => response.text()) // Use `text()` para ver a resposta crua
  .then((data) => {
    console.log(data); // Isso vai mostrar o que está vindo da API
  })
  .catch((error) => console.error('Erro ao buscar a chave:', error));

// fetch('https://cine-go-lipesm.vercel.app/api/key')
// .then((response) => response.json())
// .then((data) => {
//   console.log('API Key:', data.apiKey);
// })
// .catch((error) => console.error('Erro ao buscar API Key:', error));
