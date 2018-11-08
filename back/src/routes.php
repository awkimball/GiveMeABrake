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
// $app->get('/login', function ($request, $response, $args) {
//     $sth = $this->db->prepare(
//         "SELECT * FROM users WHERE username=:username AND password=:password"
//     );
//     $sth->bindParam("username", $args['username']);
//     $sth->bindParam("password", $args['password']);

//     $sth->execute();
//     $users = $sth->fetchAll();
//     return $this->response->withJson($users);
// });
// $app->get('/user/[{idusers}]', function ($request, $response, $args) {
//     $sth = $this->db->prepare(
//         "SELECT * FROM users WHERE idusers=:idusers"
//     );
//     $sth->bindParam("idusers", $args['idusers']);
//     $sth->execute();
//     $user = $sth->fetchObject();
//     return $this->response->withJson($user);
// });
// $app->post('/register', function ($request, $response) {
//     $input = $request->getParsedBody();
//     $sql = "INSERT INTO
//         users (name, email, username, password, zipcode, account_type)
//         VALUES (:name, :email, :username, :password, :zipcode, :account_type)";
//     $sth = $this->db->prepare($sql);
//     $sth->bindParam("name", $input['name']);
//     $sth->bindParam("email", $input['email']);
//     $sth->bindParam("username", $input['username']);
//     $sth->bindParam("password", $input['password']);
//     $sth->bindParam("zipcode", $input['zipcode']);
//     $sth->bindParam("account_type", $input['account_type']);

//     $sth->execute();
//     return $this->response->withJson($input);
// });
// $app->put('/account/{username}', function ($request, $response) {
// 	$input = $request->getParsedBody();
// 	$sql = "UPDATE users SET email = :email, username = :username, password = :password,
// 			zipcode = : zipcode, account_type = :account_type WHERE idusers = :idusers";
// 	$sth = $this->db->prepare($sql);
//     $sth->bindParam("email", $input['email']);
//     $sth->bindParam("username", $input['username']);
//     $sth->bindParam("password", $input['password']);
//     $sth->bindParam("zipcode", $input['zipcode']);
//     $sth->bindParam("account_type", $input['account_type']);

//     $sth->execute();
//     return $this->response->withJson($input);	
// 	});

// $app->post('/register_shop', function ($request, $response) {
//     $input = $request->getParsedBody();
//     $sql = "INSERT INTO 
//         shopowner (idusers, gas_price,address, shop_email, shop_name, description) 
//         VALUES (:idusers, :gas_price,:address, :shop_email, :shop_name, :description)";
//     $sth = $this->db->prepare($sql);
//     $sth->bindParam("idusers", $input['idusers']);
//     $sth->bindParam("gas_price", $input['gas_price']);
//     $sth->bindParam("address", $input['address']);
//     $sth->bindParam("shop_email", $input['shop_email']);
//     $sth->bindParam("shop_name", $input['shop_name']);
//     $sth->bindParam("description", $input['description']);

//     $sth->execute();
//     return $this->response->withJson($input);
// });

// $app->put('/account_shop/{idusers}', function ($request, $response) {
// 	$input = $request->getParsedBody();
// 	$sql = "UPDATE users SET gas_price=:gas_price, address=:address, shop_email = :shop_email, shop_name = :shop_name,
// 			 description = :description WHERE idusers = :idusers AND shop_name = :shop_name";
// 	$sth = $this->db->prepare($sql);
//     $sth->bindParam("gas_price", $input['gas_price']);
//     $sth->bindParam("address", $input['address']);
//     $sth->bindParam("shop_email", $input['shop_email']);
//     $sth->bindParam("shop_name", $input['shop_name']);
//     $sth->bindParam("description", $input['description']);

//     $sth->execute();
//     return $this->response->withJson($input);	
// });

// $app->get('/shop', function ($request, $response, $args) {
//     $sth = $this->db->prepare(
//         "SELECT * FROM shopowner WHERE iduser=:iduser"
//     );
//     $sth->bindParam("iduser", $args['iduser']);
//     $sth->execute();
//     $users = $sth->fetchAll();
//     return $this->response->withJson($users);
// });

// $app->get('/vehicle', function ($request, $response, $args) {
//     $sth = $this->db->prepare(
//         "SELECT * FROM vehicle WHERE iduser=:iduser"
//     );
//     $sth->bindParam("iduser", $args['iduser']);
//     $sth->execute();
//     $users = $sth->fetchAll();
//     return $this->response->withJson($users);
// });
// $app->post('/add_vehicle', function ($request, $response) {
//     $input = $request->getParsedBody();
//     $sql = "INSERT INTO 
//         vehicle (idusers,vid, make, model, year, miles, tire_rotation_miles, tire_change_miles, 
//         transmission_check_miles, last_inspection_date, general_description) 
//         VALUES (:idusers,:vid, :make, :model, :year, :miles, :tire_rotation_miles, :tire_change_miles,
//         :transmission_check_miles, :last_inspection_date, :general_description)";
//     $sth = $this->db->prepare($sql);
//     $sth->bindParam("idusers", $input['idusers']);
//     $sth->bindParam("vid", $input['vid']);
//     $sth->bindParam("make", $input['make']);
//     $sth->bindParam("model", $input['model']);
//     $sth->bindParam("year", $input['year']);
//     $sth->bindParam("miles", $input['miles']);
//     $sth->bindParam("tire_rotation_miles", $input['tire_rotation_miles']);
//     $sth->bindParam("tire_change_miles", $input['tire_change_miles']);
//     $sth->bindParam("transmission_check_miles", $input['transmission_check_miles']);
//     $sth->bindParam("last_inspection_date", $input['last_inspection_date']);
//     $sth->bindParam("general_description", $input['general_description']);
//     $sth->execute();
//     return $this->response->withJson($input);
// });

// $app->put('/add_vehicle/{idusers}', function ($request, $response) {
//     $input = $request->getParsedBody();
//     $sql = "UPDATE vehicle
//         SET idusers = :idusers, vid=:vid, make=:make, model=:model, year=:year, miles=:miles,
//         tire_rotation_miles=:tire_rotation_miles, tire_change_miles=:tire_change_miles transmission_check_miles=:transmission_check_miles,
//         last_inspection_date=:last_inspection_date, general_description=:general_description WHERE
//         idusers = :idusers AND vid = :vid";
//     $sth = $this->db->prepare($sql);
//     $sth->bindParam("idusers", $input['idusers']);
//     $sth->bindParam("vid", $input['vid']);
//     $sth->bindParam("make", $input['make']);
//     $sth->bindParam("model", $input['model']);
//     $sth->bindParam("year", $input['year']);
//     $sth->bindParam("miles", $input['miles']);
//     $sth->bindParam("tire_rotation_miles", $input['tire_rotation_miles']);
//     $sth->bindParam("tire_change_miles", $input['tire_change_miles']);
//     $sth->bindParam("transmission_check_miles", $input['transmission_check_miles']);
//     $sth->bindParam("last_inspection_date", $input['last_inspection_date']);
//     $sth->bindParam("general_description", $input['general_description']);
//     $sth->execute();
//     $users = $sth->fetchAll();
//     return $this->response->withJson($users);
// });

// $app->get('/zip', function ($request, $response, $args) {
//     $sth = $this->db->prepare(
//         "SELECT * FROM zip WHERE zipcode=:zipcode"
//     );
//     $sth->bindParam("zipcode", $args['zipcode']);
//     $sth->execute();
//     $users = $sth->fetchAll();
//     return $this->response->withJson($users);
// });

// $app->post('/add_zip', function ($request, $response) {
//     $input = $request->getParsedBody();
//     $sql = "INSERT INTO 
//         zip (zipcode, longitude, latitude) 
//         VALUES (:zipcode, :longitude, :latitude)";
//     $sth = $this->db->prepare($sql);
//     $sth->bindParam("zipcode", $input['zipcode']);
//     $sth->bindParam("longitude", $input['longitude']);
//     $sth->bindParam("latitude", $input['latitude']);

//     $sth->execute();
//     return $this->response->withJson($input);
// });

// $app->get('/deals', function ($request, $response, $args) {
//     $sth = $this->db->prepare(
//         "SELECT * FROM deals WHERE idusers=:idusers"
//     );
//     $sth->bindParam("idusers", $args['idusers']);
//     $sth->execute();
//     $users = $sth->fetchAll();
//     return $this->response->withJson($users);
// });

// $app->put('/change_deal/{name}', function ($request, $response) {
//     $input = $request->getParsedBody();
//     $sql = "UPDATE deals
//     SET price=:price, name=:name, description=:description WHERE name=:name";
//     $sth = $this->db->prepare($sql);
//     $sth->bindParam("price", $input['price']);
//     $sth->bindParam("name", $input['name']);
//     $sth->bindParam("description", $input['description']);
//     $sth->execute();
//     return $this->response->withJson($input);
// });










