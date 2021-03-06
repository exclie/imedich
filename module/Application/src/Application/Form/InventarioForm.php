<?php 
namespace Application\Form;

use CsnUser\Entity\Inventario;
use Doctrine\Common\Persistence\ObjectManager;
use DoctrineModule\Stdlib\Hydrator\DoctrineObject as DoctrineHydrator;
use Zend\Form\Form;
use Zend\InputFilter\InputFilterProviderInterface;


class InventarioForm extends Form implements InputFilterProviderInterface
{
    private $objectManager;

    public function __construct(ObjectManager $objectManager)
    {
        parent::__construct('inventario');
        $this->objectManager = $objectManager;
        $this->setHydrator(new DoctrineHydrator($objectManager))
             ->setObject(new Inventario());

        $this->add(array(
            'type' => 'Zend\Form\Element\Hidden',
            'name' => 'ID',
            'attributes' => array(
                'id' => 'cIdmat',
            ),
        ));

        $this->add(array(
            'type'    => 'Zend\Form\Element\Text',
            'name'    => 'MATERIAL',
            'options' => array(
                'label' => 'Nombre del material:',
            ),
            'attributes' => array(
                'class' => 'Input form-control',
                'id' => 'cMaterial',
                'onblur' => 'verificar_campo(this)',
            ),
        ));
        $this->add(array(
            'type'    => 'Zend\Form\Element\Date',
            'name'    => 'FECHACADUCIDAD',
            'options' => array(
                'label' => 'Fecha de caducidad:',
            ),
            'attributes' => array(
                'class' => 'Input form-control',
                'id' => 'cFechacaducidad',
            ),
        ));
        $this->add(array(
            'type'    => 'Zend\Form\Element\Text',
            'name'    => 'PROVEEDOR',
            'options' => array(
                'label' => 'Proveedor:',
            ),
            'attributes' => array(
                'class' => 'Input form-control',
                'id' => 'cProveedor',
            ),
        ));
        $this->add(array(
            'type'    => 'Zend\Form\Element\Number',
            'name'    => 'PRECIO',
            'options' => array(
                'label' => 'Precio:',
            ),
            'attributes' => array(
                'class' => 'Input form-control',
                'id' => 'cPrecio',
            ),
        ));
        $this->add(array(
            'type'    => 'Zend\Form\Element\Text',
            'name'    => 'CANTIDADMIN',
            'options' => array(
                'label' => 'Cantidad (mínima):',
            ),
            'attributes' => array(
                'class' => 'Input form-control',
                'id' => 'cCantidad',
                'onblur' => 'verificar_campo(this)',
                'data-content' => 'Si la cantidad actual es menor que la mínima, se pondrá en color amarillo.',
                'data-placement' => 'right',
            ),
        ));
        $this->add(array(
            'type'    => 'Zend\Form\Element\Text',
            'name'    => 'CANTIDAD',
            'options' => array(
                'label' => 'Cantidad actual:',
            ),
            'attributes' => array(
                'class' => 'Input form-control',
                'id' => 'cCantidad',
                'onblur' => 'verificar_campo(this)',
            ),
        ));
        $this->add(array(
                     'type' => 'Zend\Form\Element\Checkbox',
                     'name' => 'ACTIVO',
                     'options' => array(
                             'use_hidden_element' => true,
                             'checked_value' => true,
                             'unchecked_value' => false
                     ),
                     'attributes' => array(
                        'id' => 'checkActivo',
                        'checked' => true,
                    ),
             ));
   
    }
    public function getInputFilterSpecification() {
        return array(
            'FECHACADUCIDAD' => array(
                'required' => false,
            ),
        );
    }
}