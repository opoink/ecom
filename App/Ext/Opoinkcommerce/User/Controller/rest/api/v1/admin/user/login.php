<?php
namespace Opoinkcommerce\User\Controller\rest\api\v1\admin\user;

class login extends \Of\Controller\Controller {

	protected $pageTitle = 'Login API';
	protected $_url;
	protected $_message;

	public function __construct(
		\Of\Http\Url $Url
	){

		$this->_url = $Url;
	}

	public function run(){
		$this->toJson($this->getParam());
	}

	public function setLayout($router){
		$this->_url->setRouter($router);
		return parent::setLayout($router);
	}
}
?>
