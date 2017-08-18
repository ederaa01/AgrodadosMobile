<?php
Class Mysql {

    public $query;
    public $data;
    public $result;
    public $response;
    public $rows;
    protected $config;
    protected $host;
    protected $port;
    protected $user;
    protected $pass;
    protected $dbname;
    protected $con;

    public function __construct() {

    }
    
    public function connect($database) {
        try {
            if($database == ""){
                $database='desenvolvimento';
            }
            #array com dados do banco
            include 'database.conf.php';
            global $databases;
            $this->config = $databases[$database];
            
            
            
            if($this->config == ""){
                $this->config = $databases['default'];
            }
            # Recupera os dados de conexao do config
            $this->dbname = $this->config['dbname'];
            $this->host = $this->config['host'];
            $this->port = $this->config['port'];
            $this->user = $this->config['user'];
            $this->pass = $this->config['password'];
            # instancia e retorna objeto
            $this->con = new mysqli("$this->host", "$this->user", "$this->pass");
            $this->con->select_db("$this->dbname");
            $this->con->query('SET character_set_results=utf8');

            if (!$this->con) {
                throw new Exception("Falha na conexão MySql com o banco [$this->dbname] em database.conf.php");
            } else {
                return $this->con;
            }
        } catch (Exception $e) {
            echo $e->getMessage();
            exit;
        }
        return $this;
    }

    public function query($query = '') {
        try {
            if ($query == '') {
                throw new Exception('mysql query: A query deve ser informada como parâmetro do método.');
            } else {
                $this->query = $query;
                $this->result = $this->con->query($this->query);
                if (!$this->result) {
                    $this->response = "Erro " . mysql_errno() . " => " . mysql_error();
                } else {
                    $this->response = "success";
                }
            }
        } catch (Exception $e) {
            echo $e->getMessage();
            exit;
        }
        return $this;
    }

    public function fetchAll() {
        $this->data = "";
        $this->rows = 0;
        while ($row = @mysqli_fetch_array($this->result, MYSQL_ASSOC)) {
            $this->data[] = $row;
        }
        if (isset($this->data[0])) {
            $this->rows = count($this->data);
        }
        return $this->data;
    }

    public function rowCount() {
        return @mysqli_affected_rows();
    }

    public function limit($limit, $offset) {
        return "LIMIT " . (int) $limit . "," . (int) $offset;
    }
}