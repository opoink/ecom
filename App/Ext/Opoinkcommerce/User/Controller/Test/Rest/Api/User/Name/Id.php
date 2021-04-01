<?php
namespace Opoinkcommerce\User\Controller\Test\Rest\Api\User\Name;

class Id extends \Of\Controller\Controller {

	protected $pageTitle = '';
	protected $_url;
	protected $_message;

	public function __construct(
		\Of\Http\Url $Url,
		\Of\Std\Message $Message
	){

		$this->_url = $Url;
		$this->_message = $Message;
	}

	public function run(){
		$this->toJson($this->getParam());
		/** this is used when using the XML template */
		/**return parent::run();*/
	}

	public function setLayout($router){
		$this->_url->setRouter($router);
		return parent::setLayout($router);
	}
}
?>
