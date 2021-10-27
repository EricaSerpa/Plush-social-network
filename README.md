<h3 align="center">
    <img alt="Logo" title="#logo" src="https://ik.imagekit.io/q8vyo7feaitz/logo_0c3TubiGO.png?updatedAt=1631061741226&tr=w-1000,h-588,fo-custom,cm-extract" width="500px">
</h3>

## Índice
- [Projeto](#Projeto)
- [Definição de produto](#resumo-do-projeto)
- [Layout](#interface)
- [História de usuário](#user-history)
- [Testes de usabilidade](#tests)
- [Objetivos de aprendizagem](#learn)

<a id="Projeto"></a>
## Projeto
 # Social Network - Plush 

A adoção de pets teve um crescimento durante a pandemia, conforme pesquisas, o que nos levou a escolher o tema para  o nosso projeto. Criamos Plush, nome escolhido, pensando na fofura dos pets. 

<a id="resumo-do-projeto"></a>
## Definição de produto

Plush é uma rede voltada aos amantes e tutores de animais, para que os usuários possam compartilhar dicas, histórias, adoções, memes de pets e ajuda em casos de emergências, um lugar de apoio e trocas de experiências.

Plush permite ao usuário criar uma conta de acesso e logar-se com ela, se preferir é possivel entrar com a conta do Google. Permite também criar, editar, deletar e dar likes nas publicações.

Acesse nosso projeto [clicando aqui](https://social-network-bfa4d.web.app/)

<a id="interface"></a>
## Desenho de interface do usuário

Pensando em um layout intuitivo, o usário é direcionado a página de login, e, é possível ser um novo membro apenas com seus dados de email e senha cadastrados na rede, ou de maneira mais prática, existe a possibilidade do usuário entrar com sua conta do Google.

A página inicial, foi criada para que fique as publicações dos usuários já membros da rede, podendo interagir com likes e, com a opção de editar ou excluir a própria publicação.

#### Protótipo de baixa fidelidade:

<h3 align="center">
   <img alt="image login" title=""
        src="https://ik.imagekit.io/q8vyo7feaitz/signinb.png?updatedAt=1631055336230&tr=w-365,h-627,fo-custom,cm-extract">
   <img alt="image sign up" title=""
        src="https://ik.imagekit.io/q8vyo7feaitz/signupb.png?updatedAt=1631055401591&tr=w-365,h-627,fo-custom,cm-extract">
</h3>

#### As paletas de cores foi escolhida seguindo a primeira pesquisa de que realizamos:

<h3 align="center">
   <img alt="image login" title="" width="500px"
        src="https://ik.imagekit.io/q8vyo7feaitz/color_1M-2hdt81.jpeg?updatedAt=1631055578194">
</h3>

#### Protótipo de alta fidelidade:

<h3 align="center">
   <img alt="image login" title="" 
        src="https://ik.imagekit.io/q8vyo7feaitz/signin_AtSKMj7jV.png?updatedAt=1631054986207">
   <img alt="image sign up" title=""
        src="https://ik.imagekit.io/q8vyo7feaitz/signup_K8WBrkd0mO.png?updatedAt=1631054986057">
</h3>

<a id="user-history"></a>
## Histórias de usuário

Antes de iniciar o desenvolvimento da aplicação realizamos uma pesquisa de usuário e constatamos que:

- A maior parte dos entrevistados caracteriza a faixa dos jovens adultos (18 a 25 anos).
- Quase 80% dos entrevistados têm pets.
- Entre os usuários entrevistados que possuem animais de estimação, os cachorros e os gatos são os pets mais populares. Além disso, alguns possuem outros pets como papagaios, calopsitas e coelhos.
- Ao utilizar as redes sociais para buscar a respeito de pets, a maior parte dos usuários opta por consumir mídias de animais como fotos, vídeos e memes, além de buscar conteúdos informativos como dicas para o cuidado de pets, ONGs que resgatam animais e doação de pets nas proximidades.
- Nossa paleta de cores foi selecionada por meio da votação dos usuários nesta pesquisa.
- Entre as sugestões dadas pelos usuários, prevalecem temas como adestramento, dicas de alimentação saudável para pets, cuidados com a saúde, adoção, divulgação de ONGs, anúncios de locais que vendem produtos mais baratos, locais próximos de doação de animais, além da implementação de funcionalidades como perfis para os pets e a busca de postagens de animais por tags. 

<a id="tests"></a>
## Testes de usabilidade

### Teste de Usabilidade 1

<br>

Ao implementar as funcionalidades iniciais de login e cadastro na plataforma fizemos um primeiro teste de usabilidade para garantir que tais funcionalidades foram implementadas corretamente de acordo com o fluxo do usuário definido no protótipo de baixa fidelidade no Figma. Constatamos que:

- A maioria dos usuários conseguiu acessar outras páginas do fluxo e foram direcionados para as páginas corretamente.
- A interface ficou simples e minimalista para a maioria dos usuários.

<h3 align="center">
   <img alt="graph" title=""
        src="https://ik.imagekit.io/vd8jwzhk56v/Teste_usabilidade_mzdvaWFAx.png?updatedAt=1631042711322">
</h3>

### Teste de Usabilidade 2

Ao implementar o feed de posts e estilizar toda a aplicação, realizamos mais um teste de usabilidade para reunir informações a respeito do resultado geral.

- A maior parte optou por acessar a versão da aplicação em desktop utilizando o login com a conta Google.
- No geral, os botões ficaram adequados na interface, porém, o botão de Logout poderia ser maior.
- Os avisos de erro durante o login/cadastro da conta deveriam ser mais evidentes.
- A interface é intuitiva e as cores da paleta foram bem aplicadas na interface.
- Entre as sugestões dadas pelos usuários estão: implementar a funcionalidade de postar imagens, incluir um aviso de que o cadastro foi feito com sucesso, incluir tema claro/escuro alternando as cores da aplicação, melhorar o posicionamento do botão de postar e implementar a personalização do perfil.

<h3 align="center">
   <img alt="graph"
        src="https://ik.imagekit.io/vd8jwzhk56v/teste_de_usabilidade_CiLPlpEJf.png?updatedAt=1631042481495">
</h3>


<a id="learn"></a>
## Objetivos de aprendizagem

HTML e CSS
* HTML5 semântico
* CSS3 flexbox

DOM e Web APIs
* Manipulação do DOM
* History API
* localStorage

Javascript
* Uso de callbacks
* Consumo de Promises
* Uso de ES modules (import | export)

Firebase
* Firestore
* Firebase Auth
* Firebase security rules
* Uso de onSnapshot | onAuthStateChanged

Testing
* Jest
* Teste unitários
* Testes assíncronos
* Mocking

Boas práticas de programação
* Modularização
* Nomenclatura / Semântica
* Linting

<h3 align="center">
   <img alt="gif" src="https://ik.imagekit.io/q8vyo7feaitz/gifvideo.gif?updatedAt=1631059280527">
</h3>

## Desenvolvedoras

<h3 align="center">
    Feito com 💛 por:
    
---    

 <div align="center">
  <table>
    <thead>
      <tr>
        <th align="center">Erica Serpa</th>
        <th align="center">Gabrielly Mendes</th>
        <th align="center">Vanessa Lima</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td align="center">
          <a href="#">
            <img src="https://avatars.githubusercontent.com/u/83040250?v=4" width="100px;" alt="Foto da Erica Serpa no GitHub"/><br>
          </a>
        </td>
        <td align="center">
          <a href="#">
            <img src="https://avatars.githubusercontent.com/u/65084909?v=4" width="100px;" alt="Foto da Gabrielly Mendes no GitHub"/><br>
          </a>
        </td>
        <td align="center">
          <a href="#">
            <img src="https://avatars.githubusercontent.com/u/83243667?v=4" width="100px;" alt="Foto da Vanessa Lima no GitHub"/><br>
          </a>
        </td>
      </tr>
      <tr>
        <td align="center">
          <a href="https://github.com/EricaSerpa">
            <img alt="GitHub - Erica Serpa" src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white" style="max-width: 100%;">
          </a>
          <a href="https://www.linkedin.com/in/ericaserpa/">
            <img alt="LinkedIn - Erica Serpa" src="https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white">
          </a>
        </td>
        <td align="center">
          <a href="https://github.com/gabimendesh">
            <img alt="GitHub - Gabrielly Mendes" src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white" style="max-width: 100%;">
          </a>
          <a href="https://www.linkedin.com/in/gabriellymendes/">
            <img alt="LinkedIn - Gabrielly Mendes" src="https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white">
          </a>
        </td>
          <td align="center">
          <a href="https://github.com/vanessa-cl">
            <img alt="GitHub - Vanessa Lima" src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white" style="max-width: 100%;">
          </a>
          <a href="https://www.linkedin.com/in/vanessa-lima20-/">
            <img alt="LinkedIn - Vanessa Lima" src="https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white">
          </a>
        </td>
      </tr>
    </tbody>
  </table>
</div>

