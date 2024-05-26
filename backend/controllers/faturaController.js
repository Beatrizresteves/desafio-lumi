const models = require('../models');

// Função para obter uma fatura pelo ID
exports.getFaturaById = async (req, res) => {
  try {
    console.log('ID da fatura:', req.params.id);
    console.log('Modelo de fatura:', models.Faturas);
    const fatura = await models.Faturas.findByPk(req.params.id);
    
    if (fatura) {
      res.json(fatura);
    } else {
      res.status(404).send('Fatura não encontrada');
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Função para criar uma nova fatura
exports.createFatura = async (req, res) => {
  try {
    const fatura = await models.Faturas.create(req.body);
    res.status(201).json(fatura);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
  exports.faturas = async (req, res) => {
	try {
	  const faturas = await models.Faturas.findAll(req.body);
	  res.status(201).json(faturas);
	} catch (error) {
	  res.status(500).send(error.message);
	}
};

exports.getFaturasByNumeroCliente = async (req, res) => {
	try {
	  const { numero_cliente } = req.params;
	  const faturas = await models.Faturas.findAll({
		where: { numero_cliente }
	  });
	  res.status(200).json(faturas);
	} catch (error) {
	  res.status(500).send(error.message);
	}
  };


  // Função para fazer o download de uma fatura
  exports.downloadFatura = async (req, res) => {
	try {
	  const { id } = req.params;
	  const fatura = await models.Faturas.findByPk(id);
  
	  if (!fatura) {
		return res.status(404).send('Fatura não encontrada');
	  }
  
	  // Supondo que as faturas sejam armazenadas como arquivos PDF em um diretório específico
	  const filePath = path.join(__dirname, '../faturas', `${id}.pdf`);
  
	  if (fs.existsSync(filePath)) {
		res.download(filePath);
	  } else {
		res.status(404).send('Arquivo da fatura não encontrado');
	  }
	} catch (error) {
	  res.status(500).send(error.message);
	}
  };