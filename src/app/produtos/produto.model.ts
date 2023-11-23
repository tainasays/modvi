// produto.model.ts
export interface Produto {
    id: number;
    nome: string;
    descricao: string;
    preco: number;
    imagem: string;
    quantidadeEstoque: number;
    
  }

  


  
export interface ProdutoCarrinho extends Produto {
    quantidade: number;
}

export const produtos: Produto[] = [
    { id: 1, nome: "Alocacia", preco: 439.00, descricao: "À vista", imagem: "./assets/planta-1.jpg", quantidadeEstoque: 3},
    { id: 2, nome: "Espada-de-São-Jorge", preco: 1200.50, descricao: "À vista no PIX", quantidadeEstoque: 50, imagem: "./assets/espada-1.jpg" },
    { id: 3, nome: "Begônia", preco: 749.99, descricao: "À vista", imagem: "./assets/colorida-1.jpg", quantidadeEstoque: 10 },
    { id: 4, nome: "Antúrio", preco: 599.99, descricao: "À vista", imagem: "./assets/folhas-largas-1.jpg", quantidadeEstoque: 10 },
    { id: 5, nome: "Asplênio", preco: 299.99, descricao: "À vista", imagem: "./assets/folha-comprida-1.jpg", quantidadeEstoque: 4 },
    { id: 6, nome: "Jiboia", preco: 399.99, descricao: "À vista", imagem: "./assets/folhas-largas-2.jpg", quantidadeEstoque: 10 },
    { id: 7, nome: "Espada-de-São-Jorge", preco: 499.99, descricao: "À vista", imagem: "./assets/espada-3.jpg", quantidadeEstoque: 7 },
    { id: 8, nome: "Espada-de-São-Jorge", preco: 18449.99, descricao: "À vista", imagem: "./assets/espada-2.jpg", quantidadeEstoque: 10 },
    { id: 9, nome: "Monstera", preco: 1000, descricao: "À vista", imagem: "./assets/planta-2.jpg", quantidadeEstoque: 10 },
    { id: 10, nome: "Hera", preco: 2500, descricao: "À vista", imagem: "./assets/suspensa-1.jpg", quantidadeEstoque: 10 },
    { id: 11, nome: "Filodendro-brasil", preco: 4500, descricao: "À vista", imagem: "./assets/trepadeira-1.jpg", quantidadeEstoque: 10 },
    { id: 12, nome: "Zamioculca", preco: 20, descricao: "Parcelado ou à vista", imagem: "./assets/planta-3.jpg", quantidadeEstoque: 10 },
    { id: 13, nome: "Jiboia", preco: 200, descricao: "À vista no PIX", imagem: "./assets/trepadeira-2.jpg", quantidadeEstoque: 10 },
    { id: 14, nome: "Filodendro", preco: 50, descricao: "À vista no PIX", imagem: "./assets/folhas-largas-3.jpg", quantidadeEstoque: 14 },
    { id: 15, nome: "Jiboia", preco: 159.99, descricao: "À vista no PIX", imagem: "./assets/trepadeira-3.jpg", quantidadeEstoque: 2 },
]