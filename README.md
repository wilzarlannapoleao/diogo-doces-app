
# Diogo Doces - Aplicativo de Gestão

Este é um aplicativo móvel para o gerenciamento da doceria **Diogo Doces**. Desenvolvido em **React Native** com **Expo**, o aplicativo oferece três funcionalidades principais:

- **Controle de Vendas**
- **Controle de Estoque**
- **Geração de Relatórios**

## Funcionalidades

### 1. Controle de Vendas
- Permite registrar vendas realizadas.
- Exibe o total acumulado de vendas.

### 2. Controle de Estoque
- Gerencia o estoque de produtos.
- Permite adicionar novas quantidades ao estoque.

### 3. Geração de Relatórios
- Gera relatórios básicos com informações sobre a produtividade da doceria.
- Exibe a data e a hora da geração dos relatórios.

## Estrutura do Projeto

O projeto está organizado da seguinte maneira:

```
DiogoDocesApp/
├── App.js               # Gerencia a navegação entre as telas
├── screens/             # Diretório que contém as telas do app
│   ├── ControleVendas.js  # Tela de controle de vendas
│   ├── ControleEstoque.js # Tela de controle de estoque
│   └── Relatorios.js      # Tela de geração de relatórios
└── package.json         # Gerenciador de dependências do projeto
```

## Tecnologias Utilizadas

- **React Native**: Framework para desenvolvimento de aplicativos móveis multiplataforma.
- **Expo**: Plataforma que facilita o desenvolvimento com React Native.
- **React Navigation**: Biblioteca para navegação entre telas no app.

## Pré-requisitos

Para rodar este projeto, você precisará ter instalado:

- **Node.js**: [Baixar Node.js](https://nodejs.org/)
- **Expo CLI**: Para instalar o Expo CLI, execute:
  ```bash
  npm install -g expo-cli
  ```

## Instalação

1. Clone este repositório:
   ```bash
   git clone https://github.com/usuario/diogo-doces-app.git
   ```

2. Entre no diretório do projeto:
   ```bash
   cd diogo-doces-app
   ```

3. Instale as dependências:
   ```bash
   npm install
   ```

4. Execute o projeto:
   ```bash
   expo start
   ```

5. Abra o aplicativo **Expo Go** no seu dispositivo móvel ou use um emulador para visualizar o aplicativo.

## Navegação

O aplicativo usa **React Navigation** para gerenciar a navegação entre três telas:

- **Controle de Vendas**: Registrar as vendas diárias da doceria.
- **Controle de Estoque**: Atualizar o estoque de produtos.
- **Relatórios**: Geração de relatórios simples de produtividade.

## Como Contribuir

Contribuições são bem-vindas! Para contribuir com este projeto, siga os passos:

1. Faça um **fork** do projeto.
2. Crie uma nova branch com sua funcionalidade:
   ```bash
   git checkout -b minha-funcionalidade
   ```
3. Faça o commit das suas mudanças:
   ```bash
   git commit -m 'Adicionei nova funcionalidade'
   ```
4. Envie para o repositório remoto:
   ```bash
   git push origin minha-funcionalidade
   ```
5. Abra um **Pull Request**.

## Licença

Este projeto está licenciado sob a licença MIT. Consulte o arquivo [LICENSE](LICENSE) para mais detalhes.
