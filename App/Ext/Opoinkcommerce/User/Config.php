<?php
return array (
  'vendor' => 'Opoinkcommerce',
  'module' => 'User',
  'version' => '1.0.0',
  'controllers' => [
    [
      'pattern' => '/rest/api/v1/admin/user/login',
      'class' => 'Opoinkcommerce\User\Controller\rest\api\v1\admin\user\login',
      'page_name' => 'rest_api_v1_user_login',
      'method' => 'post'
    ]
  ],
)
?>