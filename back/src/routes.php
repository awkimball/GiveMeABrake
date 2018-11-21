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
$app->get('/users', function ($request, $response, $args) {
    $sth = $this->db->prepare(
        "SELECT * FROM users"
    );
    $sth->execute();
    $users = $sth->fetchAll();
    return $this->response->withJson($users);
});
$app->post('/login', function ($request, $response) {
    $sth = $this->db->prepare(
        "SELECT * FROM users WHERE email=:email AND password=:password"
    );
    $values = $request->getParsedBody();
    $email = $values['email'];
    $password = $values['password'];

    $sth->bindParam(':email', $email);
    $sth->bindParam(':password', $password);
    
    $sth->execute();
    $users = $sth->fetchAll();
    
    return $this->response->withJson($users);

});
//get user of id
$app->get('/user/{iduser}', function ($request, $response, $args) {
    $sth = $this->db->prepare(
        "SELECT * FROM users WHERE iduser=:iduser"
    );
    $sth->bindParam("iduser", $args['iduser']);
    $sth->execute();
    $user = $sth->fetchObject();
    return $this->response->withJson($user);
});
//register user
$app->post('/register', function ($request, $response) {
    $input = $request->getParsedBody();
    $sql = "INSERT INTO
        users (email, username, password, zipcode, account_type, phone)
        VALUES (:email, :username, :password, :zipcode, :account_type, :phone)";
    $sth = $this->db->prepare($sql);
    $sth->bindParam("email", $input['email']);
    $sth->bindParam("username", $input['username']);
    $sth->bindParam("password", $input['password']);
    $sth->bindParam("zipcode", $input['zipcode']);
    $sth->bindParam("account_type", $input['account_type']);
    $sth->bindParam("phone", $input['phone']);

    $sth->execute();
    return $this->response->withJson($input);
});
//update user
$app->put('/user/{iduser}', function ($request, $response) {
	$input = $request->getParsedBody();
	$sql = "UPDATE users SET email = :email, username = :username, password = :password,
			zipcode = :zipcode, account_type = :account_type, phone = :phone WHERE iduser = :iduser";
    $sth = $this->db->prepare($sql);
    $sth->bindParam("iduser", $input['iduser']);
    $sth->bindParam("email", $input['email']);
    $sth->bindParam("username", $input['username']);
    $sth->bindParam("password", $input['password']);
    $sth->bindParam("zipcode", $input['zipcode']);
    $sth->bindParam("account_type", $input['account_type']);
    $sth->bindParam("phone", $input['phone']);


    $sth->execute();
    return $this->response->withJson($input);	
	});

$app->post('/register_shop', function ($request, $response) {
    $input = $request->getParsedBody();
    $sql = "INSERT INTO 
        shops (iduser, gas_price,address, shop_email, shop_name, description) 
        VALUES (:iduser, :gas_price,:address, :shop_email, :shop_name, :description)";
    $sth = $this->db->prepare($sql);
    $sth->bindParam("iduser", $input['iduser']);
    $sth->bindParam("gas_price", $input['gas_price']);
    $sth->bindParam("address", $input['address']);
    $sth->bindParam("shop_email", $input['shop_email']);
    $sth->bindParam("shop_name", $input['shop_name']);
    $sth->bindParam("description", $input['description']);

    $sth->execute();
    return $this->response->withJson($input);
});

$app->put('/user/{iduser}/shop', function ($request, $response) {
	$input = $request->getParsedBody();
	$sql = "UPDATE users SET gas_price=:gas_price, address=:address, shop_email = :shop_email, shop_name = :shop_name,
			 description = :description WHERE iduser = :iduser AND shop_name = :shop_name";
	$sth = $this->db->prepare($sql);
    $sth->bindParam("gas_price", $input['gas_price']);
    $sth->bindParam("address", $input['address']);
    $sth->bindParam("shop_email", $input['shop_email']);
    $sth->bindParam("shop_name", $input['shop_name']);
    $sth->bindParam("description", $input['description']);

    $sth->execute();
    return $this->response->withJson($input);	
});

$app->get('/user/{iduser}/shops', function ($request, $response, $args) {
    $sth = $this->db->prepare(
        "SELECT * FROM shops WHERE iduser=:iduser"
    );
    $sth->bindParam("iduser", $args['iduser']);
    $sth->execute();
    $users = $sth->fetchAll();
    return $this->response->withJson($users);
});

$app->get('/user/{iduser}/vehicles', function ($request, $response, $args) {
    $sth = $this->db->prepare(
        "SELECT * FROM vehicles WHERE iduser=:iduser"
    );
    $sth->bindParam("iduser", $args['iduser']);
    $sth->execute();
    $users = $sth->fetchAll();
    return $this->response->withJson($users);
});

$app->post('/add_vehicle', function ($request, $response) {
    $input = $request->getParsedBody();
    $sql = "INSERT INTO 
        vehicles (iduser, vin, make, model, year, miles, tire_rotation_miles, tire_change_miles, 
        transmission_check_miles, last_inspection_date, general_description) 
        VALUES (:iduser, :vin, :make, :model, :year, :miles, :tire_rotation_miles, :tire_change_miles,
        :transmission_check_miles, :last_inspection_date, :general_description)";
    $sth = $this->db->prepare($sql);
    $sth->bindParam("iduser", $input['iduser']);
    $sth->bindParam("vin", $input['vin']);
    $sth->bindParam("make", $input['make']);
    $sth->bindParam("model", $input['model']);
    $sth->bindParam("year", $input['year']);
    $sth->bindParam("miles", $input['miles']);
    $sth->bindParam("tire_rotation_miles", $input['tire_rotation_miles']);
    $sth->bindParam("tire_change_miles", $input['tire_change_miles']);
    $sth->bindParam("transmission_check_miles", $input['transmission_check_miles']);
    $sth->bindParam("last_inspection_date", $input['last_inspection_date']);
    $sth->bindParam("general_description", $input['general_description']);
    $sth->execute();
    return $this->response->withJson($input);
});

$app->put('/user/{iduser}/vehicle/{vid}', function ($request, $response) {
    $input = $request->getParsedBody();
    $sql = "UPDATE vehicles
        SET iduser = :iduser, vid=:vid, make=:make, model=:model, year=:year, miles=:miles,
        tire_rotation_miles=:tire_rotation_miles, tire_change_miles=:tire_change_miles transmission_check_miles=:transmission_check_miles,
        last_inspection_date=:last_inspection_date, general_description=:general_description WHERE
        iduser = :iduser AND vid = :vid";
    $sth = $this->db->prepare($sql);
    $sth->bindParam("iduser", $input['iduser']);
    $sth->bindParam("vid", $input['vid']);
    $sth->bindParam("make", $input['make']);
    $sth->bindParam("model", $input['model']);
    $sth->bindParam("year", $input['year']);
    $sth->bindParam("miles", $input['miles']);
    $sth->bindParam("tire_rotation_miles", $input['tire_rotation_miles']);
    $sth->bindParam("tire_change_miles", $input['tire_change_miles']);
    $sth->bindParam("transmission_check_miles", $input['transmission_check_miles']);
    $sth->bindParam("last_inspection_date", $input['last_inspection_date']);
    $sth->bindParam("general_description", $input['general_description']);
    $sth->execute();
    $users = $sth->fetchAll();
    return $this->response->withJson($users);
});

//An update statement solely for vehicle miles to be used to for the Update Miles button
$app->put('/user/{iduser}/vehicle/{vid}', function ($request, $response) {
    $input = $request->getParsedBody();
    $sql = "UPDATE vehicles
        SET miles=:miles WHERE iduser = :iduser AND vid = :vid";
    $sth = $this->db->prepare($sql);
    $sth->bindParam("miles", $input['miles']);
    $sth->execute();
    $users = $sth->fetchAll();
    return $this->response->withJson($users);
});

$app->get('/zip/{zipcode}', function ($request, $response, $args) {
    $sth = $this->db->prepare(
        "SELECT * FROM zip WHERE zipcode=:zipcode"
    );
    $sth->bindParam("zipcode", $args['zipcode']);
    $sth->execute();
    $users = $sth->fetchAll();
    return $this->response->withJson($users);
});

//get all deals
$app->get('/user/{iduser}/deals', function ($request, $response, $args) {
    $sth = $this->db->prepare(
        "SELECT * FROM deals WHERE iduser=:iduser"
    );
    $sth->bindParam("iduser", $args['iduser']);
    $sth->execute();
    $users = $sth->fetchAll();
    return $this->response->withJson($users);
});

//add a deal
$app->post('/add_deal', function ($request, $response) {
    $input = $request->getParsedBody();
    $sql = "INSERT INTO 
        deals (idshop, price, name, description, notify) 
        VALUES (:idshop, :price, :name, :description, :notify)";
    $sth = $this->db->prepare($sql);
    $sth->bindParam("idshop", $input['idshop']);
    $sth->bindParam("price", $input['price']);
    $sth->bindParam("name", $input['name']);
    $sth->bindParam("description", $input['description']);
    $sth->bindParam("notify", $input['notify']);

    $sth->execute();
    return $this->response->withJson($input);
});


$app->post('/add_review', function ($request, $response) {
    $input = $request->getParsedBody();
    $sql = "INSERT INTO 
        review (iduser, idshop, comment, rating) 
        VALUES (:iduser, :idshop, :comment, :rating)";
    $sth = $this->db->prepare($sql);
    $sth->bindParam("iduser", $input['iduser']);
    $sth->bindParam("idshop", $input['idshop']);
    $sth->bindParam("comment", $input['comment']);
    $sth->bindParam("rating", $input['rating']);

    $sth->execute();
    return $this->response->withJson($input);
});

$app->get('/user/{iduser}/shops/{idshop}/reviews', function ($request, $response, $args) {
    $sth = $this->db->prepare(
        "SELECT * FROM review WHERE iduser=:iduser AND idshop=:idshop"
    );
    $sth->bindParam("iduser", $args['iduser']);
    $sth->bindParam("idshop", $args['idshop']);

    $sth->execute();
    $users = $sth->fetchAll();
    return $this->response->withJson($users);
});

$app->get('/nearby_shops/{zipcode}', function ($request, $response, $args) {
    $sth = $this->db->prepare(
        "SELECT * FROM shops JOIN users ON shops.iduser=users.iduser WHERE users.zipcode=:zipcode"
    );
    $sth->bindParam("zipcode", $args['zipcode']);
    $sth->execute();
    $users = $sth->fetchAll();
    return $this->response->withJson($users);
});


$app->post('/user/{iduser}/add_favorite', function ($request, $response) {
    $input = $request->getParsedBody();
    $sql = "INSERT INTO 
        favorites (iduser, idshop) 
        VALUES (:iduser, :idshop)";
    $sth = $this->db->prepare($sql);
    $sth->bindParam("iduser", $input['iduser']);
    $sth->bindParam("idshop", $input['idshop']);
    $sth->execute();
    return $this->response->withJson($input);
});

$app->get('/user/{iduser}/favorites', function ($request, $response, $args) {
    $sth = $this->db->prepare(
        "SELECT * FROM favorites  WHERE iduser=:iduser"
    );
    $sth->bindParam("iduser", $args['iduser']);
    $sth->execute();
    $users = $sth->fetchAll();
    return $this->response->withJson($users);
});


$app->post('/add_appointment', function ($request, $response) {
    $input = $request->getParsedBody();
    $sql = "INSERT INTO 
        appointments (idapt, iduser, idshop, date) 
        VALUES (:idapt, :iduser, :idshop, :date)";
    $sth = $this->db->prepare($sql);
    $sth->bindParam("idapt", $input['idapt']);
    $sth->bindParam("iduser", $input['iduser']);
    $sth->bindParam("idshop", $input['idshop']);
    $sth->bindParam("idapt", $input['\date']); //I think the backslash is needed
$sth->execute();
    return $this->response->withJson($input);
});

$app->get('/user/{iduser}/favorites', function ($request, $response, $args) {
    $sth = $this->db->prepare(
        "SELECT * FROM favorites  WHERE iduser=:iduser"
    );
    $sth->bindParam("iduser", $args['iduser']);
    $sth->execute();
    $users = $sth->fetchAll();
    return $this->response->withJson($users); 
});



