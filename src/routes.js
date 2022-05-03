export function rotasDeProduto(app) {
  const listaProdutos = {
    produtos: [
        { id: 1, descricao: "Arroz parboilizado 5Kg", valor: 25.00, marca: "Tio João"  },
        { id: 2, descricao: "Maionese 250gr", valor: 7.20, marca: "Helmans"  },
        { id: 3, descricao: "Iogurte Natural 200ml", valor: 2.50, marca: "Itambé"  },
        { id: 4, descricao: "Batata Maior Palha 300gr", valor: 15.20, marca: "Chipps"  },
        { id: 5, descricao: "Nescau 400gr", valor: 8.00, marca: "Nestlé"  },
    ]
  }

  app.post("/produtos", (req, res) => {
    if (req.body.descricao && req.body.valor && req.body.marca) {
      const novoProduto = {
        ...req.body,
        id: listaProdutos.produtos.length + 1,
      }
  
      listaProdutos.produtos.push(novoProduto);
  
      res.status(201).send(req.body);
    } else {
      res.status(400).send("Dados inválidos");
    }
  });
  
  app.get("/produtos", (req, res) => {
    res.send(listaProdutos);
  });
  
  app.get("/produtos/:id", (req, res) => {
    const produto = listaProdutos.produtos.find(p => p.id === parseInt(req.params.id));
  
    if (produto) {
      res.send(produto);
    } else {
      res.status(404).send("Produto não encontrado");
    }
  });
  
  app.put("/produtos/:id", (req, res) => {
    const produto = listaProdutos.produtos.find(p => p.id === parseInt(req.params.id));
  
    if (produto) {
      const index = listaProdutos.produtos.indexOf(produto);
  
      listaProdutos.produtos[index] = {
        ...produto,
        ...req.body,
      }
  
      res.send(listaProdutos.produtos[index]);
    } else {
      res.status(404).send("Produto não encontrado");
    }
  });
  
  app.delete("/produtos/:id", (req, res) => {
    const produto = listaProdutos.produtos.find(p => p.id === parseInt(req.params.id));
  
    if (produto) {
      const index = listaProdutos.produtos.indexOf(produto);
  
      listaProdutos.produtos.splice(index, 1);
  
      res.send(produto);
    } else {
      res.status(404).send("Produto não encontrado");
    }
  });
}