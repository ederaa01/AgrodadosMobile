CREATE TABLE Cliente (
  id INTEGER  NOT NULL AUTO_INCREMENT, 
  idCliente INTEGER   ,
  idSistema INTEGER  ,
  nmCliente VARCHAR(100) ,
  CpfCnpj VARCHAR(14) ,
  email VARCHAR(300) ,
  telefone VARCHAR(24) ,
  observacao VARCHAR(500) ,
  situacao INTEGER  ,
  idWs INTEGER  ,
  idErp VARCHAR(30) ,
  hasCode VARCHAR(30) ,
  hasCodeWs VARCHAR(30) ,
  PRIMARY KEY(id)
);

CREATE TABLE Combustivel (
  id INTEGER  NOT NULL AUTO_INCREMENT, 
  idCombustivel INTEGER   ,
  idWs INTEGER  ,
  idErp VARCHAR(30) ,
  dsCombustivel VARCHAR(100) ,
  hasCode VARCHAR(30) ,
  hasCodeWs VARCHAR(30) ,
  PRIMARY KEY(id)
);

CREATE TABLE CombustivelVeiculo (
  id INTEGER  NOT NULL AUTO_INCREMENT, 
  idCombustivel INTEGER  ,
  idVeiculo INTEGER  ,
  idWsVeiculo INTEGER  ,
  idWsCombustivel INTEGER  ,
  idErpVeiculo VARCHAR(30) ,
  idErpCombustivel VARCHAR(30) ,
  hasCode VARCHAR(30) ,
  hasCodeWs VARCHAR(30) ,
  PRIMARY KEY(id)
);

CREATE TABLE CondPagamento (
  id INTEGER  NOT NULL AUTO_INCREMENT, 
  idCondPagamento INTEGER   ,
  idSistema INTEGER  ,
  dsCondPagamento VARCHAR(100) ,
  qtVezes INTEGER  ,
  carencia INTEGER  ,
  intervalo INTEGER  ,
  idWs INTEGER  ,
  idErp VARCHAR(30) ,
  hasCode VARCHAR(30) ,
  hasCodeWs VARCHAR(30) ,
  PRIMARY KEY(id)
);

CREATE TABLE Configuracao (
  id INTEGER  NOT NULL AUTO_INCREMENT, 
  idConfig INTEGER  ,
  idSistema INTEGER  ,
  InWiFi BOOL ,
  InSincAutomatico BOOL ,
  urlServidor VARCHAR(100) ,
  idErp INTEGER  ,
  idWs INTEGER  ,
  hasCodeWs VARCHAR(30) ,
  hasCode VARCHAR(30) ,
  PRIMARY KEY(id)
);

CREATE TABLE Endereco (
  id INTEGER  NOT NULL AUTO_INCREMENT, 
  idEndereco INTEGER   ,
  idCliente INTEGER  ,
  idSistema INTEGER  ,
  nmEndereco VARCHAR(100) ,
  endereco VARCHAR(100) ,
  bairro VARCHAR(100) ,
  numero INTEGER  ,
  ie VARCHAR(24) ,
  cep VARCHAR ,
  situacao INTEGER  ,
  idErp VARCHAR(30) ,
  idWs INTEGER  ,
  idWsCliente INTEGER  ,
  idErpCliente VARCHAR(30) ,
  hasCode VARCHAR(30) ,
  hasCodeWs VARCHAR(30) ,
  PRIMARY KEY(id)
);

CREATE TABLE Frota (
  id INTEGER  NOT NULL AUTO_INCREMENT, 
  idFrota INTEGER   ,
  idWs INTEGER  ,
  idErp VARCHAR(30) ,
  dsFrota VARCHAR(100) ,
  hasCode VARCHAR(30) ,
  hasCodeWs VARCHAR(30) ,
  PRIMARY KEY(id)
);

CREATE TABLE Item (
  id INTEGER  NOT NULL AUTO_INCREMENT, 
  idItem INTEGER   ,
  idSistema INTEGER  ,
  idVariedade INTEGER  ,
  id2 VARCHAR(25) ,
  dsItem VARCHAR(80) ,
  isServico INT(1) ,
  sldEstoque NUMERIC(10,3) ,
  idWs INTEGER  ,
  idErp VARCHAR(30) ,
  hasCode VARCHAR(30) ,
  hasCodeWs VARCHAR(30) ,
  PRIMARY KEY(id)
);

CREATE TABLE ItemTabelaPreco (
  id INTEGER  NOT NULL AUTO_INCREMENT, 
  idTabelaPreco INTEGER  ,
  idItem INTEGER  ,
  idSistema INTEGER  ,
  valor NUMERIC(10,2) ,
  idWsItem INTEGER  ,
  idErpItem VARCHAR(30) ,
  idWsTabelaPreco INTEGER  ,
  idErpTabelaPreco VARCHAR(30) ,
  hasCode VARCHAR(30) ,
  hasCodeWs VARCHAR(30) ,
  PRIMARY KEY(id)
);

CREATE TABLE Modulo (
  id INTEGER  NOT NULL AUTO_INCREMENT, 
  idModulo INTEGER   ,
  idWs INTEGER  ,
  dsModulo VARCHAR(100) ,
  tpModulo INTEGER  ,
  hasCode VARCHAR(30) ,
  hasCodeWs VARCHAR(30) ,
  PRIMARY KEY(id)
);

CREATE TABLE Pedido (
  id INTEGER  NOT NULL AUTO_INCREMENT, 
  idPedido INTEGER   ,
  idSistema INTEGER  ,
  idRepresentada INTEGER  ,
  idCondPagamento INTEGER  ,
  idCliente INTEGER  ,
  idTabelaPreco INTEGER  ,
  idVisita INTEGER  ,
  vlBruto NUMERIC(10,2) ,
  vlDesconto NUMERIC(10,2) ,
  vlLiquido NUMERIC(10,2) ,
  dataPedido DATE ,
  dataLiberacao DATE ,
  situacao INTEGER  ,
  nmCliente VARCHAR(100) ,
  nmEndereco VARCHAR(100) ,
  endereco VARCHAR(100) ,
  bairro VARCHAR(100) ,
  numero VARCHAR(100) ,
  dsTalhao VARCHAR(100) ,
  idEndereco INTEGER  ,
  idTalhao INTEGER  ,
  dsCondPagamento VARCHAR(100) ,
  idWs INTEGER  ,
  idErp VARCHAR(30) ,
  idWsVisita INTEGER  ,
  idErpVisita VARCHAR(30) ,
  idWsCliente INTEGER  ,
  idErpCliente VARCHAR(30) ,
  idWsCondPagto INTEGER  ,
  idErpCondPagto VARCHAR(30) ,
  idWsRepresentada INTEGER  ,
  idErpRepresentada VARCHAR(30) ,
  idWsTabelaPreco INTEGER  ,
  idErpTabelaPreco VARCHAR(30) ,
  hasCode VARCHAR(30) ,
  hasCodeWs VARCHAR(30) ,
  PRIMARY KEY(id)
);

CREATE TABLE PedidoItem (
  id INTEGER  NOT NULL AUTO_INCREMENT, 
  idPedido INTEGER  ,
  idSistema INTEGER  ,
  idItem INTEGER  ,
  idRepresentada INTEGER  ,
  quantidade NUMERIC(10,2) ,
  vlUnitario NUMERIC(10,2) ,
  vlTotal NUMERIC(10,2) ,
  vlDesconto NUMERIC(10,2) ,
  idWsItem INTEGER  ,
  idErpItem VARCHAR(30) ,
  idWsPedido INTEGER  ,
  idErpPedido VARCHAR(30) ,
  idWsRepresentada INTEGER  ,
  idErpRepresentada VARCHAR(30) ,
  hasCode VARCHAR(30) ,
  hasCodeWs VARCHAR(30) ,
  PRIMARY KEY(id)
);

CREATE TABLE Representada (
  id INTEGER  NOT NULL AUTO_INCREMENT, 
  idRepresentada INTEGER   ,
  idSistema INTEGER  ,
  idWs VARCHAR(20) ,
  idErp VARCHAR(30) ,
  nmRepresentada VARCHAR(200) ,
  nmRazaoSocila VARCHAR(200) ,
  cpfCnpj VARCHAR(14) ,
  hasCode VARCHAR(30) ,
  hasCodeWs VARCHAR(30) ,
  PRIMARY KEY(id)
);

CREATE TABLE RepresentadaUser (
  id INTEGER  NOT NULL AUTO_INCREMENT, 
  idSistema INTEGER  ,
  idRepresentada INTEGER  ,
  idUsuario INTEGER  ,
  inSituacao INTEGER  ,
  idWsRepresentada INTEGER  ,
  idErpRepresentada VARCHAR(30) ,
  idWsUser INTEGER  ,
  idErpUser VARCHAR(30) ,
  hasCode VARCHAR(30) ,
  hasCodeWs VARCHAR(30) ,
  PRIMARY KEY(id)
);

CREATE TABLE Sistema (
  id INTEGER  NOT NULL AUTO_INCREMENT, 
  idSistema INTEGER   ,
  idWs INTEGER  ,
  descricao VARCHAR(100) ,
  hasCode VARCHAR(30) ,
  hasCodeWs VARCHAR(30) ,
  PRIMARY KEY(id)
);

CREATE TABLE SistemaModulo (
  id INTEGER  NOT NULL AUTO_INCREMENT, 
  idSistema INTEGER  ,
  idModulo INTEGER  ,
  idWs INTEGER  ,
  dataVencimento DATE ,
  inSituacao INTEGER  ,
  hasCode VARCHAR(30) ,
  hasCodeWs VARCHAR(30) ,
  PRIMARY KEY(id)
);

CREATE TABLE TabelaPreco (
  id INTEGER  NOT NULL AUTO_INCREMENT, 
  idTabelaPreco INTEGER   ,
  idSistema INTEGER  ,
  dsTabelaPreco VARCHAR(100) ,
  idWs INTEGER  ,
  idErp VARCHAR(30) ,
  hasCode VARCHAR(30) ,
  hasCodeWs VARCHAR(30) ,
  PRIMARY KEY(id)
);

CREATE TABLE Talhao (
  id INTEGER  NOT NULL AUTO_INCREMENT, 
  idTalhao INTEGER   ,
  idCliente INTEGER  ,
  idEndereco INTEGER  ,
  idSistema INTEGER  ,
  dsTalhao VARCHAR(100) ,
  idErpCliente VARCHAR(30) ,
  idWsCliente INTEGER  ,
  idWsEndereco INTEGER  ,
  idErpEndereco VARCHAR(30) ,
  idWs INTEGER  ,
  idErp VARCHAR(30) ,
  hasCode VARCHAR(30) ,
  hasCodeWs VARCHAR(30) ,
  PRIMARY KEY(id)
);

CREATE TABLE UserApp (
  id INTEGER  NOT NULL AUTO_INCREMENT, 
  idUser INTEGER   ,
  idSistema INTEGER  ,
  Vendedor_idVendedor INTEGER  ,
  dsLogin VARCHAR(50) ,
  dsSenha VARCHAR(255) ,
  tpUsuario INTEGER  ,
  idWs INTEGER  ,
  idErp VARCHAR(30) ,
  idWsVendedor INTEGER  ,
  idErpVendedor VARCHAR(30) ,
  hasCode VARCHAR(30) ,
  hasCodeWs VARCHAR(30) ,
  PRIMARY KEY(id)
);

CREATE TABLE Variedade (
  id INTEGER  NOT NULL AUTO_INCREMENT, 
  idVariedade INTEGER   ,
  dsVariedade VARCHAR(100) ,
  idWs INTEGER  ,
  idErp VARCHAR(30) ,
  hasCode VARCHAR(30) ,
  hasCodeWs VARCHAR(30) ,
  PRIMARY KEY(id)
);

CREATE TABLE Veiculo (
  id INTEGER  NOT NULL AUTO_INCREMENT, 
  idVeiculo INTEGER   ,
  idFrota INTEGER  ,
  idWs INTEGER  ,
  idErp VARCHAR(30) ,
  dsVeiculo VARCHAR(100) ,
  placa INTEGER  ,
  ano INTEGER  ,
  hasCode VARCHAR(30) ,
  hasCodeWs VARCHAR(30) ,
  PRIMARY KEY(id)
);

CREATE TABLE VeiculoEventos (
  id INTEGER  NOT NULL AUTO_INCREMENT, 
  idEventos INTEGER   ,
  idVeiculo INTEGER  ,
  idCombustivel INTEGER  ,
  idWs INTEGER  ,
  idErp VARCHAR(30) ,
  tpEvento INTEGER  ,
  km NUMERIC(10,2) ,
  idWsVeiculo INTEGER  ,
  idWsCombustivel INTEGER  ,
  idErpVeiculo VARCHAR(30) ,
  idErpCombustivel VARCHAR(30) ,
  hasCode VARCHAR(30) ,
  hasCodeWs VARCHAR(30) ,
  PRIMARY KEY(id)
);

CREATE TABLE Vendedor (
  id INTEGER  NOT NULL AUTO_INCREMENT, 
  idVendedor INTEGER   ,
  nmVendedor VARCHAR(60) ,
  cpfCnpj VARCHAR(14) ,
  rg VARCHAR(20) ,
  ie VARCHAR(20) ,
  dsEmail VARCHAR(60) ,
  dtCadastro DATE ,
  idWs INTEGER  ,
  idErp VARCHAR(30) ,
  hasCode VARCHAR(30) ,
  hasCodeWs VARCHAR(30) ,
  PRIMARY KEY(id)
);

CREATE TABLE VendedorCliente (
  id INTEGER  NOT NULL AUTO_INCREMENT, 
  idCliente INTEGER  ,
  idVendedor INTEGER  ,
  idSistema INTEGER  ,
  inSituacao INTEGER  ,
  idWsVendedor INTEGER  ,
  idErpVendedor VARCHAR(30) ,
  idWsCliente INTEGER  ,
  idErpCliente VARCHAR(30) ,
  hasCode VARCHAR(30) ,
  hasCodeWs VARCHAR(30) ,
  PRIMARY KEY(id)
);

CREATE TABLE Visita (
  id INTEGER  NOT NULL AUTO_INCREMENT, 
  idVisita INTEGER   ,
  idSistema INTEGER  ,
  idRepresentada INTEGER  ,
  idVeiculo INTEGER  ,
  idCliente INTEGER  ,
  idEventos INTEGER  ,
  cdCliente INTEGER  ,
  nmCliente VARCHAR(100) ,
  cdCultura INTEGER  ,
  dsCultura VARCHAR(100) ,
  cdPropriedade INTEGER  ,
  nmPropriedade VARCHAR ,
  dataVisita DATE ,
  latitude INTEGER  ,
  longitude INTEGER  ,
  idWs INTEGER  ,
  idErp VARCHAR(30) ,
  idWsCliente INTEGER  ,
  idErpCliente VARCHAR(30) ,
  idWsVeiculo INTEGER  ,
  idErpVeiculo VARCHAR(30) ,
  idWsEvento INTEGER  ,
  idErpEvento VARCHAR(30) ,
  hasCode VARCHAR(30) ,
  hasCodeWs VARCHAR(30) ,
  PRIMARY KEY(id)
);


