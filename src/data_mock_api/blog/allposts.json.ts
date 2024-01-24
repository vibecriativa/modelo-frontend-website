import type { APIRoute } from "astro"

export const posts = [
  {
    "title": "Como criar um website moderno em 2023",
    "slug": "como-criar-um-website-em-2023",
    "img": {
      "url": "https://images.pexels.com/photos/5583965/pexels-photo-5583965.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "alt": "Pessoa apotando o dedo para uma região de um notbook",
    },
    "categories": [
      { "name": "Tecnologia", "slug": "tecnologia" },
      { "name": "Novidades", "slug": "novidades" }
    ],
    "description": "Se você está animado para entrar no mundo da criação de websites em 2023, nós temos as dicas certas para você.",
    "content": `<h2>Passos para criar um website moderno:</h2>
    <ol>
        <li>Defina o propósito e público-alvo do seu site.</li>
        <li>Escolha uma plataforma ou tecnologia adequada, como HTML5, CSS3, JavaScript, etc.</li>
        <li>Crie um layout responsivo para garantir uma boa experiência em dispositivos móveis.</li>
        <li>Design limpo e minimalista está em alta, foque na usabilidade.</li>
        <li>Utilize imagens e gráficos de alta resolução para um visual atraente.</li>
        <li>Integre recursos interativos, como animações suaves e transições.</li>
        <li>Considere adicionar uma seção de blog para manter o conteúdo atualizado.</li>
        <li>Otimização SEO é essencial para ser encontrado nos mecanismos de busca.</li>
        <li>Integre suas redes sociais para uma maior presença online.</li>
        <li>Teste em diferentes navegadores e dispositivos antes de lançar.</li>
    </ol>
    <p>Lembre-se de que a criação de um website moderno envolve a combinação de design atrativo, funcionalidade avançada e uma experiência agradável para o usuário.</p>
    
    <blockquote>
        <p>"O design não é apenas como parece e se sente. O design é como funciona." - Steve Jobs</p>
    </blockquote>
    
    <p>Conforme Steve Jobs afirmou uma vez: <cite>"O design não é apenas como parece e se sente. O design é como funciona."</cite></p>`
  },
  
  {
    "title": "Como inserir novas tecnologias na sua agência",
    "slug": "como-inserir-novas-tecnologias-na-sua-agencia",
    "img": {
      "url": "https://images.pexels.com/photos/6774956/pexels-photo-6774956.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "alt": "Pessoas em uma agência",
    },
    "categories": [
      { "name": "Tecnologia", "slug": "tecnologia" },
      { "name": "Novidades", "slug": "novidades" }
    ],
    "description": "Descubra as tendências de design mais quentes para websites em 2023 e como agregar valor no seu produto",
    "content": "<p>Descubra as tendências de design mais quentes para websites em 2023 e saiba como criar uma experiência visualmente impressionante para os seus usuários.</p>"
  },
  {
    "title": "O papel do SEO na criação de websites de sucesso em 2023",
    "slug": "o-papel-do-seo-na-criacao-de-websites-de-sucesso-em-2023",
    "img": {
      "url": "https://images.pexels.com/photos/8555677/pexels-photo-8555677.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "alt": "Pessoas em uma agência",
    },
    "categories": [
      { "name": "Tecnologia", "slug": "tecnologia" },
      { "name": "Ideias", "slug": "ideias" }
    ],
    "description": "Explore a importância do SEO (Otimização para Mecanismos de Busca) ao criar websites em 2023",
    "content": "<p>Explore a importância do SEO (Otimização para Mecanismos de Busca) ao criar websites em 2023 e aprenda a posicionar seu site no topo dos resultados de busca.</p>"
  }
]

export const get: APIRoute = async ({ params, request }) => {
  return new Response(
    JSON.stringify(posts), {
      status: 200,
      headers: {
        "Content-Type": "application/json"
      }
    }
  );
}