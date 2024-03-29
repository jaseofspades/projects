<?php

// Connect to MySQL database and execute a query
class Database
{
    public $connection;

    public function __construct($config, $username = 'root', $password = '')
    {
        // Initialize a PHP Database Object (PDO)
        $dsn = "mysql:host={$config['host']};dbname={$config['dbname']};{$config['charset']}";

        $this->connection = new PDO($dsn, $username, $password, [
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
        ]);
    }

    public function query($query)
    {
        $statement = $this->connection->prepare($query);
        $statement->execute();

        return $statement;
    }
}
