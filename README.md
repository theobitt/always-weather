# Aplicativo de Previsão do Tempo 🌦️

Bem-vindo ao aplicativo de previsão do tempo desenvolvido com Vue.js 3.0 e Vite. Este projeto permite aos usuários obter informações sobre a previsão do tempo para diferentes cidades.

## Funcionalidades Principais

- **Consulta de Previsão do Tempo:** Insira o nome da cidade desejada na barra de pesquisa para obter informações atualizadas sobre a previsão do tempo.

- **Exibição Detalhada:** Visualize detalhes como temperatura atual, máxima, mínima, descrição do clima e ícone correspondente.

- **Responsividade:** O aplicativo é responsivo, proporcionando uma experiência de usuário agradável em dispositivos móveis e desktop.

## Capturas de Tela

![Captura de Tela 1](./screenshots/screenshot1.png)
*Legenda: Página inicial com barra de pesquisa.*

![Captura de Tela 2](./screenshots/screenshot2.png)
*Legenda: Detalhes da previsão do tempo para uma cidade selecionada.*

## Como Executar o Projeto Localmente

```bash
# Instalação e Execução em Ambiente de Desenvolvimento
npm install
npm run dev
```

Compilação para Produção:

```bash
npm run build
```

Execução do Projeto Compilado:

```bash
npm run serve
```

Acesse [http://localhost:3000](http://localhost:3000) no seu navegador para visualizar o aplicativo.

## Dependências Principais

- **Vue 3.0:** Framework JavaScript progressivo para construção de interfaces de usuário.
- **Vite:** Build tool rápida e eficiente para projetos Vue.js.

## API de Previsão do Tempo

Este aplicativo utiliza a API de Previsão do Tempo da OpenWeatherMap. Certifique-se de obter sua chave de API em [OpenWeatherMap API](https://openweathermap.org/api) e substituir em `src/services/weather.js`.

```javascript
// src/services/weather.js

const apiKey = 'sua-chave-da-api';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

// Restante do código...
```
