<?php
use Slim\Http\Request;
use Slim\Http\Response;
// Routes
$app->options('/{routes:.+}', function ($request, $response, $args) {
    return $response;
});
$app->add(function ($req, $res, $next) {
    $response = $next($req, $res);
    return $response
            ->withHeader('Access-Control-Allow-Origin', '*')
            ->withHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept, Origin, Authorization')
            ->withHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
});
$app->get('/login', function ($request, $response, $args) {
    $sth = $this->db->prepare(
        "SELECT * FROM users WHERE username=:username AND password=:password"
    );
    $sth->bindParam("username", $args['username']);
    $sth->bindParam("password", $args['password']);

    $sth->execute();
    $users = $sth->fetchAll();
    return $this->response->withJson($users);
});
$app->get('/user/[{idusers}]', function ($request, $response, $args) {
    $sth = $this->db->prepare(
        "SELECT * FROM users WHERE idusers=:idusers"
    );
    $sth->bindParam("idusers", $args['idusers']);
    $sth->execute();
    $user = $sth->fetchObject();
    return $this->response->withJson($user);
});
$app->post('/register', function ($request, $response) {
    $input = $request->getParsedBody();
    $sql = "INSERT INTO
        users (email, username, password, zipcode, account_type)
        VALUES (:email, :username, :password, :zipcode, :account_type)";
    $sth = $this->db->prepare($sql);
    $sth->bindParam("email", $input['email']);
    $sth->bindParam("username", $input['username']);
    $sth->bindParam("password", $input['password']);
    $sth->bindParam("zipcode", $input['zipcode']);
    $sth->bindParam("account_type", $input['account_type']);

    $sth->execute();
    return $this->response->withJson($input);
});
$app->post('/register_shop', function ($request, $response) {
    $input = $request->getParsedBody();
    $sql = "INSERT INTO
        shopowner (idusers, shop_email, shop_name, shop_zip, description)
        VALUES (:idusers, :shop_email, :shop_name, :shop_zip, :description)";
    $sth = $this->db->prepare($sql);
    $sth->bindParam("idusers", $input['idusers']);
    $sth->bindParam("shop_email", $input['shop_email']);
    $sth->bindParam("shop_name", $input['shop_name']);
    $sth->bindParam("shop_zip", $input['shop_zip']);
    $sth->bindParam("description", $input['description']);

    $sth->execute();
    return $this->response->withJson($input);
});
$app->get('/shop', function ($request, $response, $args) {
    $sth = $this->db->prepare(
        "SELECT * FROM shopowner WHERE iduser=:iduser"
    );
    $sth->bindParam("iduser", $args['iduser']);
    $sth->execute();
    $users = $sth->fetchAll();
    return $this->response->withJson($users);
});

$app->get('/vehicle', function ($request, $response, $args) {
    $sth = $this->db->prepare(
        "SELECT * FROM vehicle WHERE iduser=:iduser"
    );
    $sth->bindParam("iduser", $args['iduser']);
    $sth->execute();
    $users = $sth->fetchAll();
    return $this->response->withJson($users);
});
$app->post('/add_vehicle', function ($request, $response) {
    $input = $request->getParsedBody();
    $sql = "INSERT INTO
        vehicle (idusers, make, model, year, miles, oil_change_miles, tire_change_miles,
        transmission_check_miles, last_inspection_date, general_description)
        VALUES (:idusers, :make, :model, :year, :miles, :oil_change_miles, :tire_change_miles,
        :transmission_check_miles, :last_inspection_date, :general_description)";
    $sth = $this->db->prepare($sql);
    $sth->bindParam("idusers", $input['idusers']);
    $sth->bindParam("make", $input['make']);
    $sth->bindParam("model", $input['model']);
    $sth->bindParam("year", $input['year']);
    $sth->bindParam("miles", $input['miles']);
    $sth->bindParam("oil_change_miles", $input['oil_change_miles']);
    $sth->bindParam("tire_change_miles", $input['tire_change_miles']);
    $sth->bindParam("transmission_check_miles", $input['transmission_check_miles']);
    $sth->bindParam("last_inspection_date", $input['last_inspection_date']);
    $sth->bindParam("general_description", $input['general_description']);
    $sth->execute();
    return $this->response->withJson($input);
});
$app->get('/users', function ($request, $response, $args) {
    $sth = $this->db->prepare(
        "SELECT * FROM users"
    );
    $sth->execute();
    $users = $sth->fetchAll();
    return $this->response->withJson($users);
});
