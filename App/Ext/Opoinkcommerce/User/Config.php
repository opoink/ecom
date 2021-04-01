<?php
return array (
  'vendor' => 'Opoinkcommerce',
  'module' => 'User',
  'version' => '1.0.0',
  'controllers' => 
  array (
    0 => 
    array (
      'pattern' => '/rest/api/v1/admin/user/login',
      'class' => 'Opoinkcommerce\\User\\Controller\\rest\\api\\v1\\admin\\user\\login',
      'page_name' => 'rest_api_v1_user_login',
      'method' => 'post',
    ),
    1 => 
    array (
      'pattern' => '/test/user/profile/{id}',
      'class' => 'Opoinkcommerce\\User\\Controller\\Test\\User\\Profile\\Id',
      'page_name' => 'Test\\User\\Profile\\Id',
      'method' => '*',
    ),
    2 => 
    array (
      'pattern' => '/test/rest/api/user/{name}/:id',
      'class' => 'Opoinkcommerce\\User\\Controller\\Test\\Rest\\Api\\User\\Name\\Id',
      'page_name' => 'Test\\Rest\\Api\\User\\Name\\Id',
      'method' => 'POST',
    ),
  ),
)
?>