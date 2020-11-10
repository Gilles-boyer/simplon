<?php

namespace App\Controller;

use App\Entity\Client;
use App\Repository\ClientRepository;
use Doctrine\ORM\EntityManager;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Serializer\Exception\NotEncodableValueException;

class ClientController extends AbstractController
{
    /**
     * @Route("/client/all", name="clientAll", methods={"GET"})
     */
    public function index(ClientRepository $repo): Response
    {
        return $this->json($repo->findAll(), 200, [], ['groups' => 'client:read']);
    }

    /**
     * @Route("/client", name="clientCreate", methods={"POST"})
     */
    public function store(Request $request, SerializerInterface $serializer, ValidatorInterface $validator, EntityManagerInterface $em): Response
    {
        try {
            $client = $serializer->deserialize($request->getContent(), Client::class, 'json');

            $errors =$validator->validate($client);

            if(count($errors) > 0) {
                return $this->json([
                    'errorList' => $errors,
                    'error' => true,
                ], 400);
            }

            $em->persist($client);
            $em->flush();
            
            return $this->json([
                'error' => false,
                'message' => 'Le client est créé',
            ], 201, [], ['groups' => 'post:read']);

        } catch (NotEncodableValueException $e) {
            return $this->json([
                'status' => 400,
                'error' => true,
                'message'=> $e->getMessage()
            ],400);
        }
        
        $data = $request->getContent();

        return dd($data);
    }
}
